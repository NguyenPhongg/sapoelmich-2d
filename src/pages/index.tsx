const IndexPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen space-x-4">
      <Link
        to="/choose"
        className="rounded-xl hover:text-white font-bold text-primary flex-col w-48 h-48 border-2 hover:shadow-xl border-primary flex items-center justify-center transition-all cursor-pointer hover:bg-primary"
      >
        <img src="/images/pan.png" className="w-4/5" />
        OEM đồ vật
      </Link>
      <Link
        to="/kitchen"
        className="rounded-xl hover:text-white font-bold text-primary flex-col w-48 h-48 border-2 hover:shadow-xl border-primary flex items-center justify-center transition-all cursor-pointer hover:bg-primary"
      >
        <img src="/images/kitchen.png" className="w-4/5" />
        OEM căn bếp
      </Link>
    </div>
  )
}
export default IndexPage
