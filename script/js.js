const link = "https://spreadsheets.google.com/feeds/list/1SbC39QCEhGXAiTay_iISo9lOUP8dYm2wRgdqh7HpPag/od6/public/values?alt=json";
window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch("https://spreadsheets.google.com/feeds/list/1fQjUIAIEB98DGih-JanUjNW_tEcJaNygxNDd4qtAElU/od6/public/values?alt=json")
        .then(res => res.json())
        .then(handleData);
}

//CREATE TEMPLATE `---- wtf???



function handleData(data) {
    const myData = data.feed.entry;
    console.log("myData - console");
    console.log(myData);
    myData.forEach(function(oneCat){

        const a = document.createElement("a");
        a.setAttribute("href", `#${oneCat.gsx$category.$t}`);
        document.querySelector(".top-ul>ul>li").appendChild(a);
        a.textContent=oneCat.gsx$category.$t;

        const section = document.createElement("section");
        section.id = oneCat.gsx$category.$t;
        const h2 = document.createElement("h2");
        h2.textContent = oneCat.gsx$category.$t;
        section.appendChild(h2);

        document.querySelector(".test").appendChild(section);
    });
    getProducts()
    //showData();
}

function getProducts(){
    fetch("https://spreadsheets.google.com/feeds/list/1SbC39QCEhGXAiTay_iISo9lOUP8dYm2wRgdqh7HpPag/od6/public/values?alt=json")
        .then(res => res.json())
        .then(showData);
//    .then(function (response){
//        return response.json();
//    })
//    .then(function (data){
//        showData(data);
//    })
}

function showData(data) {
    const allData = data.feed.entry;
    console.log("allData - console");
    console.log(allData);
    allData.forEach(function (singleRowData){
        const template = document.querySelector("#destinationTemplate").content;
        const clone = template.cloneNode(true);
        clone.querySelector("h4").textContent = singleRowData.gsx$name.$t;
        console.log(`#${singleRowData.gsx$category.$t}`);
        document.querySelector(`#${singleRowData.gsx$category.$t}`).appendChild(clone);
     });
}

//function addInformation(singleRowData){
//    const template = document.querySelector("#destinationTemplate").content;
//    const clone = template.cloneNode(true); clone.querySelector("h3").textContent = singleRowData.gsx$name.$t;
//
////    const template0 = document.querySelector("#courseTemplate").content;
////    const clone0 = template0.cloneNode(true); clone0.querySelector("h3").textContent = singleRowData.gsx$name.$t;
////    //clone.querySelector("h4").textContent = singleRowData.gsx$price.$t;
//    //alert ("hey")
//    //document.querySelector(`#${singleRowData.price}`).appendChild(clone);
//    document.querySelector("main").appendChild(clone);
//}


