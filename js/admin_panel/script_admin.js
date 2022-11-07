'use strict';
import {accounts} from '../customerDataBase.js'
import * as view from './view_admin.js'
import newCustomer from './view_admin.js'

function init() {
  view.optionsTabControl();
  view.generateClientsList(accounts);
  newCustomer.addingClient();
  newCustomer.addSoftwareHandler();
  newCustomer.removeSoftwareHandler();
}

init()
