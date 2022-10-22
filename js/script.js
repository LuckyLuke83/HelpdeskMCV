'use strict';
import {accounts} from './customerDataBase.js'
import * as view from './view.js'
import * as model from './model.js' 

//Storing customer account in variable
let currentAccount;

//ELEMENTS
const btnLog = document.querySelector('.btn_log');
const companySoldTo = document.querySelector('.sold_to');
const wrongSoldTo = document.querySelector('.wrong_sold_to');
const inputField = document.getElementById('mySearch');

const helpTopicList = document.getElementById('myMenu');
const helpSubject = helpTopicList.getElementsByTagName('li');
const searchBtn = document.querySelector('.search_btn');

const accountSettings = document.querySelector('.nav_account_settings');
const accountSettingsClose = document.querySelector('.closebtn');
const logOut = document.querySelector('.log_out');
let logged = sessionStorage.getItem('ifLogged');

//controler
// LOGGING TO SYSTEM (Button)
btnLog.addEventListener('click', function (e) {
  e.preventDefault();
  // Checking Sold to (if correct)

  loggingToAccount();
  showingApp();
});

// LOGGING TO SYSTEM (ENTER)
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && companySoldTo.value.length !== 0) {
    loggingToAccount();
    showingApp();
  }
});

//Opening account settings
accountSettings.addEventListener('click', function () {
  showingSettings();
});

//Closing accounts settings
accountSettingsClose.addEventListener('click', function () {
  hiddingSettings();
});

//MODEL
//Logging out
logOut.addEventListener('click', function (e) {
  e.preventDefault();
  logged = false;
  sessionStorage.setItem('ifLogged', logged);
  // hidingApp();
  // hiddingSettings();
});

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

//model
function loggingToAccount() {
  currentAccount = accounts.find(
    acc => acc.soldTo === Number(companySoldTo.value)
  );

  //Guard clause
  if (!currentAccount) {
    //Add informaction about wrong soldto
    wrongSoldTo.classList.remove('hidden');
    //delete input field
    companySoldTo.value = '';
    return;
  }

  logged = true;
  sessionStorage.setItem('ifLogged', logged);
  sessionStorage.setItem('client', JSON.stringify(currentAccount));
  companySoldTo.value = '';
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

console.log(sectionElements);

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
// helpTopicList.addEventListener('click', model.displayHelpContent());
// searchBtn.addEventListener('click', model.displaySearchContent())


view.checkLog();