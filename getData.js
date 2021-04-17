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
}

const home = async () =>{
    const dataHome = await getData();
    const description = document.querySelector('#description');
    const sponsors = document.querySelector('#sponsors')
    if ( dataHome.status === 200) {
        description.innerHTML = `
        <h1>
            ${dataHome.body.description}
        </h1>
        `;
        for (let i = 0; i < getLengthOfObject(dataHome.body.sponsors); i++) {
            console.log(dataHome.body.sponsors)
            
            
            let div = document.createElement("div");
            div.className = "sponsor"
            div.innerHTML = `
                <img 
                    src="${dataHome.body.sponsors[i].logo}" 
                    alt="${dataHome.body.sponsors[i].name}"/>
            `
            
            sponsors.appendChild(div);
        }
    } else {
        console.log('Error fetchAPI dataHome')
    }
}

const getLengthOfObject = (obj) => { 
    let length0fObject = 0;
    for(let key in obj){
        length0fObject++;
    }
    return length0fObject;
} 


home();

