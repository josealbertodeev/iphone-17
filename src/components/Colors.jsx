import { useState } from 'react';

function Colors() {

    const colors = [
        { id: 'blue', name: 'Titânio Azul', image: '/img/iphone-blue.jpg', colorClass: 'bg-blue-500' },
        { id: 'silver', name: 'Titânio Natural', image: '/img/iphone-silver.jpg', colorClass: 'bg-gray-300' },
        { id: 'orange', name: 'Titânio Laranja', image: '/img/iphone-orange.jpg', colorClass: 'bg-orange-500' }
    ];

    const models = [
        { name: 'Pro Max', screen: '6.9 polegadas', storage: '256GB, 512GB ou 1TB', battery: '33h de vídeo', weight: '221g' },
        { name: 'Pro', screen: '6.3 polegadas', storage: '128GB, 256GB ou 512GB', battery: '29h de vídeo', weight: '199g' }
    ];

    const [selectedColor, setSelectedColor] = useState('silver');

    return (

        <section id="colors" className="bg-black py-12 sm:py-20 px-3 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">Escolha sua cor</h2>
                    <p className="text-base sm:text-xl text-gray-400">Quatro acabamentos em titânio para você escolher.</p>
                </div>

                <div className="flex justify-center mb-8 sm:mb-12">
                    <div className="relative w-full max-w-3xl">
                        <div className='relative flex items-center justify-center min-h-[300px] sm:min-h-[500px]'>
                            <img src={colors.find(color => color.id === selectedColor).image} alt='iphone17' className='max-w-full max-h-[400px] sm:max-h-[600px] mx-auto' />
                        </div>

                        <div className="text-center mt-4 sm:mt-6">
                            <div className="inline-block backdrop-blur-md bg-black/40 px-4 sm:px-8 py-2 sm:py-4 rounded-full">
                                <h3 className="text-lg sm:text-2xl font-semibold">{colors.find(color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-4 sm:gap-8 mt-6 sm:mt-8">
                            {colors.map(color => (
                                <button key={color.id} onClick={() => setSelectedColor(color.id)} className={`relative transition-all duration-300 hover:scale-110 focus:outline-none`}>
                                    <div className={`w-12 sm:w-16 h-12 sm:h-16 border-3 sm:border-4 m-1.5 sm:m-2 rounded-full cursor-pointer ${color.colorClass} ${selectedColor === color.id ? 'border-white' : 'border-gray-600 opacity-80'}`}></div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {models.map((model, index) => (
                        <div key={index} className='bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-4 sm:p-8 border-3 border-gray-800 m-2 sm:m-4 hover:scale-102 transition-transform duration-300'>
                            <div className='text-3xl sm:text-4xl mb-2 sm:mb-4'>📱</div>
                            <h3 className='text-lg sm:text-xl font-semibold mb-2 sm:mb-3'>{model.name}</h3>
                            <p className='text-sm sm:text-base text-gray-400'>Tela: {model.screen}</p>
                            <p className='text-sm sm:text-base text-gray-400'>Armazenamento: {model.storage}</p>
                            <p className='text-sm sm:text-base text-gray-400'>Bateria: {model.battery}</p>
                            <p className='text-sm sm:text-base text-gray-400'>Peso: {model.weight}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-3 sm:mt-5">
                    <button className="w-full sm:w-auto mt-8 sm:mt-12 bg-blue-600 hover:bg-blue-700 hover:scale-103 transition-transform duration-300 text-white text-base sm:text-xl font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-full transition-colors duration-300 cursor-pointer">
                        Compre agora a partir de R$ 7.999,00
                    </button>
                    <p className='text-sm sm:text-base text-gray-400 mt-2 sm:mt-3'>Parcelamento em até 12x sem juros</p>
                </div>
            </div>
        </section>

    )
}

export default Colors;