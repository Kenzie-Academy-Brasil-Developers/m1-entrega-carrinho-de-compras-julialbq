const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
]

const body = document.body;
const main = document.createElement("main");
const title = document.createElement("h1");
const divInfo = document.createElement("div");
const item = document.createElement("h2");
const valor = document.createElement("p");
const ul = document.createElement("ul");
const sectionTotal = document.createElement("section");
const total = document.createElement("p");
const valorTotal = document.createElement("p");
const btnFinal = document.createElement("button");


title.innerText = "Virtual Market";
item.innerText = "Item";
valor.innerText = "Valor";
total.innerText = "Total";

btnFinal.innerText = "Finalizar";


body.appendChild(main);
main.append(title, divInfo, ul, sectionTotal, btnFinal)
divInfo.append(item, valor)
sectionTotal.append(total, valorTotal)

function listarProdutos(arrayProdutos){
    
    for(let i = 0; i < arrayProdutos.length; i++){
        let produto = arrayProdutos[i];        
        produtoCarrinho = adicionarProduto(produto)
    }
}

listarProdutos(productsCart)

function adicionarProduto(prod) {
    let tagLi = document.createElement("li");
    let tagNome = document.createElement("p");
    let tagPreco = document.createElement("span");

    tagNome.innerHTML = prod.name;
    tagPreco.innerHTML = `R$ ${prod.price}`;

    ul.appendChild(tagLi);
    tagLi.append(tagNome, tagPreco);
}

function listarValorTotal(arrayProdutos){
    let valorFinal = 0;
    for(let i = 0; i < arrayProdutos.length; i++){
        let produto = arrayProdutos[i];        
        let valorUnitario = produto.price;
        valorFinal += valorUnitario;
        
    }
    return valorFinal
}

let valorCompra = listarValorTotal(productsCart)
valorTotal.innerText = `R$ ${valorCompra}`;
