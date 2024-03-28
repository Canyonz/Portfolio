import cls from 'classnames'
import { ImgHTMLAttributes } from 'react'

type ObjectFit = "contain" | "cover"

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string,
  alt?: string,
  objectFit?: ObjectFit,
  className?: string
}

export const Image = ({ src, alt, objectFit = 'cover', className, ...otherProps }: ImageProps) => {
  return (
    <img src={src} alt={alt} className={cls(`w-full h-full object-${objectFit} object-center pointer-events-none select-none`, className)} {...otherProps} />
  )
}