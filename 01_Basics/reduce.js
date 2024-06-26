const number=[1,2,3,4]
// const total = number.reduce(function(acc, curval){
//     return acc +curval
// })
// const total = number.reduce(function(acc, curval) 
// {
//     console.log(`acc= ${acc} curval = ${curval}  `)
//     return acc +curval
// },0 )

// console.log(total)

const shoppingCart = [
    {
        itemName: "js course",
        price: 1000
    },
    {
        itemName: "py course",
        price: 2000
    },
    {
        itemName: "mobile dev course",
        price: 6000
    },
    {
        itemName: "data science course",
        price: 11000
    },
]

const bill= shoppingCart.reduce((acc , itemName)=>acc + itemName.price ,0)     
console.log(bill)