import { Image } from "@/shared/ui/image/Image"
import { Text } from "@/shared/ui/text/Text"

interface PetCardProps {
  img: string,
  name: string,
  description?: string,
  link: string,
  gitHub: string
}

export const PetCard = ({ img, name, description, link, gitHub }: PetCardProps) => {
  return (
    <div className="max-w-[450px]">
      <a href={link} target="_blank" className="block  relative group cursor-pointer">
        <div className="block  p-1 backface-visibility-hidden transition-transform duration-300 group-hover:rotate-y-180">

          <div className="relative flex flex-col bg-border rounded-t-md z-20">
            <Image src={img} />
            <Text title={name} TitleTag="h2" align="center" className="flex-1 basis-full p-4 overflow-x-hidden text-nowrap text-ellipsis" />
          </div>

          <div className="absolute inset-0 p-4 bg-border rotate-y-180 rounded-t-md z-10">
            <Text text={description} className="line-clamp-[8]" />
          </div>

        </div>
      </a>

      <a href={gitHub} target="_blank" className="block p-4 bg-border rounded-b-md">
        <Text text="Ссылка на гитхаб" />
        <Text text={gitHub} />
      </a>
    </div>
  )
}

