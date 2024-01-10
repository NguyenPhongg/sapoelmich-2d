const priceFormat = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
})

export const formatPrice = (price: number) => priceFormat.format(price)

const dateFormat = new Intl.DateTimeFormat('vi-VN', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  weekday: 'long',
})

export const formatDate = (date: string) => dateFormat.format(new Date(date))

export function getPrice(price: number, comparePrice: number): number {
  if (!price) return comparePrice
  if (!comparePrice) return price
  return Math.min(price, comparePrice)
}
