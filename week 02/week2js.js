// warn up activity //
// declare an array that stores a shopping list.
// This array should have 3 cateoreis (arrays) of the shopping item and each of these
// categories should be an array with at least 3 shopping items.

let shoppingList = [ ["milk","water","beer"], ["pasta","tomato","garlic"], ["toilet paper","shaving cream","shampo"] ] ;

console.log(shoppingList[1][2])



// objects inside array

let bigOne = [ 
    {cat: "veg", list: ["carrot","pepers"]},
    {cat: "dog", list: ["food","chews"]},
    {cat:"cleaning", list: ["sponges","liquid "]}
];

console.log(` Pass me the ${bigOne[0].list[0]}`);