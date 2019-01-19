var todoApp = document.getElementById('todoApp');

var h1 = document.createElement('h1');
h1.setAttribute("class", 'jumbotron text-white bg-dark display-4')
var h1Text = document.createTextNode("Todo App using DOM");

h1.appendChild(h1Text);
todoApp.appendChild(h1);

var inputDiv = document.createElement('div');
inputDiv.setAttribute('class', "input-group mb-3");

var inputField = document.createElement('input');
inputField.setAttribute('type', "text");
inputField.setAttribute('class', "form-control input-lg");
inputField.setAttribute('id', "inputField");
inputField.setAttribute('placeholder', "Enter your work details here...");
inputField.setAttribute('aria-describedby', "button-addon4");

var btnDiv = document.createElement('div');
btnDiv.setAttribute("class", 'input-group-append');

var addBtn = document.createElement('button');
var addBtnText = document.createTextNode('Submit');
addBtn.setAttribute('class', "btn btn-primary");
addBtn.setAttribute('id', "button-addon2");
addBtn.setAttribute('type', "button");
addBtn.setAttribute('onClick', "addWork()");

addBtn.appendChild(addBtnText);
btnDiv.appendChild(addBtn);
inputDiv.appendChild(inputField);
inputDiv.appendChild(btnDiv);
todoApp.appendChild(inputDiv);

var ul = document.createElement('ul');
ul.setAttribute("class", 'list-group');

function addWork() {
    var openBoxValue = document.getElementById("inputField").value;
    document.getElementById("inputField").value = "";
    if (openBoxValue === "") {
        alert("Error! Please enter your work details...")
    }
    else {
        var li = document.createElement('li');
        li.setAttribute('class', "list-group-item list-group-item-primary");
        var liText = document.createTextNode(openBoxValue);

        // li.addEventListener("click", function(){
        //     if(this.getAttribute('style') === null){
        //         this.setAttribute("style","text-decoration: line-through;");
        //     }else{
        //         this.removeAttribute("style");
        //     }
        // })

        var delLi = document.createElement('button');
        delLi.setAttribute('class', "btn btn-danger float-right");
        delLi.setAttribute('type', "button");
        var delLiTxt = document.createTextNode("Delete");
        delLi.appendChild(delLiTxt);

        delLi.addEventListener("click", function () {
            this.parentNode.remove();
        })

        var editBtn = document.createElement('button');
        editBtn.setAttribute('class', "btn btn-success float-right");
        editBtn.setAttribute('type', "button");
        var editBtnTxt = document.createTextNode("Edit");
        editBtn.appendChild(editBtnTxt);

        editBtn.addEventListener("click", function () {
            var newValue = prompt("Update your work details here...", openBoxValue);
            if (newValue !== "") {
                liText.data = "";
                openBoxValue = newValue;
                liText = document.createTextNode(openBoxValue);
                li.appendChild(liText);
                li.appendChild(delLi);
                li.appendChild(editBtn);
            } else {
                alert("You can't save empty value...")
            }
        })

        li.appendChild(liText);
        li.appendChild(delLi);
        li.appendChild(editBtn);
        ul.appendChild(li);
        todoApp.appendChild(ul);
    }
}

