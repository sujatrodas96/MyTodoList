const inputbox = document.getElementById('input-box');
const listbox = document.getElementById('list-container');

function addtask(){
    if(inputbox.value == '')
    {
        alert('Please write something First');
    }
    else {
        //creating a li
        let li =  document.createElement("li");

        //input value will added in list wise
        li.innerHTML = inputbox.value;

        //li will be displayed in ul id listbox
        listbox.appendChild(li);
        //adding a cross button
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

listbox.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata()
{
    //for save the entire content and save the new data
    localStorage.setItem("tododata", listbox.innerHTML);
}


function showalldata()
{
    //for displaying the all data
    listbox.innerHTML=  localStorage.getItem("tododata");
}
showalldata();