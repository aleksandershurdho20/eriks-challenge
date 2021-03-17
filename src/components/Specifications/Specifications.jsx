import React from "react";

export default function Specifications({
  productOneTitle,
  productOneDescription,
  productTwoTitle,
  productTwoDescription,
  getHighlighted,
  field,
  fieldTwo,
}) {
  return (
    <div className="d-flex flex-row justify-content-between p-3 mid">
      <div className="d-flex flex-column">
        <small className="text-muted mb-1">{productOneTitle}</small>
        <div className="d-flex flex-row">
          <span
            className={getHighlighted(field) ? "bg-transparent" : "bg-white"}
          >
            {productOneDescription}
          </span>
        </div>
      </div>

      <div className="d-flex flex-column">
        <small className="text-muted mb-2">{productTwoTitle}</small>
        <span
          className={getHighlighted(fieldTwo) ? "bg-transparent" : "bg-white"}
        >
          {productTwoDescription}
        </span>
      </div>
    </div>
  );
}
