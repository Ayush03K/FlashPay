export function Input({label,placeholder,onChange}){
    return <div className="mt-4">
        <div className=" text-left p-1 text-lg font-bold">
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className="w-full h-9 p-1 border border-gray-300 rounded-md focus:outline-none focus:border-black"/>
    </div>
    
}