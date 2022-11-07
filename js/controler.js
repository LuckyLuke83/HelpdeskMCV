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

const init = function(){
  view.checkLog(model.logged);
  view.loggingBtn(controlLoggingIn);
  view.loggingEnter(controlLoggingIn);
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