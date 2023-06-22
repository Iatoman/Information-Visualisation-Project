
var attrs = ['sewer_and_water', 'power', 'roads_and_bridges', 'medical', 'buildings', 'shake_intensity']
//sewer_and_water,power,roads_and_bridges,medical,buildings,shake_intensity,location
function visData(area){
   d3.select('#line').selectAll("*").remove();
    d3.csv("Data/CleanedData/result.csv").then(function (data) {
        let water = []
        let power = []
        let roads = []
        let medical = []
        let buildings = []
        let shake_intensity = []

        for (var i = 0; i < data.length; i++) {
            if(data[i]['location'] == area){
                water.push({
                    'time': data[i]['time'],
                    'value': data[i][attrs[0]]
                })
                power.push({
                    'time': data[i]['time'],
                    'value': data[i][attrs[1]]
                })
                roads.push({
                    'time': data[i]['time'],
                    'value': data[i][attrs[2]]
                })
                medical.push({
                    'time': data[i]['time'],
                    'value': data[i][attrs[3]]
                })
                buildings.push({
                    'time': data[i]['time'],
                    'value': data[i][attrs[4]]
                })
                shake_intensity.push({
                    'time': data[i]['time'],
                    'value': data[i][attrs[5]]
                })
                
            }
        }
        console.log(shake_intensity[0])
        drawLineChart(water, power, roads, medical, buildings, shake_intensity)
    })
    }
    

function drawLineChart(water, power, roads, medical, buildings, shake_intensity){
    const color = ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#abd9e9']
    
    const x_scale=d3.scaleBand().domain(['2020/4/6','2020/4/7','2020/4/8','2020/4/9','2020/4/10']).range([0,800])
    
    const y_scale=d3.scaleLinear().domain([0,10]).range([500,0])
    const xAxis=d3.axisBottom(x_scale)
    const yAxis=d3.axisLeft(y_scale)
    var g1 = d3.select('#line')
     
    g1.append('g')
    .call(xAxis)
    .attr('transform','translate(' + 50 + ',' + 600 + ')')
    .attr('fill','black')
     
    g1.append('g')
    .call(yAxis)
    .attr('transform','translate(' + 50 + ',' + 100 + ')')
    .attr('fill','black')

    const line=d3.line().x(d=>x_scale(d.time)+150).y(d=>y_scale(d.value)+100)
    g1.append('path')
    .datum(water)
    .attr('d',line)
    .attr('fill','none')
    .attr('stroke',color[5])

    g1.append('path')
    .datum(power)
    .attr('d',line)
    .attr('fill','none')
    .attr('stroke',color[4])

    g1.append('path')
    .datum(roads)
    .attr('d',line)
    .attr('fill','none')
    .attr('stroke',color[3])

    g1.append('path')
    .datum(medical)
    .attr('d',line)
    .attr('fill','none')
    .attr('stroke',color[2])

    g1.append('path')
    .datum(shake_intensity)
    .attr('d',line)
    .attr('fill','none')
    .attr('stroke',color[1])

    g1.append('path')
    .datum(buildings)
    .attr('d',line)
    .attr('fill','none')
    .attr('stroke',color[0])
    

            g1.append('text').attr('x',40).attr('y',80).text('Value')
            g1.append('text').attr('x',50+850).attr('y',600).text('Time')
            g1.append('line').attr('x1',800-15).attr('y1',80).attr('x2',800).attr('y2',80).attr('stroke',color[5]).attr('fill','none')
            g1.append('line').attr('x1',800-15).attr('y1',95).attr('x2',800).attr('y2',95).attr('stroke',color[4]).attr('fill','none')
            g1.append('line').attr('x1',800-15).attr('y1',110).attr('x2',800).attr('y2',110).attr('stroke',color[3]).attr('fill','none')
            g1.append('line').attr('x1',800-15).attr('y1',125).attr('x2',800).attr('y2',125).attr('stroke',color[2]).attr('fill','none')
            g1.append('line').attr('x1',800-15).attr('y1',140).attr('x2',800).attr('y2',140).attr('stroke',color[1]).attr('fill','none')
            g1.append('line').attr('x1',800-15).attr('y1',155).attr('x2',800).attr('y2',155).attr('stroke',color[0]).attr('fill','none')


            g1.append('text').attr('x',800).attr('y',80).text('sewer and water')
            g1.append('text').attr('x',800).attr('y',95).text('power')
            g1.append('text').attr('x',800).attr('y',110).text('roads and bridges')
            g1.append('text').attr('x',800).attr('y',125).text('medical')
            g1.append('text').attr('x',800).attr('y',140).text('buildings')
            g1.append('text').attr('x',800).attr('y',155).text('shake_intensity')

}



// Function of slider control
function getSliderLine(){
    // console.log(this.optionIndex)
    
    var newArea = document.getElementById("slider2")
    document.getElementById("area").innerText = newArea.value
    //console.log(newArea)
    //console.log(newArea.value)

    visData(newArea.value)
}