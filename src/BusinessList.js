import React from "react";
import Business from "./Business";

function BusinessList() {
  const businesses = ["business1", "business2", "business3", "business4"];

  return (
    businesses.map((business, index) => {
      return <Business />;
    })
  );
}

export default BusinessList;