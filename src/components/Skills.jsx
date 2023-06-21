import {
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
} from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiGit } from "react-icons/di";
const Skills = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
      <div className="flex flex-col items-center gap-1">
        <IoLogoHtml5 className="text-4xl text-orange-500" />
        <span>HTML5</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <IoLogoCss3 className="text-4xl text-blue-500" />
        <span>CSS3</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <IoLogoJavascript className="text-4xl text-yellow-400" />
        <span>JavaScript</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <IoLogoReact className="text-4xl text-blue-400" />
        <span>React</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <SiTailwindcss className="text-4xl text-blue-400" />
        <span>Tailwind</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <TbBrandNextjs className="text-4xl dark:text-stone-200 text-gray-700" />
        <span>Nextjs</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <DiGit className="text-4xl text-orange-600" />
        <span>Git</span>
      </div>
    </div>
  );
};

export default Skills;
