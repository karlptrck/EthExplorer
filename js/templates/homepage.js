let homePage = `
<!-- SEARCH BAR -->
<div class="field has-addons" style="margin-bottom: 25px; margin-top: 25px;">
<form id='search-form'>
  <div class="field-body">
  <div class="field has-addons">
        <div class="field">
          <input id="searchval" type="text" class="input" placeholder="Enter Miner address">
          <p id="fieldreq" class="help is-danger" style="visibility:hidden;">This field is required.</p>
        </div>
        <div class="control">
            <button id=searchbutton type='submit' class="button is-info">Search</button>
        </div>
  </div>
  </div>
</form>
</div>
<!-- END SERCH BAR -->

<div class="heading">Overall Ethereum Status</div>
  <div class="box" id="stats">
    <div class="field" style="float:right;">
      <input type="checkbox" name="switch" class="switch" checked="checked">
      <label for="switchExample">Realtime Updates</label>
  </div>
  <br>
  <br>
    <div class="level">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">USD VALUE</p>
        <span class="title">$</span><span class="title" id="usdValue"></span>
        <p class="heading" id="lastUsdValue"></p>
        <p class="heading" id="lastUsdUpdate"></p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">BTC / ETH</p>
        <p class="title" id="btcValue"></p>
        <p class="heading" id="lastBtcValue"></p>
        <p class="heading" id="lastBtcUpdate"></p>
      </div>
    </div>
  </div>


  <div class="level">
  <div class="level-item has-text-centered">
    <div>
        <p class="heading">LAST BLOCK</p>
        <p class="subtitle" id="lastBlock"></p>
    </div>
  </div>

  <div class="level-item has-text-centered">
      <div>
          <p class="heading">LAST BLOCK MINER</p>
          <p class="subtitle long-text" id="lastBlockMiner"></a></p>
      </div>
    </div>

  <div class="level-item has-text-centered">
      <div>
          <p class="heading">Total Ether Supply</p>
          <p class="subtitle long-text" id="totalSupply"></p>
      </div>
    </div>
</div>

</div>

<div class="heading">Transactions from last block</div>
<div class="box" id="transactionBox">
<!-- <div class="table-container">
<table class="table is-fullwidth" id="transactionTable">
    <thead>
        <tr>
          <th>TxHash</th>
          <th>Block</th>
          <th>Age</th>
          <th>From</th>
          <th>To</th>
          <th>Value</th>
        </tr>
    </thead>
  </table>
</div> -->
</div>
`