'use strict';
import {accounts} from './customerDataBase.js'
import * as view from './view.js'
import * as model from './model.js' 
//ELEMENTS

const inputField = document.getElementById('mySearch');
const helpTopicList = document.getElementById('myMenu');
const helpSubject = helpTopicList.getElementsByTagName('li');



//model
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
//VIEW
//nav buttons logic

//Wszystkie Przyciski 
const navButtons = document.querySelectorAll('.nav_btn');

//Div with all buttons
const nav = document.querySelector('.nav');

//All containers that are controled by buttons
const sectionElements = document.querySelectorAll('.section');

nav.addEventListener('click', function (e) {
  const clicked = e.target.closest('.nav_btn');
  
  // Guard clause
  if (!clicked) return;

  // Remove active classes
  navButtons.forEach(btn => btn.classList.remove('nav_btn_active'))

  //adding hidden class to section elements
  sectionElements.forEach(section => section.classList.add('hidden'));

  //Activate nav button
  clicked.classList.add('nav_btn_active');

  // // Activate content area
  document
    .querySelector(`.section-${clicked.dataset.tab}`)
    .classList.remove('hidden');
});

//PROPER CONTROLER DATA
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
  view.checkLog(model.logged);
  view.logging(controlLoggingIn);
  view.loggingOut(controlLoggingOut);
} 

init();