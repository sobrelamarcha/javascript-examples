// SRP: Single Responsibility Principle

class UseCase{
    constructor(repo, notifier){
    this.repo = repo;
    this.notifier = notifier;
    }

    doSomethingWithTaxes(){
        console.log("Do something related with taxes ...")
    }
    saveChanges(){
        this.repo.update();
    }
    notify(){
        this.notifier.notify("Hi!")
    }
}

class Repository{
    add(){
        console.log("Adding in database");
    }
    update(){
        console.log("Updating in database...");
    }
    remove(){
        console.log("Deleting from database ...");
    }
    find(){
        console.log("Finding from database ...");
    }
}

class NotificationService{
    notify(message){
        console.log("Sending message ...");
        console.log(message);
    }
}

function start(){
    const repo = new Repository()
    const notifier = new NotificationService()
    const myUseCase = new UseCase(repo, notifier)

    myUseCase.doSomethingWithTaxes();
    myUseCase.saveChanges();
    myUseCase.notify();
}

start();