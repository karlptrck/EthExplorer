export default class BlocksbyMinerView{
    constructor(controller){
        this.controller = controller
        this.controller.registerObserver(this)

    }

    displayAddrError(){
        let addrErrDiv = document.createElement("div")
        addrErrDiv.className='notification'
        addrErrDiv.textContent = "Invalid Address value"
        document.getElementById("container").appendChild(addrErrDiv)
    }

    updateBlocksByMiner(data){ 
        var blocksTable = document.getElementById('blocksTable')

        data.forEach(element => {
            let tbody = document.createElement('tbody')
            let tdBlock = document.createElement('td')
            let tdReward = document.createElement('td')
            let tdAge = document.createElement('td')

            tdBlock.textContent = parseInt(element.blockNumber)
            var wei = new BigNumber(element.blockReward)
            var convertEther = wei.times(new BigNumber(0.000000000000000001))
            tdReward.textContent = convertEther + ' Ether'
            tdAge.textContent = timeSince(new Date(Number(element.timeStamp) * 1000)) + " ago"

            tbody.appendChild(tdBlock)
            tbody.appendChild(tdReward)
            tbody.appendChild(tdAge)
            blocksTable.appendChild(tbody)
        });

    }

    searchBlocks(searchaddr){
        document.getElementById("MinerAddr").textContent = searchaddr
        this.controller.loadBlocksbyMiner(searchaddr)
    }

}