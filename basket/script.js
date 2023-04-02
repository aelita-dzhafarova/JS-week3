const prices = document.querySelectorAll('.itemprice');

function sum() {
    return Number(prices[0]["innerText"]) 
    + Number(prices[1]["innerText"]) 
    + Number(prices[2]["innerText"]) 
    + Number(prices[3]["innerText"])
}

let totalCost = sum();

document.getElementById('sum').textContent = totalCost;

const button = document.querySelector('.button');
const total = document.querySelector('#sum');

button.addEventListener('click', () => {
    prices[0]["innerText"] = Number(prices[0]["innerText"]) * 8/10;
    prices[1]["innerText"] = Number(prices[1]["innerText"]) * 80/100;
    prices[2]["innerText"] = Number(prices[2]["innerText"]) * 8/10;
    prices[3]["innerText"] = Number(prices[3]["innerText"]) * 8/10;
    total.textContent = sum();
    button.setAttribute('disabled', true); 
  });




