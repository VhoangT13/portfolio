import Skills from "./Skills";

const About = () => {
  return (
    <section
      id="about"
      className="container p-4 mx-auto mb-20 lg:p-14 md:p-8 xl:p-20"
    >
      <h2 className="mb-4 dark:text-stone-200 text-4xl font-semibold lg:text-5xl lg:mb-8">
        About me
      </h2>
      <div className="items-center justify-around mb-6 text-lg lg:flex">
        <img
          src="/assets/about.png"
          className="max-w-xs md:max-w-lg basis-1/2"
          alt="about"
        />
        <div className=" basis-1/2">
          <p className="mb-4 text-3xl font-semibold">
            I like to craft things that live in the internet.
          </p>
          <p className="leading-relaxed md:pr-8">
            {` With knowledge in HTML, CSS, and JavaScript, I strive to deliver clean and visually appealing websites. I enjoy collaborating with teams, staying up-to-date with industry trends, and bringing ideas to life through seamless web experiences.`}
          </p>
        </div>
      </div>
      <div>
        <p className="mb-6 dark:text-stone-300 text-xl text-center text-gray-700">{`Here are a few technologies I've been working with`}</p>
        <Skills />
      </div>
    </section>
  );
};

export default About;
