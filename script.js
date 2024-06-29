function addItem() {
    const itemName = document.getElementById("itemName").value;
    const itemPrice = parseFloat(document.getElementById("itemPrice").value);

    if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
        alert("Please enter valid item details.");
        return;
    }

    items.push({ name: itemName, price: itemPrice });
    updateBill();
}

function updateBill() {
    const itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
    let total = 0;

    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name}: ₹${item.price.toFixed(2)}`;
        itemList.appendChild(listItem);
        total += item.price;
    });

    document.getElementById("total").textContent = total.toFixed(2);
}

function generateReceipt() {
    if (items.length === 0) {
        alert("Please add items to generate a receipt.");
        return;
    }

    let receipt = "Receipt:\n";
    items.forEach(item => {
        receipt += `${item.name}: ₹${item.price.toFixed(2)}\n`;
    });
    receipt += `Total: ₹${document.getElementById("total").textContent}`;

    alert(receipt);
}

function clearBill() {
    items = [];
    updateBill();
}