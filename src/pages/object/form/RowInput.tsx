import React from 'react'

export interface InputProps {
  id: string
  name: string
  value: string
  onChange: (value: string, id: string) => void
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  placeholder: string

  label: string
  required?: boolean

  error?: string
  autoComplete: string
}
const RowInput: React.FC<InputProps> = ({
  label,
  name,
  required,
  value,
  onChange,
  placeholder,
  error,
  ...props
}) => {
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value, event.target.id)
    },
    []
  )
  return (
    <div className='mb-4'>
      <div className="label-input text-[15px] font-medium mb-2">
        {label}{' '}
        {required ? (
          <>
            <span className="required-indicator">*</span>
          </>
        ) : null}
      </div>
      <input
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
        className={`input-main w-full px-3 py-2 transition-all border border-gray-200 rounded-md outline-blue-600/50 hover:border-blue-600/30 ${error ? 'error' : ''}`}
        {...props}
      />
      {error ? <p className='ae-text--errors text-red-400'>{error}</p> : null}
    </div>
  )
}
export default RowInput
