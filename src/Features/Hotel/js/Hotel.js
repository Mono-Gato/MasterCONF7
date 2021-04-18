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

const Hotel = async ()=>{
    const dataHotel = await getData("hotel");

    const hotelCardsContainer = document.querySelector("#hotelCardsContainer")
    if ( dataHotel.status === 200 ) {
        const hotels = [...dataHotel.body]
        for (let i = 0; i < hotels.length; i++) {
                       
            let div = document.createElement("div");
            div.className = "hotel__card"
            div.innerHTML = `
            
                <div class="card__background--image" style="background-image:url('${hotels[i].image_url}');">
                    <div class="card__background--color"></div>
                </div>
                <div class="card__title">
                    <h3>
                    ${hotels[i].name}
                    </h3>
                    <hr>
                </div>
                <div class="card__paragraph">
                    <p>
                    ${hotels[i].description}
                    </p>
                </div>
                <div class="card__distance">
                    <h5><span>${hotels[i].distance}</span> away</h5>
                </div>
                <div class="card__button">
                    <a href="${hotels[i].location}" target="_blank" rel="noopener noreferrer">
                        <svg>
                        <use xlink:href="../../img/general/icons/location2.svg#location2"></use>
                    </svg>  Go Now</a>
                </div>
            `
            hotelCardsContainer.appendChild(div);
        }
    }
}

Hotel();