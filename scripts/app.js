const app = Vue.createApp({
  data() 
  {
    return {
      // Random User state
      user: {
        name:"",
        age:"",
        avatar:"",
      },

      // Weather state
      weatherForm: {
        city: "London",
        province: "Ontario",
        country: "Canada",
      },
      weather:{
        temperature:"",
        wind:"",
        weatherDescription :"",
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
        if (response.ok)
          {
          return response.json();
          }
        else 
          {
          console.log('An error occured. Please try again.');
          }
        })
        .then(data => {
        this.user.name = `${data.user_profile.first_name}${data.user_profile.last_name}`;
        this.user.age = data.user_profile.age;
        this.user.avatar =data.user_profile.avatar_url;
        })
        .catch(error => {
        console.log(error);
      });
      },

    fetchWeatherData(){
        fetch(`https://comp6062.liamstewart.ca/weather-data?city=${this.weatherForm.city}&province=${this.weatherForm.province}&country=${this.weatherForm.country}`)
        .then((response) => response.json())
        .then((data) => {
                this.weather.temperature = data.weather_data.temperature;
                this.weather.wind = data.weather_data.wind_speed;
                this.weather.weatherDescription=data.weather_data.weather_description;
        })
        .catch((error) => {
          console.log("Weather API error:", error);
        });
    },
    fetchdDictData(){

        fetch(`https://comp6062.liamstewart.ca/api/define?word=${this.dictForm.word}`)
        .then((response) => response.json())
        .then((data) => {
            this.dict.word = data.word;
            this.dict.phonetic = data.phonetic;
            this.dict.definition = data.definition;
        }
        )},

    }

});

app.mount('#app');
