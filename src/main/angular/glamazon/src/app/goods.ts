export class Goods {
    id: number;
    name: String;
    importType: String;
    price: number;
    imageUrl: String;
    category: String;
    subTotal: number;
    totalTax: number;
    total: number;
    quantity: number;
    available: number;

    constructor(name: String, importType: String, price: number, imageUrl: String, category: String,  subTotal: number, totalTax: number, total: number, quantity: number, available?: number) {
        this.name = name;
        this.importType = importType;
        this.price = price; 
        this.imageUrl = imageUrl; 
        this.category = category;
        this.subTotal = subTotal;
        this.totalTax = totalTax;
        this.total = total;
        this.quantity = quantity;
        this.available = available;
        
    }
}