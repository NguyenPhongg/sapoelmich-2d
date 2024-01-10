import React from 'react'

export interface InputProps {
  id: string
  name: string
  value: string
  classs: string
  onChange: (value: string, id: string) => void
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  placeholder: string
  label: string
  autoComplete: string
}
const RowInputCheckout: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  classs,
  ...props
}) => {
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value, event.target.id)
    },
    []
  )
  return (
    <div className={classs + ' mb-4'}>
      <div className="label-input text-[15px] font-medium mb-2">
        {label}
      </div>
      <input
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        className='input-main w-full px-3 py-2 transition-all border border-gray-200 rounded-md outline-blue-600/50 hover:border-blue-600/30'
        {...props}
      />
    </div>
  )
}
export default RowInputCheckout
