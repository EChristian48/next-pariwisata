import { DetailedHTMLProps, FC, ImgHTMLAttributes } from 'react'
import { Carousel } from 'react-bootstrap'

export type PlaceCardProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

const PlaceCard: FC<PlaceCardProps> = ({ children, ...imgProps }) => {
  return (
    <div>
      <img {...imgProps} />
      {/* <p>{children}</p> */}
    </div>
  )
}

export default PlaceCard
