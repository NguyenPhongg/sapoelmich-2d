// if (red*0.299 + green*0.587 + blue*0.114) > 186 use #000000 else use #ffffff

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: +parseInt(result[1], 16),
        g: +parseInt(result[2], 16),
        b: +parseInt(result[3], 16),
      }
    : null
}
export function getColorByBackground(background: string) {
  const rgb = hexToRgb(background)
  if (!rgb) return null
  if (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186) return '#000000'
  return '#FFFFFF'
}
