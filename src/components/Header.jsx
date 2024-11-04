//fixed w-screen bg-opacity-80 backdrop-blur-lg z-100
function Header() {
    return(
    <header className="bg-primary-2 flex justify-center text-primary-4 p-10 drop-shadow-2xl fixed w-screen bg-opacity-80 backdrop-blur-lg z-100"> 
        <h1 className="font-bold text-white font-robotoflex">HZ</h1>
        <div className="container flex justify-center">
            <nav className="font-semibold font-robotoflex">
                <a href="#sobre" className="p-4 hover:text-white transition-all">Sobre</a>
                <a href="#portfolio" className="p-4  hover:text-white transition-all">Portfolio</a>
                <a href="#contato" className="p-4  hover:text-white transition-all">Contato</a>
            </nav>
        </div>
    </header>
    )
}
export default Header;