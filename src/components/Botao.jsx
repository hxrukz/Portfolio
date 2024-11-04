function Botao({name, link}) {
    return (
        <div className="bg-primary-1 hover:bg-primary-5 border-2 border-primary-5 rounded-2xl text-white w-1/5 flex justify-center transition-all">
            <button className="font-robotoflex font-semibold">{name}</button>
            <a>{link}</a>
        </div>
    )
}
export default Botao;