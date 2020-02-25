const link =
    "https://spreadsheets.google.com/feeds/list/1wHTz-8-aeVE7CTApwiQlLZB_hri-92kNoW1KmmXEsnw/od6/public/values?alt=json";
window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch(link)
        .then(res => res.json())
        .then(handleData);
}

function handleData(data) {
    const myData = data.feed.entry;
    console.log("myData - console")
    console.log(myData)
    myData.forEach(showData);
}


function showData(singleRowData) {
    console.log('singleRowData - console');
    console.log(singleRowData.gsx$name.$t);

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);
    clone.querySelector("h1").textContent = singleRowData.gsx$name.$t;
    clone.querySelector("h4").textContent = singleRowData.gsx$price.$t;
    //alert ("hey")
    //document.querySelector(`#${singleRowData.price}`).appendChild(clone);
    document.querySelector("main").appendChild(clone);
}
 // NAVIGATION FIX//

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

/*USER IS ON CURRENT SECTION SELECTION*/

$(document).ready(function(){

 $('ul li a').click(function(){
  $('li a').removeClass("active");
    $(this).addClass("active");

 });

});


