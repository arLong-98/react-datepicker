import React, { useState, useEffect } from "react";
import ExampleComponents from "../Examples";
import ribbon from "./ribbon.png";
import logo from "./logo.png";
import DatePicker from "react-datepicker";

const Example = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const Show = window.scrollY < 400;
    if (Show) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <DatePicker
      open={isOpen && isScrolled}
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        setIsOpen(false);
      }}
      onInputClick={() => setIsOpen(true)}
      holidays={[
        { date: "2023-01-26", holidayName: "Republic Day" },
        { date: "2023-08-15", holidayName: "Independence Day" },
        { date: "2023-12-25", holidayName: "Christmas" },
        { date: "2023-11-12", holidayName: "Diwali" },
        { date: "2023-10-02", holidayName: "Gandhi Jayanti" },
      ]}
    />
  );
};

const Root = () => (
  <div>
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">React Datepicker</h1>
        <div className="hero__crafted-by">
          <a href="https://hackerone.com" className="hero__crafted-by-link">
            Crafted by{" "}
            <img
              src={logo}
              className="hero__image"
              alt="HackerOne"
              title="HackerOne"
            />
          </a>
        </div>
        <div className="hero__example">
          <Example />
        </div>
      </div>
    </div>
  </div>
);

export default Root;
