import React, { useState } from "react";

export class EditWish extends React.Component {
  constructor(props) {
    super(props);
    const { id, title, description, link } = props.location.state.wish;
    this.state = {
      id,
      title,
      description,
      link,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (
      this.state.title === "" ||
      this.state.description === "" ||
      this.state.link === ""
    ) {
      alert("Alle felter skal udfyldes");
      return;
    } else {
      this.props.onUpdate(this.state);
      this.setState({ title: "", description: "", link: "" });
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.update}>
        <div className="form-controller">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
        </div>
        <div className="form-controller">
          <label>Description</label>
          <input
            type="text"
            name="dec"
            onChange={(e) => this.setState({ description: e.target.value })}
            value={this.state.description}
          />
        </div>
        <div className="form-controller">
          <label>Link</label>
          <input
            type="text"
            name="link"
            onChange={(e) => this.setState({ link: e.target.value })}
            value={this.state.link}
          />
        </div>
        <input type="submit" value="Opdate" />
      </form>
    );
  }
}

export default EditWish;
