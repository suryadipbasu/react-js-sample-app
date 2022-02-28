import React from "react";

export default function Footer(props) {
  return (
    <div>
      <nav className="navbar fixed-bottom navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            type="button"
            className="btn btn-danger btn-lg"
            onClick={() => {
              props.resetQuantity();
            }}
          >
            Reset
          </button>
          <a className="navbar-brand">
            <h2>
              Total Payable Amount:&nbsp;&nbsp;&nbsp;₹
              {props.totalAmount}/-
            </h2>
          </a>

          <button type="button" className="btn btn-primary btn-lg">
            Proceed to Checkout {">>"}
          </button>
        </div>
      </nav>
    </div>
  );
}
