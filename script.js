let stati = [
    {name: "Bla bla bla", text: "bla bla bla"},
    {name: "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW", text: "bakanana"}
];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("href").innerText = window.location.pathname;
    stati.forEach(function(el) {
        let item = document.createElement("div");
        
        item.classList.add("article-item");
        
        let title = document.createElement("h4");
        title.innerText = el.name;
        
        let text = document.createElement("p");
        text.innerText = el.text;
        
        item.appendChild(title);
        item.appendChild(text);
         document.getElementById("article").appendChild(item);
    });
    
});
