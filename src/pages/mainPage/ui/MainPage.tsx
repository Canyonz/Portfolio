import { ARCard } from "@/entities/arCard/ARCard"
import { PetCard } from "@/entities/petCard/PetCard"
import { Skill } from "@/shared/ui/skill/Skill"
import { Text } from "@/shared/ui/text/Text"
import { petProjectsList } from "../const/petProjectsList"
import { arProjectsList } from "../const/arProjectsList"
import { aboutMeList } from "../const/aboutMeList"
import { experienceList } from "../const/experienceList"
import { skillsList } from "../const/skillsList"
import { skillsInStudyingList } from "../const/skillsInStudyingList"

export const MainPage = () => {
  return (
    <main className="max-w-screen-2xl min-h-screen flex flex-col gap-10 p-10 mx-auto">

      <div className="h-screen-h  bg-bgSecondary rounded-md p-10" >
        <div className="flex justify-between">
          <div className="flex flex-col justify-center gap-6">
            <div>
              <Text title="О себе" TitleTag="h2" className="mb-3" />
              <div className="flex flex-col gap-1 ml-4">
                {aboutMeList.map((item) => (
                  <div key={item.title} className="flex gap-4" >
                    <Text text={item.title} bold />
                    <Text text={item.text} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Text title="Опыт работы" TitleTag="h2" className="mb-3" />

              {experienceList.map((item) => (
                <div key={item.company} className="flex flex-col gap-1 ml-4">
                  <div className="flex gap-4" >
                    <Text text="Компания:" bold />
                    <Text text={item.company} />
                  </div>

                  <div className="flex gap-4" >
                    <Text text="Начало работы:" bold />
                    <Text text={item.start} />
                  </div>

                  <div className="flex gap-4" >
                    <Text text="Окончание работы:" bold />
                    <Text text={item.end} />
                  </div>

                  <div className="flex gap-4" >
                    <Text text="Должность:" bold />
                    <Text text={item.job} />
                  </div>

                  <div className="flex gap-4" >
                    <Text text="Обязанности:" bold />
                    <Text text={item.responsibilities} />
                  </div>
                </div>
              ))}

            </div>
          </div>

          <div>
            <img src="./Profile.jpg" alt="Тут должно быть моё фото)" className="block max-w-96 max-h-full rounded-xl" />
            <div className="flex justify-between items-end p-2">
              <Text title="Васильев Данил" TitleTag="h3" />
              <Text text="23 года" />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Text title="Навыки" TitleTag="h2" className="mb-3" />
          <div className="flex gap-2 ml-4">
            {skillsList.map(skill => <Skill key={skill} text={skill} />)}
          </div>
        </div>

        <div className="mt-6">
          <Text title="В планах изучить" TitleTag="h2" className="mb-3" />
          <div className="flex gap-2 ml-4">
            {skillsInStudyingList.map(skill => <Skill key={skill} text={skill} />)}
          </div>
        </div>

      </div>


      <Text title="Мои проекты" TitleTag="h1" className="mb-5" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))]  justify-items-center gap-5">
        {petProjectsList.map((project) => (
          <PetCard key={project.name} img={project.img} name={project.name} description={project.description} link={project.link} gitHub={project.gitHub} />
        ))}
      </div>


      <Text title="Проекты дополненной реальности с моим участием" TitleTag="h1" className="mb-5" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))]  justify-items-center gap-5">
        {arProjectsList.map((project) => (
          <ARCard key={project.name} name={project.name} preview={project.preview} media={project.media} />
        ))}
      </div>

    </main>
  )
}