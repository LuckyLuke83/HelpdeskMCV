'use strict';
import * as view from './view.js'
import * as model from './model.js' 
import {articleList} from './articlesDatabase.js'

const acconuntsDB = JSON.parse(localStorage.getItem('acconuntsDB'));

// LOGGING TO SYSTEM (Button)
const controlLoggingIn = function() {
  model.loggingToAccount(acconuntsDB, view.showingApp);
}

const controlLoggingOut = function() {
  model.loggingOut;
}

const helpTopicList = function () {
  return articleList.map(el => el.name);
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
  view.qucikLinksNavigation(articleList);
} 

init();