document.addEventListener("DOMContentLoaded", function() {

    let div = document.createElement("div"); 
    div.className = "header-container"; 

    let h1 = document.createElement("h1"); 
    h1.className = "h1"; 
    let h1Text = document.createTextNode("This is an h1"); 
    h1.appendChild(h1Text); 
    div.appendChild(h1);

    let h2 = document.createElement("h2"); 
    h2.className = "h2"; 
    let h2Text = document.createTextNode("This is an h2"); 
    h2.appendChild(h2Text); 
    div.appendChild(h2);

    let h3 = document.createElement("h3"); 
    h3.className = "h3"; 
    let h3Text = document.createTextNode("This is an h3"); 
    h3.appendChild(h3Text); 
    div.appendChild(h3);

    let h4 = document.createElement("h4"); 
    h4.className = "h4"; 
    let h4Text = document.createTextNode("This is an h4"); 
    h4.appendChild(h4Text); 
    div.appendChild(h4);

    let h5 = document.createElement("h5"); 
    h5.className = "h5"; 
    let h5Text = document.createTextNode("This is an h5"); 
    h5.appendChild(h5Text); 
    div.appendChild(h5);

    let h6 = document.createElement("h6"); 
    h6.className = "h6"; 
    let h6Text = document.createTextNode("This is an h6"); 
    h6.appendChild(h6Text); 
    div.appendChild(h6);
    
    document.body.appendChild(div); 

    let randomColor = ['brown', 'royalblue', 'lightgrey', 'gold', 'pink','blue', 'yellowgreen']; 

    function changeColor() {
        let pickColor = randomColor[Math.floor(Math.random()*randomColor.length)];
        return pickColor; 
    };

    h1.addEventListener("click", function () {
        let selectRandomColor = changeColor();
        h1.style.color = selectRandomColor; 
    });

    h2.addEventListener("click", function () {
        let selectRandomColor = changeColor();
        h2.style.color = selectRandomColor; 
    });

    h3.addEventListener("click", function () {
        let selectRandomColor = changeColor();
        h3.style.color = selectRandomColor; 
    });

    h4.addEventListener("click", function () {
        let selectRandomColor = changeColor();
        h4.style.color = selectRandomColor; 
    });

    h5.addEventListener("click", function () {
        let selectRandomColor = changeColor();
        h5.style.color = selectRandomColor; 
    });

    h6.addEventListener('click', function () {
        let selectRandomColor = changeColor();
        h6.style.color = selectRandomColor; 
    });

    let addButton = document.getElementsByClassName("btn"); 

    
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    
    addButton[0].addEventListener("click", addListItem); 

    let liNumber = 1;
    
    function addListItem() {
        let li = document.createElement("li");
        li.id = liNumber; 
        li.innerText = `This is the list item ${liNumber}`; 
        liNumber++;
        ul.appendChild(li);

        li.addEventListener('click', function() {
            let selectRandomColor = changeColor();
            li.style.color = selectRandomColor;
        });

        li.addEventListener('dblclick', function() {
            li.remove();
        })
    };
});