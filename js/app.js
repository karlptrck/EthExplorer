
import APIService from './common/APIService.js';
import HomepageModel from './models/HomepageModel.js';
import HomepageController from './controllers/HomepageController.js';
import HomepageView from './views/HomepageView.js';
import BlocksbyMinerModel from './models/BlocksbyMinerModel.js';
import BlocksbyMinerController from './controllers/BlocksbyMinerController.js';
import BlocksbyMinerView from './views/BlocksbyMinerView.js'


let api = new APIService()
let contentDiv = document.getElementById('container')

const startPreviewer = () => {
    console.log('Page Loaded')
    contentDiv.innerHTML = routes[window.location.pathname]
    renderHomePage()

}   

const renderHomePage = () => {
    var homeModel = new HomepageModel(api)
    var homeController = new HomepageController(homeModel)
    var homeView = new HomepageView(homeController)

    
    const enterForm = document.forms['search-form']
    const searchInput = document.getElementById('searchval');

    enterForm.addEventListener('submit', function(e) {  
        e.preventDefault();
        homeController.enableDisableUpdates(false);

        if(searchInput.value == ''){
            searchInput.className = "input is-danger"
            document.getElementById("fieldreq").style.visibility = "visible"
        } else {
            onNavigationClick('/blocksbyminer' + "?searchParam="+ searchInput.value)
        }
    })

    var realtimeCheckBox = document.querySelector("input[name=switch]")
    realtimeCheckBox.addEventListener('change', function(){
        if(this.checked){
            homeController.enableDisableUpdates(true)
            console.log('enabled')
        }else{
            homeController.enableDisableUpdates(false)
            console.log('disabled')
        }
    })

}





let routes = {
    '/' : homePage,
    '/index.html' : homePage,
    '/statsDetails' : statsDetailsPage,
    '/blocksbyminer' : blocksbyminerPage
}

window.onpopstate = () => {
    var destinationPath = window.location.pathname
    contentDiv.innerHTML = routes[destinationPath]
    renderPage(destinationPath)
}

let onNavigationClick = (pathName) => {

    var searchParam = ''

    if(pathName.includes("?searchParam=")){ 
        var strSplit = pathName.split("?searchParam=")
        pathName = strSplit[0]
        searchParam = strSplit[1]
    }

    window.history.pushState({}, pathName, window.location.origin + pathName + searchParam)
    document.getElementById('container').innerHTML = routes[pathName]
    renderPage(pathName, searchParam)
}

const renderBlocksByMinerPage = (searchaddr) => {
    var blocksbyMinerModel = new BlocksbyMinerModel(api)
    var blocksbyMinerController = new BlocksbyMinerController(blocksbyMinerModel)
    var blocksbyMinerView = new BlocksbyMinerView(blocksbyMinerController)

    blocksbyMinerView.searchBlocks(searchaddr)
}

function renderPage(destinationPath, searchParam){
    console.log(destinationPath)

    switch(destinationPath){
        case '/' :
            renderHomePage()
        break;

        case '/index.html':
            renderHomePage()
        break;

        case '/statsDetails':
            renderStatsDetailsPage()
        break;

        case '/blocksbyminer':
            renderBlocksByMinerPage(searchParam)
            break;

    }
}



window.addEventListener('load', startPreviewer())