function NavBar() {
    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop0blur-md z-50 ">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-center gap-2 sm:gap-8 flex-wrap">
                <a href="#design" className="hover:text-gray-300 text-xs sm:text-base">Design</a>
                <a href="#camera" className="hover:text-gray-300 text-xs sm:text-base">Câmera</a>
                <a href="#performance" className="hover:text-gray-300 text-xs sm:text-base">Performance</a>
                <a href="#cores" className="hover:text-gray-300 text-xs sm:text-base">Cores</a>
                <button className="bg-blue-600 hover:bg-blue-700 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full cursor-pointer text-xs sm:text-base">Comprar</button>
            </div>
        </nav>
    );
}

export default NavBar;
