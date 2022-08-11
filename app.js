let mainBody = document.querySelector('.main__body');
let inputHero = document.querySelector('.hero__input');
let btnSubmit = document.querySelector('.btnSubmit');
let btnEdit = document.querySelector('.btnEdit');
let btnSort = document.querySelector('.btnSort');

let checkboxHide = document.querySelector('.checkboxHide');



btnSubmit.addEventListener('click', () => {
    let value = inputHero.value;

    createCard(value);
})

function createCard(text){
    let card = document.createElement('div');
    card.classList.add('main__card');

    let cardTitle = document.createElement('h3');
    cardTitle.classList.add('main__card__title');
    cardTitle.innerHTML = text;

    let cardCheckboxWrapper = document.createElement('div');

    let cardChechboxLabel = document.createElement('p');
    cardChechboxLabel.innerHTML = 'Confirmed';

    let cardChechbox = document.createElement('input');
    cardChechbox.type='checkbox';
    cardChechbox.classList.add('checkboxCard');

    let cardButtonsWrapper = document.createElement('div');

    let cardButtonEdit = document.createElement('button');
    cardButtonEdit.classList.add('btnEdit', 'button--primary');
    cardButtonEdit.innerHTML = 'Edit';

    let cardButtonRemove = document.createElement('button');
    cardButtonRemove.classList.add('btnRemove','button--secondary');
    cardButtonRemove.innerHTML = 'Remove';


    card.appendChild(cardTitle);

    card.appendChild(cardCheckboxWrapper);
    cardCheckboxWrapper.appendChild(cardChechboxLabel);
    cardCheckboxWrapper.appendChild(cardChechbox);

    card.appendChild(cardButtonsWrapper);
    cardButtonsWrapper.appendChild(cardButtonEdit);
    cardButtonsWrapper.appendChild(cardButtonRemove);

    mainBody.appendChild(card);


    return card;

}

mainBody.addEventListener('click', (e) => {



    let obj=e.target;

      if(obj.classList.contains("btnEdit")){

        let card=obj.parentNode.parentNode;
        let cardTitle = card.querySelector('.main__card__title');
        let inputTitle = document.createElement('input');
        inputTitle.classList.add("inputTitle");

        
         inputTitle.value=cardTitle.textContent;

        card.insertBefore(inputTitle, cardTitle);
        card.removeChild(cardTitle);


        obj.classList.remove("btnEdit");

        obj.classList.add("btnSave");


        obj.textContent= 'Save';
    
     }else if(obj.classList.contains("btnSave")){

        let card=obj.parentNode.parentNode;
        let inputTitle = card.querySelector(".inputTitle");
        let cardTitle = document.createElement('h3');
        cardTitle.classList.add(".main__card__title");

        card.insertBefore(cardTitle, inputTitle);
        card.removeChild(inputTitle);

        cardTitle.textContent=inputTitle.value;
     }

     else if(obj.classList.contains("btnRemove")){

        let main=obj.parentNode.parentNode.parentNode;
        let card=obj.parentNode.parentNode;
        
        main.removeChild(card);
     }
});


function hideCards(arr){

    for(let i = 0; i<arr.length; i++){
        let chk=arr[i].querySelector('.checkboxCard');
        if(chk.checked == false) {
           arr[i].style.display="none";
           
        }
    }
}


function showCards(arr){

    for(let i = 0; i<arr.length; i++){

        arr[i].style.display="block";
           
    }
}


checkboxHide.addEventListener('click', () => {
  
    let cardsArr = mainBody.querySelectorAll(".main__card");


    cardsArr = Array.from(cardsArr);
   
   

    if(checkboxHide.checked==true){


         hideCards(cardsArr);
    }else{

        showCards(cardsArr);
    }

});

function sortCards(arr) {
    let cardsArrSort = mainBody.querySelectorAll(".main__card");
    console.log(cardsArrSort)

    for(let i=0; i<cardsArrSort.length-1; i++) {

        for(let j=i+1; j<cardsArrSort.length; j++) {


            let titleI = cardsArrSort[i].querySelector(".main__card__title");
            let titleJ = cardsArrSort[j].querySelector(".main__card__title");
            
            if(titleJ > titleI) {
                let aux = titleI;
                titleI = titleJ;
                titleJ = aux;

               
            }
            
            mainBody.appendChild(cardsArrSort[i]);

        }

        
    }

    
    

}


btnSort.addEventListener('click', () => {
    sortCards();
})
