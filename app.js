//////////// Question # 1 ////////////


function add(ben) {
    return function (ten) {
        console.log(ben + ten);
    };
};

let addition = add(5);
addition(5);



//////////// Question # 3 ////////////

let mydoc = document.getElementById("my doc");
mydoc.innerText(doc);
function hello() {
    console.log(mydoc);
};
let doc = hello("javascript");
 


//////////// Question # 8 ////////////

let market = localStorage.getItem("marketitems");
let marketitems = market ? JSON.parse(market) : [] ;

function availableitems () {
    let veg = {
        name: potato,
        price: 20,
        colour: yellow
    };
    marketitems.push(veg);
    console.log(marketitems);
    let stringify = JSON.stringify(marketitems);
    localStorage.setItem("marketitems", stringify)
};

