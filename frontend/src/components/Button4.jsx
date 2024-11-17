export function Button4({label,onClick}){
    return <div>
       <button onClick={onClick} type="button" class="text-white bg-green-700 h-12 w-full hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2">{label}</button>
    </div>
} 