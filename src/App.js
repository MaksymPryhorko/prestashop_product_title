import "./App.css";
import image from "./img/smallImage.jpg";
import { useState } from "react";

const locationPriceClassName = {
  topLeft: "Price-location__top-left",
  topRight: "Price-location__top-right",
  bottomLeft: "Price-location__bottom-left",
  bottomRight: "Price-location__bottom-right",
};

function App() {
  const [locationPrice, setLocationPrice] = useState("topLeft");

  function findLocationPriceClassName(locationPrice) {
    return locationPriceClassName[locationPrice];
  }

  function onChangeLocationPrice(e) {
    setLocationPrice(e.target.value);
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ position: "relative" }}>
        <img
          style={{ display: "block", width: "290px", height: "430px" }}
          src={image}
          alt="Sorry. No foto."
        />
        <div
          className={findLocationPriceClassName(locationPrice)}
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "red",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <p
            style={{
              margin: "0px",
            }}
          >
            Price
          </p>
        </div>
      </div>

      <form>
        <p>Choose a location price:</p>
        <select name="location" onChange={onChangeLocationPrice}>
          <option value="topLeft">Top-left</option>
          <option value="topRight">Top-right</option>
          <option value="bottomLeft">Bottom-left</option>
          <option value="bottomRight">Bottom-right</option>
        </select>
      </form>
    </div>
  );
}

export default App;
