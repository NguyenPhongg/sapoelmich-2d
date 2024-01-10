import RowInputCheckout from "./RowInputCheckout";
interface Props { }
const ContactInformation: React.FC<Props> = () => {
  const handleInputChange = () => {

  }
  // const [cities, setCities] = useState([]);


  // useEffect(() => {
  //   // Gọi API để lấy danh sách thành phố
  //   fetch('https://provinces.open-api.vn/api/?depth=3')
  //     .then(response => response.json())
  //     .then(data => setCities(data))
  //     .catch(error => console.error('Error fetching cities:', error));
  // }, []);
  

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="title-confirm py-3 px-6 text-[#3D3B40] border-b-2 border-silver font-bold">
        Thông tin liên hệ
      </div>
      <div className="p-6 text-[#706d6d] font-semibold">
        <div className="information-confirm">
          <div className="flex justify-between pb-2 w-full gap-4">
            <RowInputCheckout
              classs="w-1/2"
              id="name"
              name='name'
              value=''
              onChange={handleInputChange}
              placeholder="Nhập tên..."
              label="Họ tên"
              autoComplete="name"
            />
            <RowInputCheckout
              classs="w-1/2"
              id="phone"
              name='phone'
              value=''
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại..."
              label="Số điện thoại"
              autoComplete="phone"
            />
          </div>

          

          <div className="flex justify-between pb-2">
            <p>Phí vận chuyển</p>
            <p>123456</p>
          </div>
        </div>

      </div>
    </div>
  )
}
export default ContactInformation
