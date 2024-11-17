import { Link } from "react-router-dom";

export function BottomWarning({ label, bottomtext, to }) {
    return (
        <div className="flex justify-center p-2">
            {label} 
            <Link to={to} className="text-blue-500 hover:underline ml-2 underline hover:text-blue-300">
                {bottomtext}
            </Link>
        </div>
    );
}
