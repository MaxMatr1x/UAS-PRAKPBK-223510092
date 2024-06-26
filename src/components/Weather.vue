<template>
  <div class="weather-widget bg-light rounded shadow">
    <h2 class="widget-title mb-4">Widget Cuaca</h2>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        v-model="location"
        placeholder="Masukkan Lokasi"
      />
    
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="fetchWeatherData">
          Cari
        </button>
      </div>
    </div>

    <div v-if="weatherData" class="weather-data">
      <p class="location mb-3">Lokasi: {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature mb-3">
        Temperatur: {{ formatTemperature(weatherData.main.temp) }} °C
      </p>
      <p v-if="weatherData.weather" class="description mb-0">
        Deskripsi: {{ weatherData.weather[0].description }}
      </p>
    </div>

    <p v-else class="loader mb-3">Loading data...</p>
    <p v-if="error" class="text-danger">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data() {
    return {
      location: "",
      weatherData: null,
      error: null,
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = "b829dff337af08dd8701a071c25b4fbf";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        this.weatherData = data;
        this.error = null; // Reset error if request succeeds
      } catch (error) {
        console.error("Error fetching weather data:", error);
        this.error = "Gagal mengambil data cuaca. Pastikan lokasi valid.";
        this.weatherData = null;
      }
    },
    formatTemperature(temp) {
      // Konversi dari Kelvin ke Celsius
      return Math.round(temp - 273.15);
    },
  },
};
</script>

<style scoped>
.weather-widget {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px; /* tambahkan padding agar konten tidak terlalu rapat dengan tepi */
  border: 1px solid #ccc; /* tambahkan border untuk kotak */
  border-radius: 8px; /* tambahkan border-radius untuk sudut kotak */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* tambahkan shadow untuk efek 3D */
  background-color: rgba(249, 249, 249, 0.404);
  backdrop-filter: blur(4px);
}

.widget-title {
  font-size: 24px;
  text-align: center;
}

.weather-data {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 20px; /* tambahkan padding agar konten tidak terlalu rapat dengan tepi */
  border: 1px solid #ccc; /* tambahkan border untuk kotak */
  border-radius: 8px; /* tambahkan border-radius untuk sudut kotak */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* tambahkan shadow untuk efek 3D */
}

.location {
  font-size: 18px;
  font-weight: bold;
}

.temperature {
  font-size: 24px;
  color: #ff5722; /* Warna teks suhu yang lebih menonjol */
}

.description {
  font-size: 16px;
}

.loader {
  font-size: 16px;
  text-align: center;
}

</style>
