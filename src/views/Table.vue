<template>
  <div id="table">
    <v-data-table
    :headers="headers"
    :items="temperatures"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Date',
            align: 'start',
            sortable: false,
            value: 'date',
          },
          { text: 'Temperature [C]', value: 'temperatureC' },
          { text: 'Temperature [F]', value: 'temperatureF' },
          { text: 'Summary', value: 'summary' },
        ],
        temperatures: [],
      }
    },
    async mounted() {
    await  fetch('https://localhost:44343/weatherforecast')
      .then(response => response.json())
      .then(json => {
          this.temperatures = json
      })
    }
  }
</script>