//import getData from "./getData"
//API analyzed with Postman
const API = "https://masterconf.herokuapp.com/"

const getData = async (endpoint) => {
    const urlAPI = endpoint ? `${API}${endpoint}` : API;
    try {
        const response = await fetch(urlAPI)
        const data = await response.json();
        return data
    } catch (error) {
        console.log("Fetch Error", error)
    }
};

const Home = async ()=>{
    const dataHome = await getData();
    //hero
    const descriptionHero = document.querySelector(".hero__text")
    const dateHero = document.querySelector("#dateDescription")
    const locationHero = document.querySelector("#locationDescription")
    
    if ( dataHome.status === 200 ) {
        descriptionHero.innerHTML = `
        <h1>
            ${dataHome.body.description}
        </h1>
        `;
        dateHero.innerHTML = `
            ${dataHome.body.date} -&nbsp; 
        `;

        locationHero.innerHTML = `
            ${dataHome.body.location}
        `;
        //counterDown
        const fullDate = `${dataHome.body.date} ${dataHome.body.hour}`
        //Format date, only de first 3 letters of month
        //example (may 25th, 2021 16:00:00)
        //example (apr 15th, 2021 11:50:00)
        //Format hour: (Hour:Minute:Seconds)
        const fullDateWhitoutTH =  fullDate.slice(0,6)+fullDate.slice(8)
        
        counterDownFunction(fullDateWhitoutTH);
    }
    //sponsors
    const sponsorsContainer = document.querySelector(".sponsors__container")
    const sponsors = [...dataHome.body.sponsors]
    if ( dataHome.status === 200 ){
        for (let i = 0; i < sponsors.length; i++) {
            let div = document.createElement("div");
            div.className = "sponsor"
            div.innerHTML = `
                <img 
                    src="${sponsors[i].logo}" 
                    alt="${sponsors[i].name} Logo"/>
            `
            sponsorsContainer.appendChild(div);
        }
    }
    //reminder
    const dateReminder = document.querySelector("#dateReminder")
    const locationReminder = document.querySelector("#locationReminder")
    if ( dataHome.status === 200 ){
        dateReminder.innerHTML =`
            ${dataHome.body.date}
        `
        locationReminder.innerHTML = `
            ${dataHome.body.location}
        ` 
    }
}

//CounterDown
function counterDownFunction (concatDate){
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const date = concatDate
    let countDown = new Date(date).getTime()
    let x = setInterval(()=> {    
        let now = new Date().getTime()
        let distance = countDown - now

        const counterDays = document.querySelector("#counterDays")
        const counterHours = document.querySelector("#counterHours")
        const counterMinutes = document.querySelector("#counterMinutes")
        const counterSeconds = document.querySelector("#counterSeconds")

        counterDays.innerHTML= Math.floor(distance / (day))
        counterHours.innerHTML = Math.floor((distance % (day)) / (hour))
        counterMinutes.innerHTML = Math.floor((distance % (hour)) / (minute))
        counterSeconds.innerHTML = Math.floor((distance % (minute)) / second)

        if (distance < 0) {
            const fullDateContainer = document.querySelector(".hero__date--countdown");

            fullDateContainer.innerHTML = `
            <div class="countdown__counter" style="margin:auto">
                <h2> Right Now </h2>
            </div>
            
            `
            clearInterval(x);
        }
    }, 0)
}

Home();