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

        <section id="colors" className="bg-black py-20 px-8">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center mb-16">
                    <h2 className="text-5xl mb:text6xl font-bold mb-4">Escolha sua cor</h2>
                    <p className="text-xl text-gray-400">Quatro acabamentos em titânio para você escolher.</p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-3xl">
                        <div className='relative flex items-center justify-center min-h-[500px]'>
                            <img src={colors.find(color => color.id === selectedColor).image} alt='iphone17' className='max-w-full max-h-[600] mx-auto' />
                        </div>

                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <div className="inline-block backdrop-blur-md bg-black/40 px-8 py-4 rounded-full mb-31">
                                <h3 className="text-2xl font-semibold">{colors.find(color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-8 mt-8">
                            {colors.map(color => (
                                <button key={color.id} onClick={() => setSelectedColor(color.id)} className={`relative transition-all duration-300 hover:scale-110 focus:outline-none`}>
                                    <div className={`w-16 h-16 border-4 m-2 rounded-full cursor-pointer ${color.colorClass} ${selectedColor === color.id ? 'border-white' : 'border-gray-600 opacity-80'}`}></div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    {models.map((model, index) => (
                        <div key={index} className='bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8 border-3 border-gray-800 m-4 hover:scale-102 transition-transform duration-300'>
                            <div className='text-4xl mb-4'>📱</div>
                            <h3 className='text-xl font-semibold mb-3'>{model.name}</h3>
                            <p className='text-gray-400'>Tela: {model.screen}</p>
                            <p className='text-gray-400'>Armazenamento: {model.storage}</p>
                            <p className='text-gray-400'>Bateria: {model.battery}</p>
                            <p className='text-gray-400'>Peso: {model.weight}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <button className="mt-12 bg-blue-600 hover:bg-blue-700 hover:scale-103 transition-transform duration-300 text-white text-xl font-semibold py-4 px-6 rounded-full transition-colors duration-300 cursor-pointer">
                        Compre agora  partir de R$ 7.999,00
                    </button>
                    <p className='text-gray-400 mt-3'>Parcelamento em até 12x sem juros</p>
                </div>
            </div>
        </section>

    )
}

export default Colors;