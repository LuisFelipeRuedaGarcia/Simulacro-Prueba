const url = "http://localhost:4008/propietarios"

export const getVet = async ()=>{
    try {
        const response = await fetch(url);
        const data = response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}

export const agregarVet = async (propietario)=>{
    try{
        fetch (url ,{
            method: 'POST',
            body: JSON.stringify(propietario),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        window.location.href = "index.html"
    }
    catch(error){
        console.log(error);
    }
}