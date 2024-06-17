//1
let shoppingList = [
    { name: "Яблука", quantity: 2, bought: false },
    { name: "Молоко", quantity: 1, bought: true },
    { name: "Хліб", quantity: 3, bought: false },
    { name: "Яйця", quantity: 12, bought: false }
];

function printShoppingList(list) {
    let boughtItems = list.filter(item => item.bought);
    let notBoughtItems = list.filter(item => !item.bought);

    console.log("Некуплені продукти:");
    notBoughtItems.forEach(item => console.log(`${item.name} - ${item.quantity} шт.`));

    console.log("Куплені продукти:");
    boughtItems.forEach(item => console.log(`${item.name} - ${item.quantity} шт.`));
}

function addItemToList(list, itemName, quantity) {
    list.forEach(item => {
        if (item.name === itemName) {
            item.quantity += quantity;
            // noinspection UnnecessaryReturnStatementJS
            return;
        }
    });
    list.push({ name: itemName, quantity: quantity, bought: false });
}

function buyItem(list, itemName) {
    list.forEach(item => {
        if (item.name === itemName) {
            item.bought = true;
        }
    });
}

//2
let receipt = [
    { name: "Яблука", quantity: 2, pricePerUnit: 20 },
    { name: "Молоко", quantity: 1, pricePerUnit: 30 },
    { name: "Хліб", quantity: 3, pricePerUnit: 12 },
    { name: "Яйця", quantity: 12, pricePerUnit: 2 }
];

function printReceipt(receipt) {
    console.log("Чек:");
    receipt.forEach(item => console.log(`${item.name} - ${item.quantity} шт. по ${item.pricePerUnit} грн`));
}

function calculateTotal(receipt) {
    let total = 0;
    receipt.forEach(item => {
        total += item.quantity * item.pricePerUnit;
    });
    return total;
}

function getMostExpensive(receipt) {
    let maxPrice = 0;
    let expensiveItem = null;
    receipt.forEach(item => {
        let totalPrice = item.quantity * item.pricePerUnit;
        if (totalPrice > maxPrice) {
            maxPrice = totalPrice;
            expensiveItem = item;
        }
    });
    return expensiveItem;
}

function calculateAvgPrice(receipt) {
    let totalQuantity = receipt.reduce((acc, item) => acc + item.quantity, 0);
    let totalPrice = receipt.reduce((acc, item) => acc + (item.quantity * item.pricePerUnit), 0);
    return totalPrice / totalQuantity;
}
//3
let styles = [
    { name: "color", value: "blue" },
    { name: "font-size", value: "18px" },
    { name: "text-align", value: "center" },
    { name: "text-decoration", value: "underline" }
];

function displayTextWithStyles(styles, text) {
    let styleString = styles.map(style => `${style.name}: ${style.value};`).join(" ");
    document.write(`<p style="${styleString}">${text}</p>`);
}

