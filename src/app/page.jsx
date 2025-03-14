import { Card } from "@/components/card/Card";
import { Portal } from "@/components/portal/Portal";
import styles from './page.module.css'
import Redes from "@/components/redes/Redes";
import Bento from "@/components/bento/Bento";
import { Cards } from "@/components/cards/Cards";

export default function Home() {
  return (
    <div >
      <div className={`flex flex-col `}>
        <Redes/>
        <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mt-16"/>
      </div>
      <div className={`w-full ${styles.bag2}`} id="comunicacion">
        <Bento />
        <div className="w-full p-[0.5px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent mt-8"/>
        {/* <div className="w-full p-[0.2px] bg-gradient-to-r from-transparent via-foreground/90 to-transparent my-8 mt-16" /> */}
      </div>
      <div className={`mt-16`} id="connections">
        <Cards />
      </div>
    </div>
  );
}
