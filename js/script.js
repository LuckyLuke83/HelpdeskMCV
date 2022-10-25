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

//view
function displayingHelpTopic() {
  //showing article
  document.querySelector(`.${this.initials}`).classList.remove('hidden');

  //clearing searchbar
  inputField.value = '';

  //hidding help topics list
  helpTopicList.classList.add('hidden');
}

//PROPER CONTROLER DATA
//
const helpTopicList = function () {
  const topicList = articleList.map( el => (el.name))
  return topicList;
}


// LOGGING TO SYSTEM (Button)
const controlLoggingIn = function() {
  model.loggingToAccount(accounts);
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
  view.helpList(helpTopicList());
  view.checkLog(model.logged);
  view.logging(controlLoggingIn);
  view.loggingOut(controlLoggingOut);
  view.navButtonsMenu();
  view.searchBarActivation();
  view.displayHelpTopic(articleList);
  
} 

init();