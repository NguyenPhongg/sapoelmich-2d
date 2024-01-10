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
      <div className='h-full selector-sidebar'>
        <div className='md:block hidden'>
          <div className='flex items-center border-b-2 border-silver pl-5'>
            <div className='w-[70px]'>
              <img src="/choose/pot.png" className="w-4/5" />
            </div>
            <div className='text-[20px] font-semibold'>Nồi của bạn</div>
          </div>
        </div>
        <div
          className={classNames(
            'flex flex-col-reverse md:flex-row md:h-[calc(100%-64px)] h-0',
            open ? 'open' : ''
          )}
        >
          <ul className="w-full md:w-[30%] space-y-1 md:p-3 p-1 border-r-2 border-silver flex flex-row md:flex-col">
            {[...parts, totalPart].map((part) => (
              <li
                key={part.id}
                data-id={part.id}
                onClick={handleSelect}
                className={classNames(
                  'pl-0 md:pl-3 w-full md:w-full h-16 md:h-[60px] text-xs md:text-base hover:bg-gray-200 cursor-pointer flex-col',
                  selectedPart.id === part.id ? 'md:border-l-2 md:border-b-0 border-b-2 border-primary text-primary font-semibold' : ''
                )}
              >
                {part.src ? (
                  <div className='flex md:justify-start justify-center'>
                    <img
                      className="max-w-[60%] md:block hidden"
                      width={40}
                      height={40}
                      src={part.src}
                    />
                    <div className='text-[15px] pt-4 md:pt-2 pl-0 md:pl-3'>{part.name}</div>
                  </div>
                ) : (<div className='text-[15px] pt-4 md:pt-0 flex justify-center items-center'>{part.name}</div>)}
              </li>
            ))}
          </ul>
          <div className="w-full md:w-[70%] selector-sidebar-container">
            <button
              className="absolute top-1 z-10 right-1 text-3xl p-2 md:hidden bg-gray-100 rounded-full"
              onClick={toggleOpen}
            >
              <IoCloseOutline />
            </button>
            <PerfectScrollbar className="h-full p-4 w-[calc(100vw-84px)] sm:w-auto">
              {selectedPart.properties.length ? (
                <ul className="space-y-2">
                  {selectedPart.properties.map((property) => (
                    <li key={property.id}>
                      <div className='text-[17px] font-normal'>{property.name}</div>
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
