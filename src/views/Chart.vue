<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
export default{
  data() {
    return {
      chartOptions: {
        xAxis: {
                categories: []
            },
        colors: ['#1aadce','#492970'],
        series: [
            {
                name: "Temperature [C]",
                data: [] 
            },
            {
                name: "Temperature [F]",
                data: [] 
            }
        ],
        title: {
            text: "Weather"
        }
      }
    }
  },
  mounted() {
    fetch('https://localhost:44343/weatherforecast')
      .then(response => response.json())
      .then(json => {
          for (let i = 0; i < json.length; i++) {
              this.chartOptions.xAxis.categories.push(json[i].date.slice(0,10));
              this.chartOptions.series[0].data.push(json[i].temperatureC);
              this.chartOptions.series[1].data.push(json[i].temperatureF);
          }

      })
    }
}
</script>        