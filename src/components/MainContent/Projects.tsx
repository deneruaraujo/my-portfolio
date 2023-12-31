import { DailyDiet } from "./Projects/backEnd/DailyDiet";
import { FindAFriend } from "./Projects/backEnd/FindAFriend";
import { BookSearch } from "./Projects/frontEnd/BookSearch";
import { ExclusiveStore } from "./Projects/frontEnd/ExclusiveStore";

export function Projects() {
  return (
    <>
      <div className="mx-8 pt-20 md:mx-auto w-3/4 xl:w-3/4 3xl:w-4/6">
        <span className="text-xs">SOME OF</span>
        <h2 className="text-xl mb-8">MY FRONT-END PROJECTS</h2>
      </div>
      <div>
        <ExclusiveStore />
        <BookSearch />
      </div>
      <div className="mx-8 pt-20 md:mx-auto w-3/4 xl:w-3/4 3xl:w-4/6">
        <span className="text-xs">SOME OF</span>
        <h2 className="text-xl mb-8">MY BACK-END PROJECTS</h2>
      </div>
      <div className="pb-20">
        <FindAFriend/>
        <DailyDiet/>
      </div>
    </>
  )
}