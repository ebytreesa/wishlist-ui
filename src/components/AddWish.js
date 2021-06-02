import React, { useState } from "react";
import FormTextInput from "./FormTextInput";
import { Container, Typography, Button, TextField } from "@material-ui/core";

export class AddWish extends React.Component {
  state = {
    title: "",
    description: "",
    link: "",
    titleError: false,
    descError: false,
    linkError: false,
  };

  add = (e) => {
    e.preventDefault();
    this.setState({titleError: false, descError:false, linkError:false})

    if (this.state.title === "") {
      this.setState({ titleError: true});
    }
    if (this.state.description === "") {
      this.setState({ descError: true });
    }
    if (this.state.link === "") {
      this.setState({ linkError: true });
    }
    // if (
    //   this.state.title === "" ||
    //   this.state.description === "" ||
    //   this.state.link === ""
    // ) {
    //   alert("Alle feler skal udfyldes");
    //   return;
    // } else {
    if (this.state.title && this.state.description && this.state.link) {
      this.props.addWishHandler(this.state);
      this.setState({ title: "", description: "", link: "" });
      this.props.history.push("/");
    }

    // }
    console.log(this.state);
  };
  render() {
    return (
      <Container>
        <Typography variant="h4" color="primary" gutterBottom>
          Oprette Ønske
        </Typography>
        <form className="add-form" onSubmit={this.add}>
          {/* <TextField label="Title" variant="outlined" fullWidth required/> */}
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
        </form>
      </Container>
    );
  }
}

export default AddWish;
