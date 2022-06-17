import React, { useState } from "react";

function ListingCard({ listing, onHandleDelete }) {
  const { description, image, location } = listing
  const [button, setButton] = useState(false)

  function handleClick() {
    setButton((button) => !button)
  }

  function handleDeleteListing() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "delete",
    })
      .then((response) => response.json())
      .then(() => onHandleDelete(listing))
  }


  return (
    <li className="card" >

      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {/* {true ? (
          <button className="emoji-button favorite active" >★</button>
        ) : (
          <button className="emoji-button favorite" >☆</button>
        )} */}
        <button onClick={handleClick}>{button ? "★" : "☆"}</button>

        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
