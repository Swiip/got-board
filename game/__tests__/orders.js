import { orders, ordersQuantity, orderTokens } from "../orders";

test("orderTokens returns the right number of tokens", () => {
  const tokens = orderTokens();
  const types = orders.length;
  const quantity =
    ordersQuantity.normal * types + ordersQuantity.special * types;
  expect(tokens.length).toEqual(quantity);
});
