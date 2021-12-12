import React, { useEffect, useState } from "react";
import "./home.scss";
import Data from "../data.json";

function Home() {

const [products, setProducts] = useState([])

useEffect(() => {
    setProducts([].concat(Data))
}, [])

  return (
    <div className="HomePage">
      <div className="HomePage__listing">
        {products.map(({ id, title, Ideal_for, size, brand, price, image }) => (
          <div className="HomePage__card" key={id}>
            <img src={image} alt="" />
            <h4>{title}</h4>
            <p>Ideal for : {Ideal_for}</p>
            <p>{brand}</p>
            <p>Size : {size}</p>
            <p>Price : INR : {price}/-</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
