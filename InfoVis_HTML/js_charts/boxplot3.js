var dom = document.getElementById("boxplot3");
var myChart = echarts.init(dom);
var app = {};
option = null;
const daytext = ['2020-04-06', '2020-04-07', '2020-04-08', '2020-04-09', '2020-04-10', '2020-04-11']

//var data = echarts.dataTool.prepareBoxplotData([[238,243,250,250,250,253,252,255,255,235,203],[347,370,396,417,420,431,449,439,456,444,427],[873,908,921,902,891,867,852,818,788,753,730],[568,631,686,719,754,768,777,777,762,746,724],[563,616,643,668,668,676,691,701,712,702,685]]);

function parseData(area){
  ///Users/icey/Desktop/EndVersion/team2_project/InfoVisProj_HTML/Data/OriginalData/originalData.csv
    d3.csv("Data/OriginalData/originalData.csv").then(function (data) {
        let day1 = []
        let day2 = []
        let day3 = []
        let day4 = []
        let day5 = []
        for (var i = 0; i < data.length; i++) {
            if(data[i].location == area){
            if(data[i].time.indexOf(daytext[0]) != -1){
                //console.log(data[i].shake_intensity)
                let tmp = data[i].shake_intensity
                if(tmp == ""){
                    tmp = -1
                }
                day1.push(tmp)
            }
            else if(data[i].time.indexOf(daytext[1]) != -1){
                //console.log(data[i].shake_intensity)
                let tmp = data[i].shake_intensity
                if(tmp == ""){
                    tmp = -1
                }
                day2.push(tmp)
            }
            else if(data[i].time.indexOf(daytext[2]) != -1){
                //console.log(data[i].shake_intensity)
                let tmp = data[i].shake_intensity
                if(tmp == ""){
                    tmp = -1
                }
                day3.push(tmp)
            }
            else if(data[i].time.indexOf(daytext[3]) != -1){
                //console.log(data[i].shake_intensity)
                let tmp = data[i].shake_intensity
                if(tmp == ""){
                    tmp = -1
                }
                day4.push(tmp)
            }
            else if(data[i].time.indexOf(daytext[4]) != -1){
                //console.log(data[i].shake_intensity)
                let tmp = data[i].shake_intensity
                if(tmp == ""){
                    tmp = -1
                }
                day5.push(tmp)
            }}
        }
    
       // console.log(day1)
       // console.log(day2)
       let uncertainty = []
       uncertainty.push(day1)
       uncertainty.push(day2)
       uncertainty.push(day3)
       uncertainty.push(day4)
       uncertainty.push(day5)
       // console.log(uncertainty)

       option = {
        title: [
          {
            text: 'The uncertainty changed overtime',
            left: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 30,
                lineHeight: 20,
                fontWeight: 'bold',
                color: 'white'
            },
          },
          {
            text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
            borderColor: 'white',
            borderWidth: 1,
            textStyle: {
              fontWeight: 'normal',
              fontSize: 20,
              lineHeight: 20,
              color:'white'
          
            },
            left: '10%',
            top: '90%'
          }
        ],
        dataset: [
          {
            // prettier-ignore
            source: uncertainty
          },
          {
            transform: {
              type: 'boxplot',
              config: { itemNameFormatter: 'Day {value}' }
            }
          },
          {
            fromDatasetIndex: 1,
            fromTransformResult: 1
          }
        ],
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '18%',
          right: '10%',
          bottom: '13%',
          top: '8%', // Add some padding to the top
          
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          nameGap: 30,
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'Arial',
              color: 'white',
              fontSize: 20
            }
          }
        },
        
        yAxis: {
          type: 'value',
          name: 'Categorical value of how bad the damage/shaking was',
          nameTextStyle: {
            fontSize: 20,
            color: 'white'
          },
          splitArea: {
            show: true
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'Arial',
              fontWeight: 'normal',
              fontSize: 20,
              lineHeight: 20,
              color: 'white'
            }
          }
        },

        series: [
          {
            name: 'boxplot',
            type: 'boxplot',
            datasetIndex: 1
          },
          {
            name: 'outlier',
            type: 'scatter',
            datasetIndex: 2
          }
        ]
      };
      if (option && typeof option === "object") {
        myChart.setOption(option, true);//使用刚指定的配置项和数据显示
     
       }

    })
}

// Function of slider control
function getSliderBox(){
    // console.log(this.optionIndex)
    
    var newArea = document.getElementById("slider3")
    document.getElementById("area2").innerText = newArea.value
    //console.log(newArea)
    //console.log(newArea.value)

    parseData(newArea.value)
}


function drawBoxplot3(){
    parseData(1)
}