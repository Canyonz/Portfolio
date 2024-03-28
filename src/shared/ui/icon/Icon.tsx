interface IconProps {
  Svg: React.FC<React.SVGProps<SVGSVGElement>> | string;
  size?: number,
  className?: string
}

export const Icon = ({ Svg, size = 24, className, ...otherProps }: IconProps) => {
  return (
    <Svg width={size} height={size} className={className} {...otherProps} />
  )
}