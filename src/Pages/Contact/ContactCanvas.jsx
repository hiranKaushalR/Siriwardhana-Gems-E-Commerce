// ContactCanvas.js
import React, { useState } from "react";
import { Label, TextInput, Textarea, Button, Checkbox } from "flowbite-react";
import { SwipeableDrawer } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../index.js";
import ContactMessageSentAnimation from "./ContactMessageSentAnimation.jsx";
import { BlackPhone, BlackMail, ContactDetails } from "../../assets";
import { socialMediaForContactPage } from "../../constants";

function ContactCanvas() {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    number1: "",
    number2: "",
    whatsapp: "",
    message: "",
    agree: false,
  });

  // States for dynamic input colors (using Flowbite's color props)
  const [colorsForName, setColorsForName] = useState("gray");
  const [colorsForEmail, setColorsForEmail] = useState("gray");
  const [colorsForNumber1, setColorsForNumber1] = useState("gray");
  const [colorsForNumber2, setColorsForNumber2] = useState("gray");
  const [colorsForWhatsapp, setColorsForWhatsapp] = useState("gray");
  const [colorsForMessage, setColorsForMessage] = useState("gray");

  const [warningForEmail, setWarningForEmail] = useState("");
  const [warningForNumber, setWarningForNumber] = useState("");

  const [isContactDetailBarOpened, setIsContactDetailBarOpened] =
    useState(false);
  const [isMessageSent, setIsMessageSent] = useState("");
  const [
    isMessageSendingAnimationModalOpened,
    setIsMessageSendingAnimationModalOpened,
  ] = useState(false);

  const toggleContactDetailBarDrawer = (newOpen) => () => {
    setIsContactDetailBarOpened(newOpen);
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [id]: type === "checkbox" ? checked : value,
    }));

    // Update dynamic colors for text inputs only
    if (type !== "checkbox") {
      if (value.trim() === "") {
        switch (id) {
          case "name":
            setColorsForName("failure");
            break;
          case "email":
            setColorsForEmail("failure");
            break;
          case "number1":
            setColorsForNumber1("failure");
            break;
          case "number2":
            setColorsForNumber2("failure");
            break;
          case "whatsapp":
            setColorsForWhatsapp("failure");
            break;
          case "message":
            setColorsForMessage("failure");
            break;
          default:
            break;
        }
      } else {
        switch (id) {
          case "name":
            setColorsForName("gray");
            break;
          case "email":
            setColorsForEmail("gray");
            break;
          case "number1":
            setColorsForNumber1("gray");
            break;
          case "number2":
            setColorsForNumber2("gray");
            break;
          case "whatsapp":
            setColorsForWhatsapp("gray");
            break;
          case "message":
            setColorsForMessage("gray");
            break;
          default:
            break;
        }
      }
    }
  };

  const CheckingAndSubmitingTheForm = async () => {
    let isValid = true;

    // Validate required fields
    if (contactDetails.name.trim() === "") {
      setColorsForName("failure");
      isValid = false;
    }
    if (contactDetails.email.trim() === "") {
      setColorsForEmail("failure");
      isValid = false;
    }
    if (contactDetails.number1.trim() === "") {
      setColorsForNumber1("failure");
      isValid = false;
    }
    if (contactDetails.message.trim() === "") {
      setColorsForMessage("failure");
      isValid = false;
    }

    // Regular expression validations
    const phoneValidationRegex = /^0\d{9}$/; // Matches numbers starting with 0 and then 9 digits
    const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email validation
    if (!emailValidationRegex.test(contactDetails.email)) {
      setColorsForEmail("warning");
      setWarningForEmail("Please enter a valid email address.");
      return;
    } else {
      setColorsForEmail("info");
      setWarningForEmail("");
    }

    // Phone number validation for primary number
    if (
      contactDetails.number1.trim() !== "" &&
      !phoneValidationRegex.test(contactDetails.number1)
    ) {
      setColorsForNumber1("warning");
      setWarningForNumber("Invalid phone number.");
      return;
    } else if (contactDetails.number1.trim() !== "") {
      setColorsForNumber1("info");
      setWarningForNumber("");
    }

    // Optional: Check that user agreed to terms

    if (isValid) {
      try {
        console.log("Submitting form data:", contactDetails);
        setIsMessageSendingAnimationModalOpened(true);
        setIsMessageSent("sending");
        await addDoc(collection(db, "ContactUs"), {
          name: contactDetails.name,
          email: contactDetails.email,
          mobile_number_primary: contactDetails.number1,
          mobile_number_secondary: contactDetails.number2,
          mobile_number_whatsapp: contactDetails.whatsapp,
          message: contactDetails.message,
          terms: contactDetails.agree,
          date: new Date(),
          time: new Date().toLocaleTimeString(),
        });
        console.log("Document successfully added!");
        setIsMessageSent("success");
      } catch (error) {
        console.error("Error adding document: ", error);
        setIsMessageSent("error");
      }
    } else {
      console.log("Please fill in the required fields.");
    }
  };

  return (
    <div className="flex justify-center flex-col items-stretch w-full max-w-[1080px] mx-auto mb-10">
      <div className="flex justify-between flex-wrap my-10">
        <form className="flex flex-col gap-4 max-w-[600px] w-1/2 min-w-[300px] m-auto">
          <div className="flex justify-between items-center">
            <p className="text-lg sm:text-center font-semibold">
              Book an appointment
            </p>
            <img
              src={ContactDetails}
              alt="Contact Details"
              className="w-10 h-10 md:hidden"
              onClick={toggleContactDetailBarDrawer(true)}
            />
          </div>
          <div className="max-w-[500px] w-full">
            <div className="mb-2 block w-full">
              <Label htmlFor="name" value="Enter your name here" />
            </div>
            <TextInput
              color={colorsForName}
              id="name"
              placeholder="Janith Fernando"
              required
              value={contactDetails.name}
              onChange={handleChange}
            />
          </div>
          <div className="max-w-[500px] w-full">
            <div className="mb-2 block w-full">
              <Label htmlFor="email" value="Enter your Email here" />
            </div>
            <TextInput
              color={colorsForEmail}
              type="email"
              id="email"
              placeholder="janithfernando@siriwardanagems.com"
              required
              value={contactDetails.email}
              onChange={handleChange}
            />
            <p className="text-xs text-yellow-500 mx-1">{warningForEmail}</p>
          </div>
          <div className="max-w-[500px] w-full">
            <div className="mb-2 block w-full">
              <Label htmlFor="number1" value="Enter your mobile number here" />
            </div>
            <TextInput
              color={colorsForNumber1}
              type="text"
              id="number1"
              placeholder="0774766389"
              required
              value={contactDetails.number1}
              onChange={handleChange}
            />
            <p className="text-xs text-yellow-500 mx-1">{warningForNumber}</p>
          </div>
          <div className="max-w-[500px] w-full">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="number2"
                value="Enter your secondary mobile number here (optional)"
              />
            </div>
            <TextInput
              color={colorsForNumber2}
              type="number"
              id="number2"
              placeholder="0704769638"
              value={contactDetails.number2}
              onChange={handleChange}
            />
          </div>
          <div className="max-w-[500px] w-full">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="whatsapp"
                value="Your Whatsapp number here (optional)"
              />
            </div>
            <TextInput
              color={colorsForWhatsapp}
              type="number"
              id="whatsapp"
              placeholder="0704769638"
              value={contactDetails.whatsapp}
              onChange={handleChange}
              className="no-spinner-input"
            />
          </div>
          <div className="max-w-[500px] w-full">
            <div className="mb-2 block">
              <Label htmlFor="message" value="Why do you wanna contact us?" />
            </div>
            <Textarea
              color={colorsForMessage}
              className="resize-none"
              id="message"
              placeholder="Leave a message..."
              required
              rows={4}
              value={contactDetails.message}
              onChange={handleChange}
            />
          </div>
          <Button
            type="button"
            className="max-w-[500px] w-full"
            color="dark"
            onClick={CheckingAndSubmitingTheForm}
          >
            <span>Send the Message</span>
          </Button>
          <ContactMessageSentAnimation
            isMessageSent={isMessageSent}
            isMessageSendingAnimationModalOpened={
              isMessageSendingAnimationModalOpened
            }
            setIsMessageSendingAnimationModalOpened={
              setIsMessageSendingAnimationModalOpened
            }
          />
        </form>
        <div className="max-w-[400px] w-1/4 min-w-[280px] hidden md:block">
          <p className="text-xl capitalize font-medium text-center mb-10">
            Contact Details
          </p>
          <div className="flex flex-col gap-4 my-6 font-semibold">
            <div className="flex items-center gap-2">
              <img src={BlackPhone} alt="Phone" className="w-5 h-5" />
              <a href="tel:+94774075222">+94 77 407 5222</a>
            </div>
            <div className="flex items-center gap-2">
              <img src={BlackMail} alt="Email" className="w-5 h-5" />
              <a href="mailto:siriwardanagems24@gmail.com">
                siriwardanagems24@gmail.com
              </a>
            </div>
          </div>
          <div className="flex text-md justify-evenly my-10">
            {socialMediaForContactPage.map((social) => (
              <a
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <img
                  src={social.icon}
                  alt="Social Icon"
                  className="w-7 h-7 p-1"
                  style={{ color: "black" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <SwipeableDrawer
        className="md:hidden"
        open={isContactDetailBarOpened}
        onClose={toggleContactDetailBarDrawer(false)}
        anchor="bottom" // Drawer slides in from the bottom
      >
        <div className="m-auto flex justify-center items-center h-[10px] bg-gray-400 w-1/2 rounded-b-md hover:bg-gray-500 focus:bg-gray-500 max-w-[200px] mb-3" />
        <p className="text-xl capitalize font-medium text-center">
          Contact Details
        </p>
        <div className="flex flex-col gap-6 my-6 mx-3">
          <div className="flex items-center gap-4">
            <img src={BlackPhone} alt="Phone" className="w-6 h-6" />
            <a href="tel:+94774075222" className="font-bold">
              +94 77 407 5222
            </a>
          </div>
          <div className="flex items-center gap-4">
            <img src={BlackMail} alt="Email" className="w-6 h-6" />
            <a href="mailto:siriwardanagems24@gmail.com" className="font-bold">
              siriwardanagems24@gmail.com
            </a>
          </div>
          <div className="flex justify-evenly text-md my-3">
            {socialMediaForContactPage.map((social) => (
              <a
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <img
                  src={social.icon}
                  alt="Social Icon"
                  className="w-8 h-8 p-1"
                  style={{ color: "black" }}
                />
              </a>
            ))}
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default ContactCanvas;
