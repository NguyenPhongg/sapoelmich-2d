import TheHeader from "~/components/TheHeader"


const ChoosePage: React.FC = () => {
  return (
    <>
      <TheHeader isPartialHidden={false} />
      <main className=" bg-gray-100 min-h-[100vh] flex justify-center items-center relative">
        <div className="absolute top-[25vh] md:left-[20%] left-[20px] text-[22px] font-semibold">Bạn muốn thiết kế sản phẩm gì</div>
        <div className="list-choose-img grid grid-cols-3 md:grid-cols-6 gap-10 m-5">
          <Link
            to="/object"
            className="max-w-[100px] p-2 rounded-xl hover:shadow-xl transition-all cursor-pointer hover:bg-primary"
          >
            <img src="/choose/pot.png" className="" />
          </Link>
          <Link
            to="/kitchen"
            className="max-w-[100px] p-2 rounded-xl hover:shadow-xl transition-all cursor-pointer hover:bg-primary"
          >
            <img src="/choose/frying-pan.png" className="" />
          </Link>
          <Link
            to="/kitchen"
            className="max-w-[100px] p-2 rounded-xl hover:shadow-xl transition-all cursor-pointer hover:bg-primary"
          >
            <img src="/choose/electric-teapot.png" className="" />
          </Link>
          <Link
            to="/kitchen"
            className="max-w-[100px] p-2 rounded-xl hover:shadow-xl transition-all cursor-pointer hover:bg-primary"
          >
            <img src="/choose/loudspeaker.png" className="" />
          </Link>
          <Link
            to="/kitchen"
            className="max-w-[100px] p-2 rounded-xl hover:shadow-xl transition-all cursor-pointer hover:bg-primary"
          >
            <img src="/choose/oven.png" className="" />
          </Link>
          <Link
            to="/kitchen"
            className="max-w-[100px] p-2 rounded-xl hover:shadow-xl transition-all cursor-pointer hover:bg-primary"
          >
            <img src="/choose/blender.png" className="" />
          </Link>
        </div>
      </main>
    </>
  )
}
export default ChoosePage
