import { useState } from "react";
import bookLogo from "../../assets/Icon_Book.png";
import clockLogo from "../../assets/Icon_Clock 2.png";
import liveLogo from "../../assets/liveIcon.png";
import degLogo from "../../assets/Icon_Deg.png";
import adsLogo from "../../assets/Icon_Ads.png";
import razorpayLogo from "../../assets/Razorpay_Icon.png";
import "./Subscription.css";

function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [plans, setPlans] = useState([
    {
      id: 1,
      plan: "12 Months Subscription",
      total: 18580,
      monthly: 15,
      discountPrice: 179,
    },
    {
      id: 2,
      plan: "6 Months Subscription",
      total: 18550,
      monthly: 25,
      discountPrice: 149,
    },
    {
      id: 3,
      plan: "3 Months Subscription",
      total: 18500,
      monthly: 33,
      discountPrice: 99,
    },
  ]);

  return (
    <div className="sub">
      <div className="info">
        <h1 className="header">
          Access curated courses worth <br /> ₹{" "}
          <span className="cross">18,500</span> at just{" "}
          <span className="blue">₹ 99</span> per year!
        </h1>

        <div className="features">
          <div className="feature">
            <div className="logo">
              <img src={bookLogo} alt="book" />
            </div>
            <div className="text">
              <span className="blue">100+</span> Job relevant courses
            </div>
          </div>
          <div className="feature">
            <div className="logo">
              <img src={clockLogo} alt="clock" />
            </div>
            <div className="text">
              <span className="blue">20,000+</span> Hours of content
            </div>
          </div>
          <div className="feature">
            <div className="logo">
              <img src={liveLogo} alt="live" />
            </div>
            <div className="text">
              <span className="blue">Exclusive</span> webinar access
            </div>
          </div>
          <div className="feature">
            <div className="logo">
              <img src={degLogo} alt="degree" />
            </div>
            <div className="text">
              Scholarship worth <span className="blue">₹94,500</span>
            </div>
          </div>
          <div className="feature">
            <div className="logo">
              <img src={adsLogo} alt="no ads" />
            </div>
            <div className="text">
              <span className="blue">Ad Free</span> learning experience
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="steps">
          <div className="step">
            <div className="logo">1</div>
            <div className="text">Sign Up</div>
          </div>
          <div className="step">
            <div className="logo">2</div>
            <div className="text">Subscribe</div>
          </div>
        </div>

        <div className="header">Select your subcription plan</div>

        <div className="plans">
          <div className="plan blocked">
            <div className="exp">offer expired</div>
            <input
              type="radio"
              id="plan-0"
              className="radio"
              name="plan"
              value={0}
              disabled
            />
            <img className="check" />
            <label className="radiol" htmlFor="plan-0">
              12 Months Subscription
            </label>

            <div className="end">
              <div className="price">
                <span className="text">Total</span> ₹99
              </div>
              <div className="monthly">₹8 /mo</div>
            </div>
          </div>

          <div className={`plan ${selectedPlan === 1 ? "selected" : ""}`}>
            <div className="recom">Recommended</div>
            <input
              type="radio"
              id="plan-1"
              className="radio"
              name="plan"
              value={1}
              checked={selectedPlan === 1}
              onChange={() => setSelectedPlan(1)}
            />
            <img className="check" />
            <label className="radiol" htmlFor="plan-1">
              12 Months Subscription
            </label>

            <div className="end">
              <div className="price">
                <span className="text">Total</span> ₹179
              </div>
              <div className="monthly">₹15 /mo</div>
            </div>
          </div>

          <div className={`plan ${selectedPlan === 2 ? "selected" : ""}`}>
            <input
              type="radio"
              id="plan-2"
              className="radio"
              name="plan"
              value={2}
              checked={selectedPlan === 2}
              onChange={() => setSelectedPlan(2)}
            />
            <img className="check" />
            <label className="radiol" htmlFor="plan-2">
              6 Months Subscription
            </label>

            <div className="end">
              <div className="price">
                <span className="text">Total</span> ₹149
              </div>
              <div className="monthly">₹25 /mo</div>
            </div>
          </div>

          <div className={`plan ${selectedPlan === 3 ? "selected" : ""}`}>
            <input
              type="radio"
              id="plan-3"
              className="radio"
              name="plan"
              value={3}
              checked={selectedPlan === 3}
              onChange={() => setSelectedPlan(3)}
            />
            <img className="check" />
            <label className="radiol" htmlFor="plan-3">
              3 Months Subscription
            </label>

            <div className="end">
              <div className="price">
                <span className="text">Total</span> ₹99
              </div>
              <div className="monthly">₹33 /mo</div>
            </div>
          </div>
        </div>

        <hr />

        <div className="total">
          <div className="fee">
            <div className="text">Subscription Fee</div>
            <div className="price">₹{plans[selectedPlan - 1].total}</div>
          </div>

          <div className="banner">
            <div className="text">
              <div className="text1">Limited Time Offer</div>
              <div className="text2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.49998 22 1.99998 17.5 1.99998 12C1.99998 6.5 6.49998 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.59998 4 3.99998 7.6 3.99998 12C3.99998 16.4 7.59998 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z"
                    fill="#DE4313"
                  />
                </svg>{" "}
                Offer valid till 25th August 2023
              </div>
            </div>
            <div className="price">- ₹18,401</div>
          </div>

          <div className="final">
            <div className="text">Total (Incl. of 18% GST)</div>
            <div className="price">₹{plans[selectedPlan - 1].discountPrice}</div>
          </div>
        </div>

        <div className="buttons">
          <button type="button" className="cancel">Cancel</button>
          <button type="button" className="pay">Proceed to pay</button>
        </div>

        <div className="razorpay">
          <img src={razorpayLogo} alt="razorpay" />
        </div>

      </div>
    </div>
  );
}

export default Subscription;
