export function Input({label,placeholder,onChange}){
    return <div className="mt-4">
        <div className=" text-left p-1 text-lg font-bold">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className="w-full h-10 p-2 px-2 border  border-gray-300 rounded-md focus:outline-none "/>
    </div>
    
}