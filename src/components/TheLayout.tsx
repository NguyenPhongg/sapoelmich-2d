import TheHeader from './TheHeader'
interface Props {}
const TheLayout: React.FC<Props> = () => {
  return (
    <>
      <TheHeader isPartialHidden />
      <main className=" bg-gray-100 min-h-[100vh]">
        <Outlet />
      </main>
    </>
  )
}
export default TheLayout
