
interface IExternalService{
    doExternalTask: () => void;
}

// la clase más importante depende de una interfaz
class MyUseCase{
    externalService: IExternalService;

    constructor(externalService: IExternalService){
        this.externalService = externalService;
    }
    doSomething(){
        this.externalService.doExternalTask();
    }
}
// la clase menos importante debe implementar la interfaz
class ExternalService implements IExternalService {
    doExternalTask(){
        console.log("Doing external task...")
    }
}
const client = new MyUseCase(new ExternalService());
client.doSomething();