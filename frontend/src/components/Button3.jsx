export function Button3({label,onClick}){
    return <div>
       <button onClick={onClick} type="button" class="text-white bg-gray-800 border border-grey-700 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2">{label}</button>
    </div>
} 