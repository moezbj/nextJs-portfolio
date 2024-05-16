import AboutMe from "../components/AboutMe";
import PageHeader from "../components/PageHeader";

const About = () => {
  return (
    <section className="flex flex-col items-center mt-12 mx-10 md:mx-30 lg:mx-36 xl:mx-44">
      <PageHeader title="About Me" description="Let me introduce myself" />
      <AboutMe />
    </section>
  );
};

export default About;