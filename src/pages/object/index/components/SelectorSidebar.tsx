import classNames from 'classnames'
import React from 'react'
import { Part, PartPropertyType } from '~/api/models/productModel'
import PerfectScrollbar from 'react-perfect-scrollbar'
import PropertySelector from './PropertySelector'
import { IoCloseOutline } from 'react-icons/io5'
// import Teleport from '~/components/Teleport'
import { useSelectedStorage, type TextValue } from '../hooks/selectedStorage'

interface Props {
  parts: Part[]
}
const totalPart: Part = {
  id: 'total',
  name: 'Tổng quan',
  src: '/images/pan.png',
  properties: [
    {
      id: 1000,
      type: PartPropertyType.TEXT,
      name: 'Tên nhãn hiệu',
    },
    {
      id: 1001,
      type: PartPropertyType.LOGO,
      name: '',
    },
    {
      id: 6,
      name: 'Kích thước',
      options: [
        {
          id: 18,
          name: '18cm',
          default: true,
        },
        {
          id: 19,
          name: '20cm',
        },
        {
          id: 20,
          name: '24cm',
        },
        {
          id: 21,
          name: '26cm',
        },
        {
          id: 22,
          name: '28cm',
        },
      ],
    },
    {
      id: 1002,
      type: PartPropertyType.MATERIAL,
      name: 'Chất liệu',
    },
    {
      id: 1003,
      type: PartPropertyType.TYPE_BOTTOM,
      name: 'Loại đáy',
    },
    {
      id: 1004,
      type: PartPropertyType.TEXT,
      name: 'Ghi chú',
    },
  ],
}
const SelectorSidebar: React.FC<Props> = ({ parts }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedStorage, setSelectedStorage] = useSelectedStorage()
  const [open, setOpen] = useState(false)
  const toggleOpen = useCallback(() => setOpen((o) => !o), [])
  const handleChangeValue = useCallback(
    (id: number, name: keyof TextValue, value: string) => {
      setSelectedStorage((selectedStorage) => {
        const item: TextValue = selectedStorage[id]
          ? { ...selectedStorage[id], [name]: value }
          : {
              color: '',
              value: '',
              font: 'Arial',
              [name]: value,
            }
        return {
          ...selectedStorage,
          [id]: item,
        }
      })
    },
    []
  )
  const selectedPart = useMemo(() => {
    const id = searchParams.get('part')
    if (id === 'total' || !id) return totalPart
    const part = parts.find((p) => p.id === +id)
    return part || parts[0]
  }, [searchParams, parts])
  const handleSelect = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      const id = event.currentTarget.dataset.id!
      searchParams.set('part', id)
      setSearchParams(searchParams)
    },
    [searchParams]
  )
  const handleChangeOption = useCallback(
    (id: number, value: string) => {
      searchParams.set(id + '', value)
      setSearchParams(searchParams)
    },
    [searchParams]
  )
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <div className="md:pt-16 pt-0 h-full">
      {/* <Teleport>
        <button
          onClick={toggleOpen}
          className={classNames(
            'absolute md:scale-0 bottom-4 left-2 bg-white rounded-full z-[1050] text-3xl p-3 shadow-lg transition-all',
            open ? 'rotate-90' : ''
          )}
        >
          <IoSettingsOutline />
        </button>
      </Teleport> */}
      <div className="h-full selector-sidebar">
        <div className="md:block hidden">
          <div className="flex items-center border-b-2 border-silver pl-5">
            <div className="w-[70px]">
              <img src="/choose/pot.png" className="w-4/5" />
            </div>
            <div className="text-[20px] font-semibold">Nồi của bạn</div>
          </div>
        </div>
        <div
          className={classNames(
            'h-full min-w-fit lg:min-w-full flex justify-between flex-col-reverse md:flex-col lg:flex-row md:h-[calc(100%-64px)]',
            open ? 'open' : ''
          )}
        >
          <ul className="min-w-fit w-full lg:w-[30%] lg:space-y-1 md:p-3 p-1 lg:border-r-2 lg:border-b-0 border-b-[1px] border-silver flex flex-row lg:flex-col">
            {[...parts, totalPart].map((part) => (
              <li
                key={part.id}
                data-id={part.id}
                onClick={handleSelect}
                className={classNames(
                  'pl-0 lg:pl-3 lg:pr-1 w-full h-full md:w-full min-h-12 md:min-h-16 lg:h-[60px] text-xs md:text-base hover:bg-gray-200 cursor-pointer flex items-center border-b-2 border-slate-300 md:border-b-0',
                  selectedPart.id === part.id
                    ? 'lg:border-l-2 lg:border-b-0 border-b-2 !border-primary text-primary font-semibold'
                    : ''
                )}
              >
                {part.src ? (
                  <div className="flex md:flex-col lg:flex-row h-full md:justify-start items-center lg:items-start justify-center w-full">
                    <div className=" max-w-[60%] min-w-10 h-10 md:flex hidden justify-center items-center">
                      <img
                        src={part.src}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-fit text-[15px] lg:pt-2 pl-0 lg:pl-3">
                      {part.name}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full text-[15px] md:pt-4 lg:pt-0 flex justify-center items-center">
                    {part.name}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="w-full lg:w-[70%] selector-sidebar-container h-full overflow-hidden">
            <button
              className="absolute top-1 z-10 right-1 text-3xl p-2 md:hidden bg-gray-100 rounded-full"
              onClick={toggleOpen}
            >
              <IoCloseOutline />
            </button>
            {/* lg:w-[calc(100vw-84px)] */}
            <PerfectScrollbar className="h-full max-h-full overflow-y-auto p-4 md:w-full sm:w-auto">
              {selectedPart.properties.length ? (
                <ul className="space-y-2">
                  {selectedPart.properties.map((property) => (
                    <li key={property.id}>
                      <div className="text-[17px] font-normal">
                        {property.name}
                      </div>
                      <PropertySelector
                        property={property}
                        selected={searchParams.get(property.id + '')}
                        value={selectedStorage[property.id]}
                        onChange={handleChangeOption}
                        onChangeValue={handleChangeValue}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="bg-yellow-50 p-2 text-yellow-600 border border-yellow-600 rounded">
                  Đang cập nhật demo cho "{selectedPart.name}"
                </div>
              )}
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SelectorSidebar
