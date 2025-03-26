const Head = () => {
    return ( <header className="shadow-md bg-gray-100">
        <nav className="flex justify-between items-center h-24 px-6 lg:px-12">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="logo-uniesp" className="h-16" />
          </div>
      
          {/* Título */}
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-800">Uniesp</h1>
            <h2 className="text-sm text-gray-600">Clínica Veterinária</h2>
          </div>
      
          {/* Lista de Navegação */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-red-500 font-medium transition">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-500 font-medium transition">
                NOSSOS SERVIÇOS
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-500 font-medium transition">
                SOBRE A CLÍNICA
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-500 font-medium transition">
                ENTRE EM CONTATO
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-500 font-medium transition">
                AGENDE AGORA
              </a>
            </li>
            <li>
              <a href="login.html" className="text-gray-600 hover:text-red-500 font-medium transition">
                LOGIN
              </a>
            </li>
          </ul>
      
          {/* Menu Mobile */}
          <div className="md:hidden">
            <button
              
              className="text-gray-600 hover:text-red-500 transition"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </nav>
      
        {/* Menu Mobile Responsivo */}
        <div className="hidden mobileMenu md:hidden bg-gray-100 shadow-md">
          <ul className="space-y-4 p-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-red-500 font-medium transition">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-500 font-medium transition">
                CLÍNICA VETERINÁRIA
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-red-500 font-medium transition">
                CONTATO
              </a>
            </li>
            <li>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition">
                ENTRAR
              </button>
            </li>
          </ul>
        </div>
      </header>
       );
}
 
export default Head;