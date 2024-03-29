import Link from "next/link";

export function About() {
  return (
    <div className="mx-8 pt-60 md:mx-auto w-3/4 lg:pt-40 xl:w-3/4 3xl:w-4/6">
      <span className="text-xs">A LITTLE</span>
      <h2 className="text-xl mb-8">ABOUT ME</h2>
      <p className="shadow-inner shadow-gray-300 bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl p-8 text-sm lg:text-lg lg:p-12">
        I'm a 24-year-old Full Stack Developer with Advanced English(C1). You can find my projects on <Link href="https://github.com/deneruaraujo?tab=GitHubsitories" className="text-redishpinksh" target="_blank">GitHub</Link>.
        <br />
        <br />
        My <span className="text-redishpinksh font-bold">Front-end</span> experience lies in <span className="font-bold">JavaScript</span>, <span className="font-bold">TypeScript</span>, <span className="font-bold">React</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">Redux</span>, <span className="font-bold">Context API</span>, <span className="font-bold">TailwindCSS</span>, UIs like <span className="font-bold">MUI</span>, <span className="font-bold">Radix-UI</span> and <span className="font-bold">shadcn/ui</span>. Also <span className="font-bold">Figma</span>.<br />
        <br />
        My <span className="text-redishpinksh font-bold">Back-end</span> experience lies in <span className="font-bold">JavaScript</span>, <span className="font-bold">TypeScript</span>, <span className="font-bold">Node.js</span>, <span className="font-bold">NestJS</span>, <span className="font-bold">Vitest</span>, <span className="font-bold">Jest</span>, <span className="font-bold">PostgreeSQL</span>, <span className="font-bold">Docker</span>, <span className="font-bold">Prisma</span> and <span className="font-bold">Cloudflare R2</span>.
        <br />
        <br />
        I'm constantly exploring new technologies.
      </p>
    </div>
  )
}