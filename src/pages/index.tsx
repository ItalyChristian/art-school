import data from "../api/dataMock.json";
import  background  from '../components/BannerContainer/background.webp';
import { AboutUs } from "../components/AboutUs";
import { BannerContainer } from "../components/BannerContainer";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { GoTop } from "../components/GoTop";
import { Menu } from "../components/Menu";
import { ServicesContainer } from "../components/ServicesContainer";
import { WhereToFind } from "../components/WhereToFind";

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
