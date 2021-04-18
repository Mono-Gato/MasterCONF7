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

const Food = async ()=>{
    const dataFood = await getData("food");

    const foodCardsContainer = document.querySelector("#foodCardsContainer")
    const foodRestaurants = [...dataFood.body]
    if ( dataFood.status === 200 ) {
        for (let i = 0; i < foodRestaurants.length; i++) {
                       
            let div = document.createElement("div");
            div.className = "food__card"
            div.innerHTML = `
                <div class="card__background--image" style="background-image:url('${foodRestaurants[i].image_url}');">
                    <div class="card__background--color"></div>
                </div>
                <div class="card__title">
                    <h3>
                    ${foodRestaurants[i].name}
                    </h3>
                    <hr>
                </div>
                <div class="card__paragraph">
                    <p>
                    ${foodRestaurants[i].description}
                    </p>
                </div>
                <div class="card__distance">
                    <h5><span>${foodRestaurants[i].distance}</span> away</h5>
                </div>
                <div class="card__button">
                    <a href="${foodRestaurants[i].location}" target="_blank" rel="noopener noreferrer">
                        <svg>
                        <use xlink:href="../../img/general/icons/location2.svg#location2"></use>
                    </svg>  Go Now</a>
                </div>
            `
            foodCardsContainer.appendChild(div);
        }
    }
}

Food();