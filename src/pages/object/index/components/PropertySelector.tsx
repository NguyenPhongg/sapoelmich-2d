import classNames from 'classnames'
import React from 'react'
import { PartProperty, PartPropertyType } from '~/api/models/productModel'
import { getColorByBackground } from '~/utils/color'
import { ColorPicker } from '~/components/Select'
import { TextValue } from '../hooks/selectedStorage'

interface Props {
  property: PartProperty
  selected?: string | null
  value?: TextValue
  onChange: (id: number, value: string) => void
  onChangeValue: (id: number, name: keyof TextValue, value: string) => void
}
const PropertySelector: React.FC<Props> = ({
  property,
  selected,
  value,
  onChange,
  onChangeValue,
}) => {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const id = event.currentTarget.dataset.id!
      onChange(property.id, id)
    },
    [onChange, property.id]
  )
  const handleChangeValue = useCallback(
    (event: { target?: { name?: string; value: string } }) => {
      const name =
        ((event.target as HTMLInputElement).name as keyof TextValue) || 'color'
      const value = event.target?.value || ''
      onChangeValue(property.id, name, value)
    },
    [property.id, onChangeValue]
  )
  if (property.type === PartPropertyType.TEXT) {
    return (
      <div className="relative">
        <input
          name="value"
          type="text"
          placeholder={`Nhập ${property.name?.toLowerCase()}..`}
          className="input-main w-full pr-40 pl-3 py-3 transition-all border border-gray-200 rounded-md outline-blue-600/50 hover:border-blue-600/30 "
          autoComplete="off"
          value={value?.value || ''}
          onChange={handleChangeValue}
        />
        <select
          name="font"
          className="absolute top-1/2 right-12 w-24 py-1 px-1 -translate-y-1/2 border border-gray-200 rounded-md outline-blue-600/50"
          onChange={handleChangeValue}
          value={value?.font || 'Arial'}
        >
          {['Arial', 'Time New Roman'].map((font) => (
            <option key={font}>{font}</option>
          ))}
        </select>
        <ColorPicker
          value={value?.color}
          onChange={handleChangeValue}
          className="absolute top-1/2 right-2 -translate-y-1/2"
        />
      </div>
    )
  }
  if (property.type === PartPropertyType.LOGO) {
    return (
      <div className="flex items-center justify-between">
        <div className='text-[17px] font-normal'>Logo</div>
        <div className='w-[120px] rounded flex justify-center items-center bg-gray-200'>
          <img src="/images/pan.png" className="w-4/5" />
        </div>
      </div>
    )
  }

  if (property.type === PartPropertyType.MATERIAL) {
    return (
      <div className="relative">
        <input
          name="value"
          type="text"
          placeholder={`Nhập ${property.name?.toLowerCase()}..`}
          className="input-main w-full pr-40 pl-3 py-3 transition-all border border-gray-200 rounded-md outline-blue-600/50 hover:border-blue-600/30 "
          autoComplete="off"
          value={value?.value || ''}
          onChange={handleChangeValue}
        />
        <select
          name="font"
          className="absolute top-1/2 right-12 w-24 py-1 px-1 -translate-y-1/2 border border-gray-200 rounded-md outline-blue-600/50"
          onChange={handleChangeValue}
          value={value?.font || 'Arial'}
        >
          {['Arial', 'Time New Roman'].map((font) => (
            <option key={font}>{font}</option>
          ))}
        </select>
        <ColorPicker
          value={value?.color}
          onChange={handleChangeValue}
          className="absolute top-1/2 right-2 -translate-y-1/2"
        />
      </div>
    )
  }
  if (property.type === PartPropertyType.TYPE_BOTTOM) {
    return (
      <div className="relative">
        <input
          name="value"
          type="text"
          placeholder={`Nhập ${property.name?.toLowerCase()}..`}
          className="input-main w-full pr-40 pl-3 py-3 transition-all border border-gray-200 rounded-md outline-blue-600/50 hover:border-blue-600/30 "
          autoComplete="off"
          value={value?.value || ''}
          onChange={handleChangeValue}
        />
        <select
          name="font"
          className="absolute top-1/2 right-12 w-24 py-1 px-1 -translate-y-1/2 border border-gray-200 rounded-md outline-blue-600/50"
          onChange={handleChangeValue}
          value={value?.font || 'Arial'}
        >
          {['Arial', 'Time New Roman'].map((font) => (
            <option key={font}>{font}</option>
          ))}
        </select>
        <ColorPicker
          value={value?.color}
          onChange={handleChangeValue}
          className="absolute top-1/2 right-2 -translate-y-1/2"
        />
      </div>
    )
  }

  if (property.type === PartPropertyType.COLOR)
    return (
      <div className="flex flex-wrap">
        {property.options?.map((option) => (
          <div
            key={option.id}
            data-id={option.id}
            onClick={handleClick}
            style={
              option.color
                ? {
                  background: option.color,
                  color: getColorByBackground(option.color)!,
                }
                : undefined
            }
            className={classNames(
              'flex px-3 py-1 mr-2 flex-col justify-end items-center rounded border-2 cursor-pointer',
              (!selected && option.default) || selected === option.id + ''
                ? 'border-blue-500'
                : ''
            )}
          >
            {option.name}
            <div>{option.color}</div>
          </div>
        ))}
      </div>
    )
  if (property.type === PartPropertyType.IMAGE)
    return (
      <div className="grid grid-cols-3 gap-2">
        {property.options?.map((option) => (
          <div
            key={option.id}
            data-id={option.id}
            onClick={handleClick}
            className={classNames(
              'flex flex-col justify-end items-center rounded border-2 cursor-pointer',
              (!selected && option.default) || selected === option.id + ''
                ? 'border-blue-500'
                : ''
            )}
          >
            <img src={option.src!} className="max-w-[100%] max-h-48" />
            {option.name}
          </div>
        ))}
      </div>
    )
  return (
    <div className="flex flex-wrap">
      {property.options?.map((option) => (
        <div
          key={option.id}
          data-id={option.id}
          onClick={handleClick}
          className={classNames(
            'rounded border-2 cursor-pointer border-primary mr-1 mt-1 px-2 py-1',
            (!selected && option.default) || selected === option.id + ''
              ? 'bg-primary text-white font-semibold'
              : ''
          )}
        >
          {option.name}
        </div>
      ))}
    </div>
  )
}
export default PropertySelector
