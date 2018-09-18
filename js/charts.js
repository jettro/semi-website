function sankey(parentId,data){
   

    //var flatarr = [].concat.apply([], myarr);
    //console.log(flatarr);

    //var flatarr = myarr;


    google.charts.load('current', { 'packages': ['sankey'] });
    google.charts.setOnLoadCallback(drawChart);
    window.addEventListener('resize', drawChart, false);
    function drawChart() {
        var chartData = new google.visualization.DataTable();
        chartData.addColumn('string', 'From');
        chartData.addColumn('string', 'To');
        chartData.addColumn('number', 'Weight');
        chartData.addRows(data);

        // Sets chart options.
        var colors = ['#fa0171', '#38d611', '#0070e6', '#b0a002',
            '#3d577c', '#538989', '#662839', '#EE6912', '#00A18D', 'FCE81C'];

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


function bubbleChart(parentId,data){
       //  let parentId = 'bubble-chart';

    //let selectedNodes = [];
    let closest = null;

    let fontSize = 9;

    let width = 600;
    let height = 600;

    let paddingTop = 20;
    let paddingBottom = 20;

    let border = 100;

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
        .style('border', '1px solid black');

    let axisG = svg.append('g').classed('axis-g', true);
    axisG.append("g")
        .attr('transform', 'translate(0,' + 0.95 * height + ')')
        .classed('x-axis axis', true);

    axisG.append("g")
        .attr('transform', 'translate(' + 50 + ',' + 0 + ')')
        .classed('y-axis axis', true);

    console.log('svg');
    console.log(svg);

    xScale = getScale(data.class1, data.results, width, accessor('source'), 100);
    yScale = getScale(data.class2, data.results, width, accessor('target'), 80);

    let maxVal = d3.max(data.results, (d) => {
        return d.nrPaths;
    });

    console.log('maxVal: ' + maxVal);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    axisG.select('.x-axis').call(xAxis);
    axisG.select('.y-axis').call(yAxis);


    let circleG = svg.append('g').classed('circle-g', true);

    circleG.selectAll('.dot')
        .data(data.results)
        .enter()
        .append('circle')
        .classed('dot', true)
        .attr('cx', function (d) {
            return xScale(d.source);
        })
        .attr('cy', function (d) {
            return yScale(d.target);
        })
        .attr('r', function (d) {
            return vScale(d.nrPaths);
        })
        .style('fill', 'steelblue');

    function getScale(className, records, w, acc, border) {


        let _range = [border, w - border];

        let _domain = d3.set(records, (d) => {
            return acc(d);
        }).values();

        return d3.scalePoint()
            .domain(_domain)
            .range(_range);

    }

    function accessor(key) {
        return function (d) {
            return d[key];
        };
    }

}