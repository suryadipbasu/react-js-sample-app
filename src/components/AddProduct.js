import React from "react";

class AddProduct extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        productName: "",
        productPrice: Number(0)
      };
  }
//   state = { };
  render() {
    return (
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.AddProduct(this.state.productName, Number(this.state.productPrice));
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="emailHelp"
            name="productName"
            onChange={(e)=>{
                this.setState({productName: e.currentTarget.value});
            }} value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Product Price
          </label>
          <input type="number" className="form-control" id="inputPrice" name="productPrice" onChange={(e)=>{
                this.setState({productPrice: Number(e.currentTarget.value)});
            }} value={this.state.productPrice}
            />
        </div>
        <button type="submit" className="btn btn-primary col-2 mt-4">
          Add Product
        </button>
      </form>
    );
  }
}

export default AddProduct;
