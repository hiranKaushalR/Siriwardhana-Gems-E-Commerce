import React from 'react'
import { Modal, Button } from 'flowbite-react'
import { SwipeableDrawer } from "@mui/material"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

function ProductPurchase(props) {
  const { setIspurchaseTabOpen, isPurchaseTabOpen, product } = props

  return (
    <div>
      {/* Desktop Modal */}
      <Modal
        className="hidden md:flex"
        dismissible
        position="center"
        show={isPurchaseTabOpen}
        onClose={() => setIspurchaseTabOpen(false)}
      >
        <Modal.Body>
          <div className="py-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
              <span className="font-bold text-xl">Still In The Developments</span>
              <br />
              <span>Hold your horses 🐎</span>
            </p>
            <DotLottieReact
              src="https://lottie.host/63e43fb7-61be-486f-aef2-622b144f7fc1/2m8UGcP8KR.json"
              loop
              autoplay
              className="w-[300px] h-[150px] mx-auto my-5"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="w-full" onClick={() => setIspurchaseTabOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Mobile Bottom Drawer */}
      <SwipeableDrawer
        className="sm:hidden"
        open={isPurchaseTabOpen}
        onClose={() => setIspurchaseTabOpen(false)}
        onOpen={() => {}}
        anchor="bottom"
      >
        <div className="p-4">
          <h1 className="text-center my-2 text-lg font-bold">Category</h1>
          <h1 className="text-center my-2 text-lg font-bold">Price</h1>
          <h1 className="text-center my-2 text-lg font-bold">Stocks</h1>
          <Button className="w-full mt-4" onClick={() => setIspurchaseTabOpen(false)}>
            Close
          </Button>
        </div>
      </SwipeableDrawer>
    </div>
  )
}

export default ProductPurchase
