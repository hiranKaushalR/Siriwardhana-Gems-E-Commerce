import React, { useState } from "react";
import ContactTermsAndPolicy from "./ContactTermsAndPolicy";
import { Label, TextInput, Textarea, Button, Checkbox } from "flowbite-react";
import { SwipeableDrawer } from "@mui/material";
import { BlackPhone, BlackMail, ContactDetails } from "../../assets";
function ContactCanvas() {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    number1: "",
    number2: "",
    whatsapp: "",
    message: "",
    terms: false,
  });

  const [colorsForName, setColorsForName] = useState("gray");
  const [colorsForEmail, setColorsForEmail] = useState("gray");
  const [colorsForNumber1, setColorsForNumber1] = useState("gray");
  const [colorsForNumber2, setColorsForNumber2] = useState("gray");
  const [colorsForWhatsapp, setColorsForWhatsapp] = useState("gray");
  const [colorsFormessage, setColorsFormessage] = useState("gray");

  const [warningForEmail, setWarningForEmail] = useState("");
  const [warningForNumber, setWarningForNumber] = useState("");

  const [openPolicyAndTerms, setOpenPolicyAndTerms] = useState(false);

  const [isContactDetailBarOpened, setIsContactDetailBarOpened] =
    useState(false);

  const toggleContactDetailBarDrawer = (newOpen) => () => {
    setIsContactDetailBarOpened(newOpen);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));

    console.log(contactDetails.terms);

    // Dynamically change colors based on field value
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
          setColorsFormessage("failure");
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
          setColorsFormessage("gray");
          break;
        default:
          break;
      }
    }
  };

  const CheckingAndSubmitingTheForm = () => {
    // Validate required fields and change colors to failure if empty
    let isValid = true;

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
      setColorsFormessage("failure");
      isValid = false;
    }

    // Phone number validation (example: 0774766385)
    const phoneValidationRegex = /^0\d{9}$/; // This regex matches phone numbers starting with '0' followed by 9 digits

    // Check if number1 is valid

    // Email validation
    const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (contactDetails.name !== "") {
      setColorsForName("info");
    }

    if (!emailValidationRegex.test(contactDetails.email)) {
      setColorsForEmail("warning");
      setWarningForEmail("Please enter a valid email address.");
      return;
    }
    if (emailValidationRegex.test(contactDetails.email)) {
      setColorsForEmail("info");
      setWarningForEmail("");
    }

    if (
      contactDetails.number1.trim() !== "" &&
      !phoneValidationRegex.test(contactDetails.number1)
    ) {
      setColorsForNumber1("warning");
      // You can display a warning message for invalid phone numbers
      setWarningForNumber("Invalid phone number.");
      return;
    } else if (contactDetails.number1.trim() !== "") {
      setColorsForNumber1("info");
      setWarningForNumber("");
    }

    if (isValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Please fill in the required fields.");
    }
  };

  return (
    <div className="flex justify-center flex-col items-stretch w-full max-w-[1080px] mx-auto mb-10">
      <div className="flex justify-between flex-wrap my-10">
        <form className="flex flex-col gap-4 max-w-[600px]  w-1/2 min-w-[300px] m-auto">
          <div className="flex justify-between items-center">
            <p className="text-lg sm:text-center font-semibold">
              Book an appointment
            </p>
            <img
              src={ContactDetails}
              alt=""
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
              <Label htmlFor="email" value="Enter your mobile number here" />
            </div>
            <TextInput
              color={colorsForNumber1}
              type="number"
              id="number1"
              placeholder="077 476 6389"
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
              placeholder="070 476 9638"
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
              placeholder="070 476 9638"
              value={contactDetails.whatsapp}
              onChange={handleChange}
              className="no-spinner-input"
            />
          </div>
          <div className="max-w-[500px] w-full">
            <div className="mb-2 block">
              <Label htmlFor="message" value="Why do you wanna contact us ?" />
            </div>
            <Textarea
              color={colorsFormessage}
              className="resize-none"
              id="message"
              placeholder="Leave a message..."
              required
              rows={4}
              value={contactDetails.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" onChange={handleChange} />
            <Label className="flex">
              <span>I agree with the&nbsp;</span>
              <span
                className="hover:underline cursor-pointer text-cyan-500 hover:text-cyan-600"
                onClick={() => setOpenPolicyAndTerms(true)}
              >
                Terms & Conditions
              </span>
            </Label>
          </div>
          <Button
            type="button"
            className="max-w-[500px] w-full "
            color="dark"
            onClick={CheckingAndSubmitingTheForm}
          >
            <span>Send the Message</span>
          </Button>
          <ContactTermsAndPolicy
            openPolicyAndTerms={openPolicyAndTerms}
            setOpenPolicyAndTerms={setOpenPolicyAndTerms}
          />
        </form>
        <div className="max-w-[400px] w-1/4 min-w-[280px] hidden md:block ">
          <p className="text-xl capitalize font-[500] text-center">
            Contact Details
          </p>
          <div className="flex flex-col gap-2 my-6">
            <div className="flex items-center gap-2">
              <img src={BlackPhone} alt="" className="w-5 h-5" />
              <a href="tel:+94774075222">+94 77 407 5222</a>
            </div>
            <div className="flex items-center gap-2">
              <img src={BlackMail} alt="" className="w-5 h-5" />
              <a href="mailto:siriwardanagems24@gmail.com">
                siriwardanagems24@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <SwipeableDrawer
        className="md:hidden"
        open={isContactDetailBarOpened}
        onClose={toggleContactDetailBarDrawer(false)}
        anchor="bottom" // This sets the drawer to slide in from the bottom
      >
        <div className="m-auto flex justify-center items-center h-[10px] bg-gray-400 w-1/2 rounded-b-md hover:bg-gray-500 focus:bg-gray-500 max-w-[200px] mb-3" />
        <p className="text-xl capitalize font-[500] text-center">
          Contact Details
        </p>
        <div className="flex flex-col gap-6 my-6 mx-3">
          <div className="flex items-center gap-4">
            <img src={BlackPhone} alt="" className="w-6 h-6" />
            <a href="tel:+94774075222" className="font-bold">+94 77 407 5222</a>
          </div>
          <div className="flex items-center gap-4">
            <img src={BlackMail} alt="" className="w-6 h-6" />
            <a href="mailto:siriwardanagems24@gmail.com" className="font-bold">
              siriwardanagems24@gmail.com
            </a>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default ContactCanvas;
