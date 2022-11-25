'use strict';
// import {accounts} from '../customerDataBase.js'
import adminView from './view_admin.js'
import * as model from  './model_admin.js'

let soldToList = model.generateSoldtoList();

function init() {
  model.getLocalStorage();
  adminView.optionsTabControl(model.accounts);
  adminView.generateClientsList(model.accounts);
  adminView.addingClient(soldToList, model.newClient);
  adminView.addSoftwareHandler();
  adminView.removeSoftwareHandler();
} 

init()

//1. Create soldToList
//2.