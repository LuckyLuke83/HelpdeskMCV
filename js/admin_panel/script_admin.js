'use strict';

import {accounts} from '../customerDataBase.js'
import * as view from './view_admin.js'



const removingSoft = function () {
  document.querySelector('.soft_added').innerHTML = '';
};




function init() {
 view.optionsTabControl();
 view.generateClientsList(accounts);
}

init()
//Creating clients list




const btnClients = document.querySelector('.btn1');
btnClients.addEventListener('click', function () {
  generateClientsList();
});



//Adding Software
const addSoft = document.querySelector('.add_soft');
const removeSoft = document.querySelector('.remove_soft');
const addClientBtn = document.querySelector('.add_client_btn');

addSoft.addEventListener('click', function () {
  const software = `${document.querySelector('#software').value} `;
  document
    .querySelector('.soft_added')
    .insertAdjacentHTML('beforeend', software);
});

removeSoft.addEventListener('click', function () {
  removingSoft();
});

//Adding new client
addClientBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const company = document.querySelector('.company').value;
  const soldTo = Number(document.querySelector('.sold_to_value').value);
  // const soft = document.querySelector('.soft_added').innerHTML.slice(0, -1);

  const softArray = document
    .querySelector('.soft_added')
    .innerHTML.slice(0, -1)
    .split(' ');

  const newCustomer = new Customer(company, soldTo, softArray);
  accounts.push(newCustomer);

  //Deleting values
  document.querySelector('.company').value = document.querySelector(
    '.sold_to_value'
  ).value = '';
  removingSoft();
});
