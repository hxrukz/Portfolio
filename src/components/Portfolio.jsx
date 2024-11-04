import Project from "./Project"
import ImgProjeto from "../assets/ImgProjeto.jpg"
function Portfolio() {
    return(
        <section className="bg-slate-300 h-screen" id="portfolio">
            <div className="pt-20">
                <div className="px-20 flex justify-center">
                    <h1 className="font-roboteflex text-primary-1 font-bold text-5xl">Portfolio</h1>
                </div>
                <div className="flex flex-wrap px-20 pt-10 bg-[url(`$(imagem)`)]">
                    <Project title="Primeiro projeto..." description="Descrição do primeiro projeto..."/>
                    <Project title="Segundo projeto..." description="Descrição do segundo projeto..."/>
                </div>
            </div>
        </section>
    )
}
export default Portfolio