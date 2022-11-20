'use script'
import { supportedSoft } from './config.js';
 
const logWindow = document.querySelector('.log_window');
const appWindow = document.querySelector('.main_container');
const searchBtn = document.querySelector('.search_btn');
const searchField = document.querySelector('.search_field');
const accountSettings = document.querySelector('.nav_account_settings');
const accountSettingsClose = document.querySelector('.closebtn');
const btnLog = document.querySelector('.btn_log');
const logOut = document.querySelector('.log_out');
const navButtons = document.querySelectorAll('.nav_btn'); //Wszystkie Przyciski 
const nav = document.querySelector('.nav'); //Div with all buttons
const sectionElements = document.querySelectorAll('.section');
const helpTopicList = document.querySelector('.help_topics_ul');
const helpSubject = helpTopicList.getElementsByTagName('li'); //All containers that are controled by buttons
const articleArea = document.querySelector('.article_area')
const inputField = document.getElementById('mySearch');
const downloadSection = document.querySelector('.section-2');
const softDropdown = document.querySelector('.software_row');
const soldTo = document.querySelector('.sold_to');
const qucikLinksContainer = document.querySelector('.quick_links_ul');
const quickLinks = document.querySelectorAll('.quick_links_ul')


export const checkLog = function(loggedStatus) {
  if (loggedStatus) {
    showingApp();
    // return;
  } else {
    hidingApp();
    hiddingSettings();
  }
}

export const loggingBtn = function (handler) {
  btnLog.addEventListener('click', function (e) {
  e.preventDefault();
  // showingApp();
  handler();
})};

export const loggingEnter = function(handler) {
  soldTo.addEventListener("keydown", function (e){
    if (e.key === "Enter") {
      handler();
    }
  })
}

export const loggingOut = function () {
  logOut.addEventListener('click', function() {
    //deactivating nav btn's
    navButtons.forEach(btn => btn.classList.remove('nav_btn_active'));
    document.querySelector('.nav_start').classList.add('nav_btn_active');
    checkLog();
  })
}


export const searchBarActivation = function () {
  ['focus', 'keyup'].forEach(ev => searchField.addEventListener(ev, serchFilter));
}

function serchFilter() {
  console.log()
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

//Creating help topic list
export const helpList = function(arr) {
 const markup = arr.map(el => `<li><a class="help_topic_li" href="#">${el}</a></li>`).join('');
 helpTopicList.insertAdjacentHTML('afterbegin', markup);
}

export const searchButton = function(articleDB) {
  searchBtn.addEventListener('click', function() {
    const inputPhrase = searchField.value.toLowerCase();
    displayingHelpArtice(articleDB, inputPhrase);
    })
}

const matchingArticle = function(articleDB, articleName) {
  const matchedArticle = articleDB.find(el => el.name === articleName);
    if (!matchedArticle) {
      console.log('error');
      return;
    }
    return matchedArticle;
}

//displaying topic article
export const displayHelpTopic = function(articleDB) {
  helpTopicList.addEventListener('click', function(e) {
    const clicked = e.target.closest('.help_topic_li').innerHTML;
  
    displayingHelpArtice(articleDB, clicked);
  })
}

const displayingHelpArtice = function(articleDB, inputPhrase) {
  const matchedArticle = matchingArticle(articleDB, inputPhrase)
  
  searchField.value = '';
    helpTopicList.classList.add('hidden');

  displayigArtice(matchedArticle);
  }

const displayigArtice = function (matchedArticle) {

  const markup = `<div class="help_topic">
    <h2>${matchedArticle.title}</h2>
    <p>${matchedArticle.content}</p>
  </div>`

  articleArea.innerHTML ='';

  articleArea.insertAdjacentHTML('afterbegin', markup);

};

export const qucikLinksNavigation = function(articleDB) {
  qucikLinksContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.quick_links_btn');

    if (!clicked) return;
    const articlename = clicked.dataset.tab;
    // const matchedArticle = articleDB.find(el => el.name === clicked.dataset.tab);
    // if (!matchedArticle) {
    //   console.log('error');
    //   return;
    // }
    const matchedArticle = matchingArticle(articleDB, articlename);
    displayigArtice(matchedArticle);

  })
}


//Nav manipulation

