export function Button({label,onClick}){
    return <div>
        <button onClick={onClick} className="text-base text-cyan-50 bg-gray-900 h-12 w-full mt-8 rounded-lg hover:bg-slate-700">{label}</button>
    </div>
} 
//can use FLOWBITE for custom button