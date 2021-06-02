import React, { useState } from "react";
import FormTextInput from "./FormTextInput";
import { Container, Typography, Button, TextField } from "@material-ui/core";

export class EditWish extends React.Component {
  constructor(props) {
    super(props);
    const { id, title, description, link } = props.location.state.wish;
    this.state = {
      id,
      title,
      description,
      link,
      titleError: false,
      descError: false,
      linkError: false,
    };
  }

  update = (e) => {
    e.preventDefault();
    this.setState({ titleError: false, descError: false, linkError: false });

    if (this.state.title === "") {
      this.setState({ titleError: true });
    }
    if (this.state.description === "") {
      this.setState({ descError: true });
    }
    if (this.state.link === "") {
      this.setState({ linkError: true });
    }

    if (this.state.title && this.state.description && this.state.link) {
      this.props.onUpdate(this.state);
      this.setState({ title: "", description: "", link: "" });
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <Container>
        <Typography variant="h4" color="primary" gutterBottom>
          Opdate Ønske
        </Typography>
        <form className="add-form" onSubmit={this.update}>
          <FormTextInput
            type="text"
            labelText="Title"
            name="title"
            placeholder=""
            onChange={(newValue) => this.setState({ title: newValue })}
            value={this.state.title}
            error={this.state.titleError}
            wrapClass="controller"
          />

          <FormTextInput
            type="text"
            labelText="Description"
            name="dec"
            placeholder=""
            multiline
            rows="4"
            onChange={(newValue) => this.setState({ description: newValue })}
            value={this.state.description}
            error={this.state.descError}
            wrapClass="controller"
          />

          <FormTextInput
            type="text"
            labelText="Link"
            name="link"
            placeholder=""
            onChange={(newValue) => this.setState({ link: newValue })}
            value={this.state.link}
            error={this.state.linkError}
            wrapClass="controller"
          />
          {/* 
          <input type="submit" value="Gem" /> */}
          <Button type="submit" variant="contained" color="secondary">
            Gem
          </Button>
          {/* <Input
          type="text"
          labelText="Title"
          name="title"
          placeholder=""
          onChange={(newValue) => this.setState({ title: newValue })}
          value={this.state.title}
          wrapClass="controller"
        />

        <Input
          type="text"
          labelText="Description"
          name="dec"
          placeholder=""
          onChange={(newValue) => this.setState({ description: newValue })}
          value={this.state.description}
          wrapClass="controller"
        />

        <Input
          type="text"
          labelText="ink"
          name="link"
          placeholder=""
          onChange={(newValue) => this.setState({ link: newValue })}
          value={this.state.link}
          wrapClass="controller"
        />     
        <input type="submit" value="Opdate" /> */}
        </form>
      </Container>
    );
  }
}

export default EditWish;
