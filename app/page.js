import Image from "next/image";
import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import Clients from "./components/Clients/clients";
import Joblist from "./components/Joblist/joblist";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <main className={"container-fluid g-0"}>
      <Header/>
      <Banner/>
      <Clients/>
      <Joblist/>
      <Footer/>
    </main>
  );
}
