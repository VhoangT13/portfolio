const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-yellow-50/50 dark:bg-gray-900/40 py-16 text-center mb-10"
    >
      <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
      <div className="mb-6 px-6 lg:px-0">
        <p className="text-lg mb-4">{`I'm currently looking for any new opportunities, so my inbox is always open.`}</p>
        <p className="text-lg">
          {" "}
          <a
            className="font-semibold pb-1 border-b border-gray-700"
            href="mailto:viethoangtrinh01@gmail.com"
          >
            Pop me an email
          </a>{" "}
          at {""}
          <span className="">viethoangtrinh01@gmail.com</span>{" "}
        </p>
      </div>
    </section>
  );
};

export default Contact;
