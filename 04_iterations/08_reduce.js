const myNums = [1,2,3,4]

/* myTotal = myNums.reduce(function (acc,curr_val) {
    console.log(`acc: ${acc} and curr_val: ${curr_val}`);
    return acc+curr_val
} , 0) */

/* const myTotal = myNums.reduce( (acc,curr_val) => acc+curr_val , 0)

console.log(myTotal); */

const shopkart = [
    {
        itemName: "PC",
        price: 9999
    },
    {
        itemName: "monitor",
        price: 8999
    },
    {
        itemName: "mouse",
        price: 699
    },
    {
        itemName: "keyboard",
        price: 899
    },
]

const total = shopkart.reduce((acc,item) => acc + item.price , 0)

console.log(total);