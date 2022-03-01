<template>
  <main v-if="!loading" class="flex flex-col justify-center">
    <DataTitle :text="title" :dataDate="dataDate" />
    <DataBoxes :stats="stats" />
    <CountrySelect @get-country="getCountryData" :countries="countries" />
    <button
      v-if="!showButton"
      @click="clearCountryData"
      class="bg-green-700 text-white rounded p-3 mt-10 mx-auto focus:outline-none hover:bg-green-600"
    >
      Clear Country Data
    </button>
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
import CountrySelect from "@/components/CountrySelect.vue";

export default {
  name: "HomeView",
  components: { DataTitle, DataBoxes, CountrySelect },
  data() {
    return {
      loading: true,
      title: "Global",
      dataDate: "",
      stats: {},
      countries: [],
      loadingImage: require("../assets/hourglass.gif"),
      showButton: true,
    };
  },
  methods: {
    async fetchCovidData() {
      const response = await fetch("https://api.covid19api.com/summary");
      const data = await response.json();
      return data;
    },
    getCountryData(country) {
      this.showButton = false;
      this.stats = country;
      this.title = country.Country;
    },
    async clearCountryData() {
      this.loading = true;
      const covidData = await this.fetchCovidData();
      this.title = "Global";
      this.stats = covidData.Global;
      this.loading = false;
      this.showButton = true;
    },
  },
  async created() {
    const covidData = await this.fetchCovidData();
    this.dataDate = covidData.Date;
    this.stats = covidData.Global;
    this.countries = covidData.Countries;
    this.loading = false;
  },
};
</script>
