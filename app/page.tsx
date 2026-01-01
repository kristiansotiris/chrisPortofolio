import ContactUs from "./home/components/contactus";
import FirstSection from "./home/components/first_section";
import FourthSection from "./home/components/fourth_section";
import SecondSection from "./home/components/second_section";
import ThirdSection from "./home/components/third_section";

export default function Home() {
  return (
    <>
      <main className="w-auto">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <ContactUs />
      </main>
    </>
  );
}
