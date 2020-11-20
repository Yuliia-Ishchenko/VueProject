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
          this.chartOptions.xAxis.categories = json.map(i => i.date.slice(0,10));
          this.chartOptions.series[0].data = json.map(i => i.temperatureC);
          this.chartOptions.series[1].data = json.map(i => i.temperatureF);
      })
      
    }
}
</script>        