import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runSchoolPride } from "../lib/utils";
const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantites } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantites(0);
    runSchoolPride();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you For Your Order!</h2>
        <p className="email-msg">Check Your Email inbox for the receipt.</p>
        <p className="description">
          If you have any question,please email
          <a className="email" href="mailto:myolwinmoeaung125@gmail.com">
            myolwinmoeaung125@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
