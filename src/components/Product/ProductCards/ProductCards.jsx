import React, { useState } from "react";
import "./ProductCards.scss";
export default function ProductCards({ product, data }) {
  const [toogle, setToogle] = useState({});
  const hideProduct = (index) => {
    setToogle({ ...toogle, [index]: !toogle[index] });
  };
  return (
    <div className="col-md-3" key={data}>
      <button
        type="button"
        className="btn btn-danger btn-block"
        onClick={() => hideProduct(data)}
      >
        asas
      </button>
      {!!toogle[data] && (
        <div className="card">
          {" "}
          <img src={product.productImage} className="card-img-top w-100" />
          <div className="card-body pt-0 px-0">
            <h5 className="card-title text-center">{product.name}</h5>
            <div className="d-flex flex-row justify-content-between p-3 mid">
              <div className="d-flex flex-column">
                <small className="text-muted mb-1">Kleur</small>
                <div className="d-flex flex-row">
                  <span className="ghj">{product.Kleur}</span>
                </div>
              </div>

              <div className="d-flex flex-column">
                <small className="text-muted mb-2">Diameter</small>
                <span>{product["Inwendige diameter"]}</span>
              </div>
            </div>{" "}
            <div className="d-flex flex-row justify-content-between p-3 mid">
              <div className="d-flex flex-column">
                <small className="text-muted mb-1">Material</small>
                <div className="d-flex flex-row">
                  <span className="ghj">{product.Materiaal}</span>
                </div>
              </div>

              <div className="d-flex flex-column">
                <small className="text-muted mb-2">Temperatuurgebied</small>
                <span>{product.Temperatuurgebied}</span>
              </div>
            </div>{" "}
            <div className="d-flex flex-row justify-content-between p-3 mid">
              <div className="d-flex flex-column">
                <small className="text-muted mb-1">Toepassing</small>
                <div className="d-flex flex-row">
                  <span className="ghj">{product.Toepassing}</span>
                </div>
              </div>

              <div className="d-flex flex-column">
                <small className="text-muted mb-2">s</small>
                <span>{product["Inwendige diameter"]}</span>
              </div>
            </div>{" "}
          </div>
        </div>
      )}
    </div>
  );
}
