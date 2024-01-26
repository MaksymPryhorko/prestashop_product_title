import "./App.css";
import image from "./img/smallImage.jpg";
import { useState } from "react";

const locationPriceClassName = {
  0: "Price-location__disabled",
  1: "Price-location__top-left",
  2: "Price-location__top-right",
  3: "Price-location__center-left",
  4: "Price-location__center-right",
  5: "Price-location__bottom-left",
  6: "Price-location__bottom-right",
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

      <div className="col-lg-8">
        <p>Choose a location price:</p>
        <select
          name="DNKSETCARTRULEWITHLINK_SHOW_STICKER_PRODUCT"
          className=" fixed-width-xl"
          id="DNKSETCARTRULEWITHLINK_SHOW_STICKER_PRODUCT"
          onChange={onChangeLocationPrice}
        >
          {/* <option value="topLeft">Top-left</option>
          <option value="topRight">Top-right</option>
          <option value="bottomLeft">Bottom-left</option>
          <option value="bottomRight">Bottom-right</option> */}
          <option value="0">Disabled</option>
          <option value="1">Top Left</option>
          <option value="2" selected="selected">
            Top Right
          </option>
          <option value="3">Center Left</option>
          <option value="4">Center Right</option>
          <option value="5">Bottom Left</option>
          <option value="6">Bottom Right</option>
        </select>
      </div>
    </div>
  );
}

export default App;
