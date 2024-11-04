function Technology({img, name}) {
    return(
        <div className="flex flex-col items-center w-1/4 p-4">
            <div className="bg-primary-1 hover:bg-primary-5 border-4 border-primary-5 rounded-2xl w-full flex flex-col items-center text-white p-4 transition-all">
                <img src={img} className="h-20"></img>
                <h2 className="pt-4 font-robotoflex font-bold">{name}</h2>
            </div>
        </div>
    )
}
export default Technology