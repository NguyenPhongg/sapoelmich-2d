interface Props { }
const ConfirmOrderPage: React.FC<Props> = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="title-confirm py-3 px-6 text-[#3D3B40] border-b-2 border-silver font-bold">
        Đơn hàng (2 sản phẩm)
      </div>
      <div className="p-6 text-[#706d6d] font-semibold">
        <div className="information-confirm border-b-2 border-silver">
          <div className="flex justify-between pb-2">
            <p>Tạm tính</p>
            <p>123456</p>
          </div>
          <div className="flex justify-between pb-2">
            <p>Phí vận chuyển</p>
            <p>123456</p>
          </div>
        </div>
        <div className="sum-order">
          <div className="flex justify-between py-5">
            <p>Tổng tiền</p>
            <p>123456</p>
          </div>
        </div>
        <div className="">
          <label className="flex justify-end mb-1">Đã bao gồm VAT (nếu có)</label>
          <button type="submit" className="w-full p-2.5 text-sm font-medium text-white bg-primary rounded-md">Đặt hàng</button>
        </div>
      </div>
    </div>
  )
}
export default ConfirmOrderPage
