import Botao from "./Botao"
import { Drum } from "lucide-react";
import imglogo from "../assets/logo.jpg"

function Herosection() {
    return(
    <section className="flex justify-center h-screen bg-primary-1">
        <div className="container flex items-center justify-around">
            <div className="drop-shadow-2xl">
                <a className="text-slate-50 font-bold text-5xl font-robotoflex">Olá, me chamo</a> <a className="text-primary-5 pl-2 font-bold text-6xl font-robotoflex drop-shadow-2xl">HarukZ...</a> 
                <h1 className="text-slate-300 font-semibold text-2xl font-robotoflex">Web Desenvolvedor e Web Designer</h1>
                <Botao name="Contatos"/>
            </div>
            <div className="">
                <img src={imglogo} className="rounded-full border-8 border-primary-5 h-80 w-80 drop-shadow-2xl"/>
            </div>
        </div>
    </section>
    )
}
export default Herosection;