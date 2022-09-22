function search() {
    document.getElementById("searchiconhide").style.cursor="pointer";
    document.getElementById("searchiconhide").style.display="block";
    
}

function hide() {
    document.getElementById("searchiconhide").style.cursor="pointer";
    document.getElementById("searchiconhide").style.display="none";
    
}


function openPersonArea() {
    document.getElementById("personiconhide").style.cursor="pointer";
    document.getElementById("personiconhide").style.display="flex";
    
}

function hidePersonArea() {
    document.getElementById("personiconhide").style.cursor="pointer";
    document.getElementById("personiconhide").style.display="none";
    
}

{

    const navigacia = ["home" , "home decor", "fashion", "beauty","food", "travel", "gift guides", ];
    const links = ["index.html" ,"homedecor.html", "fashin.html", "beauty.html" , "food.html", "travel.html", "gift guides.html"];
    
    let navigaciasigrdze = navigacia.length;

    let navigaciatext = '<ul>';
    for(let i=0; i<navigaciasigrdze; i++ ){
        navigaciatext += '<li><a href="'+ links[i] + '">' + navigacia[i] + "</a></li>";
        // console.log(navtext);
    }
    navigaciatext += "</ul>";
    document.getElementById("navigacia").innerHTML = navigaciatext;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display="block";
  dots[slideIndex-1].className += " active";
}








