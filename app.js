let list = document.querySelector('.list')
let Item_3 = document.querySelector('.item_3');

let btnHide = document.querySelector('.btnHide');
let btnShow = document.querySelector('.btnShow');
let btnUp = document.querySelector('.btnUp');
let btnDown = document.querySelector('.btnDown');
let btnRemove = document.querySelector('.btnRemove');
let btnAdd = document.querySelector('.btnAdd');
let listInput = document.querySelector('.listInput');


let btnUpItem_3 = Item_3.querySelector('.btnUp');
let btnDownItem_3 = Item_3.querySelector('.btnDown');
let Item_3_Previous = Item_3.previousElementSibling;
let Item_3_Next = Item_3.nextElementSibling;




function attachButtons(text){

    let li = document.createElement('li');
    li.classList.add('list__item');

    let liTextDiv = document.createElement('div');
    liTextDiv.classList.add('list__item__text');
    liTextDiv.textContent=text;

    let liButtonsDiv = document.createElement('div');
    liButtonsDiv.classList.add('list__item__buttons');

    let liButtonUp = document.createElement('button');
    liButtonUp.classList.add('btn--secondary','btnUp');
    liButtonUp.textContent = 'Up';

    let liButtonDown = document.createElement('button');
    liButtonDown.classList.add('btn--primary','btnDown');
    liButtonDown.textContent = 'Down';

    let liButtonRemove = document.createElement('button');
    liButtonRemove.classList.add('btn--tertiary','btnRemove');
    liButtonRemove.textContent = 'Remove';

    li.appendChild(liTextDiv);
    li.appendChild(liButtonsDiv);

    liButtonsDiv.appendChild(liButtonUp);
    liButtonsDiv.appendChild(liButtonDown);
    liButtonsDiv.appendChild(liButtonRemove);

    return li;
}

//Btn SHOW HIDE

btnHide.addEventListener('click', () => {
    list.style.display = "none";    
})

btnShow.addEventListener('click', () => {
    list.style.display = "block";    
})



//BTN ADD ITEM

btnAdd.addEventListener('click', () => {
let value=listInput.value;

let li=attachButtons(value);

list.appendChild(li);
 
})

list.addEventListener('click', (event) => {

    let obj=event.target;

    console.log(obj);

    if(obj.classList.contains('btnUp')) {
        obj.parentNode = obj.parentNode.previousElementSibling;
        obj.parentNode.previousElementSibling = obj.parentNode;
    }
})

