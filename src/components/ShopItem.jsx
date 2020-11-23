import React, { useEffect, useState } from "react";

function ShopItem({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItem = async () => {
    const datalist = await fetch(
      "https://raw.githubusercontent.com/ryk072018/html-css-js/master/json/nike.json"
    );
    const items = await datalist.json();

    setItems(items.data);
  };

  return (
    <div className="item-info">
      {items.map((item) => {
        if (item.id === match.params.id) {
          return (
            <div key={item.id}>
              <h3>{item.shopName}</h3>
              <img className="item-img" src={item.img} alt="图片" />
              <h3>￥{item.pick}</h3>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ShopItem;
