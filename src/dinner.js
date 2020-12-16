function dinnerSection(){
    let parent = document.getElementById("content");
   
    let sectionDinner = document.createElement("section");
    sectionDinner.id = "section-2";
    let titleh2 = document.createElement("h2");
    let menuImg = document.createElement("img");
    let divText = document.createElement("div");
    titleh2.textContent = "Dinner Menu";
    menuImg.src = "../images/pizza.jpg";
    divText.textContent = "dish 1: dish explanation dish 3: dish explanation dish 3: dish explanation";
    sectionDinner.append(titleh2);
    sectionDinner.append(menuImg);
    sectionDinner.append(divText);

    parent.replaceChild(sectionDinner,parent.children[2]);
}

export default dinnerSection;