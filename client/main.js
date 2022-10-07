const complimentBtn = document.getElementById("complimentButton")

const getCompliment = (evt) => {
    evt.preventDefault()   
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    
    });
};

complimentBtn.addEventListener('click', getCompliment)





const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = (evt) => {
    evt.preventDefault() 
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
    };

fortuneBtn.addEventListener('click', getFortune)



const weatherBtn = document.getElementById("weatherButton")

const getWeather = (evt) => {
    evt.preventDefault()    
    axios.get("http://localhost:4000/api/weather/")
        .then(res => {
            const data = res.data;
            alert(data);
        });        
};

weatherBtn.addEventListener('click', getWeather)