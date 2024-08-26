class Customer {
    constructor(id, name, phone, address, email) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.email = email;
    }
}

class CustomerManager {
    constructor() {
        this.customers = [];
    }

    addCustomer(id, name, phone, address, email) {
        const newCustomer = new Customer(id, name, phone, address, email);
        this.customers.push(newCustomer);
    }

    displayCustomers() {
        if (this.customers.length === 0) {
            console.log("Không có khách hàng");
        } else {
            console.log("Danh sách khách hàng:");
            this.customers.forEach(customer => {
                console.log(`
                    - Mã KH: ${customer.id}, 
                    - Tên KH: ${customer.name}, 
                    - SĐT: ${customer.phone}, 
                    - Địa chỉ: ${customer.address}, 
                    - Email: ${customer.email}`);
            });
        }
    }
}

const manager = new CustomerManager();
manager.addCustomer(1, "Trương Đăng Vũ Linh", "0123456789", "123 Đường Láng, Hà Nội", "vulinh@codegym.vn");
manager.addCustomer(2, "Trương Đăng Vũ Linh", "0123456789", "123 Đường Láng, Hà Nội", "vulinh@codegym.vn");

manager.displayCustomers();

