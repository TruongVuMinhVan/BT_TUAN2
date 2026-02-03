/**
 * Câu 1: Khai báo constructor function Product
 * Tạo đối tượng sản phẩm với các thuộc tính cơ bản
 * * @param {string} id - Mã sản phẩm
 * @param {string} name - Tên sản phẩm
 * @param {number} price - Giá sản phẩm
 * @param {number} quantity - Số lượng tồn kho
 * @param {string} category - Danh mục sản phẩm
 * @param {boolean} isAvailable - Trạng thái bán
 */
let Product = function (id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
};

// ================================================================

/**
 * Câu 2: Khởi tạo mảng products
 * Gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
 */
let products = [];
// Thêm dữ liệu vào mảng (dùng push hoặc khai báo trực tiếp)
products.push(new Product("P01", "iPhone 15 Pro", 30000000, 10, "Phone", true));
products.push(new Product("P02", "Samsung S24 Ultra", 32000000, 5, "Phone", true));
products.push(new Product("P03", "Mouse Logitech", 500000, 0, "Accessories", true)); // Hết hàng
products.push(new Product("P04", "Keyboard Keychron", 2000000, 15, "Accessories", false)); // Ngừng bán
products.push(new Product("P05", "Macbook Air M2", 25000000, 8, "Laptop", true));
products.push(new Product("P06", "Tai nghe Sony", 3000000, 20, "Accessories", true));

console.log("--- Danh sách sản phẩm ban đầu ---");
console.log(products);

// ================================================================

/**
 * Câu 3: Tạo mảng mới chỉ chứa name và price
 * Sử dụng hàm map để biến đổi mảng
 */
let productNamesAndPrices = products.map((product) => ({
    name: product.name,
    price: product.price
}));

console.log("\n--- Câu 3: Mảng chỉ chứa Tên và Giá ---");
console.log(productNamesAndPrices);

// ================================================================

/**
 * Câu 4: Lọc các sản phẩm còn hàng trong kho
 * Điều kiện: quantity > 0
 */
let inStockProducts = products.filter(function (product) {
    return product.quantity > 0;
});

console.log("\n--- Câu 4: Sản phẩm còn hàng (Quantity > 0) ---");
console.log(inStockProducts);

// ================================================================

/**
 * Câu 5: Kiểm tra có ít nhất một sản phẩm giá trên 30.000.000
 * Sử dụng hàm some (trả về true nếu có ít nhất 1 phần tử thỏa mãn)
 */
let hasExpensiveProduct = products.some((product) => product.price > 30000000);

console.log("\n--- Câu 5: Có sản phẩm giá trên 30tr không? ---");
console.log(hasExpensiveProduct); // Kết quả: true

// ================================================================

/**
 * Câu 6: Kiểm tra tất cả sản phẩm danh mục "Accessories" có đang bán không
 * Logic: Lọc ra Accessories trước -> sau đó dùng every để kiểm tra isAvailable
 */
let areAllAccessoriesAvailable = products
    .filter((product) => product.category === "Accessories")
    .every((product) => product.isAvailable === true);

console.log("\n--- Câu 6: Tất cả phụ kiện đều đang mở bán? ---");
console.log(areAllAccessoriesAvailable); // Kết quả: false (do có Keyboard đang false)

// ================================================================

/**
 * Câu 7: Tính tổng giá trị kho hàng
 * Công thức: tổng += price * quantity
 * Sử dụng hàm reduce
 */
let totalInventoryValue = products.reduce(function (sum, product) {
    return sum + (product.price * product.quantity);
}, 0); // 0 là giá trị khởi tạo ban đầu của sum

console.log("\n--- Câu 7: Tổng giá trị kho hàng ---");
console.log(totalInventoryValue.toLocaleString() + " VND");

// ================================================================

/**
 * Câu 8: Dùng for...of duyệt mảng và in thông tin
 * Output: Tên - Danh mục - Trạng thái
 */
console.log("\n--- Câu 8: Duyệt mảng bằng for...of ---");
for (const product of products) {
    let status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${product.name} - ${product.category} - ${status}`);
}

// ================================================================

/**
 * Câu 9: Dùng for...in để in tên thuộc tính và giá trị
 * Lưu ý: for...in dùng để duyệt các key (thuộc tính) của một object
 * Ở đây ta lấy ví dụ duyệt sản phẩm đầu tiên trong mảng
 */
console.log("\n--- Câu 9: Duyệt thuộc tính sản phẩm đầu tiên bằng for...in ---");
let firstProduct = products[0];

for (const key in firstProduct) {
    // Kiểm tra để đảm bảo key thuộc về object đó chứ không phải từ prototype (best practice)
    if (Object.hasOwnProperty.call(firstProduct, key)) {
        console.log(`Thuộc tính: ${key} | Giá trị: ${firstProduct[key]}`);
    }
}

// ================================================================

/**
 * Câu 10: Lấy danh sách tên các sản phẩm đang bán VÀ còn hàng
 * Điều kiện: isAvailable === true && quantity > 0
 * Kết hợp filter và map
 */
let activeProductNames = products
    .filter((product) => product.isAvailable && product.quantity > 0)
    .map((product) => product.name);

console.log("\n--- Câu 10: Tên các sản phẩm đang bán và còn hàng ---");
console.log(activeProductNames);