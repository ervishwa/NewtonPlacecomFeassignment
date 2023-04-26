//const api = "https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5";

//selectors

const container = document.getElementById("page_indicator");
const list = document.getElementById("issue_container");
const prevIssue = document.getElementById("load_prev");
const nextiIssue = document.getElementById("load_next");


let pagenumber = 1;

function getdata(pageNumber){
fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`).
then(data=>data.json()).
then(res=> {
   list.innerHTML="";
   res.forEach(curr => {
   const li = document.createElement('li');
   li.innerText = curr.title;
   list.append(li);
   });
});
}
loadContent();

function loadContent(){
    container.innerHTML ="";
    const element = document.createElement("h3");
    element.innerText = `Page Number ${pagenumber}`;
    container.append(element);
    getdata(pagenumber);
}

prevIssue.addEventListener('click',()=>{
    console.log("calling prev")
 if(pagenumber!=1){
    pagenumber--;
    loadContent();
 }
})

nextiIssue.addEventListener('click',()=>{
    console.log("calling netx")
   pagenumber++;
   loadContent();
   })