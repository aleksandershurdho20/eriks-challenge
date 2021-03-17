import React, { useState } from "react";
import "./ProductCards.scss";
import Specifications from "components/Specifications";
export default function ProductCards({ product, data, getHighlighted }) {
  const [toogle, setToogle] = useState({});
  const hideProduct = (index) => {
    setToogle({ ...toogle, [index]: !toogle[index] });
  };
  const diameter = product["Inwendige diameter"];
  const badges = product.badges && product.badges.split("|");
  const maatVolges = product["Maat volgens AS568"];
  return (
    <div className="col-md-3" key={data}>
      <button
        type="button"
        className="btn toogle-btn btn-block mb-2"
        onClick={() => hideProduct(data)}
      >
        {`Toogle Product ${data}`}
      </button>
      {!toogle[data] && (
        <div className="card">
          {" "}
          <div className="card-body pt-0 px-0">
            <img
              src={product.productImage}
              className="card-img-top w-100"
              alt="product-images"
            />
            <h5 className=" text-center">{product.name}</h5>
            <div className="d-flex flex-column p-3">
              <span>Gross Price</span>
              <span> {product.grossPrice}</span>
            </div>
            <div className="d-flex flex-column p-3">
              <span>Sale Price</span>
              <span> {product.salePrice}</span>
            </div>
            <div className="d-flex flex-column p-3">
              <span>Uom</span>
              <span> {product.uom}</span>
            </div>
            <div className="d-flex flex-column p-3">
              <span>MinQuantity</span>
              <span> {product.minQuantity}</span>
            </div>
            <div className="d-flex flex-column p-3">
              <span>Hardheid</span>
              <span> {product.Hardheid}</span>
            </div>
            <div className="d-flex flex-column p-3">
              <span>Sku</span>
              <span> {product.sku}</span>
            </div>
            <div className="d-flex flex-column p-3">
              <span>Step Quantity</span>
              <span> {product.stepQuantity}</span>
            </div>
            <div className="d-flex justify-content-around">
              {badges &&
                badges.map((item, index) => (
                  <img src={item} key={index} alt="badge-images" />
                ))}
            </div>

            <Specifications
              productOneTitle={`Artikelnummer`}
              productOneDescription={product.Artikelnummer}
              productTwoTitle={`Diameter`}
              productTwoDescription={diameter}
              getHighlighted={getHighlighted}
              field="Artikelnummer"
              fieldTwo="Inwendige diameter"
            />
            <Specifications
              productOneTitle={`Kleur`}
              productOneDescription={product.Kleur}
              productTwoTitle={`Maat volgens`}
              productTwoDescription={maatVolges}
              getHighlighted={getHighlighted}
              field="Kleur"
              fieldTwo="Maat volgens AS568"
            />
            <Specifications
              productOneTitle={`Material`}
              productOneDescription={product.Materiaal}
              productTwoTitle={`Snoerdikte`}
              productTwoDescription={product.Snoerdikte}
              getHighlighted={getHighlighted}
              field="Materiaal"
              fieldTwo="Snoerdikte"
            />
            <Specifications
              productOneTitle={`Temperatuurgebied`}
              productOneDescription={product.Temperatuurgebied}
              getHighlighted={getHighlighted}
              field="Temperatuurgebied"
            />
          </div>
        </div>
      )}
    </div>
  );
}
