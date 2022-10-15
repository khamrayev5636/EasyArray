
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
var elSelect = elForm.querySelector(".form__select");
var elFirstName = elForm.querySelector(".form__input");
var elSecondName = elForm.querySelector(".form__input-last");
var elTell = elForm.querySelector(".form__input-tell");
var text = document.querySelector(".list");


var array = [];

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();
    
    var obj = {
        firstName: elFirstName.value,
        lastName: elSecondName.value,
        phoneNumber: elTell.value,
        selectCountry: elSelect.value,
    };
    
    array.push(obj);
    
    elForm.reset();
    text.textContent = "";
    
    for(var i = 0; i < array.length; i++){  
        var item = document.createElement("li");
        
        var titleCountry = document.createElement("h2");
        titleCountry.textContent = array[i].selectCountry;
        titleCountry.style.color = "red"
        item.appendChild(titleCountry);
        
        var title = document.createElement("h3");
        title.textContent = array[i].firstName + " " + array[i].lastName;
        title.style.fontStyle = "italic"
        title.style.fontWeight = "900"
        item.appendChild(title);
        
        var phone = document.createElement("h4");
        phone.textContent = array[i].phoneNumber;
        phone.style.color = "green"
        item.appendChild(phone);

        text.appendChild(item);
    }
})