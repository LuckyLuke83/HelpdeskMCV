'use strict';
import {accounts} from '../customerDataBase.js'
import adminView from './view_admin.js'
import * as model from  './model_admin.js'

let soldToList = model.generateSoldtoList();

function init() {
  adminView.optionsTabControl(accounts);
  adminView.generateClientsList(accounts);
  adminView.addingClient(soldToList, model.newClient);

}

init()

//1. Create soldToList
//2.