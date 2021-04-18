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

const Location = async ()=>{
    const dataLocation = await getData("location");

    const mapLocation = document.querySelector("#mapLocation")

    const nameLocation = document.querySelector("#nameLocation")
    const addressLocation = document.querySelector("#addressLocation")
    const contactLocation = document.querySelector("#contactLocation")
    
    if ( dataLocation.status === 200 ) {
       //MAP
        const url_MAP = dataLocation.body[0].maps_location

        mapLocation.innerHTML = `
        <iframe  src="${url_MAP}"   allowfullscreen="" loading="lazy"></iframe>`
        
        //INFO
        nameLocation.innerHTML = `
        <p>
            ${dataLocation.body[0].location}
        </p>
        `
        addressLocation.innerHTML = `
        <p>
            ${dataLocation.body[0].address}
        </p>
        `
        contactLocation.innerHTML = `
        <p>
            ${dataLocation.body[0].telephone}
        </p>
        <p>
            ${dataLocation.body[0].email}
        </p>
        `
    }
}

Location();