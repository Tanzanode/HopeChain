export const idlFactory = ({ IDL }) => {
  const Currency = IDL.Variant({ 'icp' : IDL.Null });
  const Price = IDL.Record({ 'currency' : Currency, 'amount' : IDL.Nat });
  const Product = IDL.Record({
    'productLongDesc' : IDL.Text,
    'productCategory' : IDL.Text,
    'name' : IDL.Text,
    'productShortDesc' : IDL.Text,
    'productID' : IDL.Nat,
    'isSold' : IDL.Bool,
    'isVisible' : IDL.Bool,
    'sellerID' : IDL.Principal,
    'productPicture' : IDL.Text,
    'productPrice' : Price,
  });
  const Product__1 = IDL.Service({
    'getCategory' : IDL.Func([], [IDL.Text], ['query']),
    'getIsSold' : IDL.Func([], [IDL.Bool], ['query']),
    'getIsVisible' : IDL.Func([], [IDL.Bool], ['query']),
    'getLongDesc' : IDL.Func([], [IDL.Text], ['query']),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getPicture' : IDL.Func([], [IDL.Text], ['query']),
    'getPrice' : IDL.Func([], [Price], ['query']),
    'getProductID' : IDL.Func([], [IDL.Nat], ['query']),
    'getSellerID' : IDL.Func([], [IDL.Principal], ['query']),
    'getShortDesc' : IDL.Func([], [IDL.Text], ['query']),
    'setCategory' : IDL.Func([IDL.Text], [], []),
    'setIsVisible' : IDL.Func([IDL.Bool], [], []),
    'setLongDesc' : IDL.Func([IDL.Text], [], []),
    'setName' : IDL.Func([IDL.Text], [], []),
    'setPicture' : IDL.Func([IDL.Text], [], []),
    'setPrice' : IDL.Func([Price], [], []),
    'setProductID' : IDL.Func([IDL.Nat], [], ['query']),
    'setShortDesc' : IDL.Func([IDL.Text], [], []),
    'updateStatus' : IDL.Func([], [], []),
  });
  const Transaction__1 = IDL.Service({
    'getBuyerID' : IDL.Func([], [IDL.Principal], ['query']),
    'getID' : IDL.Func([], [IDL.Nat], ['query']),
    'getPaidPrice' : IDL.Func([], [Price], ['query']),
    'getProductID' : IDL.Func([], [IDL.Nat], ['query']),
    'setBuyerID' : IDL.Func([IDL.Principal], [], []),
    'setPaidPrice' : IDL.Func([Price], [], []),
    'setProductID' : IDL.Func([IDL.Nat], [], []),
  });
  const Transaction = IDL.Record({
    'id' : IDL.Nat,
    'paidPrice' : Price,
    'productID' : IDL.Nat,
    'buyerID' : IDL.Principal,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const User = IDL.Service({
    'addToCart' : IDL.Func([Product], [], []),
    'addToPurchases' : IDL.Func([Transaction], [], []),
    'addToSoldItems' : IDL.Func([Transaction], [], []),
    'addToWallet' : IDL.Func([Price], [], []),
    'clearCart' : IDL.Func([], [], []),
    'getBuyersCart' : IDL.Func([], [IDL.Vec(Product)], ['query']),
    'getPrincipal' : IDL.Func([], [IDL.Principal], ['query']),
    'getPurchases' : IDL.Func([], [IDL.Vec(Transaction)], ['query']),
    'getSellersStock' : IDL.Func([], [IDL.Vec(Product)], ['query']),
    'getSoldItems' : IDL.Func([], [IDL.Vec(Transaction)], ['query']),
    'getWallet' : IDL.Func([], [IDL.Vec(Price)], ['query']),
    'listItem' : IDL.Func([Product], [], []),
    'removeFromCart' : IDL.Func([IDL.Nat], [], []),
    'setBuyersCart' : IDL.Func([IDL.Vec(Product)], [], []),
    'setPrincipal' : IDL.Func([IDL.Principal], [], []),
    'setPurchases' : IDL.Func([IDL.Vec(Transaction)], [], []),
    'setSellesStock' : IDL.Func([IDL.Vec(Product)], [], []),
    'setSoldItems' : IDL.Func([IDL.Vec(Transaction)], [], []),
    'setWallet' : IDL.Func([IDL.Vec(Price)], [], []),
    'takeFromWallet' : IDL.Func([Price], [Result], []),
  });
  const User__1 = IDL.Record({
    'principal' : IDL.Principal,
    'soldItems' : IDL.Vec(Transaction),
    'buyersCart' : IDL.Vec(Product),
    'sellersStock' : IDL.Vec(Product),
    'purchases' : IDL.Vec(Transaction),
    'wallet' : IDL.Vec(Price),
  });
  const Result_1 = IDL.Variant({ 'ok' : Product__1, 'err' : IDL.Text });
  const Main = IDL.Service({
    'addToCart' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
    'addToUserCart' : IDL.Func([IDL.Principal, Product], [IDL.Bool], []),
    'clearDB' : IDL.Func([], [], []),
    'clearUserCart' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'convertProductToType' : IDL.Func([Product__1], [Product], []),
    'convertTransactionToType' : IDL.Func([Transaction__1], [Transaction], []),
    'convertUserToType' : IDL.Func([User], [User__1], []),
    'createProduct' : IDL.Func(
        [
          IDL.Principal,
          IDL.Text,
          IDL.Text,
          Price,
          IDL.Text,
          IDL.Text,
          IDL.Bool,
          IDL.Text,
        ],
        [Product__1],
        [],
      ),
    'createTransaction' : IDL.Func(
        [IDL.Nat, IDL.Principal, Price],
        [Transaction__1],
        [],
      ),
    'createUser' : IDL.Func([IDL.Principal], [User], []),
    'editProduct' : IDL.Func(
        [
          IDL.Nat,
          IDL.Principal,
          IDL.Text,
          IDL.Text,
          Price,
          IDL.Text,
          IDL.Text,
          IDL.Bool,
        ],
        [Result],
        [],
      ),
    'getAllProductTypes' : IDL.Func([], [IDL.Vec(Product)], []),
    'getAllProductTypesFromObjectArray' : IDL.Func(
        [IDL.Vec(Product__1)],
        [IDL.Vec(Product)],
        [],
      ),
    'getAllProducts' : IDL.Func([], [IDL.Vec(Product__1)], ['query']),
    'getAllTransactionTypes' : IDL.Func([], [IDL.Vec(Transaction)], []),
    'getAllTransactionTypesFromObjectArray' : IDL.Func(
        [IDL.Vec(Transaction__1)],
        [IDL.Vec(Transaction)],
        [],
      ),
    'getAllTransactions' : IDL.Func([], [IDL.Vec(Transaction__1)], ['query']),
    'getAllUserPrincipals' : IDL.Func([], [IDL.Vec(IDL.Principal)], []),
    'getAllUsers' : IDL.Func([], [IDL.Vec(User)], ['query']),
    'getAllUsersTypes' : IDL.Func([], [IDL.Vec(User__1)], []),
    'getAllUsersTypesFromObjectArray' : IDL.Func(
        [IDL.Vec(User)],
        [IDL.Vec(User__1)],
        [],
      ),
    'getProductById' : IDL.Func([IDL.Nat], [Result_1], []),
    'getUserByPrincipal' : IDL.Func([IDL.Principal], [IDL.Opt(User)], []),
    'getUserCartCount' : IDL.Func([IDL.Principal], [IDL.Nat], []),
    'getUserCartProductTypes' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(Product)],
        [],
      ),
    'isInCart' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
    'loginUser' : IDL.Func([IDL.Principal], [IDL.Opt(User)], []),
    'purchase' : IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    'removeFromCart' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
    'removeFromUserCart' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
  });
  return Main;
};
export const init = ({ IDL }) => { return []; };