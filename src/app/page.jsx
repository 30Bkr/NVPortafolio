import { Card } from "@/components/card/Card";
import { Portal } from "@/components/portal/Portal";
import styles from './page.module.css'
import Redes from "@/components/redes/Redes";
import Bento from "@/components/bento/Bento";
import { Cards } from "@/components/cards/Cards";

export default function Home() {
  return (
    <div className={styles.contenedor}>
      <section className="flex flex-col">
        <Redes/>
      </section>
      <section className="w-full h-dvh mt-8" id="comunicacion">
        {/* <div className="grid grid-flow-row-dense grid-cols-10 grid-rows-2 gap-4" id="bento">
          <div className="col-span-6 bg-blue-400 h-90 w-full rounded-md">
            hola
          </div>
          <div className="col-span-4 bg-red-600 h-90 w-full rounded-md">
            hola2
          </div>
          <div className="col-span-4 bg-amber-500 h-90 w-full rounded-md">
            hol3
          </div>
          <div className="col-span-6 bg-green-400 h-90 w-full rounded-md">
            hola4
          </div>
        </div> */}
        <Bento />
      </section>
      <section className="mt-24" id="connections">
        <Cards />
      </section>
    </div>
  );
}
