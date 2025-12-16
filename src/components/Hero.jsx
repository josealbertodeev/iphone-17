function Hero() {

    return (
        <section className="relative h-screen overflow-hidden bg-black pt-16 sm:pt-20">
            <div className="absolute top-19 right-0 left-0 z-0">
                <img src="/img/hero.jpg" className="w-full h-full object-cover opacity-90" alt="Hero Image" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black opacity-80"></div>
            </div>

            <div className="absolute bottom-4 sm:bottom-8 left-1/2 z-10 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-4 sm:size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </div>
        </section>
    )
}

export default Hero;