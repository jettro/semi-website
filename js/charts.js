function sankey(parentId, data) {

    google.charts.load('current', { 'packages': ['sankey'] });
    google.charts.setOnLoadCallback(drawChart);
    window.addEventListener('resize', drawChart, false);

    function drawChart() {
        var chartData = new google.visualization.DataTable();

        chartData.addColumn('string', 'From');
        chartData.addColumn('string', 'To');
        chartData.addColumn('number', 'Weight');
        chartData.addRows(data);

        var colors = ['#fa0171', '#38d611', '#0070e6', '#b0a002',
            '#3d577c', '#538989', '#662839', '#EE6912', '#00A18D', '#FCE81C'];

        var options = {
            sankey: {
                node: {
                    colors: colors,
                    colorMode: 'unique'
                },
                link: {
                    color: { fill: '#eaeaea' }
                }
            }
        };

        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById(parentId));
        chart.draw(chartData, options);
    }
}


function bubbleChart(parentId, data, options) {

    let fontSize = 9;

    let width = options && options.width ? options.width : 600;
    let height = options && options.height ? options.height : 600;

    let aAcc = accessor('catA');
    let bAcc = accessor('catB');
    let vAcc = accessor('value');

    let xScale = d3.scaleIdentity();
    let yScale = d3.scaleIdentity();
    let vScale = d3.scalePow()
        .domain([0, 30])
        .range([1, 30]);

    let axisSvg = null;

    let svg = d3.select("#" + parentId).append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")

    let axisG = svg.append('g').classed('axis-g', true);
    axisG.append("g")
        .attr('transform', 'translate(0,' + 0.95 * height + ')')
        .classed('x-axis axis', true);

    axisG.append("g")
        .attr('transform', 'translate(' + 50 + ',' + 0 + ')')
        .classed('y-axis axis', true);

    xScale = getScale(data, width, aAcc, 100, 50);
    yScale = getScale(data, height, bAcc, 30, 80);

    let maxVal = d3.max(data, (d) => {
        return d.value;
    });

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    axisG.select('.x-axis').call(xAxis);
    axisG.select('.y-axis').call(yAxis);

    let circleG = svg.append('g').classed('circle-g', true);

    circleG.selectAll('.dot')
        .data(data)
        .enter()
        .append('circle')
        .classed('dot', true)
        .attr('cx', function (d) {
            return xScale(aAcc(d));
        })
        .attr('cy', function (d) {
            return yScale(bAcc(d));
        })
        .attr('r', function (d) {
            return vScale(vAcc(d));
        })
        .style('fill', '#39557E');

    function getScale(arr, w, acc, leftBorder, rightBorder) {

        let range = [leftBorder, w - rightBorder];
        let domain = d3.set(arr, (d) => {
            return acc(d);
        }).values();

        return d3.scalePoint()
            .domain(domain)
            .range(range);

    }

    function accessor(key) {
        return function (d) {
            return d[key];
        };
    }

}

function forceDirectedGraph(parentId, graph, options) {

    let width = options && options.width ? options.width : 600;
    let height = options && options.height ? options.height : 400;

    let svg = d3.select('#' + parentId).append('svg')
        .attr('width', width)
        .attr('height', height);

    //needs to come from semi css
    var colors = ['#fa0171', '#38d611', '#0070e6', '#b0a002',
        '#3d577c', '#538989', '#662839', '#EE6912', '#00A18D', '#FCE81C'];
    var color = d3.scaleOrdinal(colors);

    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function (d) { return d.name; }))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

    var link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .attr("stroke-width", 1)
        .style('stroke', '#999')
        .style('stroke-opacity', '0.7');

    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", 5)
        .attr("fill", function (d) { return color(d.class); })
        .style('stroke', '#fff')
        .style('stroke-width', '1.5px');

    node.append("title")
        .text(function (d) { return d.name; });

    simulation
        .nodes(graph.nodes)
        .on("tick", tick);

    simulation.force("link")
        .links(graph.links);

    function tick() {
        link
            .attr("x1", function (d) { return d.source.x; })
            .attr("y1", function (d) { return d.source.y; })
            .attr("x2", function (d) { return d.target.x; })
            .attr("y2", function (d) { return d.target.y; });

        node
            .attr("cx", function (d) { return d.x; })
            .attr("cy", function (d) { return d.y; });
    }

}

function constrainedLayoutGraph(parentId, graphbase, options) {

    let indexedLinks = graphbase.links.map((l) => {
        let s = l.source;
        let t = l.target;
        var sindex = graphbase.nodes.map(function (e) { return e.name; }).indexOf(s);
        var tindex = graphbase.nodes.map(function (e) { return e.name; }).indexOf(t);
        return {
            "source": sindex,
            "target": tindex
        };
    });

    let graph = {};
    graph.nodes = graphbase.nodes;
    graph.links = indexedLinks;

    let width = options && options.width ? options.width : 600;
    let height = options && options.height ? options.height : 400;
    let svg = d3.select('#' + parentId).append('svg')
        .attr('width', width)
        .attr('height', height)

    var colors = ['#fa0171', '#38d611', '#0070e6', '#b0a002',
        '#3d577c', '#538989', '#662839', '#EE6912', '#00A18D', '#FCE81C'];

    var color = d3.scaleOrdinal(colors);

    var colad3 = cola.d3adaptor(d3)
        .size([width, height]);

    var groupMap = {};
    graph.nodes.forEach(function (v, i) {
        var g = v.class;
        if (typeof groupMap[g] == 'undefined') {
            groupMap[g] = [];
        }
        groupMap[g].push(i);

        v.width = v.height = 10;
    });

    var groups = [];
    for (var g in groupMap) {
        groups.push({ id: g, leaves: groupMap[g] });
    }


    colad3
        .nodes(graph.nodes)
        .links(graph.links)
        .groups(groups)
        .jaccardLinkLengths(40, 0.7)
        .avoidOverlaps(true)
        .start(50, 0, 50);

    var group = svg.selectAll('.group')
        .data(groups)
        .enter().append('rect')
        .classed('group', true)
        .style('stroke', '#ccc')
        .style('fill', 'none')
        .call(colad3.drag);

    var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", 1)
        .style('stroke', '#999')
        .style('stroke-opacity', 0.8);

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 5)
        .style("fill", function (d) { return color(d.class); })
        .style('stroke', '#fff')
        .style('stroke-width', 1.5)
        .call(colad3.drag);


    colad3.on("tick", tick);


    function tick() {
        link.attr("x1", function (d) { return d.source.x; })
            .attr("y1", function (d) { return d.source.y; })
            .attr("x2", function (d) { return d.target.x; })
            .attr("y2", function (d) { return d.target.y; });

        node.attr("cx", function (d) { return d.x; })
            .attr("cy", function (d) { return d.y; });

        group
            .attr('x', function (d) { return d.bounds.x })
            .attr('y', function (d) { return d.bounds.y })
            .attr('width', function (d) { return d.bounds.width() })
            .attr('height', function (d) { return d.bounds.height() });
    }

}