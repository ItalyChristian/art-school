import { GoTop } from "../components/GoTop";
import { Menu } from "../components/Menu";
import data from "../api/dataMock.json";
import { BannerContainer } from "../components/BannerContainer";
import  background  from '../components/BannerContainer/background.jpeg';
import { ServicesContainer } from "../components/ServicesContainer";
import { ContainerThree } from "../components/ContainerThree";
import { AboutUs } from "../components/AboutUs";
import { Form } from "../components/Form";
import { Contact } from "../components/Contact";
import { WhereToFind } from "../components/WhereToFind";
import { Footer } from "../components/Footer";

export default function Home() {

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    window && window.scrollTo(0, 0);
  };

  return (
    <>
      <Menu
        links={data.menuAttributes}
      />

      <BannerContainer
        backgroundImage={background.src}
        title="Estúdio de Arte Taylor Swift"
        textButton="Agendar uma audição"
        // onButtonClick={() => alert('Audição agendada!')}
      /> 

      <ServicesContainer />

      <AboutUs />

      <Contact />

      <WhereToFind />

      <Footer />

      <GoTop handleClick={() => handleClick} />
    </>
  );
}
