import Image from "next/image";
import Link from "next/link";
import bookSearchHome from "@/public/book-search-home.jpg";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

export function BookSearch() {
  return (
    <div className="shadow-inner shadow-gray-300 bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl mx-8 mb-14 w-3/4 md:mx-auto md:p-12 lg:gap-8 lg:text-lg lg:p-12 xl:grid xl:grid-cols-[50%_50%] xl:w-3/4 3xl:w-4/6">
      <Link href="https://deneruaraujo-book-search.vercel.app/" target="_blank" aria-label="Live">
        <Image src={bookSearchHome} width={1000} height={0} alt="exclusive store home page" className="h-auto rounded hover:shadow-lg lg:hover:shadow-gray-400 duration-200 lg:hover:-translate-x-1 lg:hover:-translate-y-1 mb-6 xl:mb-0" />
      </Link>
      <div className="p-6 lg:p-0 lg:flex lg:flex-col lg:justify-between">
        <div>
          <h3 className="text-xl text-left mb-4 font-bold">BookSearch</h3>
          <p className="mb-4">Uses the Google Books APIs to search for any book that is in the Google database and return cards with a couple of information about the books. The user can click a card to open a new tab to see more about the selected book and a link to see it on google play.</p>
        </div>
        <div className="flex flex-col mb-4">
          <span className="font-bold mb-4 text-left">Technologies:</span>
          <p>HTML5, CSS3, TypeScript, React, NextJS 12, TailwindCSS and Google Books API. </p>
        </div>
        <div className="flex items-center justify-center gap-12 lg:justify-normal">
          <Link href="https://github.com/Deneruaraujo/book-search" target="_blank" aria-label="GitHub GitHub" className="flex items-center hover:text-redishpinksh hover:-translate-y-1 duration-200">
            <AiFillGithub size='auto' className="w-10 p-1" />
            <span className="font-bold">GitHub</span>
          </Link>
          <Link href="https://deneruaraujo-book-search.vercel.app/" target="_blank" aria-label="Live" className="flex items-center hover:text-redishpinksh hover:-translate-y-1 duration-200">
            <BiLinkExternal size='auto' className="w-9 p-1" />
            <span className="font-bold">Live</span>
          </Link>
        </div>
      </div>
    </div>
  )
}