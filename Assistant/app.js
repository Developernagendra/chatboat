const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Boss...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon sir...")
    }

    else{
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing SURU..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    }
    else if (message.includes('say sorry')) {
        speak("I'm sorry bacchu, Please forgive me.");
    }
    else if (message.includes('say love you')) {
        speak("I love you too bacchu.");
    }
    
    else if (message.includes('how are you')) {
        speak("I'm fine, Thank You. How can I help you?");
    }
    else if (message.includes('who are you')) {
        speak("I'm SURU, Your Personal Assistant. How can I help you?");
    }
    else if (message.includes('what can you do')) {
        speak("I can do a lot of things. Just tell me what you want me to do.");
    }
    else if (message.includes('what is your name')) {
        speak("My name is SURU.");
    }
    else if (message.includes('who created you')) {
        speak("I was created by codewithnagendra.");
    }
    else if (message.includes('what is your purpose')) {
        speak("I'm here to help you with your tasks.");
    }
    else if (message.includes('what is the time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak("The time is " + time);
    }
    else if (message.includes('what is the date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
        speak("Today is " + date);
    }
    else if (message.includes('what is your age')) {
        speak("I'm a computer program, I don't have an age.");
    }
    else if (message.includes('thank you')) {
        speak("You're Welcome Sir.")
    }
    else if (message.includes('bye')) {
        speak("Good Bye Sir, Have a nice day.")
    }
    else if (message.includes('where is my crush')) {
        speak("Sorry, I can't help you with that.")
    }
    else if (message.includes("open techbloggerworld")) {
        window.open("https://techbloggerworld.com/", "_blank");
        speak("Opening TechBloggerWorld.com...")
    }
    else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if (message.includes("sing a song")) {
        speak("Sure! Here's a song for you:");
        window.open("https://youtu.be/muds1gFUTN8?si=OQFUcOxnJgfRPf6Y", "_blank");
    }
    else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }
    else if (message.includes("open Instragram")) {
        window.open("https://instragram.com", "_blank");
        speak("Opening instragram...")
    }
    else if (message.includes("open twitter")) {
        window.open("https://twitter.com", "_blank");
        speak("Opening Twitter...")
    }
    else if (message.includes("open linkedin")) {
        window.open("https://linkedin.com", "_blank");
        speak("Opening Linkedin...")
    }
    else if (message.includes("open whatsapp")) {
        window.open("https://web.whatsapp.com", "_blank");
        speak("Opening Whatsapp...")
    }
    else if (message.includes("open gmail")) {
        window.open("https://mail.google.com", "_blank");
        speak("Opening Gmail...")
    }                                               
    else if (message.includes("open stackoverflow")) {
        window.open("https://stackoverflow.com", "_blank");
        speak("Opening Stackoverflow...")
    }
    else if (message.includes("open github")) {
        window.open("https://github.com", "_blank");
        speak("Opening Github...")
    }
    else if (message.includes("play song")) {
        let songName = message.replace("play song", "").trim();
        if (songName) {
            let url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(songName);
            window.open(url, "_blank");
            speak("Playing " + songName + " on YouTube...");
        } else {
            speak("Please specify a song name.");
        }
    }
    else if (message.includes("play video")) {
        let videoName = message.replace("play video", "").trim();
        if (videoName) {
            let url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(videoName);
            window.open(url, "_blank");
            speak("Playing " + videoName + " on YouTube...");
        } else {
            speak("Please specify a video name.");
        }
    }
    else if (message.includes("search for")) {
        let query = message.replace("search for", "").trim();
        if (query) {
            let url = "https://www.google.com/search?q=" + encodeURIComponent(query);
            window.open(url, "_blank");
            speak("Searching for " + query + " on Google...");
        } else {
            speak("Please specify a search query.");
        }
    }
    else if (message.includes("search on google")) {
        let query = message.replace("search on google", "").trim();
        if (query) {
            let url = "https://www.google.com/search?q=" + encodeURIComponent(query);
            window.open(url, "_blank");
            speak("Searching for " + query + " on Google...");
        } else {
            speak("Please specify a search query.");
        }
    }
    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on internet regarding " + message;
        speak(finalText);
    }
    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    }
    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        const finalText = time;
        speak(finalText);
    }
    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" })
        const finalText = date;
        speak(finalText);
    }
    else if (message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if (message.includes("tell me a joke")) {
        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why don't skeletons fight each other? They don't have the guts."
        ];
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(joke);
    }
    else if (message.includes("give me some advice")) {
        const advices = [
            "Always stay positive and keep pushing forward.",
            "Never stop learning, because life never stops teaching.",
            "Believe in yourself and all that you are."
        ];
        const advice = advices[Math.floor(Math.random() * advices.length)];
        speak(advice);
    }
    else if (message.includes("quote of the day")) {
        const quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "The best way to predict the future is to invent it. - Alan Kay",
            "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs"
        ];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(quote);
    }
    else if (message.includes("news")) {
        window.open("https://news.google.com", "_blank");
        speak("Opening Google News...");
    }
    else if (message.includes("weather in")) {
        const city = message.replace("weather in", "").trim();
        if (city) {
            getWeather(city);
        } else {
            speak("Please specify a city.");
        }
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}

function getWeather(city) {
    const apiKey = 'd1845658f92b31c64bd94f06f7188c9c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                const finalText = `The current temperature in ${city} is ${temp} degrees Celsius with ${description}.`;
                speak(finalText);
            } else {
                speak(`Sorry, I couldn't find the weather for ${city}.`);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            speak('Sorry, there was an error fetching the weather data.');
        });
}


