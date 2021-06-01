const templateHead = document.createElement('template');
templateHead.innerHTML = `
<header>
<a href="./index.html">
  <img src="./Images/Logo.jpeg" alt="Logo of JAHS" style="width:200px;height:200px;">
  <a href="./index.html">
  <img src="./Images/wordart.png" alt="Word art saying Johannesburg Amateur Historical Society"
    style="width:1000px;height:200px;">
    <a href="./index.html">
  <img src="./Images/Logo.jpeg" alt="Logo of JAHS" style="width:200px;height:200px;">
  <hr>
</header>

<nav>
<ul>
  <li><h2><a href="./Articles.html"> Articles</a></h2></li>
  <li><h2><a href="./Events.html"> Events</a></h2></li>
  <li><h2><a href="./Map.html"> Interactive Map</a></h2></li>
  <li><h2><a href="./About-Us.html"> About the Society</a></h2></li>
  <li><h2><a href="./Contact-Us.html"> Contact Us</a></h2></li>
</ul>
  <hr>
</nav>
`

document.body.prepend(templateHead.content);

const templateFoot = document.createElement('template');
templateFoot.innerHTML = `
<footer>
<hr>
<ul>
<li><h2><a href="./Out-Of-Character.html"> Out Of Character</a></h2></li>
<li><h2><a href="./Credits.html"> Credits</a></h2></li>
</ul>
<hr>
<img src="./Images/Buttons/geo-citi.gif" alt="Web Button" style="width:88px;height:31px;">
<img src="./Images/Buttons/anybrowser2.gif" alt="Web Button" style="width:88px;height:31px;">
<p>@Jack Rathbone 2021</p>
<img src="./Images/Buttons/bookmark_this_page.gif" alt="Web Button" style="width:88px;height:31px;">
<img src="./Images/Buttons/got_html.gif" alt="Web Button" style="width:88px;height:31px;">
</footer>
`

document.body.appendChild(templateFoot.content);