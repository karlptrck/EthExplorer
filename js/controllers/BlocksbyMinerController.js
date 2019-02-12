import BaseController from './BaseController.js';

export default class BlocksbyMinerController extends BaseController{
    constructor(model){
        super(model)
    }   

    loadBlocksbyMiner(searchaddr) {
        this.model.loadBlocksbyMiner(searchaddr)
    }
}