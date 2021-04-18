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

    if ( dataHome.status === 200 ) {
        console.log(dataHome.body)
    }
    else{
        console.log("Error fetchAPI dataHome")
    }
}

Home();