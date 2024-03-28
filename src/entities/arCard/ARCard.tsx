import { Image } from "@/shared/ui/image/Image"
import { Text } from "@/shared/ui/text/Text"
import { useState } from "react"
import { Icon } from "@/shared/ui/icon/Icon"
import SizeSVG from '@/shared/assets/icons/size.svg'

interface Media {
  img: string,
  video?: string
}

interface ARCardProps {
  name: string,
  preview: string,
  media: Media[]
}

export const ARCard = ({ name, preview, media }: ARCardProps) => {
  const [imageExpand, setImageExpand] = useState(false)
  const [select, setSelect] = useState<Media>({ img: preview })

  const handleClickItem = (item: Media) => () => {
    setSelect(item)
  }

  const handleClickPreviewOpen = () => {
    setImageExpand(true)
  }

  const handleClickPreviewClose = () => {
    setImageExpand(false)
  }

  const selectPreview = !select?.video ?
    (
      <button onClick={handleClickPreviewOpen} className="relative h-[250px]">
        <Image src={select.img} objectFit="object-contain" />
        <div className="group absolute inset-0 flex justify-center items-center">
          <Icon Svg={SizeSVG} size={128} className="text-bg opacity-0 transition-opacity group-hover:opacity-70" />
        </div>
      </button>
    )
    :
    (
      <div className="relative h-[250px]">
        <video src={select.video} controls className="w-full h-full" />
      </div>
    )

  return (
    <div className="w-[450px] flex flex-col gap-4 p-4 bg-border rounded-md">
      {selectPreview}

      <div className="flex gap-2 h-[90px] overflow-x-auto pb-2 scroll-style" >
        {media.map((item) => (
          <button key={item.img} onClick={handleClickItem(item)} className="min-w-40">
            <Image src={item.img} />
          </button>
        ))}
      </div>

      <Text title={name} TitleTag="h2" align="center" className="overflow-x-hidden text-nowrap text-ellipsis" />

      {imageExpand && (
        <div className="fixed inset-0 flex items-center justify-center z-30">
          <div onClick={handleClickPreviewClose} className="fixed inset-0 bg-bgOverlay"></div>
          <div className="relative max-w-screen-2xl max-h-full z-40">
            <Image
              src={select.img}
              objectFit="object-contain"
              alt="Preview"
            />
          </div>
        </div>
      )}
    </div >
  )
}