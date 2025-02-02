import React from "react";
import { Button, Modal } from "flowbite-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function ContactMessageSentAnimation(props) {
  const {
    isMessageSent,
    isMessageSendingAnimationModalOpened,
    setIsMessageSendingAnimationModalOpened,
  } = props;
  return (
    <Modal
      dismissible
      position="center"
      show={isMessageSendingAnimationModalOpened}
      onClose={() => setIsMessageSendingAnimationModalOpened(false)}
    >
      <Modal.Body>
        {isMessageSent === "sending" ? (
          <div className="py-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center ">
              <span className="font-bold text-xl">Sending The Message</span>{" "}
              <br /> <span>Please wait...</span>
            </p>
            <DotLottieReact
              src="https://lottie.host/90b5f6ad-8885-45dc-b197-f6504857f7b3/98mBvrz9hj.lottie"
              loop
              autoplay
            />
          </div>
        ) : isMessageSent === "success" ? (
          <div className="py-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center  ">
              <span className="font-bold text-xl">
                Message Sent Successfully {" :)"}
              </span>{" "}
              <br />{" "}
              <span className="text-sm">
                One of our agent will contact you ASAP
              </span>
            </p>
            <DotLottieReact
              src="https://lottie.host/1765844b-554e-4d47-91e1-d7b0ae3a82d9/S2mVmX2HKF.lottie"
              loop
              autoplay
            />{" "}
            <Button className="mx-auto bg-blue-800" onClick={() => setIsMessageSendingAnimationModalOpened(false)}>
              Appreciate It Bro &nbsp; {"^.^"}
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center  ">
              <span className="font-bold text-xl">Message Failed {" :("}</span>{" "}
              <br />{" "}
              <span className="text-sm">Please try again one more time</span>
            </p>
            <DotLottieReact
              src="https://lottie.host/4ad73bbc-5deb-4eda-be6e-4adb919e4d40/iOJFh9qUNx.lottie"
              loop
              autoplay
            />
            <Button className="mx-auto bg-red-800" onClick={() => setIsMessageSendingAnimationModalOpened(false)}>
              OK Lemme Try &nbsp; {"¬_¬"}
            </Button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ContactMessageSentAnimation;
