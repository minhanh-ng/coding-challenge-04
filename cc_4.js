const products = [
    {name:"Lipstick", category: "makeup", price: 40.50, inventory: 50},
    {name: "Mascara", category: "makeup", price: 30, inventory: 100},
    {name: "Laptop", category: "electronics", price: 1000, inventory: 150},
    {name: "Carpet", category: "household", price: 100, inventory: 3},
    {name: "Jacket", category: "apparel", price: 200, inventory: 200}
];

for (const p of products) {
    let discount = 0
    switch (products) {
        case "electronics":
            discount = 0.2
            break;
        case "apparel":
            discount = 0.5
            break;
        case "makeup":
        case "household":
            discount = 0.1
        default:
            break;
    }
    let promoPrice = products.price - (products.price * discount)
    products.promoPrice = promoPrice.toFixed(2)
}


