'use strict'
export let accounts = [
    {
      company: 'ZPUE',
      soldTo: 1111,
      soft: ['SE', 'NX'],
    },
    {
      company: 'SaMAsz',
      soldTo: 2222,
      soft: ['SE'],
    },
    {
      company: 'Triggo',
      soldTo: 3333,
      soft: ['NX', 'Femap'],
    }
  ]
  

class Customer {
    constructor(company, soldTo, soft) {
        this.company = company;
        this.soldTo = soldTo;
        this.soft = soft
    }
}

export const generateSoldtoList = function() {
    return accounts.map(el => el.soldTo);
}

//Adding new client
export const newClient = function (company, soldTo, softArray) {
    const newCustomer = new Customer(company, soldTo, softArray);
    accounts.push(newCustomer);
    setLocalStorage();
    console.log(accounts);
}

export const setLocalStorage = function() {
    localStorage.setItem('acconuntsDB', JSON.stringify(accounts));
  }

export const getLocalStorage = function() {
    const data = JSON.parse(localStorage.getItem('acconuntsDB'));

    if (!data) return;
console.log(data);

    accounts = data;
    console.log(accounts);
    };