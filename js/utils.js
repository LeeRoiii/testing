
// js/utils.js
function updateMetrics(totalSales, totalOrders, totalRevenue) {
    document.getElementById('total-sales').textContent = '$' + totalSales.toLocaleString();
    document.getElementById('total-orders').textContent = totalOrders.toLocaleString();
    document.getElementById('total-revenue').textContent = '$' + totalRevenue.toLocaleString();
}

function populateRecentOrders(orders) {
    const orderList = document.getElementById('order-list');
    orders.forEach(order => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${order.name} - ${order.product}</span>
            <span>${order.price}</span>
        `;
        orderList.appendChild(li);
    });
}

function populateTopProducts(products) {
    const productsList = document.getElementById('top-products-list');
    productsList.innerHTML = ''; // Clear existing items

    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${product.name}</span>
            <span>$${product.sales.toFixed(2)}</span>
        `;
        productsList.appendChild(li);
    });
}
