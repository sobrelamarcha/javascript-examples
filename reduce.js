const orders = [
    {title: 'order1', amount:4},
    {title: 'order2', amount:2},
    {title: 'order3', amount:3},
    {title: 'order4', amount:1},
]

function sumAmount(currentAmount, order) {
    return currentAmount + order.amount
}

function getTotalAmount (orders) {
    return orders.reduce(sumAmount,0);
}

console.log(getTotalAmount(orders));