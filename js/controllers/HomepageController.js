import BaseController from './BaseController.js';

export default class HomepageController extends BaseController{
    constructor(model){
        super(model)
    }   

    enableDisableUpdates(isEnabled){
        this.model.enableDisableUpdates(isEnabled)
    }
}