import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-4">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>

      <div
        className="btn-group col-2"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            props.decrementProductQuantity(props.index);
          }}
        >
          -
        </button>

        <button type="button" className="btn btn-warning">
          {props.product.quantity}
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            // console.log(props);
            props.incrementProductQuantity(props.index);
          }}
        >
          +
        </button>

      </div>

      <div className="col-2 p-1">
        <h2>= ₹{props.product.quantity * props.product.price}/-</h2>
      </div>

      <div className="col-2 p-1">
      <button
            type="button"
            className="btn btn-danger btn-lg"
            onClick={() => {
              props.removeProduct(props.index);
            }}
          >
            Remove
          </button>
      </div>
    </div>
  );
}
