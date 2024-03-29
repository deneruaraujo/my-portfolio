"use client"

import * as Tooltip from '@radix-ui/react-tooltip';
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiNodedotjs, SiNestjs, SiVitest, SiJest, SiPostgresql, SiDocker, SiPrisma, SiRedux } from 'react-icons/si';

export function Skills() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.01s_ease-in-out_infinite] hover:animate-pulse' aria-label='HTML5'>
            <SiHtml5 size="auto" className="text-[#DC3D1C] w-9 hover:-translate-y-2 duration-200 lg:w-11 " />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            HTML5
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.02s_ease-in-out_infinite] hover:animate-pulse' aria-label='CSS3'>
            <SiCss3 size="auto" className="text-[#0062B1] w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            CSS3
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.03s_ease-in-out_infinite] hover:animate-pulse' aria-label='JavaScript'>
            <SiJavascript size="auto" className="text-[#EAD41C] bg-black w-9 hover:-translate-y-2 duration-200 lg:w-11 " />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            JavaScript
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.04s_ease-in-out_infinite] hover:animate-pulse' aria-label='TypeScript'>
            <SiTypescript size="auto" className="text-[#2F72BC] w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            TypeScript
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.05s_ease-in-out_infinite] hover:animate-pulse' aria-label='React'>
            <SiReact size="auto" className="text-[#5CCFEE] w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            React
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.06s_ease-in-out_infinite] hover:animate-pulse' aria-label='Next.js'>
            <SiNextdotjs size="auto" className="w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            Next.js
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.07s_ease-in-out_infinite] hover:animate-pulse' aria-label='Redux'>
            <SiRedux size="auto" className="w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            Redux
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.08s_ease-in-out_infinite] hover:animate-pulse' aria-label='Tailwind'>
            <SiTailwindcss size="auto" className="text-[#35B3EB] w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            Tailwind
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.09s_ease-in-out_infinite] hover:animate-pulse' aria-label='Node.js'>
            <SiNodedotjs size="auto" className="text-[#80BD41] w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            Node.js
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.10s_ease-in-out_infinite] hover:animate-pulse' aria-label='NestJS'>
            <SiNestjs size="auto" className="text-[#E0234E] w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            NestJS
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.11s_ease-in-out_infinite] hover:animate-pulse' aria-label='Vitest'>
            <SiVitest size="auto" className="text-[#2D3748] w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            Vitest
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.12s_ease-in-out_infinite] hover:animate-pulse' aria-label='Jest'>
            <SiJest size="auto" className="text-[#2D3748] w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            Jest
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.13s_ease-in-out_infinite] hover:animate-pulse' aria-label='PostgreSQL'>
            <SiPostgresql size="auto" className="text-[#336791] w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            PostgreSQL
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.14s_ease-in-out_infinite] hover:animate-pulse' aria-label='Docker'>
            <SiDocker size="auto" className="text-[#1D63ED] w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            Docker
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className='cursor-default animate-[bounce_1.15s_ease-in-out_infinite] hover:animate-pulse' aria-label='Prisma'>
            <SiPrisma size="auto" className="text-[#2D3748] w-9 hover:-translate-y-2 duration-200 lg:w-11" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-black text-white px-[14px] py-[8px] text-[14px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] -translate-y-1"
            sideOffset={5}
          >
            Prisma
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}