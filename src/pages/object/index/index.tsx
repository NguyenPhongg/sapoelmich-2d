import { useQuery } from '@tanstack/react-query'
import SelectorSidebar from './components/SelectorSidebar'
import { get } from '~/api/product'
import CanvasComponent from '~/components/canvas'

interface Props {}
const IndexPage: React.FC<Props> = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => get(),
    queryKey: ['product'],
  })
  if (isLoading)
    return (
      <div className="flex items-center justify-center w-screen h-[calc(100vh-64px)]">
        <div className="lds-hourglass"></div>
      </div>
    )
  if (!data) return null
  return (
    <div className="flex flex-col-reverse md:flex-row h-[100vh] justify-between">
      <div className="w-full flex-1 h-[calc(100vh-400px)] md:h-full bg-[rgba(255,255,255,0.9)] shadow-md rounded-lg">
        <SelectorSidebar parts={data.parts} />
      </div>
      <div className="w-full flex-1 flex justify-center">
        <div className="w-full md:max-h-[400px] md:h-full">
          <CanvasComponent parts={data.parts} />
        </div>
      </div>
    </div>
  )
}
export default IndexPage
