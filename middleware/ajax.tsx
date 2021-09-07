export const ajax = (url:string, method:string) => {
    return fetch(url,
        {
            method
        })
    .then(result => result.json())
} 

export const allGetPokemon = async (url:any) => {
    return await fetch(url, {
        method: 'GET'
    })
    .then(result => {
        return result.json()})
}