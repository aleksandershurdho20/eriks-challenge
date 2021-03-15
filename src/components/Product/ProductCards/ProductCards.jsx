import React, { useState } from "react";
import "./ProductCards.scss";
export default function ProductCards({ product, data, getHighlighted }) {
  const [toogle, setToogle] = useState({});
  const hideProduct = (index) => {
    setToogle({ ...toogle, [index]: !toogle[index] });
  };
  const diameter = product["Inwendige diameter"];
  const badges = product.badges.split("|").join("");
  const maatVolges = product["Maat volgens AS568"];
  return (
    <div className="col-md-3" key={data}>
      <button
        type="button"
        className="btn btn-danger btn-block"
        onClick={() => hideProduct(data)}
      >
        {`Toogle Product ${data}`}
      </button>
      {!toogle[data] && (
        <div className="card">
          {" "}
          <img
            src={product.productImage}
            className="card-img-top w-100"
            alt="product-images"
          />
          <div className="card-body pt-0 px-0">
            <h5 className="card-title text-center">{product.name}</h5>
            <div className="d-flex flex-column p-3">
              <span>Article Number</span>
              <span> {product.Artikelnummer}</span>
            </div>
            <div className="d-flex flex-column p-3">
              <span>Sale Price</span>
              <span> {product.salePrice}</span>
            </div>
            <div className="d-flex flex-column p-3">
              <span>Uom</span>
              <span> {product.uom}</span>
            </div>
            <div className="d-flex flex-row justify-content-between p-3 mid">
              <div className="d-flex flex-column">
                <small className="text-muted mb-1">Kleur</small>
                <div className="d-flex flex-row">
                  <span className="ghj">{product.Kleur}</span>
                </div>
              </div>
              <img style={{ backgroundImage: `url(${badges})` }} alt="badges" />
              <div className="d-flex flex-column">
                <small className="text-muted mb-2">Diameter</small>
                <span
                  style={{
                    backgroundColor: getHighlighted(diameter)
                      ? "grey"
                      : "white",
                  }}
                >
                  {diameter}
                </span>
              </div>
            </div>{" "}
            <div className="d-flex flex-row justify-content-between p-3 mid">
              <div className="d-flex flex-column">
                <small className="text-muted mb-1">Material</small>
                <div className="d-flex flex-row">
                  <span
                    style={{
                      backgroundColor: getHighlighted(product.Materiaal)
                        ? "white"
                        : "transparent",
                    }}
                  >
                    {product.Materiaal}
                  </span>
                </div>
              </div>

              <div className="d-flex flex-column">
                <small className="text-muted mb-2">Temperatuurgebied</small>
                <span
                  style={{
                    backgroundColor: getHighlighted(product.Temperatuurgebied)
                      ? "white"
                      : "transparent",
                  }}
                >
                  {product.Temperatuurgebied}
                </span>
              </div>
            </div>{" "}
            <div className="d-flex flex-row justify-content-between p-3 mid">
              <div className="d-flex flex-column">
                <small className="text-muted mb-1">Toepassing</small>
                <div className="d-flex flex-row">
                  <span
                    style={{
                      backgroundColor: getHighlighted(product.Toepassing)
                        ? "white"
                        : "transparent",
                    }}
                  >
                    {product.Toepassing}
                  </span>
                </div>
              </div>

              <div className="d-flex flex-column">
                <small className="text-muted mb-2">Maat volgens</small>
                <span
                  style={{
                    backgroundColor: getHighlighted(maatVolges)
                      ? "transparent"
                      : "white",
                  }}
                >
                  {maatVolges}
                </span>
              </div>
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
}
