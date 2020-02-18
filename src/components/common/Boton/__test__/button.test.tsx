
const shoppingList = [
  'diapers',
  'kleenex', 
  'trash bags', 
  'paper towels', 
  'beer',
];

test('lista de compras tien beer en ella', () => {
  expect(shoppingList).toContain('beer');
});
