import Botao from "./Botao"
import imgherosection from "../assets/Manga-livre-rs-solo-leveling-Sung-Jin-Woo.webp"
function Herosection() {
    return(
    <section className="flex justify-center h-screen">
        <div className="container flex items-center">
            <div>
                <a className="text-blue-950 font-bold text-5xl">Olá, me chamo</a> <a className="text-blue-500 pl-2 pt-10 font-bold text-6xl">HarukZ...</a> 
                <h1 className="text-blue-950 font-semibold text-2xl">Web Desenvolvedor e Web Designer</h1>
                <Botao />
            </div>

            <div>
            
            </div>
        </div>
    </section>
    )
}
export default Herosection;