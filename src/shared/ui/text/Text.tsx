import cls from 'classnames'

type TitleTagType = "h1" | "h2" | "h3"
type AlignType = "left" | "center" | "right"

interface TextProps {
  title?: string,
  TitleTag?: TitleTagType,
  text?: string,
  align?: AlignType,
  bold?: boolean,
  className?: string
}

const titleTagToSizeClass: Record<TitleTagType, string> = {
  "h1": "text-4xl",
  "h2": "text-2xl",
  "h3": "text-lg",
}

const alignToAlignClass: Record<AlignType, string> = {
  "left": "text-left",
  "center": "text-center",
  "right": "text-right",
}

export const Text = ({ title, TitleTag = "h1", text, align = 'left', bold, className }: TextProps) => {
  const sizeTitle = titleTagToSizeClass[TitleTag]
  const alignClass = alignToAlignClass[align]

  if (title) {
    return <TitleTag className={cls(`block text-primary  ${sizeTitle} ${alignClass}`, className)}>{title}</TitleTag>
  }

  return (
    <span className={cls("block text-primary", bold && "font-bold", className)}>{text}</span>
  )
}