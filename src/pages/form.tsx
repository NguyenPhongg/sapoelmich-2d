import { State, TextError } from '~/utils/form'
import RowInput from './object/form/RowInput'
import { isEmail } from '~/utils/is'
import React from 'react'

interface Props {}

const defaultState: State = {
  errors: {},
  name: '',
  name_company: '',
  phone: '',
  email: '',
  content: '',
}

type PayloadChange = {
  type: 'CHANGE'
  value: {
    id: string
    value: string | number
  }
}

type PayloadError = {
  type: 'ERROR'
  value: Record<string, string | undefined>
}

type Payload = PayloadChange | PayloadError

const reducer = (state: State, payload: Payload): State => {
  const { type, value } = payload

  if (type === 'CHANGE') {
    return {
      ...state,
      [value.id]: value.value,
      errors: {
        ...state.errors,
        [value.id]: undefined,
      },
    }
  }

  if (type === 'ERROR') {
    return {
      ...state,
      errors: value,
    }
  }

  return state
}
const FormPage: React.FC<Props> = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleInputChange = useCallback((value: string, id: string) => {
    return dispatch({
      type: 'CHANGE',
      value: {
        value: value,
        id: id,
      },
    })
  }, [])
  const handleContentChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value, id } = e.target
      dispatch({
        type: 'CHANGE',
        value: {
          value: value,
          id: id,
        },
      })
    },
    [dispatch]
  )

  const handleFetchApi = (e: React.MouseEvent<HTMLButtonElement>) => {
    const errorFields: Array<keyof State> = []
    if (state.name === '') {
      errorFields.push('name')
    }
    if (state.name_company === '') {
      errorFields.push('name_company')
    }
    if (state.phone === '') {
      errorFields.push('phone')
    }
    if (state.email === '') {
      errorFields.push('email')
    }
    if (!isEmail(state.email.toString())) {
      errorFields.push('email')
    }
    if (errorFields.length > 0) {
      const errorPayload: TextError = {}
      errorFields.forEach((field) => {
        errorPayload[field] = `Bạn chưa nhập ${
          field === 'phone'
            ? 'số điện thoại'
            : field === 'name_company'
            ? 'tên công ty'
            : field === 'email'
            ? 'email'
            : 'tên'
        }`
        if (
          field === 'email' &&
          !isEmail(state.email.toString()) &&
          state.email != ''
        ) {
          errorPayload[field] = 'Email không hợp lệ'
        }
      })
      dispatch({
        type: 'ERROR',
        value: errorPayload,
      })
    }
    e.preventDefault()
  }

  return (
    <div className="container mx-auto p-4 flex items-center justify-center h-full">
      <div className="max-w-[600px] w-full">
        <div className="title-from text-center text-primary text-[25px] my-6 font-medium">
          Form thông tin khách hàng
        </div>
        <form
          className="w-full flex flex-col justify-center"
          action=""
          method="post"
          id="submit_form"
        >
          <div className="bg-white p-6 rounded-[10px]">
            <RowInput
              id="name"
              name="name"
              value={state.name}
              onChange={handleInputChange}
              placeholder="Nhập tên..."
              label="Họ tên"
              required
              error={state.errors.name}
              autoComplete="cccd"
            />
            <RowInput
              id="name_company"
              name="name_company"
              value={state.name_company}
              onChange={handleInputChange}
              placeholder="Nhập tên Công ty..."
              label="Tên công ty"
              required
              error={state.errors.name_company}
              autoComplete="name_company"
            />
            <RowInput
              id="phone"
              name="phone"
              value={state.phone}
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại..."
              label="Số điện thoại"
              required
              error={state.errors.phone}
              autoComplete="phone"
            />
            <RowInput
              id="email"
              name="email"
              value={state.email}
              onChange={handleInputChange}
              placeholder="Nhập email..."
              label="Email"
              required
              error={state.errors.email}
              autoComplete="email"
            />
            <div>
              <label className="text-[15px] font-medium">Nội dung</label>
              <textarea
                name="content"
                id="content"
                value={state.content}
                onChange={handleContentChange}
                placeholder="Message"
                className="w-full px-3 py-2 mb-2 resize-none transition-all border border-gray-200 rounded-md outline-blue-600/50 hover:border-blue-600/30"
              ></textarea>
            </div>
          </div>

          <div className="w-full flex gap-4">
            <button
              type="submit"
              className="w-1/2 mt-2 p-2.5 text-sm font-medium text-[#333] bg-white rounded-md"
            >
              Quay lại
            </button>
            <button
              onClick={handleFetchApi}
              type="submit"
              className="w-1/2 mt-2 p-2.5 text-sm font-medium text-white bg-primary rounded-md"
            >
              Tiếp tục
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default FormPage
