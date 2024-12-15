import React, { useState } from "react";
import { Label, TextInput, Textarea, Button } from "flowbite-react";
function ContactCanvas() {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    number1: "",
    number2: "",
    whatsapp: "",
    message: "",
  });

  const [colorsForName, setColorsForName] = useState("gray");
  const [colorsForEmail, setColorsForEmail] = useState("gray");
  const [colorsForNumber1, setColorsForNumber1] = useState("gray");
  const [colorsForNumber2, setColorsForNumber2] = useState("gray");
  const [colorsForWhatsapp, setColorsForWhatsapp] = useState("gray");
  const [colorsFormessage, setColorsFormessage] = useState("gray");

  const [warningForEmail, setWarningForEmail] = useState("");
  const [warningForNumber, setWarningForNumber] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));

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
      setWarningForNumber ("Invalid phone number.");
      return;
    } else if (contactDetails.number1.trim() !== "") {
      setColorsForNumber1("info");
    }

    if (isValid) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Please fill in the required fields.");
    }
  };

  return (
    <div className="flex justify-center flex-col items-stretch gap-10 w-full max-w-[1080px] mx-auto mb-10">
      <h1 className="my-4 text-2xl capitalize font-[500] underline">
        Contact our team for more information
      </h1>
      <form className="flex flex-col gap-4">
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
        <Button
          type="button"
          className="max-w-[500px] w-full "
          color="dark"
          onClick={CheckingAndSubmitingTheForm}
        >
          <span>Send the Message</span>
        </Button>
      </form>
    </div>
  );
}

export default ContactCanvas;
