import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShopList() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const datalist = await fetch(
      "https://raw.githubusercontent.com/ryk072018/html-css-js/master/json/nike.json"
    );

    const items = await datalist.json();
    // console.log(items);
    setItems(items.data);
  };

  return (
    <div className="shop-list">
      <h2>Shop List</h2>
      <div className="shop-items">
        {items.map((item, i) => (
          <h3 key={i} className="shop-item">
            <Link to={`/shopList/${item.id}`}>{item.shopName}</Link>
          </h3>
        ))}
      </div>
    </div>
  );
}

export default ShopList;
