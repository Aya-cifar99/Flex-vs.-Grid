const api_url = 'https://jsonplaceholder.typicode.com/photos';
function createCards(){
    fetch(api_url).then((response)=>response.json())
    .then((result)=>{
        for(let i=0; i< 9; i++){
            let obj = result[i];
            let url = obj.url;
            let title = obj.title;
            createCard(url, title);             
        }
    })
}

createCards();

function createCard(url, title){
    
    let card = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");

    
    img.src = url;
    img.style.width = "30%";

    img.style.cssText = " border-radius: 5px 5px 0 0; max-width: 100%;  vertical-align: middle;";
    
    p.innerText = title;

    card.style.cssText = "overflow: hidden; background-color: hsl(0, 0%, 100%); box-shadow: 0 4px 8px 0 rgba(100, 100, 100, 0.2);  text-align: center; border-radius: 5px;   width: 18%; margin-top: 40px; margin-bottom: 20px;"

    card.appendChild(img);
    card.appendChild(p);

    let cards =  document.getElementById("cards");

    cards.style.display = "flex";
    cards.style.flexWrap = "wrap";
    cards.style.justifyContent = "space-between";
    cards.style.margin = '0 auto';
    cards.style.width = '80%';

    cards.appendChild(card);
}