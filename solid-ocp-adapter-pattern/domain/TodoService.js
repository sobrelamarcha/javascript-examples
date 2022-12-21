//domain/TodoService
export class TodoService{
    client;
    constructor(client){
        this.client = client;
    }
    requestTodoItems(callback){
        const url = 'https://jsonplaceholder.typicode.com/todos/';
        this.client.makeGetRequest(url, callback)
    }
}