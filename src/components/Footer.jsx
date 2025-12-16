function Footer() {

    const sections = [
        {
            title: 'Comprar e Saber Mais',
            links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comparar modelos', 'Acessórios']
        },
        {
            title: 'Especificações',
            links: ['Características técnicas', 'Câmera', 'Bateria', 'Display']
        },
        {
            title: 'Suporte',
            links: ['Suporte ao iPhone', 'AppleCare+', 'iOS 19', 'Contato']
        },
        {
            title: 'Apple',
            links: ['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras']
        }
    ];

    const buttonLinks = ['Política de Privacidade', 'Termos de Uso', 'Vendas'];

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-8 sm:py-12 px-3 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-6 sm:mb-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-base sm:text-lg font-semibold mb-2">{section.title}</h4>
                            <ul className="list-disc list-inside">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="text-xs sm:text-sm text-gray-400 hover:text-white cursor-pointer">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800 pt-4 sm:pt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                        <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">Copyright © 2025 Apple Inc. Todos os direitos reservados.</p>
                        <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 flex-wrap justify-center">
                            {buttonLinks.map((texto, index) => (
                                <a className="hover:text-white" href="#" key={index}>{texto}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;