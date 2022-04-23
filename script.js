products = [
  { id: 0, name: "Água", brand: "Crystal", photo: "agua.jpg", price: 2 },
  {
    id: 1,
    name: "Biscoito Bono",
    brand: "Nestle",
    photo: "bicoito_chocolate_bono.jpg",
    price: 3.5,
  },
  {
    id: 2,
    name: "Barra de Chocolate",
    brand: "Milka",
    photo: "barra_chocolate_milka.jpg",
    price: 6,
  },
  {
    id: 3,
    name: "Refrigerante lata",
    brand: "Coca-Cola",
    photo: "coca_cola_lata.jpg",
    price: 3,
  },
  {
    id: 4,
    name: "Iogurte Morango",
    brand: "Nestle",
    photo: "iogurte.jpg",
    price: 4.2,
  },
  {
    id: 5,
    name: "Energético",
    brand: "Monster",
    photo: "monster.jpg",
    price: 7,
  },
  { id: 6, name: "Nutella", brand: "Nutella", photo: "nutella.jpg", price: 6 },
  {
    id: 7,
    name: "Sucrilhos",
    brand: "Elma Chips",
    photo: "sucrilhos.jpg",
    price: 6,
  },
  {
    id: 8,
    name: "Fandangos",
    brand: "Elma Chips",
    photo: "fandangos.jpg",
    price: 3.5,
  },
  {
    id: 1,
    name: "Toddynho",
    brand: "Pepsico",
    photo: "todynho.jpg",
    price: 2.5,
  },
];

cart = [];
cartObj = [];

function addCart(n) {
  cart.push(n);
  cartObj = cart.map((e) => products.find((g) => g.id == e));
}

function li(txt) {
  el = document.createElement("li");
  el.innerHTML = txt;
  cartList.appendChild(el);
}

function liObj(n) {
  let prodFind = products.find((e) => e.id == n);
  li(prodFind.name + " - " + "R$" + prodFind.price);
}

function somar() {
  S = 0;
  let resultado = cartObj.map((a, b) => (S += a.price));
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").innerHTML =
    "<b>Total:</b> R$ " + S.toFixed(2);
}

function limpar() {
  cartObj = [];
  cartList.innerHTML = "";
  somar();
}

function adicionar(photo, name, brand, price, id) {
  estrutura = `
        <div class="card">
                <img src="${photo}" class="card-photo" >
                <div class="card-body">
                    <div class="card-names">
                    <h5 class="card-name">${name}</h5>
                    <h5 class="card-brand">${brand}</h5>
                    </div>
                <p class="card-price">R$${price}</p>
                <button onclick="liObj(${id}); addCart(${id});somar()" class="button">Comprar</button>
                </div>
        </div>
    `;

  div_produtos.innerHTML += estrutura;
}

products.map((products) =>
  adicionar(
    "imgs/" + products.photo,
    products.name + " -",
    products.brand,
    " " + products.price,
    products.id
  )
);
