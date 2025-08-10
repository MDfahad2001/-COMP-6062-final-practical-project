const app = Vue.createApp({
  data() 
  {
    return {
      // Random User state
      user: "",

      // Weather state
      weatherForm: {
        city: "London",
        province: "Ontario",
        country: "Canada",
      },
      weather:"",

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
        this.user = data;
        })
        .catch(error => {
        console.log(error);
      });
      },

    fetchWeatherData(){
        fetch(`https://comp6062.liamstewart.ca/weather-data?city=${this.weatherForm.city}&province=${this.weatherForm.province}&country=${this.weatherForm.country}`)
        .then((response) => response.json())
        .then((data) => {
                this.weather = data;
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
