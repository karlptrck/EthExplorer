
export default class HomepageView{
    constructor(controller){
        this.controller = controller
        this.controller.registerObserver(this)
        this.previousValues = { ethusd : "", ethbtc : "" }
        this.usdValue = document.getElementById('usdValue')
        this.btcValue = document.getElementById('btcValue')
        
    }

    updateLastPrice(data){
        if(this.previousValues.ethusd !== data.ethusd){
            this.usdValue.textContent = data.ethusd
            if(this.previousValues.ethusd !== ""){
                document.getElementById('lastUsdValue').textContent = "VALUED AT $" + this.previousValues.ethusd
            }
            this.previousValues.ethusd = data.ethusd
        }

        if(this.previousValues.ethbtc !== data.ethbtc){
            this.btcValue.textContent = data.ethbtc
            if(this.previousValues.ethbtc !== ""){
                document.getElementById('lastBtcValue').textContent = "VALUED AT " + this.previousValues.ethbtc
            }
            this.previousValues.ethbtc = data.ethbtc
        }

        document.getElementById('lastUsdUpdate').textContent = timeSince(new Date(Number(data.ethusd_timestamp) * 1000)) + " ago"
        document.getElementById('lastBtcUpdate').textContent = timeSince(new Date(Number(data.ethbtc_timestamp) * 1000)) + " ago"
    }

    updateLastBlock(data){
        document.getElementById('lastBlock').textContent = data
    }

    updateLastBlockMiner(data){
        document.getElementById('lastBlockMiner').textContent = data
    }
    updateTotalEtherSupply(data){
        document.getElementById('totalSupply').textContent = data
    }

    updateTransactions(transactions, timestamp){
        createTransactionsTable(transactions, timestamp)
    }

}

