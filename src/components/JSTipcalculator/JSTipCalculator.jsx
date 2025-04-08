import React, { useState } from "react";
import "./JSTopCalculator.css";

const JSTipCalculator = () => {
  const [amount, setAmount] = useState("");
  const [finalAmount, setFinalAmount] = useState(0);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(e.target.value);

    if (!isNaN(value)) {
      const discount = value * 0.25; // 25% off
      const cashback = 75;
      const result = value - discount - cashback;
      setFinalAmount(result > 0 ? result.toFixed(2) : 0);
    } else {
      setFinalAmount(0);
    }
  };

  return (
    <div className="jsTopOuter">
      <div className="payingbill">
        <h6>Paying Bill</h6>
        <h3>Lion's Den</h3>
        <span>Southern Avenue, Kolkata</span>

        <div className="price">
          <input
            type="number"
            placeholder="₹"
            value={amount}
            onChange={handleAmountChange}
          />
          <span>Enter total amount as shown on the bill</span>
        </div>
      </div>

      <div className="discount">
        <div className="dstop">
          <div className="left">
            <h6>Flat discount</h6>
            <div className="offsection">
              <img src="flat-icon.png" alt="" />
              <div className="text">
                <h5>Flat 25% off</h5>
                <span>on total bill</span>
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="plusicon"> + </div>
          </div>
          <div className="right">
            <h6>Payment Partner</h6>
            <div className="slider">
              <div className="slides">
                <img src="mobikwik-icon.png" alt="" />
                <div className="text">
                  <h5>Cashback ₹75</h5>
                  <span>use MBKUPIGIRF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dsbot">
          <p>+ Up to extra 10% off with payment partner offers</p>
        </div>
      </div>

      <div className="showresult">
        <h4>Total amount to be paid:</h4>
        <h3>
          ₹<span>{finalAmount}</span>
        </h3>
        <span>After applying offers</span>
      </div>

      <button>Apply offers & pay</button>
    </div>
  );
};

export default JSTipCalculator;
