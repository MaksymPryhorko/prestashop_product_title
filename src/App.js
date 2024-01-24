import "./App.css";
import image from "./img/smallImage.jpg";
import { useState } from "react";

const loc = {
  topLeft: "Price-location__top-left",
  topRight: "Price-location__top-right",
  bottomLeft: "Price-location__bottom-left",
  bottomRight: "Price-location__bottom-right",
};

function App() {
  const [locationPrice, setLocationPrice] = useState("top-left");
  const [locationPricePx, setLocationPricePx] = useState("Price-location__top-left");

  function findLocation(locationPrice) {
    switch (locationPrice) {
      case "top-left":
        setLocationPricePx(loc.topLeft);
        break;
      case "top-right":
        setLocationPricePx(loc.topRight);
        break;
      case "bottom-left":
        setLocationPricePx(loc.bottomLeft);
        break;
      case "bottom-right":
        setLocationPricePx(loc.bottomRight);
        break;

      default:
        break;
    }
  }

  function onChange(e) {
    setLocationPrice(e.target.value);
    findLocation(e.target.value);
  }

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div style={{ position: "relative" }}>
          <img
            style={{ display: "block", width: "290px", height: "430px" }}
            src={image}
            alt="Sorry. No foto."
          />
          <div
            className={locationPricePx}
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
          <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <label>
              <input
                type="radio"
                name="locationPrice"
                value="top-left"
                onChange={onChange}
                checked={locationPrice === "top-left"}
              />
              Top-left
            </label>
            <label>
              <input
                type="radio"
                name="locationPrice"
                value="top-right"
                onChange={onChange}
                checked={locationPrice === "top-right"}
              />
              Top-right
            </label>
            <label>
              <input
                type="radio"
                name="locationPrice"
                value="bottom-left"
                onChange={onChange}
                checked={locationPrice === "bottom-left"}
              />
              Bottom-left
            </label>
            <label>
              <input
                type="radio"
                name="locationPrice"
                value="bottom-right"
                onChange={onChange}
                checked={locationPrice === "bottom-right"}
              />
              Bottom-right
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
