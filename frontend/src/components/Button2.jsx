export function Button2({label,onClick}){
    return <div>
        <button onClick={onClick} className="text-base text-cyan-50 bg-blue-900 h-12 w-full mt-8 rounded-lg hover:bg-blue-700">{label}</button>
    </div>
}