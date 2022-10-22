'use script'
const logWindow = document.querySelector('.log_window');
const appWindow = document.querySelector('.main_container');

let logged = sessionStorage.getItem('ifLogged');

export const checkLog = function () {
    logged = logged === 'true';
    if (logged) {
      showingApp();
      // return;
    } else {
      hidingApp();
      hiddingSettings();
    }
  };

export const hidingApp = function () {
    // Displaying Login box
    logWindow.classList.remove('hidden');
    // Hiding main page
    appWindow.classList.add('hidden');
  }
  
export const showingSettings = function () {
    document.getElementById('mySidenav').style.width = '250px';
    accountSettings.style.color = '#2b2b2b';
  }
  
  
export const hiddingSettings = function () {
    document.getElementById('mySidenav').style.width = '0';
    accountSettings.style.color = '#fafafa';
  }

export const showingApp = function () {
    // Hiding Login box
    logWindow.classList.add('hidden');
    // Displaying main page
    appWindow.classList.remove('hidden');
  }



  