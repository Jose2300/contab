import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o arquivo CSS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importe o arquivo JS do Bootstrap
import './App.css';

// Componente Slideshow para os cards
const CardSlideshow = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);
  

  return (
    <div className="card-slideshow">
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              zIndex: cards.length - Math.abs(index - currentIndex)
            }}
          >
            <div className="icon-circle">
              <img src={card.icon} alt={`Ícone ${index + 1}`} />
            </div>
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
const cards = [
  {
    title: "Contabilidade",
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077976.png"
  },
  {
    title: "Fiscal",
    icon: "https://cdn-icons-png.flaticon.com/512/990/990060.png"
  },
  {
    title: "Abertura de Empresa",
    icon: "https://cdn-icons-png.flaticon.com/512/5741/5741577.png"
  },
  {
    title: "Financeiro",
    icon: "https://cdn-icons-png.flaticon.com/512/584/584093.png"
  },
  {
    title: "Societário",
    icon: "https://cdn-icons-png.flaticon.com/512/493/493808.png"
  },
];


class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      showServicesList: false
    };
  }

  toggleServicesList = () => {
    this.setState(prevState => ({
      showServicesList: !prevState.showServicesList
    }));
  };
  toggleVisibility = (id) => {
    const { isVisible } = this.state;
    const element = document.getElementById(id);
    
    if (element) {
      // Oculta todos os elementos de dúvida
      document.querySelectorAll('[id^="duvida"]').forEach(el => {
        el.style.display = 'none';
      });
  
      // Exibe apenas o elemento de dúvida clicado
      element.style.display = isVisible ? 'none' : 'block';
      this.setState({ isVisible: !isVisible });
    }
  };
  
  render() {
    const { showServicesList } = this.state;
   
    // Lista de cards para o slideshow
    const cards = [
      {
        title: "Contabilidade",
        icon: "https://cdn-icons-png.flaticon.com/512/1077/1077976.png"
      },
      {
        title: "Fiscal",
        icon: "https://cdn-icons-png.flaticon.com/512/990/990060.png"
      },
      {
        title: "Abertura de Empresa",
        icon: "https://cdn-icons-png.flaticon.com/512/5741/5741577.png"
      },
      {
        title: "Financeiro",
        icon: "https://cdn-icons-png.flaticon.com/512/584/584093.png"
      },
      {
        title: "Societário",
        icon: "https://cdn-icons-png.flaticon.com/512/493/493808.png"
      },
    ];
   

    return (
      <div>
        <div id='head' style={{ backgroundImage: "url('https://blog.bomcontrole.com.br/wp-content/uploads/2020/05/contabilidade-digital.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div id='org'>
            <img src="https://seeklogo.com/images/C/contabilidade-brasil-logo-12DD23A5C2-seeklogo.com.png" alt="Logo da Contabilidade" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <h1 style={{ color: 'white', margin: 0 }}> Procont Contabilidade</h1>
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarScroll">
                  <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle nav-link text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Serviços
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Serviço 1</a></li>
                        <li><a class="dropdown-item" href="#">Serviço 2</a></li>
                        <li><a class="dropdown-item" href="#">Serviço 3</a></li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle nav-link text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Duvidas
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#duvida1" onClick={() => this.toggleVisibility('duvida1')}>Imposto de Renda</a></li>
                        <li><a class="dropdown-item" href="#duvida2" onClick={() => this.toggleVisibility('duvida2')}>Imposto territorial rural</a></li>
                        <li><a class="dropdown-item" href="#duvida3" onClick={() => this.toggleVisibility('duvida3')}>Simples Nacional</a></li>
                        <li><a class="dropdown-item" href="#duvida4" onClick={() => this.toggleVisibility('duvida4')}>DARF</a></li>
                        <li><a class="dropdown-item" href="#duvida5" onClick={() => this.toggleVisibility('duvida5')}>Certificado Digital</a></li>
                        <li><a class="dropdown-item" href="#duvida6" onClick={() => this.toggleVisibility('duvida6')}>Nível da conta gov</a></li>
                      </ul>
                    </li>
                    <li class="nav-item text-white">
                      <a class="nav-link text-white" href="#">Empresa</a>
                    </li>

                    <li class="nav-item text-white">
                      <a class="nav-link text-white" href="#">Contato</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div style={{ textAlign: 'left', color: 'white', margin: 0 }}>
              <h2 style={{ color: 'white' }}>ORGANIZAÇÃO QUE SUA EMPRESA PRECISA</h2>
              <p style={{ color: 'white' }}>Deixe a burocracia com a gente!</p>
              <div>
                <a href="#servicos" className="btn">Nossos Serviços</a>
                <a href="#empresa" className="btn">Sobre a Empresa</a>
              </div>
            </div>
          </div>
        </div>
        <div id='duvida1'>
          <h1>Imposto de Renda</h1>
        <p>O Imposto de Renda é um tributo cobrado pelo governo sobre os ganhos de pessoas físicas e jurídicas. Para as pessoas físicas, é deduzido diretamente de seus salários ou rendimentos, enquanto para as empresas, é calculado sobre o lucro. Os contribuintes devem declarar anualmente seus ganhos ao governo e pagar o imposto devido, geralmente através de uma declaração de imposto de renda.</p></div>
        <div id='duvida2'><h1>DARF</h1>
        <p>O Documento de Arrecadação de Receitas Federais (DARF) é um documento utilizado para o pagamento de diversos tributos federais, incluindo o Imposto de Renda, contribuições previdenciárias, entre outros. É através do DARF que as pessoas físicas e jurídicas realizam o recolhimento dos impostos devidos.</p></div>
        <div id='duvida3'><h1>Simples Nacional</h1><p>O Simples Nacional é um regime tributário simplificado para micro e pequenas empresas. Ele unifica diversos impostos federais, estaduais e municipais em uma única guia de pagamento, facilitando a vida dos pequenos empresários e reduzindo a carga tributária.</p>
        </div>
        <div id='duvida4'><h1>Certificado Digital</h1><p>Um Certificado Digital é um arquivo eletrônico que funciona como uma identidade virtual. Ele serve para garantir a segurança nas transações online, permitindo a autenticação do usuário e a assinatura digital de documentos eletrônicos com validade jurídica.</p></div>
        <div id='duvida5'><h1>Nivel da conta GOV</h1><p>O nível da conta GOV refere-se ao grau de acesso e permissões concedidas a um usuário em uma plataforma governamental online, como por exemplo, o acesso a determinados serviços, informações ou transações. Geralmente, diferentes níveis de conta GOV estão associados a diferentes tipos de usuários, com base em critérios como autenticação, verificação de identidade e autorização.</p></div>
        <div id="servicos">
          <h2>Serviços</h2>
          <p>Aqui você encontrará informações sobre nossos serviços.</p>
        </div>
        <div id="empresa">
          <h2>Empresa</h2>
          <p>Aqui você encontrará informações sobre nossa empresa.</p>
        </div>
        <div id="sobre">
          <h2>Sobre</h2>
          <p>Aqui você encontrará informações sobre nós.</p>
        </div>
        <div id="contato">
          <h2>Contato</h2>
          <p>Aqui você encontrará informações sobre nós.</p>
        </div>
        <div id="home">
          <div>
            <h1 id='h1home'>Principais Serviços</h1>
            {/* Componente Slideshow para os cards */}
            <CardSlideshow cards={cards} />
          </div>
        </div>
        <h2>Profissionais</h2>
        <div class="cart">
        <div class="carr">
            <img src="" alt="Imagem 1"/>
            <h3>Pierre Arcieri</h3>
            <p>Descrição do Card 1</p>
        </div>

        <div class="carr">
            <img src="https://scontent.cdninstagram.com/v/t51.29350-15/325210593_1131888224192347_2295538235623407656_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDI0eDEwMjQuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=FTTq9zJ-1QgQ7kNvgFdAFIA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzAxNDE5MzE3MjAxMjY0NjM5NQ%3D%3D.2-ccb7-5&oh=00_AfCdeASyfvlCoYj1ZuosH2JcalOBD6_SycjJc57g-oKEsg&oe=663A159C&_nc_sid=10d13b" alt="Imagem 2"/>
            <h3>Marcos Paulo</h3>
            <p>Descrição do Card 2</p>
        </div>
    </div>
        <h2 id="bem">Bem-vindo à Procont Contabilidade - Sua Parceira em Soluções Contábeis</h2>
        <img src="https://hs.toledoprudente.edu.br/hs-fs/hubfs/Blog%20de%20Ci%C3%AAncias%20Cont%C3%A1beis/contabilidade-basica.jpg?width=710&height=474&name=contabilidade-basica.jpg" alt="Imagem de apresentação" style={{ float: 'left', width: '400px', height: '400px', marginRight: '20px' }} />
        <p>Na Procont Contabilidade, entendemos que a contabilidade não é apenas sobre números; trata-se de capacitar empresas e empresários para alcançar seu pleno potencial. Com uma abordagem personalizada e orientada para o cliente, oferecemos uma ampla gama de serviços contábeis e consultoria financeira para atender às necessidades específicas de cada negócio.</p>
        <p><strong>Compromisso com a Excelência</strong></p>
        <p>Nosso compromisso com a excelência e a precisão é o que nos diferencia. Nossa equipe de contadores altamente qualificados e experientes está aqui para fornecer suporte confiável e insights valiosos para ajudar sua empresa a prosperar. Desde a preparação de declarações fiscais até a consultoria estratégica em planejamento financeiro, estamos aqui para ajudar em todas as etapas do caminho.</p>
        <p><strong>Parceria para o Sucesso</strong></p>
        <p>Na Procont Contabilidade, valorizamos profundamente nossas parcerias com nossos clientes. Acreditamos em estabelecer relacionamentos sólidos e duradouros, baseados na confiança, integridade e transparência. Ao entender as necessidades únicas de cada cliente, podemos fornecer soluções personalizadas que impulsionam o crescimento e o sucesso a longo prazo.</p>
        <p><strong>Serviços Personalizados</strong></p>
        <p>Nossos serviços abrangentes incluem contabilidade geral, folha de pagamento, consultoria tributária, serviços de auditoria e muito mais. Independentemente do tamanho ou da complexidade do seu negócio, estamos equipados para fornecer soluções sob medida que atendam às suas necessidades específicas.</p>
      </div>
    );
  }
}

export default App;
