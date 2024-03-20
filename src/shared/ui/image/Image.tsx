import cls from 'classnames'
import { ImgHTMLAttributes } from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string,
  alt?: string,
  className?: string
}

export const Image = ({ src, alt, className, ...otherProps }: ImageProps) => {
  return (
    <img src={src} alt={alt} className={cls("w-full h-full object-cover object-center", className)} {...otherProps} />
  )
}