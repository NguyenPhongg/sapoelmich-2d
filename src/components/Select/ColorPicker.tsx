import { SketchPicker } from 'react-color'

interface Props {
  value?: string | null
  onChange: (value: { target: { value: string } }) => void
  className?: string
}
const ColorPicker: React.FC<Props> = ({ value, onChange, className }) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const toggle = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    setOpen((o) => !o)
  }, [])
  const handleChange = useCallback(
    ({ hex }: { hex: string }) => {
      onChange({ target: { value: hex } })
    },
    [onChange]
  )
  useEffect(() => {
    if (!open) return
    const listener = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!containerRef.current || !containerRef.current.contains(target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [open])
  return (
    <div className={className}>
      <button
        className="w-8 h-8 rounded border cursor-pointer block"
        onClick={toggle}
        style={{
          background: value || '#018877',
        }}
      />
      {open && (
        <div ref={containerRef} className="absolute right-0 translate-y-1">
          <SketchPicker
            color={value || '#018877'}
            onChangeComplete={handleChange}
          />
        </div>
      )}
    </div>
  )
}
export default ColorPicker
