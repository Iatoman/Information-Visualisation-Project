// Keeps track of which visualization is currently displayed
var currentVisualization = 1;

//Colours
var lightBlue = "#00BFFF";
var grey = "#808080";

function uncertaintyPieChart() {
    d3.csv("Data/OriginalData/originalData.csv").then(function (data) {
        // Filter out null values and count non-null values

        if (data) {
            var nonNullData = data.filter(function (d) {
                return d.shake_intensity != null && d.shake_intensity != "";
            });
        }
        var nonNullCount = nonNullData.length;

        // Count null values
        var nullCount = data.length - nonNullCount;

        // Calculate percentages
        var nonNullPercent = (nonNullCount / data.length) * 100;
        var nullPercent = (nullCount / data.length) * 100;

        // Create data for pie chart
        var pieData = [
            { label: "Non-Null", value: nonNullPercent },
            { label: "Null", value: nullPercent }
        ];

        // Create pie chart
        var pie = d3.pie()
            .value(function (d) { return d.value; });

        // Bind data to pie chart
        var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(200);

        // Append pie chart to SVG element
        var svg = d3.select("#unc1");
        var g = svg.append("g")
            .attr("transform", "translate(250,200)");

        g.selectAll("path")
            .data(pie(pieData))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", function (d) { return (d.data.label === "Non-Null") ? lightBlue : grey; });

        //Adds percentages to pie chart
        g.selectAll("text")
            .data(pie(pieData))
            .enter()
            .append("text")
            .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
            .attr("dy", "0.35em")
            .attr("text-anchor", "middle")
            .text(function (d) { return d.data.value.toFixed(2) + "%"; });

        // Create legend
        var legend = svg.append("g")
            .attr("transform", "translate(450, 100)");

        // Append rectangles and text to legend
        legend.selectAll("rect")
            .data(pieData)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr("y", function (d, i) { return i * 20; })
            .attr("width", 10)
            .attr("height", 10)
            .attr("fill", function (d) { return (d.label === "Non-Null") ? lightBlue : grey; });

        legend.selectAll("text")
            .data(pieData)
            .enter()
            .append("text")
            .attr("x", 20)
            .attr("y", function (d, i) { return i * 20 + 10; })
            .text(function (d) { return d.label; });

    });
}

function uncertaintyGroupBarChart() {

    // Set the dimensions of the SVG element
    var width = 800;
    var height = 600;

    // Create the SVG element
    var svg = d3.select("#uncGBC")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(10,0)");


    // Load the data from the CSV file
    d3.csv("Data/OriginalData/originalData.csv").then(function (data) {

        // Define the data grouping function
        var groupData = d3.group(data, d => d.location);

        // Compute the count of null and non-null values for each location
        var countData = Array.from(groupData, ([key, values]) => {
            var nullCount = d3.sum(values, d => d.shake_intensity === "" ? 1 : 0);
            var nonNullCount = d3.sum(values, d => d.shake_intensity !== "" ? 1 : 0);
            return { location: key, nullCount: nullCount, nonNullCount: nonNullCount };
        });

        // Define the scales and axes
        var xScale = d3.scaleBand()
            .domain(countData.map(d => d.location))
            .range([50, width])
            .padding(0.2);

        var yScale = d3.scaleLinear()
            .domain([0, d3.max(countData, d => d.nullCount + d.nonNullCount)])
            .range([height - 50, 50]);

        var xAxis = d3.axisBottom()
            .scale(xScale);


        var yAxis = d3.axisLeft()
            .scale(yScale);

        // Draw the bars for null values
        svg.selectAll(".nullBar")
            .data(countData)
            .enter()
            .append("rect")
            .attr("class", "nullBar")
            .attr("x", d => xScale(d.location))
            .attr("y", d => yScale(d.nullCount))
            .attr("width", xScale.bandwidth() / 2)
            .attr("height", d => yScale(0) - yScale(d.nullCount))
            .attr("fill", grey);

        // Draw the bars for non-null values
        svg.selectAll(".nonNullBar")
            .data(countData)
            .enter()
            .append("rect")
            .attr("class", "nonNullBar")
            .attr("x", d => xScale(d.location) + xScale.bandwidth() / 2)
            .attr("y", d => yScale(d.nonNullCount))
            .attr("width", xScale.bandwidth() / 2)
            .attr("height", d => yScale(0) - yScale(d.nonNullCount))
            .attr("fill", lightBlue);

        // Draw the x and y axes
        svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", "translate(0," + (height - 50) + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", "translate(50,0)")
            .call(yAxis);


        // Add x axis label
        svg.append("text")
            .attr("transform", "translate(" + (width / 2) + "," + (height) + ")")
            .style("text-anchor", "middle")
            .style("font-weight", "bold")
            .text("Location");


        // Add y axis label
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - 15)
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle",)
            .style("font-weight", "bold")
            .text("Count");
    });

}


// Define a function to switch between the visualizations (not using a single svg to display anymore)

/*

function nullValVisualisationSwitches() {
    var svg = d3.select("#un1");
    // Clear the SVG element
    svg.selectAll("*").remove();
    // Toggle the current visualization variable
    if (currentVisualization === 1) {
        currentVisualization = 2;
    } else {
        currentVisualization = 1;
    }
    // Call the appropriate visualization function based on the current variable
    if (currentVisualization === 1) {
        uncertaintyPieChart();
    } else {
        uncertaintyGroupBarChart();
    }
}
*/