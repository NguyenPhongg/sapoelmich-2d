export interface TextValue {
  value: string
  font: string
  color: string
}

const ELMICH_OBJECT_SELECTED = 'ELMICH_OBJECT_SELECTED'
export function useSelectedStorage() {
  const [state, setState] = useState<Record<string, TextValue>>({})
  const firstRef = useRef(false)
  useEffect(() => {
    if (firstRef.current) {
      // setStorage
      localStorage.setItem(ELMICH_OBJECT_SELECTED, JSON.stringify(state))
    } else {
      //set State
      firstRef.current = true
      try {
        const value = localStorage.getItem(ELMICH_OBJECT_SELECTED)
        if (value) setState(JSON.parse(value))
      } catch (error) {
        console.error('Failed to parse ELMICH_OBJECT_SELECTED')
      }
    }
  }, [state])

  return [state, setState] as const
}
