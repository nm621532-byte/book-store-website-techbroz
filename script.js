const books = [
  ["Rich Dad", 299, "📕"],
  ["Wings of Fire", 249, "📘"],
  ["Atomic Habits", 399, "📗"],
  ["Godaan", 150, "📙"],
];
grid.innerHTML += books.map(
  ([name, price, icon]) =>
    `<div class="tile book">
      <i>${icon}</i><br>
      <b>${name}</b>
      <p>₹${price}</p>
      <button onclick="buy()">Buy</button>
    </div>`
).join("");
function buy() { cart.textContent++; }
