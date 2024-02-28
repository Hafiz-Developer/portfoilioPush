import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { pricingOptions } from "./pricingCardData";

const Pricing: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("standard");

  useEffect(() => {
    const buttons = document.querySelectorAll(".mainPricingButton button");
    buttons.forEach((button) => {
      if (button.textContent === selectedOption) {
        button.classList.add("ahmad");
      } else {
        button.classList.remove("ahmad");
      }
    });
  }, [selectedOption]);

  const handleButtonClick = (option: string) => {
    setSelectedOption(option);
  };

  const renderDynamicText = () => {
    const selectedPricingOption = pricingOptions.find(
      (option) => option.option === selectedOption
    );
    if (!selectedPricingOption) return null;

    return (
      <>
        <div className="titlePrice">
          <h2>{selectedPricingOption.title}</h2>
          <button type="button">{selectedPricingOption.price}</button>
        </div>

        <h3>{selectedPricingOption.description}</h3>

        <div className="mainServicesPricing">
          <div className="services1">
            {selectedPricingOption.services.map((service, index) => (
              <p key={index}>
                {service.icon}
                {service.text}
              </p>
            ))}
          </div>
          <div className="services2">
            {selectedPricingOption.servicesTwo.map((servicesTwo, index) => (
              <p key={index}>
                {servicesTwo.icon}
                {servicesTwo.text}
              </p>
            ))}
          </div>
        </div>
        <div className="order">
          <a
            href="https://wa.me/+923193223060?text=Hello! I've seen the pricing card on your website and I'd like to discuss its details. Could you provide more information about it?"
          >
            <button type="button">
              order now <FaArrowRight />
            </button>
          </a>
        </div>
        <div className="delivery">
          {selectedPricingOption.delivery.map((item, index) => (
            <p key={index}>
              {item.icon}
              {item.text}
            </p>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="mainPricing">
      <div className="mainPricingText">
        <p>Rates and Packages</p>
        <h1>my pricing</h1>
      </div>

      <div className="pricingCard">
        <div className="mainPricingButton">
          <button
            type="button"
            className={selectedOption === "basic" ? "active" : ""}
            onClick={() => handleButtonClick("basic")}
          >
            basic
          </button>

          <div className="standardButton">
            <h6>recomnended</h6>
            <span></span>
            <button
              type="button"
              className={
                selectedOption === "standard" ? "active ahmad" : "ahmad"
              }
              onClick={() => handleButtonClick("standard")}
            >
              standard
            </button>
          </div>
          <button
            type="button"
            className={selectedOption === "premium" ? "active" : ""}
            onClick={() => handleButtonClick("premium")}
          >
            premium
          </button>
        </div>

        {/* Render dynamic text based on selected option */}
        {renderDynamicText()}
      </div>
    </div>
  );
};

export default Pricing;
