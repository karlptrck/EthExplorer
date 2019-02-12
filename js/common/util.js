function  timeSince(timeStamp) {
    var now = new Date(),
      secondsPast = (now.getTime() - timeStamp.getTime()) / 1000;
    if(secondsPast < 60){
      return parseInt(secondsPast) + ' s';
    }
    if(secondsPast < 3600){
      return parseInt(secondsPast/60) + ' m';
    }
    if(secondsPast <= 86400){
      return parseInt(secondsPast/3600) + ' h';
    }
    if(secondsPast > 86400){
        var day = timeStamp.getDate();
        var month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ","");
        var year = timeStamp.getFullYear() == now.getFullYear() ? "" :  " "+timeStamp.getFullYear();
        return day + " " + month + year;
    }
  }

  let showLogs = false

  const log = (tag, message) => {
      if(showLogs) console.log(`${tag} == ${message}`)
  }


  const createTransactionsTable = (transactions, timestamp) => {
    let tblBox = document.getElementById('transactionBox')
    tblBox.innerHTML = ""

      if(transactions !== null && transactions.length > 0){
        let tblContainer = document.createElement('div')
        tblContainer.className = 'table-container'

        let table = document.createElement('table')
        table.className = 'table is-fullwidth'
        table.id = 'transactionTable'

        let thead = document.createElement('thead')
        let tr = document.createElement('tr')

        let thTxHash = document.createElement('th')
        thTxHash.textContent = 'TxHash'

        let thBlockNo = document.createElement('th')
        thBlockNo.textContent = 'BlockNo'

        let thAge = document.createElement('th')
        thAge.textContent = 'Age'

        let thFrom = document.createElement('th')
        thFrom.textContent = 'From'

        let thTo = document.createElement('th')
        thTo.textContent = 'To'

        let thValue = document.createElement('th')
        thValue.textContent = 'Value'

        tr.appendChild(thTxHash)
        tr.appendChild(thBlockNo)
        tr.appendChild(thAge)
        tr.appendChild(thFrom)
        tr.appendChild(thTo)
        tr.appendChild(thValue)
        thead.appendChild(tr)

        table.appendChild(thead)

        transactions.reverse().forEach(element => {
          let tbody = document.createElement('tbody')
          let tdTxHash = document.createElement('td')
          let tdBlock = document.createElement('td')
          let tdAge = document.createElement('td')
          let tdFrom = document.createElement('td')
          let tdTo = document.createElement('td')
          let tdValue = document.createElement('td')

          tdTxHash.textContent = element.hash
          tdBlock.textContent = parseInt(element.blockNumber)
          tdAge.textContent = timeSince(new Date(Number(timestamp) * 1000)) + " ago"
          tdFrom.textContent = element.from
          tdTo.textContent = element.to


          var wei = new BigNumber(element.value)
          var convertEther = wei.times(new BigNumber(0.000000000000000001))
          tdValue.textContent = convertEther + ' Ether'

          tbody.appendChild(tdTxHash)
          tbody.appendChild(tdBlock)
          tbody.appendChild(tdAge)
          tbody.appendChild(tdFrom)
          tbody.appendChild(tdTo)
          tbody.appendChild(tdValue)
          table.appendChild(tbody)
      });
      tblContainer.appendChild(table)
      tblBox.appendChild(tblContainer)
      
    }else{
        let divEmptyTrans = document.createElement('div')
        divEmptyTrans.className='notification'
        divEmptyTrans.textContent = 'No transactions from the last block.'
        tblBox.appendChild(divEmptyTrans)
    }
  }