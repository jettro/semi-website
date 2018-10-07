function sankeyDiagram(parentId, data, options) {

    google.charts.load('current', { 'packages': ['sankey'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var chartData = new google.visualization.DataTable();

        chartData.addColumn('string', 'From');
        chartData.addColumn('string', 'To');
        chartData.addColumn('number', 'Weight');
        chartData.addRows(data);

        var colors = ['#fa0171', '#38d611', '#0070e6', '#b0a002',
            '#3d577c', '#538989', '#662839', '#EE6912', '#00A18D', '#FCE81C'];

        var chartOptions = {
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

        if (options && options.width) {
            chartOptions.width = options.width
        }
        if (options && options.height) {
            chartOptions.height = options.height
        }

        var chart = new google.visualization.Sankey(document.getElementById(parentId));
        chart.draw(chartData, chartOptions);
    }
}

function bubbleChart(parentId, data, options) {

    let width = options.width || 600;
    let height = options.height || 600;

    let bounds = {
        top: options.top || 30,
        bottom: options.bottom || 80,
        left: options.left || 100,
        right: options.right || 80
    }

    let xCategory = options.xCategory || '';
    let yCategory = options.yCategory || '';
    let valueCategory = options.valueCategory || '';

    let xAcc = accessor(xCategory);
    let yAcc = accessor(yCategory);
    let vAcc = accessor(valueCategory);

    let minR = 1;
    let maxR = width / 30;

    let maxVal = d3.max(data, function (d) {
        return vAcc(d);
    });

    let xScale = d3.scaleIdentity();
    let yScale = d3.scaleIdentity();
    let vScale = d3.scalePow()
        .domain([0, maxVal])
        .range([minR, maxR]);

    let tooltipXOffset = 20;
    let tooltipYOffset = -20;

    //render the chart
    d3.select("#" + parentId).select('svg').remove();

    d3.select("#" + parentId).classed('chart-container', true);

    let svg = d3.select("#" + parentId).append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")

    //AXIS
    let axisG = svg.append('g').classed('chart-axis-g', true);

    axisG.append("g")
        .attr('transform', 'translate(0,' + 0.93 * height + ')')
        .classed('chart-x-axis axis', true);

    axisG.append("g")
        .attr('transform', 'translate(' + 50 + ',' + 0 + ')')
        .classed('chart-y-axis axis', true);

    xScale = getScale(data, width, xAcc, bounds.left, bounds.right);
    yScale = getScale(data, height, yAcc, bounds.top, bounds.bottom);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);

    axisG.select('.chart-x-axis').call(xAxis);
    axisG.select('.chart-y-axis').call(yAxis);

    //axis labels
    axisG.select('.chart-x-axis').append('text')
        .classed('chart-x-axis-label', true)
        .attr('dy', '2.7em')
        .attr('transform', translate(width - bounds.right, 0))
        .text(capitalizeFirstLetter(xCategory));

    axisG.select('.chart-y-axis').append('text')
        .classed('chart-y-axis-label', true)
        .attr('dy', '0.8em')
        .text(capitalizeFirstLetter(yCategory));

    let circleG = svg.append('g').classed('chart-circle-g', true);

    circleG.selectAll('.chart-dot')
        .data(data)
        .enter()
        .append('circle')
        .classed('chart-dot', true)
        .attr('cx', function (d) {
            return xScale(xAcc(d));
        })
        .attr('cy', function (d) {
            return yScale(yAcc(d));
        })
        .attr('r', function (d) {
            return vScale(vAcc(d));
        })
        .classed('chart-cat-main', true)
        .on('mouseover', function (d) {

            d3.select("#" + parentId).selectAll('.chart-tooltip')
                .data([0])
                .enter()
                .append('div')
                .classed('chart-tooltip', true)
                .style('left', function (e, i) {
                    let x = xScale(xAcc(d));
                    return x + tooltipXOffset + 'px';
                })
                .style('top', function (e, i) {
                    let y = yScale(yAcc(d));
                    return y + tooltipYOffset + 'px';
                })
                .html(function (e, i) {
                    let labelText = '';
                    labelText += capitalizeFirstLetter(xCategory) + ': ' + xAcc(d) + '</br>';
                    labelText += capitalizeFirstLetter(yCategory) + ': ' + yAcc(d) + '</br>';
                    labelText += capitalizeFirstLetter(valueCategory) + ': ' + vAcc(d);
                    return labelText;
                });
        })
        .on('mouseout', function (d) {
            d3.select("#" + parentId).selectAll('.chart-tooltip').remove();
        });

}

function forceDirectedGraph(parentId, graph, options) {

    let width = options.width || 600;
    let height = options.height || 400;

    let nodeRadius = options.nodeRadius || 5;

    let colorCat = options.colorBy || 'class';

    let tooltipXOffset = 20;
    let tooltipYOffset = -50;

    d3.select('#' + parentId).classed('chart-container', true);
    d3.select('#' + parentId).selectAll('svg').remove();

    let svg = d3.select('#' + parentId).append('svg')
        .attr('width', width)
        .attr('height', height);

    let categories = d3.set(graph.nodes, function (n) {
        return n[colorCat];
    }).values();

    var catScale = d3.scaleOrdinal()
        .domain(categories)
        .range(range(1, 10));

    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function (d) { return d.id; }))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

    var link = svg.append("g")
        .selectAll("line")
        .data(graph.links)
        .enter()
        .append("line")
        .classed("chart-graph-link", true);

    var node = svg.append("g")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", nodeRadius)
        .attr('class', function (d) {
            return 'chart-cat-' + catScale(d[colorCat]);
        })
        .classed('chart-graph-node', true);

    let keys = keysFromNode(graph.nodes[0]);

    //tooltips
    node.on('mouseover', function (d) {
        d3.select("#" + parentId).selectAll('.chart-tooltip')
            .data([0])
            .enter()
            .append('div')
            .classed('chart-tooltip', true)
            .style('left', function (e, i) {
                return d.x + tooltipXOffset + 'px';
            })
            .style('top', function (e, i) {
                return d.y + tooltipYOffset + 'px';
            })
            .html(function (e, i) {

                let keyValues = keys.map(function (k) {
                    return k + ': ' + d[k];
                });

                let labelText = keyValues.join('</br>');
                return labelText;
            });
    });

    node.on('mouseout', function (d) {
        d3.select("#" + parentId).selectAll('.chart-tooltip').remove();
    });

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

function constrainedLayoutGraph(parentId, ingraph, options) {

    let indexedLinks = ingraph.links.map((l) => {
        let s = l.source;
        let t = l.target;
        var sindex = ingraph.nodes.map(function (e) { return e.id; }).indexOf(s);
        var tindex = ingraph.nodes.map(function (e) { return e.id; }).indexOf(t);
        return {
            "source": sindex,
            "target": tindex
        };
    });

    let graph = {};
    graph.nodes = ingraph.nodes;
    graph.links = indexedLinks;

    let width = options.width || 600;
    let height = options.height || 400;

    let nodeRadius = options.nodeRadius || 7;
    let nodeSpacing = options.nodeSpacing || 20;
    let showGroups = options.showGroups;
    let colorCat = options.colorBy || 'name';

    let tooltipXOffset = 20;
    let tooltipYOffset = -50;

    d3.select('#' + parentId).classed('chart-container', true);
    d3.select('#' + parentId).selectAll('svg').remove();

    let svg = d3.select('#' + parentId).append('svg')
        .attr('width', width)
        .attr('height', height)

    let categories = d3.set(graph.nodes, function (n) {
        return n[colorCat];
    }).values();

    var catScale = d3.scaleOrdinal()
        .domain(categories)
        .range(range(1, 10));

    var colad3 = cola.d3adaptor(d3)
        .size([width, height]);

    var groupMap = {};
    graph.nodes.forEach(function (v, i) {
        var g = v.class;
        if (typeof groupMap[g] == 'undefined') {
            groupMap[g] = [];
        }
        groupMap[g].push(i);

        v.width = v.height = nodeSpacing;
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

    let groupClass = showGroups ? 'chart-group' : 'chart-group-hide';


    var group = svg.selectAll('.chart-graph-group')
        .data(groups)
        .enter().append('rect')
        .classed(groupClass, true)
        .style('fill', 'none')
        .call(colad3.drag);

    var link = svg.selectAll(".chart-graph-link")
        .data(graph.links)
        .enter().append("line")
        .classed('chart-graph-link', true);

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("circle")
        .classed('chart-graph-node', true)
        .attr("r", nodeRadius)
        .attr('class', function (d) {
            return 'chart-cat-' + catScale(d[colorCat]);
        })

        .call(colad3.drag);

    let keys = keysFromNode(graph.nodes[0]);

    //tooltips
    node.on('mouseover', function (d) {
        d3.select("#" + parentId).selectAll('.chart-tooltip')
            .data([0])
            .enter()
            .append('div')
            .classed('chart-tooltip', true)
            .style('left', function (e, i) {
                return d.x + tooltipXOffset + 'px';
            })
            .style('top', function (e, i) {
                return d.y + tooltipYOffset + 'px';
            })
            .html(function (e, i) {

                let keyValues = keys.map(function (k) {
                    return k + ': ' + d[k];
                });

                let labelText = keyValues.join('</br>');
                return labelText;
            });
    });

    node.on('mouseout', function (d) {
        d3.select("#" + parentId).selectAll('.chart-tooltip').remove();
    });


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

function beeswarmChart(parentId, data, options) {

    let width = options.width || 600;
    let height = options.height || 600;

    let bounds = {
        top: options.top || 30,
        bottom: options.bottom || 80,
        left: options.left || 200,
        right: options.right || 80
    };

    var xScale = null;
    var yScale = null;

    //var data = [];
    var xFilter = 'all';
    var yFilter = 'all';
    var ready = false;

    var simulation = null;
    var axisSvg = null;
    var nTicks = 10;
    var maxLabelLength = 5;
    var mainColor = '#304a6c';

    var dia = options.bubbleRadius || 4;

    //remove any previously created containers
    d3.select('#' + parentId).selectAll('div').remove();
    d3.select('#' + parentId).selectAll('svg').remove();

    //create a container for the navigation
    d3.select('#' + parentId).append('div').classed('chart-beeswarm-nav', true)
        .style('padding-left', 0.8 * bounds.left + 'px');
    //create a container for the chart
    d3.select('#' + parentId).append('div').classed('chart-beeswarm', true);

    //set css to ensure correct positioning of axis
    d3.select('#' + parentId).select('.chart-beeswarm').classed('chart-container', true);//.style('position', 'relative');

    let chartElement = d3.select('#' + parentId).select('.chart-beeswarm');

    var sketch = function (s) {

        var x = 100;
        var y = 100;

        s.setup = function () {

            s.createCanvas(width, height);

            s.frameRate(30);
            s.noLoop();

            axisSvg = d3.select('#' + parentId)
                .select('.chart-beeswarm')
                .append("svg")
                .attr("width", s.width)
                .attr("height", s.height)
                .style('position', 'absolute')
                .style('top', '0')
                .style('left', '0')
                .append("g");

            axisSvg.append("g")
                .attr('transform', 'translate(0,' + (s.height - 0.8 * bounds.bottom) + ')')
                .classed('chart-x-axis chart-axis', true);

            axisSvg.append("g")
                .attr('transform', translate(0.8 * bounds.left, 0))
                .classed('chart-y-axis chart-axis', true);

            createButtons(s);
            setFilter(s, xFilter, yFilter);

            simulation.stop();
            for (var i = 0; i < 150; ++i) {
                simulation.tick();
            }
            simulation.restart();

            ready = true;
            s.redraw();

        };

        s.draw = function () {
            if (!ready) {
                s.background(250);
                return;
            }

            s.background(255);

            //axis
            var xAxis = d3.axisBottom(xScale).ticks(nTicks);
            var yAxis = d3.axisLeft(yScale).ticks(nTicks);
            axisSvg.select('.chart-x-axis').call(xAxis);

            let xScaleDomain = xScale.domain();

            let longestLabel = d3.max(xScaleDomain, d => {
                let ds = '' + d;
                return ds.length;
            });

            //only rotate labels if longest label is a bit long
            let doRotate = longestLabel > maxLabelLength;
            if (doRotate) {
                axisSvg.select('.chart-x-axis').selectAll("text")
                    .style("text-anchor", "end")
                    .attr('dx', '-.8em')
                    .attr("dy", ".35em")
                    .attr("transform", "rotate(-45)");
            }

            axisSvg.select('.chart-y-axis').call(yAxis);

            s.noFill();
            s.stroke(200);
            data.forEach(function (d, i) {

                s.stroke(255);
                s.strokeWeight(1);
                var diameter = dia * 2;
                s.fill(mainColor);

                s.ellipse(d.x, d.y, diameter, diameter);
            });

            //tooltip
            let closest = simulation.find(s.mouseX, s.mouseY, 50);

            //tooltip
            let tooltipXOffset = 20;
            let tooltipYOffset = -20;

            d3.select('#' + parentId).select('.chart-beeswarm').selectAll('.chart-tooltip').remove();

            if (closest) {

                let keys = keysFromNode(closest);

                d3.select('#' + parentId).select('.chart-beeswarm').selectAll('.chart-tooltip')
                    .data([0])
                    .enter()
                    .append('div')
                    .classed('chart-tooltip', true)
                    .style('left', function (e, i) {
                        return closest.x + 'px';
                    })
                    .style('top', function (e, i) {
                        return closest.y + 'px';
                    })
                    .html(function (e, i) {
                        let keyValues = keys.map(function (k) {
                            return k + ': ' + closest[k];
                        });

                        let labelText = keyValues.join('</br>');
                        return labelText;
                    });

            }

        };

        s.mouseMoved = function () {
            if (ready) {
                s.redraw();
            }
        }
    };

    //p5 instance mode
    var myp5 = new p5(sketch, chartElement.node());

    function createButtons(s) {

        var keys = Object.keys(data[0]);
        var filters = ['all'].concat(keys);

        // <nav class="nav-main">
        //     <ul>
        //         <li><a href="style-mainnav.html">Products</a></li>
        //         <li class="main-nav--selected"><a href="style-mainnav.html">Knowledge base</a></li>
        //         <li><a href="style-mainnav.html">Team</a></li>
        //         <li><a href="style-mainnav.html">Contact</a></li>
        //     </ul>
        // </nav>
        let xButtons = d3.select('#' + parentId)
            .select('.chart-beeswarm-nav')
            .append('nav')
            .classed('nav-main', true)
            .append('ul')
            .classed('chart-filter-buttons-x', true);

        let yButtons = d3.select('#' + parentId)
            .select('.chart-beeswarm-nav')
            .append('nav')
            .classed('nav-main', true)
            .append('ul')
            .classed('chart-filter-buttons-y', true);

        xButtons.selectAll('li')
            .data(filters)
            .enter()
            .append('li')
            .classed('main-nav--selected', function (d) {
                return d == xFilter;
            })
            .append('a')
            .text(function (d) {
                return d;
            })
            .on('click', function (d) {
                xFilter = d;
                setFilter(s, xFilter, yFilter);
            });

        yButtons.selectAll('li')
            .data(filters)
            .enter()
            .append('li')
            .classed('main-nav--selected', function (d) {
                return d == yFilter;
            })
            .append('a')
            .text(function (d) {
                return d;
            })
            .on('click', function (d) {
                yFilter = d;
                setFilter(s, xFilter, yFilter);
            });
    }


    function setFilter(s, filterX, filterY) {

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
                if (xAcc(d) == null) {
                    d.invalid = true;
                    return offScreen;
                }
                d.invalid = false;
                return xScale(xAcc(d));
            }).strength(0.05))
            .force("y", d3.forceY(function (d) {
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

        // d3.select('#' + parentId)
        // .select('.chart-beeswarm-nav')
        // .append('nav')
        // .classed('nav-main', true)
        // .append('ul')
        // .classed('chart-filter-buttons-y',true);

        d3.select('#' + parentId)
            .select('.chart-beeswarm-nav')
            .select('.chart-filter-buttons-x')
            .selectAll('li')
            .classed('main-nav--selected', function (d) {
                return d == xFilter;
            });

        d3.select('#' + parentId)
            .select('.chart-beeswarm-nav')
            .select('.chart-filter-buttons-y')
            .selectAll('li')
            .classed('main-nav--selected', function (d) {
                return d == yFilter;
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
        // var _range = [border, width - border];
        var range = [bounds.left, width - bounds.right];
        return scl(filter, range);
    }

    function yscl(filter) {
        // var _range = [height - border, border];
        var range = [height - bounds.bottom, bounds.top];
        return scl(filter, range);
    }

    function scl(filter, range) {

        //return scale identity if data is empty 
        if (!data || data.length == 0) {
            return d3.scaleIdentity();
        }
        //if filter is all then we have a special case
        else if (filter == 'all') {
            return d3.scaleLinear()
                .domain([0, 1])
                .range(range);
        }
        else {
            let sample = data[0];
            if (isNaN(sample[filter])) {
                var domain = d3.set(data, function (d) {
                    return d[filter];
                }).values();
                return d3.scalePoint()
                    .domain(domain)
                    .range(range);
            }
            else {
                return d3.scaleLinear()
                    .domain([d3.min(data, acc(filter)), d3.max(data, acc(filter))])
                    .range(range);
            }
        }

    }

}

function translate(x, y) {
    return 'translate(' + x + ',' + y + ')';
}

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

function range(start, end) {
    var foo = [];
    for (var i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}

function keysFromNode(node) {
    let allKeys = Object.keys(node);
    let keys = allKeys.filter(function (k) {
        return ['x', 'y', 'vx', 'vy', 'index', 'parent', 'variable', 'bounds', 'height', 'width', 'invalid'].indexOf(k) == -1;
    });
    return keys;
}

function createTypeCastedObject(d) {
    let keys = Object.keys(d);
    let obj = {};

    keys.forEach(function (key) {
        if (isNaN(d[key])) {
            obj[key] = d[key];
        }
        else obj[key] = +d[key];
    });
    return obj;
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
