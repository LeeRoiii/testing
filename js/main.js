document.addEventListener('DOMContentLoaded', function() {
    try {
        // Log data to console for debugging
        console.log('Monthly Data:', monthlyData);
        console.log('Sales Distribution:', salesDistribution);
        console.log('Top Products:', topProducts);

        // Create Sales Chart
        const salesCtx = document.getElementById('sales-chart').getContext('2d');
        createSalesChart(salesCtx, monthlyData);

        // Create Sales Pie Chart
        const pieCtx = document.getElementById('sales-pie-chart').getContext('2d');
        createPieChart(pieCtx, salesDistribution);

        // Create Top Product Chart
        const topProductCtx = document.getElementById('top-product-chart').getContext('2d');
        createTopProductChart(topProductCtx, topProducts);

        // Update metrics
        const totalSales = monthlyData.sales.reduce((a, b) => a + b, 0);
        const totalOrders = monthlyData.orders.reduce((a, b) => a + b, 0);
        const totalRevenue = totalSales * 0.2;
        updateMetrics(totalSales, totalOrders, totalRevenue);

        // Recent Orders
        const recentOrders = [
            { name: 'John Doe', product: 'Premium Package', price: '$599.99' },
            { name: 'Jane Smith', product: 'Annual Subscription', price: '$1,200.00' },
            { name: 'Bob Johnson', product: 'Consulting Service', price: '$850.00' },
            { name: 'Alice Williams', product: 'Custom Solution', price: '$3,000.00' },
            { name: 'Brother Brown', product: 'Standard Package', price: '$299.99' },
            { name: 'Charlies Brown', product: 'Standard Package', price: '$299.99' }
        ];
        populateRecentOrders(recentOrders);

        // Top Products
        const topProducts = [
            { name: 'Product A', sales: 1500 },
            { name: 'Product B', sales: 1200 },
            { name: 'Product C', sales: 900 },
            { name: 'Product D', sales: 850 },
            { name: 'Product E', sales: 750 }
        ];
        populateTopProducts(topProducts);

    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }

    // Sidebar functionality
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');

    // Function to toggle the sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
    }

    // Toggle sidebar on button click
    sidebarToggle.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});
