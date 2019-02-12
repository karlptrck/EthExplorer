import BaseModel from './BaseModel.js';

let UPDATE_INTERVAL = 10 * 1000;

export default class HomepageModel extends BaseModel {
    constructor(apiService){
        super(apiService)
        this.self = this
        this.loadLastPrice()
        this.loadTotalSupply()
        this.loadLastBlock()
        this.enableDisableUpdates(true)
    }

    enableDisableUpdates(isEnabled){
        if(isEnabled){
            this.interval = setInterval(() => {
                this.loadLastPrice()
                this.loadTotalSupply()
                this.loadLastBlock()
              }, UPDATE_INTERVAL);
        }else{
            clearInterval(this.interval)
        }
    }


    loadLastPrice(){
        this.apiService.getLastPrice().then(response => {
            if(response.ok) return response.json()
            this.onError("loadLastPrice == API Fetch Error")
        }).then(response => {
            if(response.status === "1" && response.message === "OK"){
                log('loadLastPrice' , JSON.stringify(response.result))
                this.observer.updateLastPrice(response.result)
            }else{
                this.onError(response.message)
            }
        })
    }

    loadTotalSupply(){
        this.apiService.getTotalSupply().then(response => {
            if(response.ok) return response.json()
            this.onError("loadTotalSupply == API FETCH Error")
        }).then(response => {
            if(response.status === "1" && response.message === "OK"){
                log('loadTotalSupply', JSON.stringify(response.result))
                this.observer.updateTotalEtherSupply(response.result)
            }else{
                this.onError(response.message)
            }
        })
    }

    loadLastBlock(){
        this.apiService.getLastBlock().then(response => {
            if(response.ok) return response.json()
            this.onError('loadLastBlock == API FETCH Error')
        }).then(response => {
            log('loadLastBlock', JSON.stringify(response.result))
            var blockNo = parseInt(response.result)
            this.observer.updateLastBlock(blockNo)
            this.loadLastBlockTransactions(response.result)
        })
    }

    loadLastBlockTransactions(blockNo){
        this.apiService.getBlockByNumber(blockNo).then(response => {
            if(response.ok) return response.json()
            this.onError('loadLastBlockTransactions == API FETCH Error')
        }).then(response => {
           
            this.observer.updateLastBlockMiner(response.result.miner)
            var transactions = response.result.transactions
            var transLength = transactions.length

            // GET ONLY THE LAST 20 items
            if(transactions.length > 20){
                transactions = transactions.slice(transLength-20, transLength)
            }

            log('loadLastBlockTransactions', JSON.stringify(transactions))
            this.observer.updateTransactions(transactions, response.result.timestamp)
        })
    }

}