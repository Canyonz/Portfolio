import cls from 'classnames'
import { ImgHTMLAttributes } from 'react'

type ObjectFit = "object-contain" | "object-cover"

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string,
  alt?: string,
  objectFit?: ObjectFit,
  className?: string
}

export const Image = ({ src, alt, objectFit = 'object-cover', className, ...otherProps }: ImageProps) => {
  return (
    <img src={src} alt={alt} className={cls(`w-full h-full ${objectFit} object-center pointer-events-none select-none`, className)} {...otherProps} />
  )
}