export function Button2({label,onClick}){
    return <div>
       <button onClick={onClick} type="button" className="text-[#8486ff] bg-[#6366F1]/20 border border-[#8486ff]  hover:bg-[#6366F1]/40 font-medium rounded-2xl text-sm px-5 py-4 me-2 mb-2">{label}</button>
    </div>
} 