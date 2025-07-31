export function Button3({label,onClick}){
    return <div>
       <button onClick={onClick} type="button" className="text-green-500 bg-green-900/40 border border-green-500  hover:bg-green-600/40 font-medium rounded-2xl text-sm px-5 py-4 me-2 mb-2">{label}</button>
    </div>
} 