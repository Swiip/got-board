export const orders = ["raid", "march", "defense", "support", "consolidate"];

export const ordersQuantity = {
  normal: 2,
  special: 1
};

export const orderModifyers = {
  march: {
    normal: 0,
    special: 1
  },
  defense: {
    normal: 1,
    special: 2
  },
  support: {
    special: 1
  }
};

export const orderTokens = () =>
  [
    ...[...Array(ordersQuantity.normal)]
      .map((_, i) => orders.map(order => ({ i, type: order, normal: true })))
      .flat(),
    ...[...Array(ordersQuantity.special)]
      .map((_, i) => orders.map(order => ({ i, type: order, normal: false })))
      .flat()
  ].sort((a, b) => {
    if (a.type === b.type) {
      if (a.normal === b.normal) {
        return 0;
      }
      if (a.normal > b.normal) {
        return 1;
      }
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return -1;
  });

export const orderModifyer = order => {
  if (orderModifyers[order.type]) {
    return orderModifyers[order.type][order.normal ? "normal" : "special"];
  }
  return undefined;
};

export const substractOrders = (list1, list2) =>
  list1.filter(
    order1 =>
      !list2.find(
        order2 => order1.type === order2.type && order1.normal === order2.normal
      )
  );
