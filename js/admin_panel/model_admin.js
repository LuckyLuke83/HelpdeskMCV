'use strict'
import {accounts} from '../customerDataBase.js'

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

    console.log(accounts);
}