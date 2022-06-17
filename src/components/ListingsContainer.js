import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((listings) => setListings(listings))
  }, [])

  function handleDelete(deletedListing) {
    console.log(deletedListing)
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }


  console.log(listings)
  const listingsToDisplay = listings.map((listing) => (
    <ListingCard
      key={listing.id}
      listing={listing}
      onHandleDelete={handleDelete}
    />
  ))

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
