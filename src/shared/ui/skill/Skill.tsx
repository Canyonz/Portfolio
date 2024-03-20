import { Text } from "../text/Text"
import cls from 'classnames'

interface SkillProps {
  text: string,
  className?: string
}

export const Skill = ({ text, className }: SkillProps) => {
  return (
    <Text text={text} align="center" className={cls("max-w-max px-4 py-2 bg-border rounded-lg", className)} />
  )
}