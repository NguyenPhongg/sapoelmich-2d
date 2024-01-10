import TableCheckoutPage from './components/TableCheckout'
import ConfirmOrder from './components/ConfirmOrder'
import ContactInformatiom from './components/ContactInformation'

interface Props {}
const CheckoutPage: React.FC<Props> = () => {
  return (
    <div className="p-8">
      <div className="w-full flex justify-between">
        <div className=" w-[75%]">
          <TableCheckoutPage />
          <ContactInformatiom />
        </div>
        <div className="w-[23%] max-h-[300px] rounded-lg">
          <ConfirmOrder />
        </div>
      </div>
    </div>
  )
}
export default CheckoutPage
