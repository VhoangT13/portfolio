const Hero = () => {
  return (
    <div className="container justify-between px-4 mx-auto mb-20 md:px-6 lg:py-16 md:flex">
      <div className="mb-10 lg:pt-16">
        <p className="mb-4 text-xl">
          Hi 👋, my name is{" "}
          <span className="text-2xl font-semibold dark:text-stone-200">
            Hoang
          </span>
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-800 dark:text-neutral-100 lg:text-5xl">{`I'm a Frontend Developer `}</h1>
        <p className="mb-10 text-xl">
          I love building interfaces, web apps, and exploring everything in
          between!
        </p>
        <div className="flex gap-4">
          <a
            className="px-4 py-4 text-lg text-gray-800 bg-yellow-400 border border-gray-800 rounded-full md:px-6 hover:shadow-xl"
            href="/assets/trinhviethoang-cv.pdf"
            target="_blank"
          >
            My Resume
          </a>
          <a
            className="px-4 py-4 text-lg text-gray-800 bg-red-400 border border-gray-800 rounded-full md:px-6 lg:text-xl hover:shadow-xl"
            href="#contact"
          >
            Contact me!!
          </a>
        </div>
      </div>
      <img
        className="max-w-sm lg:max-w-xl"
        src="/assets/Programming-amico.png"
        alt="Man coding Illustration"
      />
    </div>
  );
};

export default Hero;
