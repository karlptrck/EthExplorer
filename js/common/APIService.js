
const GET_ETHER_PRICE_PARAM = "module=stats&action=ethprice"
const GET_ETHER_SUPPLY_PARAM = "module=stats&action=ethsupply"
const GET_LAST_BLOCK_PARAM = "module=proxy&action=eth_blockNumber"
const GET_BLOCK_TRANSACTIONS = "module=proxy&action=eth_getBlockByNumber&tag=<blockNo>&boolean=true"
const GET_BLOCKBYMINER = "module=account&action=getminedblocks&address=<mineraddr>&blocktype=blocks&page=1&offset=20"
const GET_BLOCK_BY_NUMBER_PARAM = "module=proxy&action=eth_getBlockByNumber&tag=<blockNo>&boolean=true"

export default class APIService{
    constructor(){
        this.baseUrl = "https://api.etherscan.io/api?"
        this.apiKey = "84MIQPH3J2N3R35D7SVJ7RC4EBCZHZCMK3"
    }

    getLastPrice(){
        return this.fetchData(GET_ETHER_PRICE_PARAM)
    }

    getTotalSupply(){
        return this.fetchData(GET_ETHER_SUPPLY_PARAM)
    }

    getLastBlock(){
        return this.fetchData(GET_LAST_BLOCK_PARAM)
    }

    getBlockByNumber(blockNo){
        return this.fetchData(GET_BLOCK_BY_NUMBER_PARAM.replace("<blockNo>", blockNo))
    }

    getBlocksbyMiner(searchaddr){
        return this.fetchData(GET_BLOCKBYMINER.replace("<mineraddr>",searchaddr))
    }

    fetchData(urlParam){
        return fetch(`${this.baseUrl}${urlParam}&apikey=${this.apiKey}`)
    }


}