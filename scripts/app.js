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
        word: "",
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

            this.user.fullName = `${data.first_name} ${data.last_name}`;
            this.user.age = data.age;
            this.user.avatar =data.avatar_url;
        })
        .catch(error => {
            console.log(error);
        })
    }
  }
});

app.mount('#app');