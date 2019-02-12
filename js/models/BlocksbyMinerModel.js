import BaseModel from './BaseModel.js';

export default class BlocksbyMinerModel extends BaseModel {
    constructor(apiService){
        super(apiService)
        this.self = this
    }

    loadBlocksbyMiner(searchaddr){
        this.apiService.getBlocksbyMiner(searchaddr).then(response => {
            if(response.ok) return response.json()
            this.onError('loadBlockTransactionsbyMiner == API FETCH Error')
        }).then(response => {
            console.log('loadBlockTransactionsbyMiner == API CALL')
            console.log(response.result)
            if(response.status === "1" && response.message === "OK"){
                this.observer.updateBlocksByMiner(response.result)
            }else{
                this.observer.displayAddrError()
            }
            
        })
    }
}