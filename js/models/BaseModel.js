

export default class BaseModel{
    constructor(apiService){
        this.apiService = apiService
        this.observers = []
        this.observer = {}
    }

    registerObserver(observer){
        // this.observers.push(observer)
        this.observer = observer
    }

    notifyAll(){
        var that = this
        this.observers.forEach(observer => {
            observer.update(that)
        })
    }

    onError(message){
        throw new Error(`Error : ${message}`)
    }
}