//infrastructure/ClientWrapper

export class ClientWrapper{
    makeGetRequest(url, callback){
        return fetch(url)
        .then(response => response.json())
        .then(callback)
    }
}