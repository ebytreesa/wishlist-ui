import React from "react";
import Wish from "./Wish";

const WishList = (props) => {
  const renderWishList = () => {
    if (props.wishes) {
      return props.wishes.map((wish) => {
        return <Wish key={wish.id} wish={wish} onDelete={props.onDelete} />;
      });
    }
  };

  return (
    <div>
      <h1>{props.title}</h1>

      {renderWishList()}
    </div>
  );
};

export default WishList;
