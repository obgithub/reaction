import React from "react";
import PropTypes from "prop-types";

const CompletedOrderItem = ({ item, handleDisplayMedia }) => {
  let image;

  if (handleDisplayMedia(item)) {
    image = handleDisplayMedia(item).url();
  } else {
    image = "/resources/placeholder.gif";
  }

  return (
    <div className="row order-details-line">
      <div className="order-details-media"><img src={image} /></div>
      <div className="order-details-title">{item.variants.title}</div>
      <div className="order-details-quantity">{item.quantity}</div>
      <div className="order-details-price">{item.price}</div>
    </div>
  );
};


CompletedOrderItem.propTypes = {
  handleDisplayMedia: PropTypes.func,
  item: PropTypes.object
};

export default CompletedOrderItem;