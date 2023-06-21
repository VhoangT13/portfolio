import Tag from "./UI/Tag";

import { BiCodeAlt } from "react-icons/bi";
const PortfolioItem = ({
  title,
  link,
  sourceCode,
  imageUrl,
  stack,
  description,
}) => {
  return (
    <div className="overflow-hidden border-2 dark:border-stone-200 border-gray-800 rounded-md xl:flex">
      <img
        src={imageUrl}
        className=" xl:max-w-2xl 2xl:maw-w-3xl"
        alt="project image"
      />
      <div className="px-2 py-6 md:px-6 md:py-10 border-l">
        <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
          {stack.map((item, index) => (
            <Tag className={`bg-green-100 dark:text-gray-800`} key={index}>
              {item}
            </Tag>
          ))}
        </div>
        <div>
          <p className="mb-2 text-3xl font-semibold text-gray-700 dark:text-stone-200">
            {title}
          </p>
          <p className="mb-6 md:mb-8">{description}</p>
          <div className="flex gap-4">
            <a
              rel="noreferrer"
              className="px-2 pb-1 border-b-2 border-red-300"
              target="_blank"
              href={link}
            >
              Live Demo
            </a>
            <a
              className="flex items-center gap-1 px-2 pb-1 border-b-2 border-red-300"
              rel="noreferrer"
              target="_blank"
              href={sourceCode}
            >
              <BiCodeAlt /> <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
