export default function Button({ children, className = "" }) {
    return (
        <span className={`inline-flex bg-[#e44f39] hover:bg-orange-600 transition text-white px-8 py-4 rounded-full items-center gap-3 ${className}`}>
            {children}
            <span className="w-2 h-2 bg-white rounded-full shrink-0" />
        </span>
    );
}