import initialLoad from "./initialload";
import brunchSection from "./brunch";
import dinnerSection from "./dinner";
import cakeSection from "./cake";
import aboutUsSection from "./aboutus";

initialLoad();

let navigation = document.querySelector(".stylish");



navigation.addEventListener("click", (e) => {

    if(e.target.textContent == "Brunch Menu"){
        brunchSection();
    }else if(e.target.textContent == "Dinner Menu"){
        dinnerSection();
    }else if(e.target.textContent == "Cake"){
        cakeSection();
    }else if(e.target.textContent == "About Us"){
        aboutUsSection();
    }
})