export default function Button({ children }) {
    return (
        <button className="bg-[#e44f39] hover:bg-orange-600 transition text-white px-8 py-4 rounded-full flex items-center gap-3">
            {children}
            <span className="w-2 h-2 bg-white rounded-full"></span>
        </button>
    );
}