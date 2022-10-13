
// var list = document.querySelector(".list");

// var arrayRoommets  = [
//     "Asadbek",
//     "Jamshid",
//     "Javohir",
//     "Ibrohim",
//     "Sarvar",
//     "Nurbek",
//     "Samandar",
//     "Avaz",
// ]

// for(var i = 0; i < arrayRoommets.length; i++){

//     var item = document.createElement("li");

//     var title = document.createElement("h3");
//     title.textContent = arrayRoommets[i];
//     item.appendChild(title);

//     list.appendChild(item);
// }


// ================================================================================================

var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".form__input");
var elInputLast = elForm.querySelector(".form__input-last");
var elInputTel = elForm.querySelector(".form__input-tell");
var elSelect = elForm.querySelector(".form__select");
var list = document.querySelector(".list");

var array = [];

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();
    
    var obj = {
        country:elSelect.value,
        name: elInput.value,
        lastName:elInputLast.value,
        telNumber: elInputTel.value
    };
    
    array.push(obj);

    elForm.reset();
    list.textContent = "";
    
    for(var i = 0; i < array.length; i++){
        
        var item = document.createElement("li");

        var elCountry = document.createElement("h2");
        elCountry.textContent = array[i].country;
        item.appendChild(elCountry);
        
        var title = document.createElement("h4");
        title.textContent = array[i].name + " " + array[i].lastName;
        item.appendChild(title);


        var tellNumberTxt = document.createElement("p");
        tellNumberTxt.textContent = array[i].telNumber;
        item.appendChild(tellNumberTxt);
        
        list.appendChild(item);
    }
    
});

