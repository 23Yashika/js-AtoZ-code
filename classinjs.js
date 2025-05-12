class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    output(){
        return `product name = ${this.name} price = ${this.price}`;
    }
}
let p = new Product('Laptop',65000);
p.output;