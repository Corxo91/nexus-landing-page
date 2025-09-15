import { BestBusiness } from "@/components/BestBusiness";
import FirstBlock from "@/components/FirstBlock/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { CounterData } from "@/components/CounterData";
import { ChoseYourCards } from "@/components/ChoseYourCards";
import { ControlBilling } from "@/components/ControlBilling";

export default function Home() {
  return (
    <>
      <Header/>
      <FirstBlock/>
      <CounterData/>
      <BestBusiness/>
      <ChoseYourCards/>
      <ControlBilling/>
    </>
    
  )
}
