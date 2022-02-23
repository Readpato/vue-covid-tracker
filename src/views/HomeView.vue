<template>
  <main v-if="!loading">
    <DataTitle :text="title" :dataDate="dataDate" />
    <DataBoxes :stats="stats" />
  </main>
  <main class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">Fetching Data</div>
    <img
      :src="loadingImage"
      class="w-24 m-auto"
      alt="Gif of a hourglass that turns."
    />
  </main>
</template>

<script>
import DataTitle from "@/components/DataTitle.vue";
import DataBoxes from "@/components/DataBoxes.vue";

export default {
  name: "HomeView",
  components: { DataTitle, DataBoxes },
  data() {
    return {
      loading: true,
      title: "Global",
      dataDate: "",
      stats: {},
      countries: [],
      loadingImage: require("../assets/hourglass.gif"),
    };
  },
  methods: {
    async fetchCovidData() {
      const response = await fetch("https://api.covid19api.com/summary");
      const data = await response.json();
      return data;
    },
  },
  async created() {
    const covidData = await this.fetchCovidData();
    console.log(covidData);
    this.dataDate = covidData.Date;
    this.stats = covidData.Global;
    this.countries = covidData.Countries;
    this.loading = false;
  },
};
</script>
