import { fabric } from 'fabric'
import { Part, PartPropertyType, totalPart } from '~/api/models/productModel'
import { debounce } from 'lodash-es'
interface Props {
  parts: Part[]
}
const CanvasComponent: React.FC<Props> = ({ parts }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const canvas = useRef<fabric.StaticCanvas | null>(null)
  const [searchParams] = useSearchParams()
  const selectedPart = useMemo(() => {
    const id = searchParams.get('part')
    if (id === 'total' || !id) return totalPart
    const part = parts.find((p) => p.id === +id)
    return part || parts[0]
  }, [searchParams, parts])
  const listener = () => {
    if (!containerRef.current || !canvas.current) return
    const { width, height } = containerRef.current.getBoundingClientRect()
    const scale = width / canvas.current.getWidth()
    const zoom = canvas.current.getZoom() * scale
    canvas.current.setDimensions({
      width: width,
      height: height,
    })
    canvas.current.setViewportTransform([zoom, 0, 0, zoom, 0, 0])
  }
  useEffect(() => {
    canvas.current = new fabric.StaticCanvas(canvasRef.current)
    listener()
    window.onresize = debounce(listener, 50)
    return () => {
      canvas.current?.dispose()
      window.onresize = null
    }
  }, [])
  useEffect(() => {
    if (selectedPart) {
      canvas.current?.clear()
      if (selectedPart.id === 'total') {
        if (canvas.current) {
          (async () => {
            for (const part of parts) {
              await drawImagePart(part)
              // parts.forEach((part) => drawImagePart(part))
            }
            listener()
          })()
        }
        return
      }
      drawImagePart(selectedPart)
      listener()
    }
  }, [selectedPart, searchParams, parts])
  function drawImagePart(part: Part) {
    return new Promise((r) => {
      let key = ''
      part.properties.forEach((property) => {
        if (
          property.type === PartPropertyType.IMAGE ||
          property.type === PartPropertyType.COLOR
        ) {
          const params = searchParams.get(property.id + '')
          const currentOption = params
            ? property.options?.find((option) => option.id + '' === params)
            : property.options?.find((option) => option.default)
          if (currentOption) key += property.id + '=' + currentOption.id + '&'
        }
      })
      if (key.endsWith('&')) key = key.substring(0, key.length - 1)
      const imagePath = part.images?.[key]
      if (imagePath && canvas.current) {
        const img = new Image()
        img.src = imagePath
        img.onload = () => {
          if (canvas.current) {
            const image = new fabric.Image(img, {
              width: img.width,
              height: img.height,
              scaleX: 800 / img.width,
              scaleY: 800 / img.height,
            })
            canvas.current.add(image)
          }
          r(true)
        }
        img.onerror = () => r(false)
      } else r(false)
    })
  }
  return (
    <div ref={containerRef} className="w-full pt-[100%] relative">
      <canvas
        ref={canvasRef}
        width={800}
        height={800}
        className="w-full h-full absolute top-0 left-0"
      />
    </div>
  )
}
export default CanvasComponent
