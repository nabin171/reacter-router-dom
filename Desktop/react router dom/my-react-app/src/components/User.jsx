import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  return <div>this one is my :{params.nabin}</div>;
};

export default User;
