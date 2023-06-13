import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import { CartContext } from "../../store/Context";
import { Link, useLocation } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [isCorrectPersonalData, setIsCorrectPersonalData] = useState(false);
  const [isCorrectPayment, setIsCorrectPayment] = useState(false);
  const [personalData, setPersonalData] = useState({});
  const [paymentError, setPaymentError] = useState(false);
  const { items, totalAmount, resetCart } = useContext(CartContext);
  const location = useLocation();
  const sum = items
    .map((item) => item.amount)
    .reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (isCorrectPayment) {
      resetCart();
    }
  }, [isCorrectPayment]);
  return (
    <div>
      <Header />
      <div className="payment-page-container">
        <div className="payment-container">
          <h3 className="payment-title">Overview</h3>
          {!isCorrectPayment && (
            <>
              <p className="payment-text">
                {sum}
                {sum === 1 ? " article" : " articles"}
              </p>
              <p className="payment-text">total €{totalAmount.toFixed(2)}</p>
            </>
          )}

          {!isCorrectPersonalData && (
            <h3 className="payment-subtitle">
              Please kindly provide the accurate information in the fields
              below, and once completed, you may proceed with the payment.
            </h3>
          )}
        </div>
        {!isCorrectPersonalData && (
          <PersonalInfo
            setPersonalData={setPersonalData}
            setIsCorrectPersonalData={setIsCorrectPersonalData}
          />
        )}
        {isCorrectPersonalData && (
          <div className="payment-container">
            <p className="payment-text-name">
              Your name:
              <span className="payment-text-black">{personalData.name}</span>
            </p>

            <p className="payment-text-block">
              Your delivery address
              <span className="payment-text-black">
                Country: {personalData.country}
              </span>
              <span className="payment-text-black">
                Zip Code: {personalData.postalCode}
              </span>
              <span className="payment-text-black">
                City: {personalData.city}
              </span>
              <span className="payment-text-black">
                Address: {personalData.addressLine1}
              </span>
            </p>
          </div>
        )}
        {paymentError && (
          <div className="payment-subtitle">
            Your payment was not successful Try again
          </div>
        )}
        <div className="payment-button">
          {isCorrectPersonalData && !isCorrectPayment && (
            <PaymentForm
              amount={totalAmount}
              setIsCorrectPayment={setIsCorrectPayment}
              setPaymentError={setPaymentError}
            />
          )}
        </div>
        {isCorrectPayment && (
          <div className="payment-container">
            <h4 className="payment-subtitle">Your payment was successful</h4>
            <Link className="payment-link-main-page" to="/products">
              CONTINUE SHOPPING
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
