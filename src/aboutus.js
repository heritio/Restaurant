function aboutUsSection(){
    let parent = document.getElementById("content");
   
    let sectionAbout = document.createElement("section");
    sectionAbout.id = "section-4";
    let titleh2 = document.createElement("h2");
    let menuImg = document.createElement("img");
    let divText = document.createElement("div");
    titleh2.textContent = "Brunch Menu";
    menuImg.src = "../images/barb.jpg";
    divText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    sectionAbout.append(titleh2);
    
    sectionAbout.append(divText);
    sectionAbout.append(menuImg);
    parent.replaceChild(sectionAbout,parent.children[2]);
}

export default aboutUsSection;