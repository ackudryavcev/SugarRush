import React, { useState } from "react";
import PropTypes from "prop-types";
import validator from "validator";
import "./PersonalInfo.css";

function PersonalInfo({ setPersonalData, setIsCorrectPersonalData }) {
  const API_KEY = process.env.ADDRESS_API_KEY;
  const [formData, setFormData] = useState({
    name: "",
    addressLine1: "",
    city: "",
    postalCode: "",
    country: "",
    email: "",
  });
  const [warnData, setWarnData] = useState({
    name: false,
    addressLine1: false,
    city: false,
    postalCode: false,
    country: false,
    email: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setWarnData((prevState) => ({ ...prevState, [name]: false }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const validatedAddress = await checkAddress(formData);

        const {
          addressLine1: validatedAddressLine1,
          city: validatedCity,
          postalCode: validatedPostalCode,
          country: validatedCountry,
        } = validatedAddress;

        if (validatedAddressLine1 === "undefined undefined") {
          setWarnData((prevState) => ({
            ...prevState,
            addressLine1: true,
          }));
        } else if (!validatedCity) {
          setWarnData((prevState) => ({ ...prevState, city: true }));
        } else if (!validatedPostalCode) {
          setWarnData((prevState) => ({
            ...prevState,
            postalCode: true,
          }));
        } else if (!validatedCountry) {
          setWarnData((prevState) => ({ ...prevState, country: true }));
        } else {
          setPersonalData(formData);
          setIsCorrectPersonalData(true);
        }
      } catch (error) {
        alert("There was an error validating the address.");
      }
    }
  };

  const validateForm = () => {
    const requiredFields = [
      "name",
      "addressLine1",
      "city",
      "postalCode",
      "country",
      "email",
    ];

    const newWarnData = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newWarnData[field] = true;
      }
    });

    if (!validator.isEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    setWarnData((prevState) => ({
      ...prevState,
      ...newWarnData,
    }));

    return Object.keys(newWarnData).length === 0;
  };

  const checkAddress = async (formData) => {
    const { addressLine1, city, postalCode, country } = formData;
    const response = await fetch(
      `https://geocode.search.hereapi.com/v1/geocode?q=${addressLine1},  ${city}, ${postalCode}, ${country}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    if (data.items.length > 0) {
      const { address, position } = data.items[0];
      return {
        addressLine1: address.houseNumber + " " + address.street,
        city: address.city,
        postalCode: address.postalCode,
        country: address.countryCode,
        latitude: position.lat,
        longitude: position.lng,
      };
    } else {
      throw new Error("Unable to validate address.");
    }
  };

  const renderInput = (name, label) => (
    <div className="personal-form-div">
      <label className="personal-form-label" htmlFor={name}>
        {label}:
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        className={
          warnData[name] ? "input-warn personal-input" : "personal-input"
        }
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="personal-form">
      {renderInput("name", "Name")}
      {renderInput("addressLine1", "Address Line 1")}
      {renderInput("city", "City")}
      {renderInput("postalCode", "Postal Code")}
      {renderInput("country", "Country")}
      {renderInput("email", "Email")}

      <button className="personal-info-button" type="submit">
        PAY HERE
      </button>
    </form>
  );
}

PersonalInfo.propTypes = {
  setPersonalData: PropTypes.func.isRequired,
  setIsCorrectPersonalData: PropTypes.func.isRequired,
};

export default PersonalInfo;
