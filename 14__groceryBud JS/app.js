const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editId = '';

form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);
window.addEventListener('DOMContentLoaded', setupItems);

// ****** FUNCTIONS **********
function addItem(eventObject) {
    eventObject.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value !== "" && !editFlag) {       
        createListItem(id, value);
        displayAlert('item added to the list', 'success');
        groceryContainer.classList.add('show-container');
        addToLocalStorage(id, value);
        setBackToDefault();        
    } else if(value !==  '' && editFlag) {
        editElement.innerHTML = grocery.value;
        displayAlert('Item changed', 'success');
        editLocalStorage(editId, value);
        setBackToDefault();
        
    } else {
        displayAlert('please enter value', 'danger')
    }    
};

function deleteItem(eventObject) {
    const element = eventObject.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    groceryList.removeChild(element);

    if(groceryList.children.length === 0) {
        groceryContainer.classList.remove('show-container');
    }

    displayAlert('item removed', 'danger');
    setBackToDefault();
    removeFromLocalStorage(id);
}

function editItem(eventObject) {
    const element = eventObject.currentTarget.parentElement.parentElement;
    editElement = eventObject.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = 'edit';
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    
    if (items.length > 0) {
        items.forEach(item => {
            groceryList.removeChild(item);
        });
    }

    groceryContainer.classList.remove('show-container');
    displayAlert('your list is empty', 'danger');
    localStorage.removeItem('list');
    setBackToDefault();
}

function setBackToDefault() {
    grocery.value ='';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit';
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    const grocery = {id: id, value: value};
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage (id) {
    let items = getLocalStorage();
    items = items.filter(function(item) {

        if(item.id !== id) {
            return item;
        }
    });
    localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem('list') 
    ? JSON.parse(localStorage.getItem('list'))
    : [] ;
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function(item) {

        if(item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('list', JSON.stringify(items));
}

// ****** SETUP ITEMS **********
function setupItems() {
    let items = getLocalStorage();

    if(items.length > 0) {
        items.forEach(item => {
            createListItem(item.id, item.value);
        });
        groceryContainer.classList.add('show-container');
    }
}

function createListItem(id, value) {
    const element = document.createElement('article');
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
            <!-- edit btn -->
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <!-- delete btn -->
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
            </div>
        `;
    const editBtn = element.querySelector('.edit-btn');
    const deleteBtn = element.querySelector('.delete-btn');

    editBtn.addEventListener('click', editItem);
    deleteBtn.addEventListener("click", deleteItem);

    groceryList.appendChild(element);
}