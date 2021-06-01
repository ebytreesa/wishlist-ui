import React, { useState } from "react";

export class AddWish extends React.Component {
  state = {
    title: "",
    description: "",
    link: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.title === "" ||
      this.state.description === "" ||
      this.state.link === ""
    ) {
      alert("Alle feler skal udfyldes");
      return;
    } else {
      this.props.addWishHandler(this.state);
      this.setState({ title: "", description: "", link: "" });
      this.props.history.push("/");
    }
    console.log(this.state);
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.add}>
        <div className="form-controller">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Add wish"
            onChange={(e) => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
        </div>
        <div className="form-controller">
          <label>Description</label>
          <input
            type="text"
            name="dec"
            placeholder="Add description"
            onChange={(e) => this.setState({ description: e.target.value })}
            value={this.state.description}
          />
        </div>
        <div className="form-controller">
          <label>Link</label>
          <input
            type="text"
            name="link"
            placeholder="Add link"
            onChange={(e) => this.setState({ link: e.target.value })}
            value={this.state.link}
          />
        </div>
        <input type="submit" value="Save wish" />
      </form>
    );
  }
}

export default AddWish;
