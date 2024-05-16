import PageHeader from "../components/PageHeader";
import Form from "../components/contactForm";
import ContactInfo from "../components/contactInfo";

const Contact = () => {
  const info = {
    name: "Ben jemaa mohamed el moez",
    email: "moezbj.93@gmail.com",
    location: "Tunis, Tunisia ",
  };
  return (
    <section className="flex flex-col items-center mt-12 mx-10 md:mx-30 lg:mx-36 xl:mx-44">
      <PageHeader title="Contact" description="Get in touch" />
      <div className="contactWrap container ">
        <div className="grid grid-cols-12 gap-4 mt-12">
          <div className="w-full col-start-1 col-end-6 max-md:col-span-12">
            <ContactInfo
              name={info.name}
              location={info.location}
              email={info.email}
            />
          </div>
          <div className="w-full col-start-7 col-span-6 max-md:col-span-12">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
