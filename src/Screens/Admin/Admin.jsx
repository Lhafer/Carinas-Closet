import React, { useState, useEffect } from "react";
import { db } from "../../Backend/firebase.jsx";
import { collection } from "firebase/firestore";
import { useLocation } from "react-router-dom";
export const Admin = () => {
  const [colRef, setColRef] = useState();
  const location = useLocation();
  console.log("ragg");
  console.log(db);
  return <div>Admin</div>;
};
