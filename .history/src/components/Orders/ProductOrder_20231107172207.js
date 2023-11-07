/** @format */

import React, { useEffect, useState } from "react";
import { getProductOrder } from "../../Repository/Api";

const ProductOrder = () => {
    const [ order , setOrder ] = useState([])


    const fetchHandler = () => {
        getProductOrder(setOrder)
    }

    useEffect(() => {
        
    })

  return (
    <div className="user_product_order">
      <div className="title_account_second">Order history</div>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ProductOrder;
