
const dayList = ['2020/4/6','2020/4/7','2020/4/8','2020/4/9','2020/4/10']
const features = ['sewer_and_water', 'power', 'roads_and_bridges', 'medical', 'buildings', 'shake_intensity']
const featurelist = ['\'sewer and water\'', '\'power\'', '\'roads and bridges\'', '\'medical\'', '\'buildings\'', '\'shake intensity\'']

var day = '2020/4/6';
var optionIndex = 6;


// Function to draw the choropleth, take a string which represents the feature as input
function drawMap(feature, time) {

    var area1 = [
        { xpoint: 80, ypoint: 380 },
        { xpoint: 180, ypoint: 460 },
        { xpoint: 240, ypoint: 420 },
        { xpoint: 240, ypoint: 380 },
        { xpoint: 280, ypoint: 380 },
        { xpoint: 280, ypoint: 180 },
        { xpoint: 220, ypoint: 180 },
        { xpoint: 120, ypoint: 240 },
        { xpoint: 100, ypoint: 280 },
        { xpoint: 80, ypoint: 380 }
    ];
    var area2 = [
        { xpoint: 280, ypoint: 180 },
        { xpoint: 490, ypoint: 190 },
        { xpoint: 490, ypoint: 320 },
        { xpoint: 360, ypoint: 320 },
        { xpoint: 340, ypoint: 380 },
        { xpoint: 280, ypoint: 380 },
    ];
    var area3 = [
        { xpoint: 490, ypoint: 190 },
        { xpoint: 490, ypoint: 150 },
        { xpoint: 640, ypoint: 80 },
        { xpoint: 640, ypoint: 160 },
        { xpoint: 700, ypoint: 140 },
        { xpoint: 740, ypoint: 180 },
        { xpoint: 780, ypoint: 160 },
        { xpoint: 760, ypoint: 120 },
        { xpoint: 770, ypoint: 80 },
        { xpoint: 830, ypoint: 70 },
        { xpoint: 830, ypoint: 110 },
        { xpoint: 860, ypoint: 120 },
        { xpoint: 830, ypoint: 130 },
        { xpoint: 830, ypoint: 140 },
        { xpoint: 850, ypoint: 130 },
        { xpoint: 810, ypoint: 250 },
        { xpoint: 810, ypoint: 270 },
        { xpoint: 760, ypoint: 340 },
        { xpoint: 680, ypoint: 350 },
        { xpoint: 550, ypoint: 330 },
        { xpoint: 490, ypoint: 320 }
    ];
    var area4 = [
        { xpoint: 850, ypoint: 130 },
        { xpoint: 810, ypoint: 250 },
        { xpoint: 810, ypoint: 270 },
        { xpoint: 760, ypoint: 340 },
        { xpoint: 700, ypoint: 400 },
        { xpoint: 700, ypoint: 460 },
        { xpoint: 1100, ypoint: 460 },
        { xpoint: 1140, ypoint: 440 },
        { xpoint: 970, ypoint: 260 },
        { xpoint: 920, ypoint: 270 },
        { xpoint: 920, ypoint: 230 },
        { xpoint: 850, ypoint: 130 },
    ];
    var area5 = [
        { xpoint: 280, ypoint: 380 },
        { xpoint: 320, ypoint: 380 },
        { xpoint: 320, ypoint: 380 },
        { xpoint: 320, ypoint: 460 },
        { xpoint: 340, ypoint: 460 },
        { xpoint: 340, ypoint: 560 },
        { xpoint: 450, ypoint: 560 },
        { xpoint: 560, ypoint: 700 },
        { xpoint: 620, ypoint: 720 },
        { xpoint: 640, ypoint: 740 },
        { xpoint: 380, ypoint: 685 },
        { xpoint: 340, ypoint: 680 },
        { xpoint: 280, ypoint: 560 },
        { xpoint: 270, ypoint: 520 },
        { xpoint: 280, ypoint: 440 },
        { xpoint: 260, ypoint: 440 },
        { xpoint: 240, ypoint: 420 },
        { xpoint: 240, ypoint: 380 },
        { xpoint: 280, ypoint: 380 },
    ];
    var area6 = [
        { xpoint: 320, ypoint: 380 },
        { xpoint: 320, ypoint: 460 },
        { xpoint: 340, ypoint: 460 },
        { xpoint: 340, ypoint: 560 },
        { xpoint: 450, ypoint: 560 },
        { xpoint: 450, ypoint: 320 },
        { xpoint: 360, ypoint: 320 },
        { xpoint: 340, ypoint: 380 },
        { xpoint: 320, ypoint: 380 }
    ];
    var area7 = [
        { xpoint: 1310, ypoint: 530 },
        { xpoint: 1350, ypoint: 550 },
        { xpoint: 1390, ypoint: 510 },
        { xpoint: 1390, ypoint: 910 },
        { xpoint: 1310, ypoint: 910 },
        { xpoint: 1310, ypoint: 530 },
    ];
    var area8 = [
        { xpoint: 1310, ypoint: 910 },
        { xpoint: 1390, ypoint: 910 },
        { xpoint: 890, ypoint: 1040 },
        { xpoint: 890, ypoint: 980 },
        { xpoint: 950, ypoint: 970 },
        { xpoint: 1140, ypoint: 938 },
        { xpoint: 1250, ypoint: 920 },
        { xpoint: 1250, ypoint: 900 },
        { xpoint: 1310, ypoint: 900 },
        { xpoint: 1310, ypoint: 910 },
    ];
    var area9 = [
        { xpoint: 830, ypoint: 820 },
        { xpoint: 700, ypoint: 820 },
        { xpoint: 700, ypoint: 780 },
        { xpoint: 640, ypoint: 780 },
        { xpoint: 640, ypoint: 840 },
        { xpoint: 630, ypoint: 850 },
        { xpoint: 650, ypoint: 870 },
        { xpoint: 660, ypoint: 870 },
        { xpoint: 720, ypoint: 1000 },
        { xpoint: 890, ypoint: 1040 },
        { xpoint: 890, ypoint: 980 },
        { xpoint: 890, ypoint: 920 },
        { xpoint: 960, ypoint: 880 },
        { xpoint: 960, ypoint: 820 },
        { xpoint: 830, ypoint: 820 },
    ];
    var area10 = [
        { xpoint: 1140, ypoint: 760 },
        { xpoint: 1140, ypoint: 938 },
        { xpoint: 950, ypoint: 970 },
        { xpoint: 890, ypoint: 980 },
        { xpoint: 890, ypoint: 920 },
        { xpoint: 960, ypoint: 880 },
        { xpoint: 960, ypoint: 820 },
        { xpoint: 960, ypoint: 760 },
        { xpoint: 1140, ypoint: 760 },
    ];
    var area11 = [
        { xpoint: 1140, ypoint: 938 },
        { xpoint: 1250, ypoint: 920 },
        { xpoint: 1250, ypoint: 900 },
        { xpoint: 1310, ypoint: 900 },
        { xpoint: 1310, ypoint: 760 },
        { xpoint: 1140, ypoint: 760 },
        { xpoint: 1140, ypoint: 938 },
    ];
    var area12 = [
        { xpoint: 1100, ypoint: 460 },
        { xpoint: 1140, ypoint: 440 },
        { xpoint: 1200, ypoint: 565 },
        { xpoint: 1220, ypoint: 555 },
        { xpoint: 1240, ypoint: 565 },
        { xpoint: 1290, ypoint: 550 },
        { xpoint: 1290, ypoint: 530 },
        { xpoint: 1310, ypoint: 560 },
        { xpoint: 1310, ypoint: 760 },
        { xpoint: 1140, ypoint: 760 },
        { xpoint: 1140, ypoint: 505 },
        { xpoint: 1100, ypoint: 460 },
    ];
    var area13 = [
        { xpoint: 900, ypoint: 460 },
        { xpoint: 900, ypoint: 535 },
        { xpoint: 880, ypoint: 610 },
        { xpoint: 880, ypoint: 685 },
        { xpoint: 880, ypoint: 790 },
        { xpoint: 830, ypoint: 790 },
        { xpoint: 830, ypoint: 820 },
        { xpoint: 960, ypoint: 820 },
        { xpoint: 960, ypoint: 760 },
        { xpoint: 1140, ypoint: 760 },
        { xpoint: 1140, ypoint: 505 },
        { xpoint: 1100, ypoint: 460 },
        { xpoint: 900, ypoint: 460 },
    ];
    var area14 = [
        { xpoint: 760, ypoint: 340 },
        { xpoint: 700, ypoint: 400 },
        { xpoint: 700, ypoint: 460 },
        { xpoint: 560, ypoint: 460 },
        { xpoint: 560, ypoint: 330 },
        { xpoint: 680, ypoint: 350 },
        { xpoint: 760, ypoint: 340 },
    ];
    var area15 = [
        { xpoint: 490, ypoint: 320 },
        { xpoint: 560, ypoint: 330 },
        { xpoint: 560, ypoint: 460 },
        { xpoint: 450, ypoint: 460 },
        { xpoint: 450, ypoint: 320 },
        { xpoint: 490, ypoint: 320 }
    ];
    var area16 = [
        { xpoint: 450, ypoint: 460 },
        { xpoint: 560, ypoint: 460 },
        { xpoint: 560, ypoint: 700 },
        { xpoint: 450, ypoint: 560 },
        { xpoint: 450, ypoint: 460 },
    ];
    var area17 = [
        { xpoint: 880, ypoint: 685 },
        { xpoint: 880, ypoint: 790 },
        { xpoint: 830, ypoint: 790 },
        { xpoint: 830, ypoint: 820 },
        { xpoint: 700, ypoint: 820 },
        { xpoint: 700, ypoint: 780 },
        { xpoint: 640, ypoint: 780 },
        { xpoint: 640, ypoint: 740 },
        { xpoint: 620, ypoint: 720 },
        { xpoint: 700, ypoint: 720 },
        { xpoint: 830, ypoint: 700 },
        { xpoint: 840, ypoint: 685 },
        { xpoint: 880, ypoint: 685 },
    ];
    var area18 = [
        { xpoint: 700, ypoint: 460 },
        { xpoint: 900, ypoint: 460 },
        { xpoint: 900, ypoint: 535 },
        { xpoint: 880, ypoint: 610 },
        { xpoint: 880, ypoint: 685 },
        { xpoint: 840, ypoint: 685 },
        { xpoint: 830, ypoint: 700 },
        { xpoint: 700, ypoint: 720 },
        { xpoint: 700, ypoint: 460 },
    ];
    var area19 = [
        { xpoint: 560, ypoint: 700 },
        { xpoint: 620, ypoint: 720 },
        { xpoint: 700, ypoint: 720 },
        { xpoint: 700, ypoint: 460 },
        { xpoint: 560, ypoint: 460 },
        { xpoint: 560, ypoint: 700 },
    ];


    nodedata = {
        "nodes": [
            { "id": 1, "x": 180, "y": 310, "points": area1, "label": "Palace Hills" },
            { "id": 2, "x": 380, "y": 280, "points": area2, "label": "Northwest" },
            { "id": 3, "x": 630, "y": 260, "points": area3, "label": "Old Town" },
            { "id": 4, "x": 870, "y": 360, "points": area4, "label": "Safe Town" },
            { "id": 5, "x": 380, "y": 630, "points": area5, "label": "Southwest" },
            { "id": 6, "x": 380, "y": 450, "points": area6, "label": "Down Town" },
            { "id": 7, "x": 1340, "y": 730, "points": area7, "label": "Wilson Forest" },
            { "id": 8, "x": 1080, "y": 980, "points": area8, "label": "Scenic Vista" },
            { "id": 9, "x": 750, "y": 930, "points": area9, "label": "Broadview" },
            { "id": 10, "x": 1030, "y": 880, "points": area10, "label": "Chapparal" },
            { "id": 11, "x": 1210, "y": 860, "points": area11, "label": "Terrapin Springs" },
            { "id": 12, "x": 1210, "y": 660, "points": area12, "label": "Pepper Mill" },
            { "id": 13, "x": 1000, "y": 620, "points": area13, "label": "Cheddarford" },
            { "id": 14, "x": 610, "y": 400, "points": area14, "label": "Easton" },
            { "id": 15, "x": 490, "y": 400, "points": area15, "label": "Weston" },
            { "id": 16, "x": 490, "y": 540, "points": area16, "label": "Soouthton" },
            { "id": 17, "x": 750, "y": 780, "points": area17, "label": "Oak Willow" },
            { "id": 18, "x": 780, "y": 600, "points": area18, "label": "East Parton" },
            { "id": 19, "x": 610, "y": 600, "points": area19, "label": "West Parton" }
        ]
    };

    //d3.json("data.json", function (json) {
    /* Define the data for the circles */
    var elem = d3.select("#gfg").selectAll("g")
        .data(nodedata.nodes)

    /*Create and place the "blocks" containing the circle and the text */
    var elemEnter = elem.enter()
        .append("g")
        .attr("transform", function (d) { return "translate(" + d.x })

    // Using area() function to generate area 
    var Gen = d3.area()
        .x((p) => p.xpoint)
        .y0((p) => 0)
        .y1((p) => p.ypoint);

    var colorScale = ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4','#313695'];
    //["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"]
    function fillColor(areaNum, data) {
        // features = ['sewer_and_water', 'power', 'roads_and_bridges', 'medical', 'buildings', 'shake_intensity']
        if (feature == 'shake_intensity') {
            for (var i = 0; i < data.length; i++) {
                if (data[i].location == areaNum) {
                    return colorScale[parseInt(data[i].shake_intensity)];
                }
            }
        } else if (feature == 'sewer_and_water') {
            for (var i = 0; i < data.length; i++) {
                if (data[i].location == areaNum) {
                    return colorScale[parseInt(data[i].sewer_and_water)];
                }
            }
        } else if (feature == 'power') {
            for (var i = 0; i < data.length; i++) {
                if (data[i].location == areaNum) {
                    return colorScale[parseInt(data[i].power)];
                }
            }
        } else if (feature == 'roads_and_bridges') {
            for (var i = 0; i < data.length; i++) {
                if (data[i].location == areaNum) {
                    return colorScale[parseInt(data[i].roads_and_bridges)];
                }
            }
        } else if (feature == 'medical') {
            for (var i = 0; i < data.length; i++) {
                if (data[i].location == areaNum) {
                    return colorScale[parseInt(data[i].medical)];
                }
            }
        } else if (feature == 'buildings') {
            for (var i = 0; i < data.length; i++) {
                if (data[i].location == areaNum) {
                    return colorScale[parseInt(data[i].buildings)];
                }
            }
        }
    };

    d3.csv("Data/CleanedData/result.csv").then(function (data) {
        let csvdata = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].time == time) {
                //console.log(csvdata[i])
                csvdata.push(data[i])
            }
        }
        // console.log(csvdata)
        // console.log(fillColor(3, csvdata));
        // Draw the map one by one
        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area8))
            .attr("fill", fillColor(8, csvdata))
            .attr("stroke", "#343a40");


        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area10))
            .attr("fill", fillColor(10, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area11))
            .attr("fill", fillColor(11, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area7))
            .attr("fill", fillColor(7, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area9))
            .attr("fill", fillColor(9, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area13))
            .attr("fill", fillColor(13, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area12))
            .attr("fill", fillColor(12, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area17))
            .attr("fill", fillColor(17, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area18))
            .attr("fill", fillColor(18, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area19))
            .attr("fill", fillColor(19, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area16))
            .attr("fill", fillColor(16, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area15))
            .attr("fill", fillColor(15, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area14))
            .attr("fill", fillColor(14, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area4))
            .attr("fill", fillColor(4, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area5))
            .attr("fill", fillColor(5, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area6))
            .attr("fill", fillColor(6, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area3))
            .attr("fill", fillColor(3, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area2))
            .attr("fill", fillColor(2, csvdata))
            .attr("stroke", "#343a40");

        d3.select("#gfg")
            .append("path")
            .attr("d", Gen(area1))
            .attr("fill", fillColor(1, csvdata))
            .attr("stroke", "#343a40");

        for (let index = 0; index < 19; index++) {
            const area = nodedata.nodes[index];
            d3.select("#gfg").append("text")
                .attr("y", area.y)
                .attr("x", area.x)
                .attr("fill", "black")
                .attr("font-size", 30)
                .text(function (d) { return area.id })
        }
    }

    );


    /* Create the text for each block */
    for (let index = 0; index < nodedata.nodes.length; index++) {
        const area = nodedata.nodes[index];

        d3.select('#gfg').append("text")
            .attr("y", area.y)
            .attr("x", area.x)
            .attr("fill", "black")
            .attr("font-size", 30)
            .text(function (d) { return area.id })

    }

}

// Function of the event of selection choose
function selectcity() {
   
    this.optionIndex = document.getElementById("sid").selectedIndex;
    this.day = dayList[document.getElementById("slider").value-1];
    if(optionIndex == undefined | optionIndex == null | optionIndex == 0){
        this.optionIndex = 6
    }
    document.getElementById("value").innerText = featurelist[optionIndex - 1]
    if (optionIndex != 0) {
        drawMap(features[optionIndex - 1], day)
        //console.log(features[optionIndex - 1])
    }
}



// Function of slider control
function getSlider(){
    if(optionIndex == undefined | optionIndex == null | optionIndex == 0){
        this.optionIndex = 6
    }
    // console.log(this.optionIndex)
    var newDay = document.getElementById("slider");
    this.day = dayList[newDay.value-1]
    document.getElementById("date").innerText = dayList[newDay.value-1]
    // console.log(dayList[newDay.value-1])
    drawMap(features[optionIndex - 1], day)
}