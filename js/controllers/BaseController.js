

export default class BaseController{
    constructor(model){
        this.model = model
    }

    registerObserver(view){
        this.model.registerObserver(view)
    }
}