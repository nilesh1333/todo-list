let input = document.getElementById("todo");
let enter_btn = document.getElementById("enter-btn");

enter_btn.addEventListener('click',() =>{
    if(input.value != ""){
        
        let show_div = document.getElementById("show_item");
        let newdiv = document.createElement("div");
        newdiv.className = "data";
        show_div.appendChild(newdiv);
        newdiv.innerHTML = input.value;  
        let a = newdiv.innerHTML;
        newdiv.style.background = "white";
        newdiv.style.color = "black";
        input.value = "";

        /*********Time and day*********/
        let para = document.createElement("p");
        para.className = "para";
        const now = new Date();
        const nameofdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = nameofdays[now.getDay()];
        const timeString = now.toLocaleTimeString();
        para.innerHTML = timeString;
        para.innerHTML += " ";
        para.innerHTML += day;
        newdiv.appendChild(para);

        /*********delete button*********/
        let del_btn = document.createElement("button");
        del_btn.className = "del_btn";
        del_btn.innerHTML = "Delete";
        newdiv.appendChild(del_btn);
        del_btn.addEventListener('click',() => {
            show_div.removeChild(newdiv);
        })
        /*********edit button*********/
        let edit_btn = document.createElement("button");
        edit_btn.className = "edit_btn";
        edit_btn.innerHTML = "Edit";
        newdiv.appendChild(edit_btn);
        edit_btn.addEventListener('click',() => {
             input.value = a;
        })
        

    }
})