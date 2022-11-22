'use strict'
const companySoldTo = document.querySelector('.sold_to');
const wrongSoldTo = document.querySelector('.wrong_sold_to');

let currentAccount;
let currentSoldTo;

export let logged = sessionStorage.getItem('ifLogged');

export const loggingToAccount = function(accountsDataBase, handlerlogging) {
    currentSoldTo = document.querySelector('.sold_to').value;
    
    currentAccount = accountsDataBase.find(
      acc => acc.soldTo === Number(currentSoldTo)
    );
    
    //Guard clause
    if (!currentAccount) {
      //Add informaction about wrong soldto
      wrongSoldTo.classList.remove('hidden');
      //delete input field
      companySoldTo.value = '';
      return;
    }
    wrongSoldTo.classList.add('hidden');
    logged = true;
    sessionStorage.setItem('ifLogged', logged);
    sessionStorage.setItem('client', JSON.stringify(currentAccount));
    companySoldTo.value = '';
    handlerlogging(currentAccount);
  }

export const loggingOut = function() {  
  logged = false;
  sessionStorage.setItem('ifLogged', logged);
};

//displaying Help topics in main section after clicking on topic
export const displayHelpContent = function (e) {
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
  };

  //displaying Help topics in main section after clicking on btn
  export const displaySearchContent = function () {
    //Guard clause
    if (inputField.value.length === 0) {
      return;
    }
 
      displayHelpContent();
  };




