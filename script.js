
// create Elements

function createForm() {
   let body = document.querySelector('body');
    let form = document.createElement('form');
    let script = document.querySelector('script')
    document.body.insertBefore(form, script);
    // console.log(body);
}
createForm();

function createInputs() {
    let form = document.querySelector('form');

    let inpName = document.createElement('input');
    let divOne= document.createElement('div');
    let inpEmail = document.createElement('input');
    let divTwo = document.createElement('div');
    
    divOne.style.color = 'red';
    divTwo.style.color = 'red';
   

    inpName.classList.add('name-input');
    inpEmail.classList.add('email-input');
    inpEmail.setAttribute('type','email')
   
    form.appendChild(inpName);
    form.appendChild(divOne);
    form.appendChild(inpEmail);
    form.appendChild(divTwo);
   
}
createInputs();

function createTextarea() {
    let form = document.querySelector('form');
    let textarea = document.createElement('textarea');
    let divThree = document.createElement('div');
    textarea.classList.add('textarea');
    textarea.setAttribute('placeholder', 'description');
    divThree.style.color = 'red';

    form.appendChild(textarea);
    form.appendChild(divThree);
}
createTextarea();



function createSelect() {
    let form = document.querySelector('form');
    let select = document.createElement('select');
    let divSelect = document.createElement('div');
    
     select.classList.add('select');

    let optionOne = document.createElement('option');
    let optionTwo = document.createElement('option');
    let optionThree = document.createElement('option');

    optionOne.classList.add('option-one');
    optionTwo.classList.add('option-two');
    optionThree.classList.add('option-three');

    optionOne.textContent='option-one';
    optionTwo.textContent='option-two';
    optionThree.textContent='option-three';

    optionOne.setAttribute( 'value', 'one');
    optionTwo.setAttribute( 'value', 'two');
    optionThree.setAttribute('value', 'three');
    
    select.appendChild(optionOne);
    select.appendChild(optionTwo);
    select.appendChild(optionThree);

    form.appendChild(select);
    form.appendChild(divSelect);
    select.style.marginTop = '10px';

}
createSelect();

function createBtn() {
    let button = document.createElement('button');
    button.setAttribute('type', 'submite');
    button.textContent='submite';
    let form = document.querySelector('form');
    form.appendChild(button);

    button.style.marginTop = '10px';
}
createBtn();

// add some styles

function addSomeStylesForm() {
    let form = document.querySelector('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.width = '400px';
    form.style.height = '400px';
    form.style.border = '1px solid blue';
    form.style.padding = '10px';

}
addSomeStylesForm();


function addSomeStylesTextarea() {
    let textarea = document.querySelector('textarea');
    textarea.style.width = '400px';
    textarea.style.height = '50px';
    textarea.style.margin = '0px';
    textarea.style.padding = '0px';
    textarea.style.resize = 'none';
    textarea.style.marginTop = '10px';
    
}
addSomeStylesTextarea();

function addSomeStylesInputs() {
    let inputs = document.querySelectorAll('input');
    for (input of inputs) {
        input.style.marginTop = '10px';
    }
    
 

}
addSomeStylesInputs();



//  Validation 

let form = document.querySelector('form');
let inputName = document.querySelector('.name-input');
let inputEmail = document.querySelector('.email-input')
let textarea = document.querySelector('textarea');

form.onsubmit = function one(event) {
    event.preventDefault();
    for (let elem of form.elements) {
        if (!elem.classList.contains('select') && elem.tagName !== 'BUTTON') {
            if (elem.value == '' && textarea.textContent == '') {
                elem.style.border = '2px solid red'
                elem.nextElementSibling.textContent = 'Is empty!';
                break
            } else {
                elem.nextElementSibling.textContent = '';
                elem.style.border = '2px solid green'
                
            }
            
        }
    }
    
    let inputNameValue = inputName.value;
    let inputEmailValue = inputEmail.value;
    let textareaValue = textarea.value;

    let user = new User(inputNameValue, inputEmailValue, textareaValue);
    
    function User(name,email,description) {
        this.name = name;
        this.email=email;
        this.description = description;
    }
    console.log(user);
}

