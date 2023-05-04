const url = "http://localhost:4000/propietarios"

export const getVet = async ()=>{
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}

export const agregarVet = async (propietario)=>{
    console.log("loquesea");
    try{
        await fetch(url ,{
            method: 'POST',
            body: JSON.stringify(propietario),
            headers:{
                'Content-Type': 'application/json'
            }
        });

    }
    catch(error){
        console.log(error);
    }
}