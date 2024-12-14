import React, { useState } from "react";
import { Label, TextInput } from "flowbite-react";

function ContactCanvas() {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    number1: "",
    number2: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  console.log(contactDetails);

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
            type="email"
            id="email"
            placeholder="janithfernando@siriwardanagems.com"
            required
            value={contactDetails.email}
            onChange={handleChange}
          />
        </div>
        <div className="max-w-[500px] w-full">
          <div className="mb-2 block w-full">
            <Label htmlFor="email" value="Enter your mobile number here" />
          </div>
          <TextInput
            type="number"
            id="number1"
            placeholder="+94 77 476 6389"
            required
            value={contactDetails.number1}
            onChange={handleChange}
          />
        </div>
        <div className="max-w-[500px] w-full">
          <div className="mb-2 block w-full">
            <Label htmlFor="email" value="Enter your secondary mobile number here (optional)" />
          </div>
          <TextInput
            type="number"
            id="number2"
            placeholder="+94 70 476 9638"
            value={contactDetails.number2}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default ContactCanvas;
