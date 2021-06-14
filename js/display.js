const header = document.createElement('header');

const homeLink = document.createElement('a');
homeLink.href = "./index.html";

const logoLeft = document.createElement('img');
logoLeft.src = "./Images/JAHSLogo.png";
logoLeft.alt = "Logo of JAHS"
logoLeft.style = "width:200px;height:200px;";
header.appendChild(homeLink);
homeLink.appendChild(logoLeft);

const wordart = document.createElement('img');
wordart.src = "./Images/wordart.png";
wordart.alt = "Word art saying Johannesburg Amateur Historical Society"
wordart.style = "width:1000px;height:200px;";
header.appendChild(homeLink);
homeLink.appendChild(wordart);

const logoRight = document.createElement('img');
logoRight.src = "./Images/JAHSLogo.png";
logoRight.alt = "Logo of JAHS"
logoRight.style = "width:200px;height:200px;";
header.appendChild(homeLink);
homeLink.appendChild(logoRight);

const lineVisual = document.createElement('hr');
lineVisual.className = "light";
header.appendChild(lineVisual);
///////////////////////////////////////

const nav = document.createElement('nav');
nav.className = "menu";
const menuList = document.createElement('ul');


const MenuItems = [
  { title: 'Articles', link: './Articles.html' },
  { title: 'Events', link: './Events.html' },
  { title: 'Interactive Map', link: './Map.html' },
  { title: 'About the Society', link: './About-Us.html' },
  { title: 'Contact Us', link: './Contact-Us.html' }
];

for (let item of MenuItems) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.innerText = item.title;
  a.href = item.link;
  li.appendChild(a);
  menuList.appendChild(li);
}

nav.appendChild(menuList);

const lineVisual1 = document.createElement('hr');
lineVisual1.className = "dark";
nav.appendChild(lineVisual1);
///////////////////////////////////////
const footer = document.createElement('footer');
const footerList = document.createElement('ul');

const lineVisual2 = document.createElement('hr');
lineVisual2.className = "dark";
footer.appendChild(lineVisual2);

const Footeritems = [
  { title: 'Out Of Character', link: './Out-Of-Character.html' },
  { title: 'Credits', link: './Credits.html' }
];

for (let item of Footeritems) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.innerText = item.title;
  a.href = item.link;
  li.appendChild(a);
  footerList.appendChild(li);
}

footer.appendChild(footerList);

const lineVisual3 = document.createElement('hr');
lineVisual3.className = "light";
footer.appendChild(lineVisual3);

const gif1 = document.createElement('img');
gif1.src = "./Images/Buttons/geo-citi.gif";
gif1.alt = "Web Button"
gif1.style = "width:88px;height:31px;";
footer.append(gif1);

const gif2 = document.createElement('img');
gif2.src = "./Images/Buttons/anybrowser2.gif";
gif2.alt = "Web Button"
gif2.style = "width:88px;height:31px;";
footer.append(gif2);

const creditText = document.createElement('p');
creditText.innerText = "@Jack Rathbone 2021";
footer.append(creditText);

const gif3 = document.createElement('img');
gif3.src = "./Images/Buttons/bookmark_this_page.gif";
gif3.alt = "Web Button"
gif3.style = "width:88px;height:31px;";
footer.append(gif3);

const gif4 = document.createElement('img');
gif4.src = "./Images/Buttons/got_html.gif";
gif4.alt = "Web Button"
gif4.style = "width:88px;height:31px;";
footer.append(gif4);

document.body.prepend(nav);
document.body.prepend(header);
document.body.appendChild(footer);