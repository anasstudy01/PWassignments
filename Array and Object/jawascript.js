const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("meat")
console.log(shoppingCart)

shoppingCart.push("sugar")
console.log(shoppingCart)

shoppingCart[3]="green tea"
console.log(shoppingCart)


// Remove 'Honey' from the array
const honeyIndex = shoppingCart.indexOf("Honey")
// if (honeyIndex !== -1) {
//     shoppingCart.splice(honeyIndex, 1)
// }
// console.log(shoppingCart)
console.log(honeyIndex)
shoppingCart.splice(4,1);
console.log(shoppingCart)