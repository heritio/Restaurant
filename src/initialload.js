function initialLoad(){
    let content = document.getElementById("content");
    let header = document.createElement("div");
    header.classList.add("title");
    let headerText = document.createElement("p");
    headerText.textContent = "English Breakfast club";
    header.append(headerText);
    let tabDiv = document.createElement("div");
    tabDiv.classList.add("stylish");
    let li1 = document.createElement("h2");
    let li2 = document.createElement("h2");
    let li3 = document.createElement("h2");
    let li4 = document.createElement("h2");
    li1.textContent = "About Us";
    li2.textContent = "Brunch Menu";
    li3.textContent = "Dinner Menu";
    li4.textContent = "Cake";
    li1.classList.add("clickable");
    li2.classList.add("clickable");
    li3.classList.add("clickable");
    li4.classList.add("clickable");
    tabDiv.append(li1,li2,li3,li4);
    let section1 = document.createElement("section");
    section1.id = "section-4";
    let titleh2 = document.createElement("h2");
    let infoText = document.createElement("div");
    let aboutImg = document.createElement("img");
    titleh2.textContent = "About Us";
    infoText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    aboutImg.src = "../images/barb.jpg";
    section1.append(titleh2);
    section1.append(infoText);
    section1.append(aboutImg);

    let footer = document.createElement("footer");
    let footerText = document.createElement("p");
    footerText.textContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
    footer.append(footerText);
    
    content.append(header);
    content.append(tabDiv);
    content.append(section1);
    content.append(footer);
}

export default initialLoad;