module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
,

    getFortune: (req, res) => {
        const fortunes = ["A fresh start will put you on your way.", "A pleasant surprise is waiting for you.", "A person is never too old to learn.", "Advice is like kissing. It costs nothing and is a pleasant thing to do.", "Adventure can be real happiness."];

        let randomIndex2 = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex2];

        res.status(200).send(randomFortune);
    }
    ,    
    getWeather: (req, res) => {
        const weather = ["It's sunny and 75º outside - a beautiful day.", "It's 35º and windy outside - not a nice day.", "It's 55º and sunny - a brisk fall day.", "It's 22º and snowing - wear your boots!", "It's 88º with 79% humidity - just stay inside."];
    
        let randomIndex3 = Math.floor(Math.random() * weather.length);
        let randomWeather = weather[randomIndex3];
    
        res.status(200).send(randomWeather);
}
}