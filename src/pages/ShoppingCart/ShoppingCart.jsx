import { useState } from "react";
import { Breadcrumb, ProductTable, CartTotal } from "../../components";
const ShoppingCart = () => {
  console.log("render shopping cart");
  return (
    <div>
      <Breadcrumb title={"Giỏ Hàng"} namePage={"Giỏ hàng"} />
      <div className="container mx-auto px-4">
        <div className="mt-20 mb-10 relative overflow-x-auto shadow-xl sm:rounded-lg">
          <ProductTable />
        </div>
        <CartTotal cart />
        <div className="clear-both mb-20"></div>
      </div>
    </div>
  );
};

export default ShoppingCart;
