//index
import {ClientWrapper} from './infrastructure/ClientWrapper'
import {TodoService} from './domain/TodoService'

const start = () => {
    const client = new ClientWrapper();
    const todoService = new TodoService(client);
    todoService.requestTodoItems(response => console.log(response.data))
}

start();