export const navButtonsMenu = function(btn = '.nav_btn') {
  nav.addEventListener('click', function (e) {
    e.preventDefault();
    const clicked = e.target.closest(`${btn}`);
    
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




const hidingApp = function() {
    // Displaying Login box
    logWindow.classList.remove('hidden');
    // Hiding main page
    appWindow.classList.add('hidden');
  }

const showingSettings = function() {
    document.getElementById('mySidenav').style.width = '250px';
    accountSettings.style.color = '#2b2b2b';
  }

const hiddingSettings = function() {
    document.getElementById('mySidenav').style.width = '0';
    accountSettings.style.color = '#fafafa';
  }

export const showingApp = function(fetchedAccount) {
    // Hiding Login box
    logWindow.classList.add('hidden');
    // Displaying main page
    appWindow.classList.remove('hidden');

    //guard clause for checkLog() function
    if (!fetchedAccount) return;
    generatingDownloadSoft(fetchedAccount)
  }

const generatingDownloadSoft = function (currentAccount) {
const account = currentAccount
  
  //creating markup for Download section
  const markupDownload = `<main>
  ${account.soft.map(el=> `<div class="main_section ${el}">
  <p class="soft_name">${(el === 'SE') ? 'SOLID EDGE' : el}</p>
  <div class="soft_section new_soft">
    <ul class="soft_ul">
      <li>2022</li>
      <li class="soft_li">
        <a href="#" class="soft_btn"
          ><p>Dysk 1</p>
          <i class="fa-solid fa-download fa-xs"></i
        ></a>
        <p>- instrukcje instalacji</p>
      </li>
      <li class="soft_li">
        <a href="#" class="soft_btn"
          ><p>Dysk 2</p>
          <i class="fa-solid fa-download fa-xs"></i
        ></a>
        <p>${(el === "SE") ? 'SOLID EDGE' : el}</p>
      </li>
      <li class="soft_li">
        <a href="#" class="soft_btn"
          ><p>Dysk 3</p>
          <i class="fa-solid fa-download fa-xs"></i
        ></a>
        <p>- Standard Parts</p>
      </li>
      <li class="soft_li">
        <a href="#" class="soft_btn"
          ><p>Patch</p>
          <i class="fa-solid fa-download fa-xs"></i
        ></a>
        <p>- Uaktualnienie</p>
      </li>
    </ul>
  </div>
  <div class="soft_section old_soft">
    <ul class="soft_ul">
      <li>2021</li>
      <li class="soft_li">
        <a href="#" class="soft_btn"
          ><p>Dysk 1</p>
          <i class="fa-solid fa-download fa-xs"></i
        ></a>
        <p>- instrukcje instalacji</p>
      </li>
      <li class="soft_li">
        <a href="#" class="soft_btn"
          ><p>Dysk 2</p>
          <i class="fa-solid fa-download fa-xs"></i
        ></a>
        <p>${(el === "SE") ? 'SOLID EDGE' : el}</p>
      </li>
      <li class="soft_li">
        <a href="#" class="soft_btn"
          ><p>Dysk 3</p>
          <i class="fa-solid fa-download fa-xs"></i
        ></a>
        <p>- Standard Parts</p>
      </li>
      <li class="soft_li">
        <a href="#" class="soft_btn"
          ><p>Patch</p>
          <i class="fa-solid fa-download fa-xs"></i
        ></a>
        <p>- Uaktualnienie</p>
      </li>
    </ul>
  </div>
</div>`).join('')}
  </main>`

  downloadSection.innerHTML ='';

  downloadSection.insertAdjacentHTML('afterbegin', markupDownload);

  //Adding content for ticket section
  const SEversionMarkup = `<select
  id="soft_version"
  name="soft_version"
  class="soft_version hidden SEsoft">
  <option value="">Wersja</option>
  ${supportedSoft.SE.map(ver => `<option value="${ver}">${ver}</option>`).join('')}
  </select>`

  const NXversionMarkup = `<select
  id="soft_version"
  name="soft_version"
  class="soft_version hidden NXsoft">
  <option value="">Wersja</option>
  ${supportedSoft.NX.map(ver => `<option value="${ver}">${ver}</option>`).join('')}
  </select>`
   
  const markupTicket = `<select id="software" name="software" class="software"><option value="">Wybierze oprogramowania</option>${account.soft.map(el => `<option value="${el}">${el}</option>`).join('')}</select>${account.soft.map(el => el === 'SE' ? SEversionMarkup : NXversionMarkup).join('')}`;
  


  softDropdown.innerHTML ='';
  softDropdown.insertAdjacentHTML('afterbegin', markupTicket);
}

//Elements
export const formSoftware = function() {
  
  softDropdown.addEventListener('change', function () {
    const softType = document.querySelector('.software')
    const softVersion = document.querySelectorAll('.soft_version');
    
    const softName = softType.value;
    if (softName.length === 0) {
      softVersion.forEach(el => el.classList.add('hidden'));
      return;
    }
    softVersion.forEach(el => el.classList.add('hidden'));
    document.querySelector(`.${softName}soft`).classList.remove('hidden');
   });
}