function checkout(items) {
    let total = 0;

    for (let item of items) {
        let price = item.prc * item.qty;
        if (item.taxable) {
            price *= 1.06;
        }
        total += price;
    }

    return +total.toFixed(2);
}

console.log(checkout([
  { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
  { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
  { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
]));
