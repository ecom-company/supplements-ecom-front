import { useCheckout } from "@lib/context/checkout-context"
import Spinner from "@modules/common/icons/spinner"
import { useEffect } from "react"
import PaymentContainer from "../payment-container"
import StepContainer from "../step-container"
import dynamic from "next/dynamic"

const Payment = () => {
  const MercadoTest = dynamic(import("../../../../../mercado/mercado"), {
    ssr: false,
  })

  const {
    cart,
    setPaymentSession,
    initPayment,
    sameAsBilling: { state: isSame },
  } = useCheckout()

  /**
   * Fallback if the payment session are not loaded properly we
   * retry to load them after a 5 second delay.
   */
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null

    if (cart?.shipping_address && cart?.payment_sessions) {
      timeout = setTimeout(() => {
        initPayment()
      }, 5000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])

  return (
    <StepContainer
      title="Payment"
      index={isSame ? 3 : 4}
      closedState={
        <div className="px-8 pb-8 text-small-regular">
          <p>Enter your address to see available payment options.</p>
        </div>
      }
    >
      <div>
        {cart?.payment_sessions?.length ? (
          <MercadoTest />
        ) : (
          <div className="flex flex-col items-center justify-center px-4 py-16 text-gray-900">
            <Spinner />
          </div>
        )}
      </div>
    </StepContainer>
  )
}

export default Payment
