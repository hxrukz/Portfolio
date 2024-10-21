function Header() {
    return(
    <header className="bg-blue-950 flex justify-center text-gray-300 p-10 shadow-2xl">
        <h1 className="font-bold text-white">HZ</h1>
        <div className="container flex justify-center">
            
            <nav className="font-semibold">
                <a href="#sobre" className="p-4 hover:text-white">Sobre</a>
                <a href="#portfolio" className="p-4  hover:text-white">Portfolio</a>
                <a href="#contato" className="p-4  hover:text-white">Contato</a>
            </nav>
        </div>
    </header>
    )
}
export default Header;