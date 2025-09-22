// Step 2

const products = [
    {sku: "M-001", name:"Lipstick", category: "makeup", price: 40.50, inventory: 50},
    {sku: "M-002", name: "Mascara", category: "makeup", price: 30, inventory: 100},
    {sku: "E-003", name: "Laptop", category: "electronics", price: 1000, inventory: 150},
    {sku: "H-004", name: "Carpet", category: "household", price: 100, inventory: 3},
    {sku: "A-005", name: "Jacket", category: "apparel", price: 200, inventory: 200}
];

// Step 3
for (let p of products) {
    let discount = 0

    switch (p.category) {
        case "electronics":
            discount = 0.20
            break;
        case "apparel":
            discount = 0.15
            break;
        case "makeup":
        case "household":
            discount = 0.10
        default:
            break;
    }

    let promoPrice = p.price - (p.price * discount);
    p.promoPrice = +promoPrice.toFixed(2)
};

// Step 4
const customers = [
    {
        id: 1,
        customerType: "regular",
        couponCode: "SAVE10",
        taxRate: 0.085,
        cart:[{sku:"E-003", qty: 1}, {sku:"H-004", qty: 2}]
    },
    {
        id: 2,
        customerType: "student",
        couponCode: "FREESHIP",
        taxRate: 0.085,
        cart:[{sku:"M-001", qty: 2}, {sku: "A-005", qty: 5}, {sku: "H-004", qty: 1}]

    },
    {
        id: 3,
        customerType: "senior",
        couponCode: "",
        taxRate: 0.085,
        cart: [{sku: "M-002", qty: 1}, {sku: "E-003", qty: 3}, {sku: "A-005", qty: 1}]
    }

];

let customerType = "regular"
let extraDiscount = 0;
if (customerType === "student") 
    extraDiscount = 0.05;
 else if (customerType === "senior") 
    extraDiscount = 0.07;
 else 
    extraDiscount = 0
;

// Step 5
for (const c of customers) {
    let subtotal = 0;

    const cartQty = {};

    for (const item of c.cart){
        const qty = item.qty || 1
        cartQty[item.sku] = (cartQty[item.sku] || 0) + qty;
    }

    for (const p of products){
        const qty = cartQty[p.sku] || 0;
        if (qty === 0) continue;
        subtotal += p.promoPrice * qty;
        p.inventory -= qty;
    }
 
  let customerType = c.customerType;
  let extraDiscount = 0;
  if (customerType === "student") {
    extraDiscount = 0.05;
  } else if (customerType === "senior") {
    extraDiscount = 0.07;
  } else {
    extraDiscount = 0;
  }

  let finalTotal = subtotal * (1 - extraDiscount);
  console.log(`Customer ${c.id}: $${finalTotal.toFixed(2)}`);

};

// Step 6
const productAfterDiscount = products[0];
for (a in productAfterDiscount){
    console.log(`${a}: ${productAfterDiscount[a]}`)
};

// Step 7
for (const [index, product] of Object.entries(products)) {
    for (const [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`)
    }
};

