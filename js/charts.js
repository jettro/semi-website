function sankey(parentId, data) {


    //var flatarr = [].concat.apply([], myarr);
    //console.log(flatarr);

    //var flatarr = myarr;
    console.log('sass color');

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
        //colors have to be applied directly as otherwise we would have
        //to set classes in the svg, which is a hack.
        var colors = ['#fa0171', '#38d611', '#0070e6', '#b0a002',
            '#3d577c', '#538989', '#662839', '#EE6912', '#00A18D', '#FCE81C'];

        var options = {
            sankey: {
                node: {
                    colors: colors,
                    colorMode: 'unique'
                }
                // link: {
                //     color: { fill: '#eaeaea' }
                // }
            }
        };
        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById(parentId));
        chart.draw(chartData, options);
    }
}


function bubbleChart(parentId, data) {
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

function forceDirectedGraph(parentId) {

    // let graph = {
    //     "nodes": [
    //         { "id": "Myriel", "group": 1 },
    //         { "id": "Napoleon", "group": 1 },
    //         { "id": "Mlle.Baptistine", "group": 1 },
    //         { "id": "Mme.Magloire", "group": 1 },
    //         { "id": "CountessdeLo", "group": 1 },
    //         { "id": "Geborand", "group": 1 },
    //         { "id": "Champtercier", "group": 1 },
    //         { "id": "Cravatte", "group": 1 },
    //         { "id": "Count", "group": 1 },
    //         { "id": "OldMan", "group": 1 },
    //         { "id": "Labarre", "group": 2 },
    //         { "id": "Valjean", "group": 2 },
    //         { "id": "Marguerite", "group": 3 },
    //         { "id": "Mme.deR", "group": 2 },
    //         { "id": "Isabeau", "group": 2 },
    //         { "id": "Gervais", "group": 2 },
    //         { "id": "Tholomyes", "group": 3 },
    //         { "id": "Listolier", "group": 3 },
    //         { "id": "Fameuil", "group": 3 },
    //         { "id": "Blacheville", "group": 3 },
    //         { "id": "Favourite", "group": 3 },
    //         { "id": "Dahlia", "group": 3 },
    //         { "id": "Zephine", "group": 3 },
    //         { "id": "Fantine", "group": 3 },
    //         { "id": "Mme.Thenardier", "group": 4 },
    //         { "id": "Thenardier", "group": 4 },
    //         { "id": "Cosette", "group": 5 },
    //         { "id": "Javert", "group": 4 },
    //         { "id": "Fauchelevent", "group": 0 },
    //         { "id": "Bamatabois", "group": 2 },
    //         { "id": "Perpetue", "group": 3 },
    //         { "id": "Simplice", "group": 2 },
    //         { "id": "Scaufflaire", "group": 2 },
    //         { "id": "Woman1", "group": 2 },
    //         { "id": "Judge", "group": 2 },
    //         { "id": "Champmathieu", "group": 2 },
    //         { "id": "Brevet", "group": 2 },
    //         { "id": "Chenildieu", "group": 2 },
    //         { "id": "Cochepaille", "group": 2 },
    //         { "id": "Pontmercy", "group": 4 },
    //         { "id": "Boulatruelle", "group": 6 },
    //         { "id": "Eponine", "group": 4 },
    //         { "id": "Anzelma", "group": 4 },
    //         { "id": "Woman2", "group": 5 },
    //         { "id": "MotherInnocent", "group": 0 },
    //         { "id": "Gribier", "group": 0 },
    //         { "id": "Jondrette", "group": 7 },
    //         { "id": "Mme.Burgon", "group": 7 },
    //         { "id": "Gavroche", "group": 8 },
    //         { "id": "Gillenormand", "group": 5 },
    //         { "id": "Magnon", "group": 5 },
    //         { "id": "Mlle.Gillenormand", "group": 5 },
    //         { "id": "Mme.Pontmercy", "group": 5 },
    //         { "id": "Mlle.Vaubois", "group": 5 },
    //         { "id": "Lt.Gillenormand", "group": 5 },
    //         { "id": "Marius", "group": 8 },
    //         { "id": "BaronessT", "group": 5 },
    //         { "id": "Mabeuf", "group": 8 },
    //         { "id": "Enjolras", "group": 8 },
    //         { "id": "Combeferre", "group": 8 },
    //         { "id": "Prouvaire", "group": 8 },
    //         { "id": "Feuilly", "group": 8 },
    //         { "id": "Courfeyrac", "group": 8 },
    //         { "id": "Bahorel", "group": 8 },
    //         { "id": "Bossuet", "group": 8 },
    //         { "id": "Joly", "group": 8 },
    //         { "id": "Grantaire", "group": 8 },
    //         { "id": "MotherPlutarch", "group": 9 },
    //         { "id": "Gueulemer", "group": 4 },
    //         { "id": "Babet", "group": 4 },
    //         { "id": "Claquesous", "group": 4 },
    //         { "id": "Montparnasse", "group": 4 },
    //         { "id": "Toussaint", "group": 5 },
    //         { "id": "Child1", "group": 10 },
    //         { "id": "Child2", "group": 10 },
    //         { "id": "Brujon", "group": 4 },
    //         { "id": "Mme.Hucheloup", "group": 8 }
    //     ],
    //     "links": [
    //         { "source": "Napoleon", "target": "Myriel", "value": 1 },
    //         { "source": "Mlle.Baptistine", "target": "Myriel", "value": 8 },
    //         { "source": "Mme.Magloire", "target": "Myriel", "value": 10 },
    //         { "source": "Mme.Magloire", "target": "Mlle.Baptistine", "value": 6 },
    //         { "source": "CountessdeLo", "target": "Myriel", "value": 1 },
    //         { "source": "Geborand", "target": "Myriel", "value": 1 },
    //         { "source": "Champtercier", "target": "Myriel", "value": 1 },
    //         { "source": "Cravatte", "target": "Myriel", "value": 1 },
    //         { "source": "Count", "target": "Myriel", "value": 2 },
    //         { "source": "OldMan", "target": "Myriel", "value": 1 },
    //         { "source": "Valjean", "target": "Labarre", "value": 1 },
    //         { "source": "Valjean", "target": "Mme.Magloire", "value": 3 },
    //         { "source": "Valjean", "target": "Mlle.Baptistine", "value": 3 },
    //         { "source": "Valjean", "target": "Myriel", "value": 5 },
    //         { "source": "Marguerite", "target": "Valjean", "value": 1 },
    //         { "source": "Mme.deR", "target": "Valjean", "value": 1 },
    //         { "source": "Isabeau", "target": "Valjean", "value": 1 },
    //         { "source": "Gervais", "target": "Valjean", "value": 1 },
    //         { "source": "Listolier", "target": "Tholomyes", "value": 4 },
    //         { "source": "Fameuil", "target": "Tholomyes", "value": 4 },
    //         { "source": "Fameuil", "target": "Listolier", "value": 4 },
    //         { "source": "Blacheville", "target": "Tholomyes", "value": 4 },
    //         { "source": "Blacheville", "target": "Listolier", "value": 4 },
    //         { "source": "Blacheville", "target": "Fameuil", "value": 4 },
    //         { "source": "Favourite", "target": "Tholomyes", "value": 3 },
    //         { "source": "Favourite", "target": "Listolier", "value": 3 },
    //         { "source": "Favourite", "target": "Fameuil", "value": 3 },
    //         { "source": "Favourite", "target": "Blacheville", "value": 4 },
    //         { "source": "Dahlia", "target": "Tholomyes", "value": 3 },
    //         { "source": "Dahlia", "target": "Listolier", "value": 3 },
    //         { "source": "Dahlia", "target": "Fameuil", "value": 3 },
    //         { "source": "Dahlia", "target": "Blacheville", "value": 3 },
    //         { "source": "Dahlia", "target": "Favourite", "value": 5 },
    //         { "source": "Zephine", "target": "Tholomyes", "value": 3 },
    //         { "source": "Zephine", "target": "Listolier", "value": 3 },
    //         { "source": "Zephine", "target": "Fameuil", "value": 3 },
    //         { "source": "Zephine", "target": "Blacheville", "value": 3 },
    //         { "source": "Zephine", "target": "Favourite", "value": 4 },
    //         { "source": "Zephine", "target": "Dahlia", "value": 4 },
    //         { "source": "Fantine", "target": "Tholomyes", "value": 3 },
    //         { "source": "Fantine", "target": "Listolier", "value": 3 },
    //         { "source": "Fantine", "target": "Fameuil", "value": 3 },
    //         { "source": "Fantine", "target": "Blacheville", "value": 3 },
    //         { "source": "Fantine", "target": "Favourite", "value": 4 },
    //         { "source": "Fantine", "target": "Dahlia", "value": 4 },
    //         { "source": "Fantine", "target": "Zephine", "value": 4 },
    //         { "source": "Fantine", "target": "Marguerite", "value": 2 },
    //         { "source": "Fantine", "target": "Valjean", "value": 9 },
    //         { "source": "Mme.Thenardier", "target": "Fantine", "value": 2 },
    //         { "source": "Mme.Thenardier", "target": "Valjean", "value": 7 },
    //         { "source": "Thenardier", "target": "Mme.Thenardier", "value": 13 },
    //         { "source": "Thenardier", "target": "Fantine", "value": 1 },
    //         { "source": "Thenardier", "target": "Valjean", "value": 12 },
    //         { "source": "Cosette", "target": "Mme.Thenardier", "value": 4 },
    //         { "source": "Cosette", "target": "Valjean", "value": 31 },
    //         { "source": "Cosette", "target": "Tholomyes", "value": 1 },
    //         { "source": "Cosette", "target": "Thenardier", "value": 1 },
    //         { "source": "Javert", "target": "Valjean", "value": 17 },
    //         { "source": "Javert", "target": "Fantine", "value": 5 },
    //         { "source": "Javert", "target": "Thenardier", "value": 5 },
    //         { "source": "Javert", "target": "Mme.Thenardier", "value": 1 },
    //         { "source": "Javert", "target": "Cosette", "value": 1 },
    //         { "source": "Fauchelevent", "target": "Valjean", "value": 8 },
    //         { "source": "Fauchelevent", "target": "Javert", "value": 1 },
    //         { "source": "Bamatabois", "target": "Fantine", "value": 1 },
    //         { "source": "Bamatabois", "target": "Javert", "value": 1 },
    //         { "source": "Bamatabois", "target": "Valjean", "value": 2 },
    //         { "source": "Perpetue", "target": "Fantine", "value": 1 },
    //         { "source": "Simplice", "target": "Perpetue", "value": 2 },
    //         { "source": "Simplice", "target": "Valjean", "value": 3 },
    //         { "source": "Simplice", "target": "Fantine", "value": 2 },
    //         { "source": "Simplice", "target": "Javert", "value": 1 },
    //         { "source": "Scaufflaire", "target": "Valjean", "value": 1 },
    //         { "source": "Woman1", "target": "Valjean", "value": 2 },
    //         { "source": "Woman1", "target": "Javert", "value": 1 },
    //         { "source": "Judge", "target": "Valjean", "value": 3 },
    //         { "source": "Judge", "target": "Bamatabois", "value": 2 },
    //         { "source": "Champmathieu", "target": "Valjean", "value": 3 },
    //         { "source": "Champmathieu", "target": "Judge", "value": 3 },
    //         { "source": "Champmathieu", "target": "Bamatabois", "value": 2 },
    //         { "source": "Brevet", "target": "Judge", "value": 2 },
    //         { "source": "Brevet", "target": "Champmathieu", "value": 2 },
    //         { "source": "Brevet", "target": "Valjean", "value": 2 },
    //         { "source": "Brevet", "target": "Bamatabois", "value": 1 },
    //         { "source": "Chenildieu", "target": "Judge", "value": 2 },
    //         { "source": "Chenildieu", "target": "Champmathieu", "value": 2 },
    //         { "source": "Chenildieu", "target": "Brevet", "value": 2 },
    //         { "source": "Chenildieu", "target": "Valjean", "value": 2 },
    //         { "source": "Chenildieu", "target": "Bamatabois", "value": 1 },
    //         { "source": "Cochepaille", "target": "Judge", "value": 2 },
    //         { "source": "Cochepaille", "target": "Champmathieu", "value": 2 },
    //         { "source": "Cochepaille", "target": "Brevet", "value": 2 },
    //         { "source": "Cochepaille", "target": "Chenildieu", "value": 2 },
    //         { "source": "Cochepaille", "target": "Valjean", "value": 2 },
    //         { "source": "Cochepaille", "target": "Bamatabois", "value": 1 },
    //         { "source": "Pontmercy", "target": "Thenardier", "value": 1 },
    //         { "source": "Boulatruelle", "target": "Thenardier", "value": 1 },
    //         { "source": "Eponine", "target": "Mme.Thenardier", "value": 2 },
    //         { "source": "Eponine", "target": "Thenardier", "value": 3 },
    //         { "source": "Anzelma", "target": "Eponine", "value": 2 },
    //         { "source": "Anzelma", "target": "Thenardier", "value": 2 },
    //         { "source": "Anzelma", "target": "Mme.Thenardier", "value": 1 },
    //         { "source": "Woman2", "target": "Valjean", "value": 3 },
    //         { "source": "Woman2", "target": "Cosette", "value": 1 },
    //         { "source": "Woman2", "target": "Javert", "value": 1 },
    //         { "source": "MotherInnocent", "target": "Fauchelevent", "value": 3 },
    //         { "source": "MotherInnocent", "target": "Valjean", "value": 1 },
    //         { "source": "Gribier", "target": "Fauchelevent", "value": 2 },
    //         { "source": "Mme.Burgon", "target": "Jondrette", "value": 1 },
    //         { "source": "Gavroche", "target": "Mme.Burgon", "value": 2 },
    //         { "source": "Gavroche", "target": "Thenardier", "value": 1 },
    //         { "source": "Gavroche", "target": "Javert", "value": 1 },
    //         { "source": "Gavroche", "target": "Valjean", "value": 1 },
    //         { "source": "Gillenormand", "target": "Cosette", "value": 3 },
    //         { "source": "Gillenormand", "target": "Valjean", "value": 2 },
    //         { "source": "Magnon", "target": "Gillenormand", "value": 1 },
    //         { "source": "Magnon", "target": "Mme.Thenardier", "value": 1 },
    //         { "source": "Mlle.Gillenormand", "target": "Gillenormand", "value": 9 },
    //         { "source": "Mlle.Gillenormand", "target": "Cosette", "value": 2 },
    //         { "source": "Mlle.Gillenormand", "target": "Valjean", "value": 2 },
    //         { "source": "Mme.Pontmercy", "target": "Mlle.Gillenormand", "value": 1 },
    //         { "source": "Mme.Pontmercy", "target": "Pontmercy", "value": 1 },
    //         { "source": "Mlle.Vaubois", "target": "Mlle.Gillenormand", "value": 1 },
    //         { "source": "Lt.Gillenormand", "target": "Mlle.Gillenormand", "value": 2 },
    //         { "source": "Lt.Gillenormand", "target": "Gillenormand", "value": 1 },
    //         { "source": "Lt.Gillenormand", "target": "Cosette", "value": 1 },
    //         { "source": "Marius", "target": "Mlle.Gillenormand", "value": 6 },
    //         { "source": "Marius", "target": "Gillenormand", "value": 12 },
    //         { "source": "Marius", "target": "Pontmercy", "value": 1 },
    //         { "source": "Marius", "target": "Lt.Gillenormand", "value": 1 },
    //         { "source": "Marius", "target": "Cosette", "value": 21 },
    //         { "source": "Marius", "target": "Valjean", "value": 19 },
    //         { "source": "Marius", "target": "Tholomyes", "value": 1 },
    //         { "source": "Marius", "target": "Thenardier", "value": 2 },
    //         { "source": "Marius", "target": "Eponine", "value": 5 },
    //         { "source": "Marius", "target": "Gavroche", "value": 4 },
    //         { "source": "BaronessT", "target": "Gillenormand", "value": 1 },
    //         { "source": "BaronessT", "target": "Marius", "value": 1 },
    //         { "source": "Mabeuf", "target": "Marius", "value": 1 },
    //         { "source": "Mabeuf", "target": "Eponine", "value": 1 },
    //         { "source": "Mabeuf", "target": "Gavroche", "value": 1 },
    //         { "source": "Enjolras", "target": "Marius", "value": 7 },
    //         { "source": "Enjolras", "target": "Gavroche", "value": 7 },
    //         { "source": "Enjolras", "target": "Javert", "value": 6 },
    //         { "source": "Enjolras", "target": "Mabeuf", "value": 1 },
    //         { "source": "Enjolras", "target": "Valjean", "value": 4 },
    //         { "source": "Combeferre", "target": "Enjolras", "value": 15 },
    //         { "source": "Combeferre", "target": "Marius", "value": 5 },
    //         { "source": "Combeferre", "target": "Gavroche", "value": 6 },
    //         { "source": "Combeferre", "target": "Mabeuf", "value": 2 },
    //         { "source": "Prouvaire", "target": "Gavroche", "value": 1 },
    //         { "source": "Prouvaire", "target": "Enjolras", "value": 4 },
    //         { "source": "Prouvaire", "target": "Combeferre", "value": 2 },
    //         { "source": "Feuilly", "target": "Gavroche", "value": 2 },
    //         { "source": "Feuilly", "target": "Enjolras", "value": 6 },
    //         { "source": "Feuilly", "target": "Prouvaire", "value": 2 },
    //         { "source": "Feuilly", "target": "Combeferre", "value": 5 },
    //         { "source": "Feuilly", "target": "Mabeuf", "value": 1 },
    //         { "source": "Feuilly", "target": "Marius", "value": 1 },
    //         { "source": "Courfeyrac", "target": "Marius", "value": 9 },
    //         { "source": "Courfeyrac", "target": "Enjolras", "value": 17 },
    //         { "source": "Courfeyrac", "target": "Combeferre", "value": 13 },
    //         { "source": "Courfeyrac", "target": "Gavroche", "value": 7 },
    //         { "source": "Courfeyrac", "target": "Mabeuf", "value": 2 },
    //         { "source": "Courfeyrac", "target": "Eponine", "value": 1 },
    //         { "source": "Courfeyrac", "target": "Feuilly", "value": 6 },
    //         { "source": "Courfeyrac", "target": "Prouvaire", "value": 3 },
    //         { "source": "Bahorel", "target": "Combeferre", "value": 5 },
    //         { "source": "Bahorel", "target": "Gavroche", "value": 5 },
    //         { "source": "Bahorel", "target": "Courfeyrac", "value": 6 },
    //         { "source": "Bahorel", "target": "Mabeuf", "value": 2 },
    //         { "source": "Bahorel", "target": "Enjolras", "value": 4 },
    //         { "source": "Bahorel", "target": "Feuilly", "value": 3 },
    //         { "source": "Bahorel", "target": "Prouvaire", "value": 2 },
    //         { "source": "Bahorel", "target": "Marius", "value": 1 },
    //         { "source": "Bossuet", "target": "Marius", "value": 5 },
    //         { "source": "Bossuet", "target": "Courfeyrac", "value": 12 },
    //         { "source": "Bossuet", "target": "Gavroche", "value": 5 },
    //         { "source": "Bossuet", "target": "Bahorel", "value": 4 },
    //         { "source": "Bossuet", "target": "Enjolras", "value": 10 },
    //         { "source": "Bossuet", "target": "Feuilly", "value": 6 },
    //         { "source": "Bossuet", "target": "Prouvaire", "value": 2 },
    //         { "source": "Bossuet", "target": "Combeferre", "value": 9 },
    //         { "source": "Bossuet", "target": "Mabeuf", "value": 1 },
    //         { "source": "Bossuet", "target": "Valjean", "value": 1 },
    //         { "source": "Joly", "target": "Bahorel", "value": 5 },
    //         { "source": "Joly", "target": "Bossuet", "value": 7 },
    //         { "source": "Joly", "target": "Gavroche", "value": 3 },
    //         { "source": "Joly", "target": "Courfeyrac", "value": 5 },
    //         { "source": "Joly", "target": "Enjolras", "value": 5 },
    //         { "source": "Joly", "target": "Feuilly", "value": 5 },
    //         { "source": "Joly", "target": "Prouvaire", "value": 2 },
    //         { "source": "Joly", "target": "Combeferre", "value": 5 },
    //         { "source": "Joly", "target": "Mabeuf", "value": 1 },
    //         { "source": "Joly", "target": "Marius", "value": 2 },
    //         { "source": "Grantaire", "target": "Bossuet", "value": 3 },
    //         { "source": "Grantaire", "target": "Enjolras", "value": 3 },
    //         { "source": "Grantaire", "target": "Combeferre", "value": 1 },
    //         { "source": "Grantaire", "target": "Courfeyrac", "value": 2 },
    //         { "source": "Grantaire", "target": "Joly", "value": 2 },
    //         { "source": "Grantaire", "target": "Gavroche", "value": 1 },
    //         { "source": "Grantaire", "target": "Bahorel", "value": 1 },
    //         { "source": "Grantaire", "target": "Feuilly", "value": 1 },
    //         { "source": "Grantaire", "target": "Prouvaire", "value": 1 },
    //         { "source": "MotherPlutarch", "target": "Mabeuf", "value": 3 },
    //         { "source": "Gueulemer", "target": "Thenardier", "value": 5 },
    //         { "source": "Gueulemer", "target": "Valjean", "value": 1 },
    //         { "source": "Gueulemer", "target": "Mme.Thenardier", "value": 1 },
    //         { "source": "Gueulemer", "target": "Javert", "value": 1 },
    //         { "source": "Gueulemer", "target": "Gavroche", "value": 1 },
    //         { "source": "Gueulemer", "target": "Eponine", "value": 1 },
    //         { "source": "Babet", "target": "Thenardier", "value": 6 },
    //         { "source": "Babet", "target": "Gueulemer", "value": 6 },
    //         { "source": "Babet", "target": "Valjean", "value": 1 },
    //         { "source": "Babet", "target": "Mme.Thenardier", "value": 1 },
    //         { "source": "Babet", "target": "Javert", "value": 2 },
    //         { "source": "Babet", "target": "Gavroche", "value": 1 },
    //         { "source": "Babet", "target": "Eponine", "value": 1 },
    //         { "source": "Claquesous", "target": "Thenardier", "value": 4 },
    //         { "source": "Claquesous", "target": "Babet", "value": 4 },
    //         { "source": "Claquesous", "target": "Gueulemer", "value": 4 },
    //         { "source": "Claquesous", "target": "Valjean", "value": 1 },
    //         { "source": "Claquesous", "target": "Mme.Thenardier", "value": 1 },
    //         { "source": "Claquesous", "target": "Javert", "value": 1 },
    //         { "source": "Claquesous", "target": "Eponine", "value": 1 },
    //         { "source": "Claquesous", "target": "Enjolras", "value": 1 },
    //         { "source": "Montparnasse", "target": "Javert", "value": 1 },
    //         { "source": "Montparnasse", "target": "Babet", "value": 2 },
    //         { "source": "Montparnasse", "target": "Gueulemer", "value": 2 },
    //         { "source": "Montparnasse", "target": "Claquesous", "value": 2 },
    //         { "source": "Montparnasse", "target": "Valjean", "value": 1 },
    //         { "source": "Montparnasse", "target": "Gavroche", "value": 1 },
    //         { "source": "Montparnasse", "target": "Eponine", "value": 1 },
    //         { "source": "Montparnasse", "target": "Thenardier", "value": 1 },
    //         { "source": "Toussaint", "target": "Cosette", "value": 2 },
    //         { "source": "Toussaint", "target": "Javert", "value": 1 },
    //         { "source": "Toussaint", "target": "Valjean", "value": 1 },
    //         { "source": "Child1", "target": "Gavroche", "value": 2 },
    //         { "source": "Child2", "target": "Gavroche", "value": 2 },
    //         { "source": "Child2", "target": "Child1", "value": 3 },
    //         { "source": "Brujon", "target": "Babet", "value": 3 },
    //         { "source": "Brujon", "target": "Gueulemer", "value": 3 },
    //         { "source": "Brujon", "target": "Thenardier", "value": 3 },
    //         { "source": "Brujon", "target": "Gavroche", "value": 1 },
    //         { "source": "Brujon", "target": "Eponine", "value": 1 },
    //         { "source": "Brujon", "target": "Claquesous", "value": 1 },
    //         { "source": "Brujon", "target": "Montparnasse", "value": 1 },
    //         { "source": "Mme.Hucheloup", "target": "Bossuet", "value": 1 },
    //         { "source": "Mme.Hucheloup", "target": "Joly", "value": 1 },
    //         { "source": "Mme.Hucheloup", "target": "Grantaire", "value": 1 },
    //         { "source": "Mme.Hucheloup", "target": "Bahorel", "value": 1 },
    //         { "source": "Mme.Hucheloup", "target": "Courfeyrac", "value": 1 },
    //         { "source": "Mme.Hucheloup", "target": "Gavroche", "value": 1 },
    //         { "source": "Mme.Hucheloup", "target": "Enjolras", "value": 1 }
    //     ]
    // };

    let graph = {
        "nodes": [
            { "name": "TV", "class": "ProductType" },
            { "name": "Smartphone", "class": "ProductType" },
            { "name": "Sony TV", "class": "Product" },
            { "name": "iPhone", "class": "Product" },
            { "name": "Purchase_1", "class": "Purchase" },
            { "name": "Purchase_2", "class": "Purchase" },
            { "name": "Purchase_3", "class": "Purchase" },
            { "name": "Purchase_4", "class": "Purchase" },
            { "name": "Purchase_5", "class": "Purchase" },
            { "name": "Purchase_6", "class": "Purchase" },
            { "name": "Purchase_7", "class": "Purchase" },
            { "name": "Transaction_1", "class": "Transaction" },
            { "name": "Transaction_2", "class": "Transaction" },
            { "name": "Transaction_3", "class": "Transaction" },
            { "name": "Transaction_4", "class": "Transaction" },
            { "name": "Transaction_5", "class": "Transaction" },
            { "name": "Transaction_6", "class": "Transaction" },
            { "name": "Transaction_7", "class": "Transaction" },
            { "name": "Transaction_8", "class": "Transaction" },
            { "name": "Transaction_9", "class": "Transaction" },
            { "name": "Transaction_10", "class": "Transaction" },
            { "name": "Transaction_11", "class": "Transaction" },
            { "name": "a", "class": "Person" },
            { "name": "b", "class": "Person" },
            { "name": "c", "class": "Person" },
            { "name": "d", "class": "Person" },
            { "name": "e", "class": "Person" },
            { "name": "0-50", "class": "AgeGroup" },
            { "name": "50-100", "class": "AgeGroup" },
            { "name": "Amsterdam", "class": "City" },
            { "name": "Rotterdam", "class": "City" },
            { "name": "Albert Heijn", "class": "Company" },
            { "name": "Netflix", "class": "Company" },
            { "name": "Mediamarkt", "class": "Company" }
        ],
        "links": [
            { "source": "Sony TV", "target": "TV" },
            { "source": "iPhone", "target": "Smartphone"},
            { "source": "Purchase_1", "target": "Sony TV" },
            { "source": "Purchase_2", "target": "Sony TV" },
            { "source": "Purchase_3", "target": "Sony TV" },
            { "source": "Purchase_4", "target": "Sony TV" },
            { "source": "Purchase_5", "target": "iPhone" },
            { "source": "Purchase_6", "target": "iPhone" },
            { "source": "Purchase_7", "target": "iPhone" },
            { "source": "Transaction_1", "target": "Purchase_1" },
            { "source": "Transaction_2", "target": "Purchase_2" },
            { "source": "Transaction_3", "target": "Purchase_3" },
            { "source": "Transaction_4", "target": "Purchase_4" },
            { "source": "Transaction_5", "target": "Purchase_5" },
            { "source": "Transaction_6", "target": "Purchase_6" },
            { "source": "Transaction_7", "target": "Purchase_7" },
            { "source": "Transaction_1", "target": "b" },
            { "source": "Transaction_2", "target": "c" },
            { "source": "Transaction_3", "target": "d" },
            { "source": "Transaction_1", "target": "Mediamarkt" },
            { "source": "Transaction_2", "target": "Mediamarkt" },
            { "source": "Transaction_3", "target": "Mediamarkt" },
            { "source": "Transaction_4", "target": "e" },
            { "source": "Transaction_4", "target": "Mediamarkt" },
            { "source": "Transaction_5", "target": "a" },
            { "source": "Transaction_5", "target": "Mediamarkt" },
            { "source": "Transaction_6", "target": "c" },
            { "source": "Transaction_6", "target": "Mediamarkt" },
            { "source": "Transaction_7", "target": "d" },
            { "source": "Transaction_7", "target": "Mediamarkt" },
            { "source": "Transaction_8", "target": "b" },
            { "source": "Transaction_8", "target": "Netflix" },
            { "source": "Transaction_9", "target": "c" },
            { "source": "Transaction_9", "target": "Netflix" },
            { "source": "Transaction_10", "target": "d" },
            { "source": "Transaction_10", "target": "Netflix" },
            { "source": "Transaction_11", "target": "e" },
            { "source": "Transaction_11", "target": "Albert Heijn" },
            { "source": "a", "target": "0-50" },
            { "source": "a", "target": "Amsterdam" },
            { "source": "b", "target": "0-50" },
            { "source": "b", "target": "Amsterdam" },
            { "source": "c", "target": "0-50" },
            { "source": "c", "target": "Rotterdam" },
            { "source": "d", "target": "50-100" },
            { "source": "d", "target": "Amsterdam" },
            { "source": "e", "target": "50-100" },
            { "source": "e", "target": "Rotterdam" }
        ]
    };


    let width = 600;
    let height = 400;
    let svg = d3.select('#' + parentId).append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('border', '1px solid green');

   // var color = d3.scaleOrdinal(d3.schemeCategory20);
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
        .attr("stroke-width", function (d) { 

            return 1;
           // return Math.sqrt(d.value);
         });

    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", 5)
        .attr("fill", function (d) { return color(d.class); });


    node.append("title")
        .text(function (d) { return d.name; });

    simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(graph.links);

    function ticked() {
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


function colaGraph(parentId) {

    // let graph = {
    //     "nodes":[
    //       {"name":"Myriel","group":1},
    //       {"name":"Napoleon","group":1},
    //       {"name":"Mlle.Baptistine","group":1},
    //       {"name":"Mme.Magloire","group":1},
    //       {"name":"CountessdeLo","group":1},
    //       {"name":"Geborand","group":1},
    //       {"name":"Champtercier","group":1},
    //       {"name":"Cravatte","group":1},
    //       {"name":"Count","group":1},
    //       {"name":"OldMan","group":1},
    //       {"name":"Labarre","group":2},
    //       {"name":"Valjean","group":2},
    //       {"name":"Marguerite","group":3},
    //       {"name":"Mme.deR","group":2},
    //       {"name":"Isabeau","group":2},
    //       {"name":"Gervais","group":2},
    //       {"name":"Tholomyes","group":3},
    //       {"name":"Listolier","group":3},
    //       {"name":"Fameuil","group":3},
    //       {"name":"Blacheville","group":3},
    //       {"name":"Favourite","group":3},
    //       {"name":"Dahlia","group":3},
    //       {"name":"Zephine","group":3},
    //       {"name":"Fantine","group":3},
    //       {"name":"Mme.Thenardier","group":4},
    //       {"name":"Thenardier","group":4},
    //       {"name":"Cosette","group":5},
    //       {"name":"Javert","group":4},
    //       {"name":"Fauchelevent","group":0},
    //       {"name":"Bamatabois","group":2},
    //       {"name":"Perpetue","group":3},
    //       {"name":"Simplice","group":2},
    //       {"name":"Scaufflaire","group":2},
    //       {"name":"Woman1","group":2},
    //       {"name":"Judge","group":2},
    //       {"name":"Champmathieu","group":2},
    //       {"name":"Brevet","group":2},
    //       {"name":"Chenildieu","group":2},
    //       {"name":"Cochepaille","group":2},
    //       {"name":"Pontmercy","group":4},
    //       {"name":"Boulatruelle","group":6},
    //       {"name":"Eponine","group":4},
    //       {"name":"Anzelma","group":4},
    //       {"name":"Woman2","group":5},
    //       {"name":"MotherInnocent","group":0},
    //       {"name":"Gribier","group":0},
    //       {"name":"Jondrette","group":7},
    //       {"name":"Mme.Burgon","group":7},
    //       {"name":"Gavroche","group":8},
    //       {"name":"Gillenormand","group":5},
    //       {"name":"Magnon","group":5},
    //       {"name":"Mlle.Gillenormand","group":5},
    //       {"name":"Mme.Pontmercy","group":5},
    //       {"name":"Mlle.Vaubois","group":5},
    //       {"name":"Lt.Gillenormand","group":5},
    //       {"name":"Marius","group":8},
    //       {"name":"BaronessT","group":5},
    //       {"name":"Mabeuf","group":8},
    //       {"name":"Enjolras","group":8},
    //       {"name":"Combeferre","group":8},
    //       {"name":"Prouvaire","group":8},
    //       {"name":"Feuilly","group":8},
    //       {"name":"Courfeyrac","group":8},
    //       {"name":"Bahorel","group":8},
    //       {"name":"Bossuet","group":8},
    //       {"name":"Joly","group":8},
    //       {"name":"Grantaire","group":8},
    //       {"name":"MotherPlutarch","group":9},
    //       {"name":"Gueulemer","group":4},
    //       {"name":"Babet","group":4},
    //       {"name":"Claquesous","group":4},
    //       {"name":"Montparnasse","group":4},
    //       {"name":"Toussaint","group":5},
    //       {"name":"Child1","group":10},
    //       {"name":"Child2","group":10},
    //       {"name":"Brujon","group":4},
    //       {"name":"Mme.Hucheloup","group":8}
    //     ],
    //     "links":[
    //       {"source":1,"target":0,"value":1},
    //       {"source":2,"target":0,"value":8},
    //       {"source":3,"target":0,"value":10},
    //       {"source":3,"target":2,"value":6},
    //       {"source":4,"target":0,"value":1},
    //       {"source":5,"target":0,"value":1},
    //       {"source":6,"target":0,"value":1},
    //       {"source":7,"target":0,"value":1},
    //       {"source":8,"target":0,"value":2},
    //       {"source":9,"target":0,"value":1},
    //       {"source":11,"target":10,"value":1},
    //       {"source":11,"target":3,"value":3},
    //       {"source":11,"target":2,"value":3},
    //       {"source":11,"target":0,"value":5},
    //       {"source":12,"target":11,"value":1},
    //       {"source":13,"target":11,"value":1},
    //       {"source":14,"target":11,"value":1},
    //       {"source":15,"target":11,"value":1},
    //       {"source":17,"target":16,"value":4},
    //       {"source":18,"target":16,"value":4},
    //       {"source":18,"target":17,"value":4},
    //       {"source":19,"target":16,"value":4},
    //       {"source":19,"target":17,"value":4},
    //       {"source":19,"target":18,"value":4},
    //       {"source":20,"target":16,"value":3},
    //       {"source":20,"target":17,"value":3},
    //       {"source":20,"target":18,"value":3},
    //       {"source":20,"target":19,"value":4},
    //       {"source":21,"target":16,"value":3},
    //       {"source":21,"target":17,"value":3},
    //       {"source":21,"target":18,"value":3},
    //       {"source":21,"target":19,"value":3},
    //       {"source":21,"target":20,"value":5},
    //       {"source":22,"target":16,"value":3},
    //       {"source":22,"target":17,"value":3},
    //       {"source":22,"target":18,"value":3},
    //       {"source":22,"target":19,"value":3},
    //       {"source":22,"target":20,"value":4},
    //       {"source":22,"target":21,"value":4},
    //       {"source":23,"target":16,"value":3},
    //       {"source":23,"target":17,"value":3},
    //       {"source":23,"target":18,"value":3},
    //       {"source":23,"target":19,"value":3},
    //       {"source":23,"target":20,"value":4},
    //       {"source":23,"target":21,"value":4},
    //       {"source":23,"target":22,"value":4},
    //       {"source":23,"target":12,"value":2},
    //       {"source":23,"target":11,"value":9},
    //       {"source":24,"target":23,"value":2},
    //       {"source":24,"target":11,"value":7},
    //       {"source":25,"target":24,"value":13},
    //       {"source":25,"target":23,"value":1},
    //       {"source":25,"target":11,"value":12},
    //       {"source":26,"target":24,"value":4},
    //       {"source":26,"target":11,"value":31},
    //       {"source":26,"target":16,"value":1},
    //       {"source":26,"target":25,"value":1},
    //       {"source":27,"target":11,"value":17},
    //       {"source":27,"target":23,"value":5},
    //       {"source":27,"target":25,"value":5},
    //       {"source":27,"target":24,"value":1},
    //       {"source":27,"target":26,"value":1},
    //       {"source":28,"target":11,"value":8},
    //       {"source":28,"target":27,"value":1},
    //       {"source":29,"target":23,"value":1},
    //       {"source":29,"target":27,"value":1},
    //       {"source":29,"target":11,"value":2},
    //       {"source":30,"target":23,"value":1},
    //       {"source":31,"target":30,"value":2},
    //       {"source":31,"target":11,"value":3},
    //       {"source":31,"target":23,"value":2},
    //       {"source":31,"target":27,"value":1},
    //       {"source":32,"target":11,"value":1},
    //       {"source":33,"target":11,"value":2},
    //       {"source":33,"target":27,"value":1},
    //       {"source":34,"target":11,"value":3},
    //       {"source":34,"target":29,"value":2},
    //       {"source":35,"target":11,"value":3},
    //       {"source":35,"target":34,"value":3},
    //       {"source":35,"target":29,"value":2},
    //       {"source":36,"target":34,"value":2},
    //       {"source":36,"target":35,"value":2},
    //       {"source":36,"target":11,"value":2},
    //       {"source":36,"target":29,"value":1},
    //       {"source":37,"target":34,"value":2},
    //       {"source":37,"target":35,"value":2},
    //       {"source":37,"target":36,"value":2},
    //       {"source":37,"target":11,"value":2},
    //       {"source":37,"target":29,"value":1},
    //       {"source":38,"target":34,"value":2},
    //       {"source":38,"target":35,"value":2},
    //       {"source":38,"target":36,"value":2},
    //       {"source":38,"target":37,"value":2},
    //       {"source":38,"target":11,"value":2},
    //       {"source":38,"target":29,"value":1},
    //       {"source":39,"target":25,"value":1},
    //       {"source":40,"target":25,"value":1},
    //       {"source":41,"target":24,"value":2},
    //       {"source":41,"target":25,"value":3},
    //       {"source":42,"target":41,"value":2},
    //       {"source":42,"target":25,"value":2},
    //       {"source":42,"target":24,"value":1},
    //       {"source":43,"target":11,"value":3},
    //       {"source":43,"target":26,"value":1},
    //       {"source":43,"target":27,"value":1},
    //       {"source":44,"target":28,"value":3},
    //       {"source":44,"target":11,"value":1},
    //       {"source":45,"target":28,"value":2},
    //       {"source":47,"target":46,"value":1},
    //       {"source":48,"target":47,"value":2},
    //       {"source":48,"target":25,"value":1},
    //       {"source":48,"target":27,"value":1},
    //       {"source":48,"target":11,"value":1},
    //       {"source":49,"target":26,"value":3},
    //       {"source":49,"target":11,"value":2},
    //       {"source":50,"target":49,"value":1},
    //       {"source":50,"target":24,"value":1},
    //       {"source":51,"target":49,"value":9},
    //       {"source":51,"target":26,"value":2},
    //       {"source":51,"target":11,"value":2},
    //       {"source":52,"target":51,"value":1},
    //       {"source":52,"target":39,"value":1},
    //       {"source":53,"target":51,"value":1},
    //       {"source":54,"target":51,"value":2},
    //       {"source":54,"target":49,"value":1},
    //       {"source":54,"target":26,"value":1},
    //       {"source":55,"target":51,"value":6},
    //       {"source":55,"target":49,"value":12},
    //       {"source":55,"target":39,"value":1},
    //       {"source":55,"target":54,"value":1},
    //       {"source":55,"target":26,"value":21},
    //       {"source":55,"target":11,"value":19},
    //       {"source":55,"target":16,"value":1},
    //       {"source":55,"target":25,"value":2},
    //       {"source":55,"target":41,"value":5},
    //       {"source":55,"target":48,"value":4},
    //       {"source":56,"target":49,"value":1},
    //       {"source":56,"target":55,"value":1},
    //       {"source":57,"target":55,"value":1},
    //       {"source":57,"target":41,"value":1},
    //       {"source":57,"target":48,"value":1},
    //       {"source":58,"target":55,"value":7},
    //       {"source":58,"target":48,"value":7},
    //       {"source":58,"target":27,"value":6},
    //       {"source":58,"target":57,"value":1},
    //       {"source":58,"target":11,"value":4},
    //       {"source":59,"target":58,"value":15},
    //       {"source":59,"target":55,"value":5},
    //       {"source":59,"target":48,"value":6},
    //       {"source":59,"target":57,"value":2},
    //       {"source":60,"target":48,"value":1},
    //       {"source":60,"target":58,"value":4},
    //       {"source":60,"target":59,"value":2},
    //       {"source":61,"target":48,"value":2},
    //       {"source":61,"target":58,"value":6},
    //       {"source":61,"target":60,"value":2},
    //       {"source":61,"target":59,"value":5},
    //       {"source":61,"target":57,"value":1},
    //       {"source":61,"target":55,"value":1},
    //       {"source":62,"target":55,"value":9},
    //       {"source":62,"target":58,"value":17},
    //       {"source":62,"target":59,"value":13},
    //       {"source":62,"target":48,"value":7},
    //       {"source":62,"target":57,"value":2},
    //       {"source":62,"target":41,"value":1},
    //       {"source":62,"target":61,"value":6},
    //       {"source":62,"target":60,"value":3},
    //       {"source":63,"target":59,"value":5},
    //       {"source":63,"target":48,"value":5},
    //       {"source":63,"target":62,"value":6},
    //       {"source":63,"target":57,"value":2},
    //       {"source":63,"target":58,"value":4},
    //       {"source":63,"target":61,"value":3},
    //       {"source":63,"target":60,"value":2},
    //       {"source":63,"target":55,"value":1},
    //       {"source":64,"target":55,"value":5},
    //       {"source":64,"target":62,"value":12},
    //       {"source":64,"target":48,"value":5},
    //       {"source":64,"target":63,"value":4},
    //       {"source":64,"target":58,"value":10},
    //       {"source":64,"target":61,"value":6},
    //       {"source":64,"target":60,"value":2},
    //       {"source":64,"target":59,"value":9},
    //       {"source":64,"target":57,"value":1},
    //       {"source":64,"target":11,"value":1},
    //       {"source":65,"target":63,"value":5},
    //       {"source":65,"target":64,"value":7},
    //       {"source":65,"target":48,"value":3},
    //       {"source":65,"target":62,"value":5},
    //       {"source":65,"target":58,"value":5},
    //       {"source":65,"target":61,"value":5},
    //       {"source":65,"target":60,"value":2},
    //       {"source":65,"target":59,"value":5},
    //       {"source":65,"target":57,"value":1},
    //       {"source":65,"target":55,"value":2},
    //       {"source":66,"target":64,"value":3},
    //       {"source":66,"target":58,"value":3},
    //       {"source":66,"target":59,"value":1},
    //       {"source":66,"target":62,"value":2},
    //       {"source":66,"target":65,"value":2},
    //       {"source":66,"target":48,"value":1},
    //       {"source":66,"target":63,"value":1},
    //       {"source":66,"target":61,"value":1},
    //       {"source":66,"target":60,"value":1},
    //       {"source":67,"target":57,"value":3},
    //       {"source":68,"target":25,"value":5},
    //       {"source":68,"target":11,"value":1},
    //       {"source":68,"target":24,"value":1},
    //       {"source":68,"target":27,"value":1},
    //       {"source":68,"target":48,"value":1},
    //       {"source":68,"target":41,"value":1},
    //       {"source":69,"target":25,"value":6},
    //       {"source":69,"target":68,"value":6},
    //       {"source":69,"target":11,"value":1},
    //       {"source":69,"target":24,"value":1},
    //       {"source":69,"target":27,"value":2},
    //       {"source":69,"target":48,"value":1},
    //       {"source":69,"target":41,"value":1},
    //       {"source":70,"target":25,"value":4},
    //       {"source":70,"target":69,"value":4},
    //       {"source":70,"target":68,"value":4},
    //       {"source":70,"target":11,"value":1},
    //       {"source":70,"target":24,"value":1},
    //       {"source":70,"target":27,"value":1},
    //       {"source":70,"target":41,"value":1},
    //       {"source":70,"target":58,"value":1},
    //       {"source":71,"target":27,"value":1},
    //       {"source":71,"target":69,"value":2},
    //       {"source":71,"target":68,"value":2},
    //       {"source":71,"target":70,"value":2},
    //       {"source":71,"target":11,"value":1},
    //       {"source":71,"target":48,"value":1},
    //       {"source":71,"target":41,"value":1},
    //       {"source":71,"target":25,"value":1},
    //       {"source":72,"target":26,"value":2},
    //       {"source":72,"target":27,"value":1},
    //       {"source":72,"target":11,"value":1},
    //       {"source":73,"target":48,"value":2},
    //       {"source":74,"target":48,"value":2},
    //       {"source":74,"target":73,"value":3},
    //       {"source":75,"target":69,"value":3},
    //       {"source":75,"target":68,"value":3},
    //       {"source":75,"target":25,"value":3},
    //       {"source":75,"target":48,"value":1},
    //       {"source":75,"target":41,"value":1},
    //       {"source":75,"target":70,"value":1},
    //       {"source":75,"target":71,"value":1},
    //       {"source":76,"target":64,"value":1},
    //       {"source":76,"target":65,"value":1},
    //       {"source":76,"target":66,"value":1},
    //       {"source":76,"target":63,"value":1},
    //       {"source":76,"target":62,"value":1},
    //       {"source":76,"target":48,"value":1},
    //       {"source":76,"target":58,"value":1}
    //     ]
    // };


    let graphbase = {
        "nodes": [
            { "name": "TV", "class": "ProductType" },
            { "name": "Smartphone", "class": "ProductType" },
            { "name": "Sony TV", "class": "Product" },
            { "name": "iPhone", "class": "Product" },
            { "name": "Purchase_1", "class": "Purchase" },
            { "name": "Purchase_2", "class": "Purchase" },
            { "name": "Purchase_3", "class": "Purchase" },
            { "name": "Purchase_4", "class": "Purchase" },
            { "name": "Purchase_5", "class": "Purchase" },
            { "name": "Purchase_6", "class": "Purchase" },
            { "name": "Purchase_7", "class": "Purchase" },
            { "name": "Transaction_1", "class": "Transaction" },
            { "name": "Transaction_2", "class": "Transaction" },
            { "name": "Transaction_3", "class": "Transaction" },
            { "name": "Transaction_4", "class": "Transaction" },
            { "name": "Transaction_5", "class": "Transaction" },
            { "name": "Transaction_6", "class": "Transaction" },
            { "name": "Transaction_7", "class": "Transaction" },
            { "name": "Transaction_8", "class": "Transaction" },
            { "name": "Transaction_9", "class": "Transaction" },
            { "name": "Transaction_10", "class": "Transaction" },
            { "name": "Transaction_11", "class": "Transaction" },
            { "name": "a", "class": "Person" },
            { "name": "b", "class": "Person" },
            { "name": "c", "class": "Person" },
            { "name": "d", "class": "Person" },
            { "name": "e", "class": "Person" },
            { "name": "0-50", "class": "AgeGroup" },
            { "name": "50-100", "class": "AgeGroup" },
            { "name": "Amsterdam", "class": "City" },
            { "name": "Rotterdam", "class": "City" },
            { "name": "Albert Heijn", "class": "Company" },
            { "name": "Netflix", "class": "Company" },
            { "name": "Mediamarkt", "class": "Company" }
        ],
        "links": [
             { "source": "Sony TV", "target": "TV"},
            { "source": "iPhone", "target": "Smartphone"},
            { "source": "Purchase_1", "target": "Sony TV" },
            { "source": "Purchase_2", "target": "Sony TV" },
            { "source": "Purchase_3", "target": "Sony TV" },
            { "source": "Purchase_4", "target": "Sony TV" },
            { "source": "Purchase_5", "target": "iPhone" },
            { "source": "Purchase_6", "target": "iPhone" },
            { "source": "Purchase_7", "target": "iPhone" },
            { "source": "Transaction_1", "target": "Purchase_1" },
            { "source": "Transaction_2", "target": "Purchase_2" },
            { "source": "Transaction_3", "target": "Purchase_3" },
            { "source": "Transaction_4", "target": "Purchase_4" },
            { "source": "Transaction_5", "target": "Purchase_5" },
            { "source": "Transaction_6", "target": "Purchase_6" },
            { "source": "Transaction_7", "target": "Purchase_7" },
            { "source": "Transaction_1", "target": "b" },
            { "source": "Transaction_2", "target": "c" },
            { "source": "Transaction_3", "target": "d" },
            { "source": "Transaction_1", "target": "Mediamarkt" },
            { "source": "Transaction_2", "target": "Mediamarkt" },
            { "source": "Transaction_3", "target": "Mediamarkt" },
            { "source": "Transaction_4", "target": "e" },
            { "source": "Transaction_4", "target": "Mediamarkt" },
            { "source": "Transaction_5", "target": "a" },
            { "source": "Transaction_5", "target": "Mediamarkt" },
            { "source": "Transaction_6", "target": "c" },
            { "source": "Transaction_6", "target": "Mediamarkt" },
            { "source": "Transaction_7", "target": "d" },
            { "source": "Transaction_7", "target": "Mediamarkt" },
            { "source": "Transaction_8", "target": "b" },
            { "source": "Transaction_8", "target": "Netflix" },
            { "source": "Transaction_9", "target": "c" },
            { "source": "Transaction_9", "target": "Netflix" },
            { "source": "Transaction_10", "target": "d" },
            { "source": "Transaction_10", "target": "Netflix" },
            { "source": "Transaction_11", "target": "e" },
            { "source": "Transaction_11", "target": "Albert Heijn" },
            { "source": "a", "target": "0-50" },
            { "source": "a", "target": "Amsterdam" },
            { "source": "b", "target": "0-50" },
            { "source": "b", "target": "Amsterdam" },
            { "source": "c", "target": "0-50" },
            { "source": "c", "target": "Rotterdam" },
            { "source": "d", "target": "50-100" },
            { "source": "d", "target": "Amsterdam" },
            { "source": "e", "target": "50-100" },
            { "source": "e", "target": "Rotterdam" }
        ]
    };

    let links2 = graphbase.links.map((l)=>{
        let s = l.source;
        let t = l.target;
        var sindex = graphbase.nodes.map(function(e) { return e.name; }).indexOf(s);
        var tindex = graphbase.nodes.map(function(e) { return e.name; }).indexOf(t);
        return {
            "source": sindex,
            "target": tindex
        };
    });

    console.log('links2');
    console.log(links2);

   // graph.links = links2;

  

    let graph = {};
    graph.nodes = graphbase.nodes;
    graph.links = links2;
      console.log('graph');
    console.log(graph);

    let width = 600;
    let height = 400;
    let svg = d3.select('#' + parentId).append('svg')
        .attr('width', width)
        .attr('height', height)
        .style('border', '1px solid green');

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var colad3 = cola.d3adaptor(d3)
        .size([width, height]);

        console.log('cola');
        console.log(colad3);

        console.log('d3 version');
        console.log(d3.version);

        var groupMap = {};
        graph.nodes.forEach(function (v, i) {
           // var g = v.group;
            var g = v.class;
            console.log('g: ' + g);
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
        .start(50,0,50);




    // var simulation = d3.forceSimulation()
    //     .force("link", d3.forceLink().id(function (d) { return d.id; }))
    //     .force("charge", d3.forceManyBody())
    //     .force("center", d3.forceCenter(width / 2, height / 2));


    var group = svg.selectAll('.group')
    .data(groups)
    .enter().append('rect')
    .classed('group', true)
    .attr('rx',5)
    .attr('ry',5)
    .style("fill", function (d) { return color(d.id); })
    .call(colad3.drag);

    var link = svg.selectAll(".link")
        .data(graph.links)
        .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function (d) { return 1;/*return Math.sqrt(d.value);*/ });

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 5)
        .style("fill", function (d) { return color(d.class); })
        .call(colad3.drag);


    // node.append("title")
    //     .text(function (d) { return d.id; });

    // simulation
    //     .nodes(graph.nodes)
    //     .on("tick", ticked);

    // simulation.force("link")
    //     .links(graph.links);


    colad3.on("tick", function () {
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
            .attr('height', function(d) { return d.bounds.height() });
    });



    // function ticked() {
    //     link
    //         .attr("x1", function (d) { return d.source.x; })
    //         .attr("y1", function (d) { return d.source.y; })
    //         .attr("x2", function (d) { return d.target.x; })
    //         .attr("y2", function (d) { return d.target.y; });

    //     node
    //         .attr("cx", function (d) { return d.x; })
    //         .attr("cy", function (d) { return d.y; });
    // }

}