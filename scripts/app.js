const app = Vue.createApp({
  data() 
  {
    return {
      // Random User state
      user: {
        fullName: "",
        age: "",
        avatar: "",
      },

      // Weather state
      weatherForm: {
        city: "London",
        province: "Ontario",
        country: "Canada",
      },
      weather: {
        temperature: "",
        wind: "",
        description: "",
      },

      // Dictionary state
      dictForm: {
        word: "Dog",
      },
      dict: {
        word: "",
        phonetic: "",
        definition: "",
      },
    };
  },
  created(){
    this.fetchUserData();
    this.fetchWeatherData();
    this.fetchdDictData();
  },
  methods:{
    fetchUserData(){
        fetch('https://comp6062.liamstewart.ca/random-user-data')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('user API response:', data);
            this.user.fullName = `${data.first_name} ${data.last_name}`;
            this.user.age = data.age;
            this.user.avatar =data.avatar_url;
        })
        .catch(error => {
            console.log(error);
        })
    },
    fetchWeatherData(){
        fetch(`https://comp6062.liamstewart.ca/weather-data?city=${this.weatherForm.city}&province=${this.weatherForm.province}&country=${this.weatherForm.country}`)
        .then((response) => response.json())
        .then((data) => {
                console.log('user API response:', data);
                this.weather.temperature =data.temperature;
                this.weather.wind = data.wind_speed;
                this.weather.description = data.weather_description;
        })
        .catch((error) => {
          console.log("Weather API error:", error);
        });
    },
    fetchdDictData(){

        fetch(`https://comp6062.liamstewart.ca/api/define?word=${this.dictForm.word}`)
        .then((response) => response.json())
        .then((data) => {
            console.log('user API response:', data);
            this.dict.word = data.word;
            this.dict.phonetic = data.phonetic;
            this.dict.definition = data.definition;
        }
        )},

    }

});

app.mount('#app');
