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
import { Main } from "../templates/Main";

export default function Home() {

  return (
    <Main children={
      <>
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
      </>
    }/>
  );
}
