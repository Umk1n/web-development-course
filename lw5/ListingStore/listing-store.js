window.onload = function () {
  var listingElements = ['apple', 'orange'];
  var storeElements = [];
  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }
  function addToListingElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }
  function addNewElementListing(nameElement) {
    listingElements.push(nameElement);
  }
   function deleteElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition < 0) {
      elementPosition = storeElements.indexOf(element);
      storeElements.splice(elementPosition, 1);
    } 
    else {
      listingElements.splice(elementPosition, 1);
    }
  }
  function updateCount() {
    var store = document.querySelector('#store');
    var listing = document.querySelector('#listing');
    store.innerHTML = storeElements.length;
    listing.innerHTML = listingElements.length;
  }
  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';
    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }
    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
    updateCount();
  }
  var addButtonStore = document.querySelector('#add-button-store');
  addButtonStore.onclick = function () {
    var selectedOptionStore = document.querySelector('.listing-select option:checked');
    addToStoreElements(selectedOptionStore.innerText);
    updateUI();
  }
  var addButtonListing = document.querySelector('#add-button-listing');
  addButtonListing.onclick = function () {
    var selectedOptionListing = document.querySelector('.store-select option:checked');
    addToListingElements(selectedOptionListing.innerText);
    updateUI();
  }
  var addButtonNewElementListing = document.querySelector('#add-button-new-element')
  addButtonNewElementListing.onclick = function () {
    const nameElement = prompt('Новый элемент');
    addNewElementListing(nameElement);
    updateUI();
  }
  var deleteButtonElement = document.querySelector('#delete-button-element');
  deleteButtonElement.onclick = function () {
    var selectedOptionDelete = document.querySelector('.all-select option:checked');
    deleteElements(selectedOptionDelete.innerText);
    updateUI();
  }
  updateUI();
};