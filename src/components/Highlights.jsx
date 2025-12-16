function Highlights() {
    return (
        <section className="bg-black py-12 sm:py-20 px-3 sm:px-6" id="design">
            <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">

                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">Design revolucionário</h2>
                    <p className="text-base sm:text-xl text-gray-400">Cada detalhe foi pensado para proporcionar uma experiência única.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-16">
                    <div className="bg-gray-900 rounded-3xl p-4 sm:p-8">
                        <img className="w-full rounded-2xl mb-3 sm:mb-4 hover:scale-105 transition-transform duration-300" src="/img/titanium-design.jpg" alt="iphone-titanium-design" />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Titânio Premium</h3>
                        <p className="text-sm sm:text-base text-gray-400">O novo iPhone 17 é feito de um material de titânio leve e resistente.</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-4 sm:p-8">
                        <img className="w-full rounded-2xl mb-3 sm:mb-4 hover:scale-105 transition-transform duration-300" src="/img/ios-features.jpg" alt="iphone-ios-features" />
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Recursos do iOS</h3>
                        <p className="text-sm sm:text-base text-gray-400">Descubra as novidades do iOS 17, projetadas para aproveitar ao máximo o novo hardware.</p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-6 sm:p-12 mb-12 sm:mb-16" id="performance">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">O chip A18 Pro traz desempenho e eficiência energética sem precedentes.</p>
                    <img className="w-full rounded-2xl mb-3 sm:mb-4 hover:scale-102 transition-transform duration-300" src="/img/chip-a18-pro.jpg" alt="A18 Pro" />

                    <ul className="space-y-2 sm:space-y-3 text-gray-300">
                        <li className="text-sm sm:text-base text-gray-400">CPU 20% mais rápida</li>
                        <li className="text-sm sm:text-base text-gray-400">GPU 25% mais eficiente</li>
                        <li className="text-sm sm:text-base text-gray-400">Neural Engine com 16 núcleos</li>
                        <li className="text-sm sm:text-base text-gray-400">Ray tracing acelerado por hardware</li>
                    </ul>
                </div>

                <div className="text-center" id="camera">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10">Sistema de Câmera Pro Avançado</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                        <div className="bg-gray-900 rounded-2xl p-4 sm:p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
                            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 sm:mb-4">48 MP</div>
                            <h4 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">Principal</h4>
                            <p className="text-sm sm:text-base text-gray-400">Sensor maior para fotos mais nítidas e detalhadas.</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-4 sm:p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
                            <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2 sm:mb-4">12 MP</div>
                            <h4 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">Ultra Wide</h4>
                            <p className="text-sm sm:text-base text-gray-400">Campo de visão mais amplo para fotos panorâmicas.</p>
                        </div>

                        <div className="bg-gray-900 rounded-2xl p-4 sm:p-8 hover:scale-105 transition-transform duration-300 cursor-pointer">
                            <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 sm:mb-4">12 MP</div>
                            <h4 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">Telefoto 5x</h4>
                            <p className="text-sm sm:text-base text-gray-400">Zoom óptico de 5x para detalhes impressionantes à distância.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights;