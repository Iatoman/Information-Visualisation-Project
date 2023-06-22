function boxplot(){
// Set the dimensions and margins of the graph
var margin = {top: 60, right: 30, bottom: 60, left: 60},
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// Append the svg object to the body of the page
var svg = d3.select("#boxplotSVG")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Load the data from a CSV file
d3.csv("Data/CleanedData/result.csv"). then(function(data) {
console.log(data)
   // Format the data
  data = data.map(function(d) {
    return {
        shake_intensity: +d.shake_intensity,
        location: +d.location
      };
    });

// Compute the extent of the data
var shakeExtent = d3.extent(data, function(d) { return d.shake_intensity; });
var locExtent = d3.extent(data, function(d) { return d.location; });

// Set the ranges
var x = d3.scaleBand().range([0, width]).padding(0.4);
var y = d3.scaleLinear().range([height, 0]);


// Set the domains
x.domain(data.map(function(d) { return d.location; }));
y.domain([0, shakeExtent[1]]);


// Draw the x axis
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Draw the y axis
svg.append("g")
  .call(d3.axisLeft(y));

// Group the data by location
var nestedData = Array.from(d3.group(data, d => d.location), ([key, values]) => ({key, values}));

  // Draw the box plots
  var boxWidth = x.bandwidth() * 0.8;
  svg.selectAll(".box")
      .data(nestedData)
      .enter()
      .append("g")
          .attr("class", "box")
          .attr("transform", function(d) { return "translate(" + (x(d.key) - boxWidth/2) + ",0)"; })
      .each(function(d) {
       
          // Compute quartiles, median, interquantile range min and max --> these info are then used to draw the box.
          var sortedShakeIntensity = d.values.map(function(g) { return g.shake_intensity; }).sort(d3.ascending);
          var q1 = d3.quantile(sortedShakeIntensity, .25);
          var median = d3.median(sortedShakeIntensity);
          var q3 = d3.quantile(sortedShakeIntensity, .75);
          var interQuantileRange = q3 - q1;
          var min = q1 - 1.5 * interQuantileRange;
          var max = q3 + 1.5 * interQuantileRange;
      
          // Draw the boxes
          svg.append("rect")
              .attr("x", x(d.key) - boxWidth/2+10)
              .attr("y", y(q3))
              .attr("height", y(q1) - y(q3))
              .attr("width", boxWidth)
              .attr("stroke", "white")
              .attr("fill", "#69b3a2")
              .attr("opacity", 0.7);
             

          // Draw the median line
          svg.append("line")
              .attr("x1", x(d.key) - boxWidth/2+10)
              .attr("y1", y(median))
              .attr("x2", x(d.key) + boxWidth/2+10)
              .attr("y2", y(median))
              .attr("stroke", "white");
        


          // Draw the whiskers
          svg.append("line")
              .attr("x1", x(d.key)+10)
              .attr("y1", y(min))
              .attr("x2", x(d.key)+10)
              .attr("y2", y(max))
              .attr("stroke", "white");
             


          // Draw the whisker caps
          svg.append("line")
              .attr("x1", x(d.key) - boxWidth/4+10)
              .attr("y1", y(min))
              .attr("x2", x(d.key) + boxWidth/4+10)
              .attr("y2", y(min))
              .attr("stroke", "white");
              


          svg.append("line")
              .attr("x1", x(d.key) - boxWidth/4+10)
              .attr("y1", y(max))
              .attr("x2", x(d.key) + boxWidth/4+10)
              .attr("y2", y(max))
              .attr("stroke", "white");
              


          // Draw the outliers
          var outliers = d.values.filter(function(g) { return g.shake_intensity < min || g.shake_intensity > max; });

          svg.selectAll("circle")
              .data(outliers)
              .enter()
              .append("circle")
                  .attr("cx", x(d.key)+10)
                  .attr("cy", function(g) { return y(g.shake_intensity); })
                  .attr("r", 3)
                  .attr("fill", "red");
                  
      });
  });

    // Add x-axis label
    svg.append("text")
      .attr("transform", "translate(" + (width / 2) + "," + (height + margin.bottom - 20) + ")")
      .style("text-anchor", "middle")
      .style("fill", "white")
      .text("Location");
      
 
  // Add y-axis label
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("fill", "white")
      .text("Shake Intensity");


  // Add graph title
  svg.append("text")
      .attr("x", (width / 2))
      .attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("fill", "white")
      .style("font-weight", "bold");
  
}