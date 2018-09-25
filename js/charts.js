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


function beeswarm(parentId, file, options) {

    var colors1 = ['#324D5C', '#46B29D', '#F0CA4D', '#E37B40', '#DE5B49', 'black'];
    var colors2 = ['#2C594F', '#E54661', '#FFA644', '#998A2F', '#002D40', 'black'];
    var colors3 = ['#F15B2A', '#2A9FBC', '#404040', '#A62E5C', '#9BC850', 'black'];

    var parseDate = d3.timeParse("%d-%m-%Y"); //19-4-2018 //2017-11-20

    var rScale = d3.scalePow();
    var xScale = null;
    var yScale = null;
    var freqScale = d3.scaleOrdinal();
    var colScale = d3.scaleOrdinal()
        .domain([0, 1, 2, 3, 4, 5])
        .range(colors2);

    var companyScale = d3.scalePoint();
    var nameScale = d3.scalePoint();
    var refScale = d3.scaleLinear();
    var dateScale = d3.scaleLinear();
    var percent = d3.scaleLinear();
    var locationScale = d3.scalePoint();
    var ratingScale = d3.scalePoint();
    var originScale = d3.scalePoint();


    var rAcc = null;

    //var file = 'assets/data/flavors_of_cacao.csv'; //'Short4Chris_Tonal3.csv' //'./Tinnitus_Hub_Survey.csv';
    var data = [];
    var ndata = [];
    var xFilter = 'all';
    var yFilter = 'all';
    var rFilter = 'all';
    var ready = false;

    var border = 100;
    var minR = 0.2;
    var maxR = 8;

    var simulation = null;
    var kn = 1;
    var axisSvg = null;
    var nTicks = 10;
    var keys = null;

    var dia = 3;

    var selectedBubbles = [];


    let width = options && options.width ? options.width : 600;
    let height = options && options.height ? options.height : 600;


    var sketch = function (s) {

        var x = 100;
        var y = 100;

        s.setup = function () {

            // let w = 600;
            // let h = 600;

            s.createCanvas(width, height);


            s.frameRate(30);
            s.noLoop();

            axisSvg = d3.select("#" + parentId).append("svg")
                .attr("width", s.width)
                .attr("height", s.height)
                .attr("id", "axis-svg")
                .append("g");

            axisSvg.append("g")
                .attr('transform', 'translate(0,' + 0.95 * s.height + ')')
                .classed('x-axis axis', true);

            axisSvg.append("g")
                .classed('y-axis axis', true);
            d3.csv(file)
                .row(function (d) {
                    return {
                        // id: d['id'],
                        company: d['company'],
                        name: d['name'],
                        ref: +d['ref'],
                        date: +d['date'],
                        percent: +d['percent'],
                        location: d['location'],
                        rating: +d['rating'],
                        //  type: d['type'],
                        origin: d['origin']
                    };
                })
                .get(function (error, csv) {
                    if (error) {
                        console.log('error', error);
                        return;
                    }
                    data = csv.filter(function (d, i) {
                        return i < 100;
                        //return true;
                    });

                    console.log('data', data);

                    createButtons(s);
                    setFilter(s,xFilter, yFilter);

                    simulation.stop();
                    for (var i = 0; i < 150; ++i) {
                        simulation.tick();
                    }
                    simulation.restart();

                    ready = true;
                    s.redraw();
                });

        };

        s.draw = function () {
            if (!ready) {
                s.background(255,0,0);
                return;
            }
        
            s.background(0,255,0);
        };
    };


    //p5 instance mode
    var myp5 = new p5(sketch, parentId);

    function createButtons(s) {
        console.log('createButtons');
        //button group
        //<button type="button" class="btn btn-secondary">Left</button>
        //var filters = ['all', 'gender', 'age', 'frequency', 'duration', 'thiscore', 'tqscore'];
        console.log(data);
        var keys = Object.keys(data[0]);
        var filters = ['all'].concat(keys).filter(function (d) {
            return d != 'group';
        });

        d3.select('#' + parentId)
            .append('div')
            .attr('id', 'filter-buttons-x')
            .selectAll('button')
            .data(filters)
            .enter()
            .append('button')
            .classed('btn btn-secondary', true)
            .classed('active', function (d) {
                return d == xFilter;
            })
            .text(function (d) {
                return d;
            })
            .on('click', function (d) {
                console.log('hi ' + d);
                xFilter = d;
                setFilter(s,xFilter, yFilter);
            });

        d3.select('#' + parentId)
            .append('div')
            .attr('id', 'filter-buttons-y')
            .selectAll('button')
            .data(filters)
            .enter()
            .append('button')
            .classed('btn btn-secondary', true)
            .classed('active', function (d) {
                return d == yFilter;
            })
            .text(function (d) {
                return d;
            })
            .on('click', function (d) {
                console.log('hi ' + d);
                yFilter = d;
                setFilter(s,xFilter, yFilter);
            });
    }


    function setFilter(s,filterX, filterY) {

        console.log('setting filter to ' + filterX + ' ' + filterY);

        var xAcc = acc(filterX);
        var yAcc = acc(filterY);

        xScale = xscl(filterX);
        yScale = yscl(filterY);

        if (simulation) {
            simulation.stop();
            simulation.nodes([]);
            simulation = null;
        }

        var offScreen = -500;
        simulation = d3.forceSimulation(data)
            .force("x", d3.forceX(function (d) {
                //     console.log('accessor(d)',accessor(d));
                if (xAcc(d) == null) {
                    d.invalid = true;
                    return offScreen;
                }
                d.invalid = false;
                //console.log('xSclae');
                //console.log(xScale);
                return xScale(xAcc(d));
            }).strength(0.05))
            .force("y", d3.forceY(function (d) {
                //return yScale(yAcc(d));
                if (yAcc(d) == null) {
                    d.invalid = true;
                    return offScreen;
                }
                d.invalid = false;
                return yScale(yAcc(d));
            }).strength(0.05))
            .force("collision", d3.forceCollide(function (d) {
                return dia;
            }).strength(1))
            .on('tick', function () {
                s.redraw();
            });

        d3.select('#filter-buttons-x')
            .selectAll('button')
            .classed('active', function (d) {
                return d == xFilter;
            });

        d3.select('#filter-buttons-y')
            .selectAll('button')
            .classed('active', function (d) {
                return d == yFilter;
            });

        d3.select('#filter-buttons-r')
            .selectAll('button')
            .classed('active', function (d) {
                return d == rFilter;
            });
    }

    function acc(id) {
        if (id == 'all') {
            return function (d) {
                return 0.5;
            };
        } else return function (d) {
            return d[id];
        };
    }


    function xscl(filter) {
        var _range = [border, width - border];
        var _scale = scl2(filter, _range);
        return _scale;
    }

    function yscl(filter) {
        var _range = [height - border, border];
        var _scale = scl2(filter, _range);
        return _scale;
    }
    function scl2(filter, range) {
        //company,name,ref,date,percent,location,rating,type,origin
        var _range = range;
        var _scale = null;

        if (filter == 'company') {
            console.log('scl2 ' + filter);
            var dom = d3.set(data, function (d) {
                return d[filter];
            }).values();
            _scale = d3.scalePoint()
                .domain(dom)
                .range(_range);
        } else if (filter == 'name') {
            console.log('scl2 ' + filter);
            var dom = d3.set(data, function (d) {
                return d[filter];
            }).values();
            _scale = d3.scalePoint()
                .domain(dom)
                .range(_range);

        } else if (filter == 'ref') {
            console.log('scl2 ' + filter);
            _scale = d3.scaleLinear()
                .domain([d3.min(data, acc(filter)), d3.max(data, acc(filter))])
                .range(_range);
        } else if (filter == 'date') {
            console.log('scl2 ' + filter);
            _scale = d3.scaleLinear()
                .domain([d3.min(data, acc(filter)), d3.max(data, acc(filter))])
                .range(_range);
        } else if (filter == 'percent') {
            console.log('scl2 ' + filter);
            _scale = d3.scaleLinear()
                .domain([d3.min(data, acc(filter)), d3.max(data, acc(filter))])
                .range(_range);
        } else if (filter == 'location') {
            console.log('scl2 ' + filter);
            var dom = d3.set(data, function (d) {
                return d[filter];
            }).values();
            _scale = d3.scalePoint()
                .domain(dom)
                .range(_range);
        } else if (filter == 'rating') {
            console.log('scl2 ' + filter);
            _scale = d3.scaleLinear()
                .domain([d3.min(data, acc(filter)), d3.max(data, acc(filter))])
                .range(_range);
        } else if (filter == 'origin') {
            console.log('scl2 ' + filter);
            var dom = d3.set(data, function (d) {
                return d[filter];
            }).values();
            _scale = d3.scalePoint()
                .domain(dom)
                .range(_range);
        } else if (filter == 'all') {
            console.log('scl2 ' + filter);
            _scale = d3.scaleLinear()
                .domain([0, 1])
                .range(_range);
        } else {
            console.log('error in scl2: no scale found for ' + filter);
        }

        return _scale;
    }

}