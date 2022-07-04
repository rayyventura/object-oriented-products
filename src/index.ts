export class Item {
    category: string;
    description: string;
    price: number;

    constructor({ category, description, price }) {
        this.category = category;
        this.description = description;
        this.price = price;
    }
}

export class TaxItem extends Item {
    constructor({ category, description, price }) {
        super({ category, description, price });
    }

    calculeTax(tax: number) {
        return this.price * this.price * tax;
    }
}

export class Beer extends TaxItem {
    constructor({ category, description, price }) {
        super({ category, description, price });
    }
    getTax() {
        return this.price * 0.20;
    }
}

export class Cigar extends TaxItem {
    constructor({ category, description, price }) {
        super({ category, description, price });
    }

    getTax() {
        return this.price * 0.25;
    }
}

export class Eletronics extends TaxItem {
    constructor({ category, description, price }) {
        super({ category, description, price });
    }

    getTax() {
        return this.price * 0.30;
    }
}

export class Water extends Item {
    constructor({ category, description, price }) {
        super({ category, description, price });
    }
}
type Items = Water | Cigar | Eletronics | Beer;

export class Order {
    items: Items[];
    constructor() {
        this.items = []
    }

    addItem(item: Items) {
        this.items.push(item);
    }
    getTaxes() {
        const tax = this.items.reduce(function (acc, item) {
            if (item instanceof Water) {
                return acc;
            } else {
                return acc + item.getTax();
            }
        }, 0);

        return tax;
    }
    getTotal() {
        const totalPrice = this.items.reduce(function (acc, item) { return acc + item.price }, 0);
        return totalPrice;
    }
}
