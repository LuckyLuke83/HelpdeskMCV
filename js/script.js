'use strict';

import {accounts} from './customerDataBase.js'

console.log(accounts)

//Storing customer account in variable
let currentAccount;

//ELEMENTS
const logWindow = document.querySelector('.log_window');
const btnLog = document.querySelector('.btn_log');
const companySoldTo = document.querySelector('.sold_to');
const wrongSoldTo = document.querySelector('.wrong_sold_to');
const appWindow = document.querySelector('.main_container');
const inputField = document.getElementById('mySearch');
const searchBtn = document.querySelector('.search_btn');
const helpTopicList = document.getElementById('myMenu');
const helpSubject = helpTopicList.getElementsByTagName('li');
const helpTopics = document.querySelectorAll('.help_topic');
const accountSettings = document.querySelector('.nav_account_settings');
const accountSettingsClose = document.querySelector('.closebtn');
const logOut = document.querySelector('.log_out');
let logged = sessionStorage.getItem('ifLogged');

//model
const checkLog = function () {
  logged = logged === 'true';
  if (logged) {
    showingApp();
    // return;
  } else {
    hidingApp();
    hiddingSettings();
  }
};

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

//VIEW
//Searching bar topics
function serchFilter() {
  let filter, a;

  // Displaying topic list
  helpTopicList.classList.remove('hidden');

  //Hidding list when input field is empty
  if (inputField.value.length === 0) {
    helpTopicList.classList.add('hidden');
  }

  filter = inputField.value.toUpperCase();

  //Leaving only matching elements
  for (let i = 0; i < helpSubject.length; i++) {
    a = helpSubject[i].getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      helpSubject[i].style.display = '';
    } else {
      helpSubject[i].style.display = 'none';
    }
  }
}

//VIEW

//Opening account settings
accountSettings.addEventListener('click', function () {
  showingSettings();
});

//Closing accounts settings
accountSettingsClose.addEventListener('click', function () {
  hiddingSettings();
});


//VIEW
//displaying Help topics in main section after clicking on topic
helpTopicList.addEventListener('click', function (e) {
  const clicked = e.target.closest('.help_topic_li').innerHTML.toLowerCase();

  //hiding all help topics

  helpTopics.forEach(topic => topic.classList.add('hidden'));

  //hidding help topics list
  helpTopicList.classList.add('hidden');

  //clearing searchbar
  inputField.value = '';

  //Creating initials
  const initials = clicked
    .split(' ')
    .map(word => word[0])
    .join('');

  //showing article
  document.querySelector(`.${initials}`).classList.remove('hidden');
});

//VIEW
//displaying Help topics in main section after clicking on btn
searchBtn.addEventListener('click', function () {
  //Guard clause
  if (inputField.value.length === 0) {
    return;
  }

  //Creating initials
  const initials = inputField.value
    .split(' ')
    .map(word => word[0])
    .join('');

  displayingHelpTopic();
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




//view
function showingApp() {
  // Hiding Login box
  logWindow.classList.add('hidden');
  // Displaying main page
  appWindow.classList.remove('hidden');
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
function hidingApp() {
  // Displaying Login box
  logWindow.classList.remove('hidden');
  // Hiding main page
  appWindow.classList.add('hidden');
}

//view
function showingSettings() {
  document.getElementById('mySidenav').style.width = '250px';
  accountSettings.style.color = '#2b2b2b';
}


//view
function hiddingSettings() {
  document.getElementById('mySidenav').style.width = '0';
  accountSettings.style.color = '#fafafa';
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
  console.log(clicked);
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

checkLog();