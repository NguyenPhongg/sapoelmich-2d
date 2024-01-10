interface Props { }
const TableCheckoutPage: React.FC<Props> = () => {
  return (
    <div className="mb-7 bg-white rounded-lg shadow-lg overflow-hidden">
      <table className="table-auto w-full">
        <thead className="bg-white text-[#3D3B40] border-b-2 border-silver h-[70px]">
          <tr>
            <th className="py-3 px-4 text-left">Hình ảnh</th>
            <th className="py-3 px-4 text-left">Sản phẩm</th>
            <th className="py-3 px-4 text-left">Đơn giá</th>
            <th className="py-3 px-4 text-left">Số lượng</th>
            <th className="py-3 px-4 text-left">Tổng cộng</th>
            <th className="py-3 px-4 w-1/12">Chi tiết</th>
            <th className="py-3 px-4 w-1/12">Xóa</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100 border-b-2 border-silver">
            <td className="px-4 py-3">
              <img className="inline rounded-full w-1/12 mr-2.5 shadow-md" src="https://picsum.photos/seed/100/200" alt="..." />Rachel
            </td>
            <td className="px-4 py-3">Mike wazowski</td>
            <td className="px-4 py-3">Mike Dawson</td>
            <td className="px-4 py-3">
              <input
                type="number"
                className="border border-silver w-1/2 rounded-[6px] h-9"
                style={{ textAlign: 'center' }}
                value='3'
              />
            </td>
            <td>
              <div className="bg-gray-200 h-1.5 rounded-lg overflow-hidden">
                <div className="w-1/2 bg-red-500 h-1.5"></div>
              </div>
            </td>
            <td className="px-4 py-3 text-center">
              <button className="hover:bg-gray-300 p-1 px-2 font-bold rounded-lg focus:outline-none">Xem chi tiết</button>
            </td>
            <td className="px-4 py-3 text-center">
              <button className="hover:bg-gray-300 p-1 px-2 font-bold rounded-lg focus:outline-none">&#10005;</button>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 border-b-2 border-silver">
            <td className="px-4 py-3">
              <img className="inline rounded-full w-1/12 mr-2.5 shadow-md" src="https://picsum.photos/seed/100/200" alt="..." />Rachel
            </td>
            <td className="px-4 py-3">Mike wazowski</td>
            <td className="px-4 py-3">Mike Dawson</td>
            <td className="px-4 py-3">
              <span className="bg-gray-200 px-4 py-2 rounded-lg text-gray-600">12 days left</span>
            </td>
            <td>
              <div className="bg-gray-200 h-1.5 rounded-lg overflow-hidden">
                <div className="w-1/4 bg-red-500 h-1.5"></div>
              </div>
            </td>
            <td className="px-4 py-3 text-center">
              <button className="hover:bg-gray-300 p-1 px-2 font-bold rounded-lg focus:outline-none">&#8943;</button>
            </td>
            <td className="px-4 py-3 text-center">
              <button className="hover:bg-gray-300 p-1 px-2 font-bold rounded-lg focus:outline-none">&#8943;</button>
            </td>
          </tr>
          <tr className="hover:bg-gray-100 border-b-2 border-silver">
            <td className="px-4 py-3">
              <img className="inline rounded-full w-1/12 mr-2.5 shadow-md" src="https://picsum.photos/seed/100/200" alt="..." />Rachel
            </td>
            <td className="px-4 py-3">Mike wazowski</td>
            <td className="px-4 py-3">Mike Dawson</td>
            <td className="px-4 py-3">
              <span className="bg-gray-200 px-4 py-2 rounded-lg text-gray-600">12 days left</span>
            </td>
            <td>
              <div className="bg-gray-200 h-1.5 rounded-lg overflow-hidden">
                <div className="w-3/4 bg-red-500 h-1.5"></div>
              </div>
            </td>
            <td className="px-4 py-3 text-center">
              <button className="hover:bg-gray-300 p-1 px-2 font-bold rounded-lg focus:outline-none">&#8943;</button>
            </td>
            <td className="px-4 py-3 text-center">
              <button className="hover:bg-gray-300 p-1 px-2 font-bold rounded-lg focus:outline-none">&#8943;</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="p-4 w-1/2 flex gap-3 justify-between">
        <div className="w-[75%]">
          <input
            name="discount_code"
            type="text"
            placeholder="Mã giảm giá"
            className="w-full px-3 py-2 transition-all border border-gray-200 rounded-md outline-blue-600/50 hover:border-blue-600/30"
          />
        </div>
        <div className="w-[25%]">
          <button type="submit" className="w-full p-2.5 text-sm font-medium text-white bg-primary rounded-md">Áp dụng</button>
        </div>
      </div>
    </div>
  )
}
export default TableCheckoutPage
