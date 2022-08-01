//GET

axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        console.log(response)
    })
    .catch((error) => console.log(error))
    .then((respuestaOficial) => {
        console.log(`La petición ha sido ejecutada correctamente`)
    })