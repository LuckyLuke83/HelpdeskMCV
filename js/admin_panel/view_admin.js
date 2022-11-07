'use strict'
const optionBtns = document.querySelectorAll('.options_tab_item');
const optionsTab = document.querySelector('.options_tab_items');
const optionsContent = document.querySelectorAll('.options_content');
const clientList = document.querySelector('.clients_list');

export const optionsTabControl = function () {
    optionsTab.addEventListener('click', function (e) {
    const clicked = e.target.closest('.options_tab_item');
  
    // Guard clause
    if (!clicked) return;
  
    // Remove active classes
    optionBtns.forEach(b => b.classList.remove('item_active'));
    optionsContent.forEach(i => i.classList.remove('options_content_active'));
  
    // Activate tab
    clicked.classList.add('item_active');
  
    // Activate content area
    document
      .querySelector(`.options_content_${clicked.dataset.tab}`)
      .classList.add('options_content_active');
  })};

  //Generating Clients list on "Lista klientów"
 export const generateClientsList = function (accountsDB) {
    clientList.innerHTML = '';
    let html = `<div class="description_row">
    <div class="description_lp td">L.P.</div>
    <div class="description td">Nazwa</div>
    <div class="description td">Sold-to</div>
    <div class="description td">Oprogramowanie</div>
  </div>`;
  
  accountsDB.forEach(
      (el, index) =>
        (html += `<div class="description_row">
    <div class="description_lp">${index + 1}</div>
    <div class="description">${el.company}</div>
    <div class="description">${el.soldTo}</div>
    <div class="description">${el.soft}</div>
  </div>`)
    );
    clientList.insertAdjacentHTML('afterbegin', html);
  };