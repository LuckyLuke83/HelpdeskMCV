'use script'
const logWindow = document.querySelector('.log_window');
const appWindow = document.querySelector('.main_container');
const searchBtn = document.querySelector('.search_btn');
const accountSettings = document.querySelector('.nav_account_settings');
const accountSettingsClose = document.querySelector('.closebtn');
const btnLog = document.querySelector('.btn_log');
const logOut = document.querySelector('.log_out');
const navButtons = document.querySelectorAll('.nav_btn'); //Wszystkie Przyciski 
const nav = document.querySelector('.nav'); //Div with all buttons
const sectionElements = document.querySelectorAll('.section'); //All containers that are controled by buttons

export const logging = function (handler) {
  btnLog.addEventListener('click', function (e) {
  e.preventDefault();
  showingApp();
  handler();
})};

export const loggingOut = function () {
  logOut.addEventListener('click', function() {
    checkLog();
  })
}

//Nav manipulation
export const navButtonsMenu = function() {
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
}


//Opening account settings
accountSettings.addEventListener('click', function () {
  showingSettings(accountSettings);
});

//Closing accounts settings
accountSettingsClose.addEventListener('click', function () {
  hiddingSettings(accountSettings);
});


export const checkLog = function(loggedStatus) {
    if (loggedStatus) {
      showingApp();
      return;
    } else {
      hidingApp();
      hiddingSettings();
    }
  }

export const hidingApp = function() {
    // Displaying Login box
    logWindow.classList.remove('hidden');
    // Hiding main page
    appWindow.classList.add('hidden');
  }

export const showingSettings = function() {
    document.getElementById('mySidenav').style.width = '250px';
    accountSettings.style.color = '#2b2b2b';
  }

export const hiddingSettings = function() {
    document.getElementById('mySidenav').style.width = '0';
    accountSettings.style.color = '#fafafa';
  }

export const showingApp = function() {
    // Hiding Login box
    logWindow.classList.add('hidden');
    // Displaying main page
    appWindow.classList.remove('hidden');
  }

  