import Technology from "./Technology"
import ReactImg from "../assets/react-logo.png"
import JSimg from "../assets/javascript.png"

function Aboutsection() {
    return (
        <section className="h-screen bg-slate-300" id="sobre">
            <div className="pt-20">
                <div className="pl-20">
                    <h1 className="font-roboteflex text-primary-1 font-bold text-5xl">Sobre.</h1>
                    <p className="pt-5 pl-5 font-roboteflex text-primary-2 font-semibold text-2xl">Meu nome é Davi, sou conhecido como Haruki</p>
                    <p className="font-roboteflex text-primary-2 font-semibold text-2xl">Olá tudo bemOlá tudo bemOlá tudo bemOlá tudo bemOlá tudo bemOlá tudo bemOlá tudo bem</p>
                    <p className="font-roboteflex text-primary-2 font-semibold text-2xl">Olá tudo bemOlá tudo bemOlá tudo bemOlá tudo bemOlá tudo bemOlá tudo bemOlá tudo bemaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
                <div className="">
                    <h1 className="pt-20 font-roboteflex text-primary-1 font-bold text-5xl pb-10 flex justify-center">Habilidades.</h1>
                    <div className="flex flex-wrap px-20">
                    <Technology img={JSimg} name="JavaScript"/>
                    <Technology img={ReactImg} name="React"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Aboutsection