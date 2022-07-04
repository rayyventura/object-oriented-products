import { Beer, Cigar, Eletronics, Item, Water, Order } from "./index.js";

test("Deve criar um pedido e calcular o total", function () {
  const order = new Order();
  order.addItem(new Beer({ category: "Beer", description: "Brahma", price: 6 }));
  order.addItem(new Cigar({ category: "Cigar", description: "Malboro", price: 10 }));
  order.addItem(new Eletronics({ category: "Eletronics", description: "IPhone 13", price: 13000 }));
  order.addItem(new Water({ category: "Water", description: "Crystal", price: 1 }));
  const total = order.getTotal();
  expect(total).toBe(13017);
});

test("Deve criar um pedido e calcular os impostos", function () {
  const order = new Order();
  order.addItem(new Beer({ category: "Beer", description: "Brahma", price: 6 }));
  order.addItem(new Cigar({ category: "Cigar", description: "Malboro", price: 10 }));
  order.addItem(new Eletronics({ category: "Eletronics", description: "IPhone 13", price: 13000 }));
  order.addItem(new Water({ category: "Water", description: "Crystal", price: 1 }));
  const taxes = order.getTaxes();
  expect(taxes).toBe(3903.7);
});
