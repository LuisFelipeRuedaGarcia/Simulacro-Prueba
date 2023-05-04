const url = "http://localhost:4007/propietarios"

export const getVet = async ()=>{
    try {
        const response = await fetch(url);
        const data = response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}