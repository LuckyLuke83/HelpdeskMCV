'use strict';
import {accounts} from './customerDataBase.js'
import * as view from './view.js'
import * as model from './model.js' 
import {articleList} from './articlesDatabase.js'


class Customer {
  constructor(company, sold, soft) {
    this.company = company;
    this.soldTo = sold;
    //soft dodawany z formularza poprzez push do array
    this.soft = soft;
  }

  addSoft(val) {
    this.soft.push(val);
    return this;
  }

  removeSoft(val) {
    //wymyślić usuwanie
  }
}

//PROPER CONTROLER DATA
//
const helpTopicList = function () {
  const topicList = articleList.map( el => (el.name))
  return topicList;
}



// LOGGING TO SYSTEM (Button)
const controlLoggingIn = function() {
  model.loggingToAccount(accounts, view.showingApp);
}

const controlLoggingOut = function() {
  model.loggingOut;
}

// LOGGING TO SYSTEM (ENTER)
// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Enter' && companySoldTo.value.length !== 0) {
//     model.loggingToAccount(accounts);
//     view.showingApp();
//   }
// });

// helpTopicList.addEventListener('click', model.displayHelpContent());
// searchBtn.addEventListener('click', model.displaySearchContent())
const init = function(){
  view.checkLog(model.logged);
  view.logging(controlLoggingIn);
  view.loggingOut(controlLoggingOut);
  //start after logging in??
  view.helpList(helpTopicList());
  view.navButtonsMenu();
  view.searchBarActivation();
  view.displayHelpTopic(articleList);
  view.searchButton(articleList);
  view.formSoftware();
} 

init();