'use strict'
const helpTopics = document.querySelectorAll('.help_topic');
let logged = sessionStorage.getItem('ifLogged');
const companySoldTo = document.querySelector('.sold_to');

let currentAccount;
let currentSoldTo;

export const loggingToAccount = function(accountsDataBase) {
    currentSoldTo = document.querySelector('.sold_to').value;
    currentAccount = accountsDataBase.find(
      acc => acc.soldTo === Number(currentSoldTo)
    );
  
    //Guard clause
    if (!currentAccount) {
      //Add informaction about wrong soldto
      wrongSoldTo.classList.remove('hidden');
      //delete input field
      currentSoldTo.value = '';
      return;
    }
  
    logged = true;
    sessionStorage.setItem('ifLogged', logged);
    sessionStorage.setItem('client', JSON.stringify(currentAccount));
    companySoldTo.value = '';
  }

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
  
    //Creating initials
    const initials = inputField.value
      .split(' ')
      .map(word => word[0])
      .join('');
  
      displayHelpContent();
  };

// export const serchFilter =  function () {
//     let filter, a;
  
//     // Displaying topic list
//     helpTopicList.classList.remove('hidden');
  
//     //Hidding list when input field is empty
//     if (inputField.value.length === 0) {
//       helpTopicList.classList.add('hidden');
//     }
  
//     filter = inputField.value.toUpperCase();
  
//     //Leaving only matching elements
//     for (let i = 0; i < helpSubject.length; i++) {
//       a = helpSubject[i].getElementsByTagName('a')[0];
//       if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         helpSubject[i].style.display = '';
//       } else {
//         helpSubject[i].style.display = 'none';
//       }
//     }
//   }


