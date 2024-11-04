function Project ({title, description, link, img}) {
return (
        <div className="flex flex-col items-center w-1/3 p-4">
            <div className="bg-slate-300 border-4 border-primary-5 rounded-md w-full flex flex-col items-center">
                <h2 className="font-robotoflex font-bold text-primary-1">{title}</h2>
                <p className="font-robotoflex font-semibold text-primary-1">{description}</p>
                <a>{link}</a>
                <img src={img} className=""></img>
                
            </div>
        </div>
    )
}
export default Project