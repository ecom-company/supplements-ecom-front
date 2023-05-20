import { CardPayment } from "@mercadopago/sdk-react"
import { initMercadoPago } from "@mercadopago/sdk-react"

const MercadotTEST = () => {
  initMercadoPago("TEST-da3954a3-3e04-4397-9236-ff5707d57984")
  return (
    <div className="bg">
      <CardPayment
        initialization={{ amount: 100 }}
        onSubmit={async (param) => {
          console.log(param)
        }}
      />
    </div>
  )
}
export default MercadotTEST
