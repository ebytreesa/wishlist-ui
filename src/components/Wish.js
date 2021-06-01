import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Wish = (props) => {
  return (
    <div
      key={props.wish.id}
      style={{ backgroundColor: "white", margin: "20 px" }}
    >
      <Button onClick={() => props.onDelete(props.wish.id)} text="Fjern" />
      <Link
        to={{ pathname: `/edit/${props.wish.id}`, state: { wish: props.wish } }}
      >
        opdate
      </Link>

      <h5>{props.wish.title}</h5>
      <p>{props.wish.description}</p>
      <a href="{props.wish.link}">{props.wish.link}</a>
    </div>
  );
};

export default Wish;
