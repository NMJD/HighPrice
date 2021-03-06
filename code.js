function mostExpensiveItem (myItems){
    highestPriceNum = 0;

    for (let i = 0; i < items.length; i++){
        if (items[i].price > items[highestPriceNum].price){
            highestPriceNum = i;
        }
    }
    return items[highestPriceNum].itemName;
}

// Here is the Test

//You can add other objects to test

let items = [
{   itemName: "pizza",
        price: 20},

{   itemName: "rice",
        price: 10},

{   itemName: "sandwich",
        price: 5}
    
]

console.log(mostExpensiveItem(items));