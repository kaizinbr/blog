import NavigationBtns from "@/components/NavigationBtns";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="mb-8">
                <h1
                    className={`
                        font-bold text-2xl
                        mb-8 text-start
                    `}
                >
                    3.3 Metodologia
                </h1>
                <p className="mb-4 text-justify indent-8">
                    O início dos trabalhos se deu com o levantamento dos
                    requisitos para desenvolvimento do projeto. Primeiro
                    buscamos entender como o mercado de viagens e turismo da
                    região litorânea da grande João Pessoa foi afetado com a
                    pandemia do COVID-19. Depois realizamos estudos com base em
                    pesquisas e leituras sobre a fundamentação teórica para
                    entender como poderíamos modelar uma plataforma ou
                    ferramenta que pudesse ajudar pessoas e empresas que
                    sofreram com tal acontecimento, ao mesmo tempo em que
                    pudéssemos mostrar a cultura paraibana presente em locais da
                    capital.
                </p>
                <p className="mb-4 text-justify indent-8">
                    Com isso pensado, passamos a pesquisar sistemas com intuito
                    ou missão semelhantes. Embora tenhamos encontrado sistemas
                    semelhantes, percebemos que poucos buscavam realmente
                    divulgar a cultura dos locais como nós pretendíamos.
                </p>
                <p className="mb-4 text-justify indent-8">
                    A partir daí, com requisitos e missão definidos, procuramos
                    então as melhores ferramentas para colocar o projeto em
                    prática. Diante das opções, escolhemos as linguagens de
                    marcação HTML5 e CSS3, e a plataforma Visual Studio Code.
                </p>
                <p className="mb-4 text-justify indent-8">
                    Durante a decisão de como seria o design do site optamos por
                    usar o site Coolors para a criação da paleta de cores, e o
                    site Figma para criar o nosso design com base no sistema
                    Material Design e em nossas preferências. A paleta foi
                    criada tendo como cor base o verde, cor acordada por nós
                    como tema do projeto, e utilizamos uma ferramenta do site
                    Coolors que exporta a paleta já no formato CSS, como na
                    Figura 6. No Figma utilizamos modelos de telas em formato
                    <i>desktop</i> e <i>mobile</i> e criamos um design que se
                    adequasse ao que esperávamos do site.
                </p>
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                        Figura 6 - Paleta de cores em código CSS
                    </span>
                    <Image
                        src="/figura6.png"
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">
                        Fonte: dos autores
                    </span>
                </picture>
                <p className="mb-4 text-justify indent-8">
                    Ainda utilizando o site Figma, desenvolvemos um avatar web
                    3d a partir de modelos gratuitos e de uso livre na
                    plataforma, o qual nomeamos de “<i>Green Boy</i>”. Também
                    foi desenvolvido o logotipo do site, que se trata do nome
                    OtoLugar na fonte <i>Beatrice Display</i> estilizado como
                    “OtoLugar”; e o isotipo do site, que consiste de três pinos
                    característicos de mapas em tons diferentes de verde. Eles
                    podem ser vistos na figura 4 abaixo.
                </p>
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                        Figura 7 - Isotipo, logotipo e avatar do site OtoLugar
                    </span>
                    <Image
                        src="/figura7.jpg"
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">
                        Fonte: dos autores
                    </span>
                </picture>
                <p className="mb-4 text-justify indent-8">
                    Com o protótipo do design finalizado, nos dedicamos mais a
                    relembrar e estudar novos itens das tecnologias ensinadas
                    durante o curso. Aproveitando o conhecimento que já
                    possuíamos sobre as linguagens Javascript, Css e Html,
                    focamos em estudar mais a fundo tais linguagens através de
                    sites da internet e livros.
                </p>
                <p className="mb-4 text-justify indent-8">
                    Por fim, colocamos em prática o conhecimento adquirido
                    durante o curso na criação do frontend do site. Para
                    facilitar a contribuição de todos os estudantes envolvidos,
                    optamos por utilizar um repositório no GitHub que permite o
                    desenvolvimento compartilhado do código através de
                    plataformas como Visual Studio Code e Replit.
                </p>
                <p className="mb-4 text-justify indent-8">
                    Em um primeiro momento buscamos transformar os requisitos
                    pensados anteriormente em itens e funções necessárias no
                    site para serem colocadas no HTML base, como a elaboração de
                    cards com espaços para um título e uma foto dos pontos
                    turísticos, a criação de botões na navbar para o acesso a
                    outras páginas e cadastro de um novo usuário.
                </p>
                <p className="mb-4 text-justify indent-8">
                    Utilizando CSS puro — sem qualquer biblioteca importada ou
                    <i>framework</i> de terceiros —, estilizamos as telas{" "}
                    <i>index</i>, pesquisa, contato e as páginas dos pontos
                    turísticos. Com o fundo na cor <i>aero blue</i>, todo o
                    texto do site foi feito em
                    <i>cadmium green</i> para ser totalmente legível e cômodo
                    aos olhos do usuário. Nos cards foi utilizado um tom de{" "}
                    <i>aero blue</i> com menor opacidade, criando um efeito
                    translúcido sútil que não distrai o usuário, e os botões
                    dentro deles foram colocados no tom vibrante <i>emerald</i>{" "}
                    para chamar a atenção.
                </p>
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                        Figura 9 - Exemplo de card
                    </span>
                    <Image
                        src="/figura9.png"
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">
                        Fonte: dos autores
                    </span>
                </picture>
                <p className="mb-4 text-justify indent-8">
                    Foram colocados ainda efeitos dinâmicos nativos do CSS3
                    através da pseudo classe <i>:hover</i> para que, quando o
                    usuário passe o mouse sobre um card ou outro item, a cor da
                    borda mude ou a imagem tenha um pouco mais de zoom. Ainda
                    por meio do CSS buscamos deixar o site o mais responsivo
                    possível, já que existem inúmeros dispositivos com formatos
                    e formas diferentes.
                </p>
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                        Figura 10 - Exemplo de responsividade
                    </span>
                    <Image
                        src="/figura10.gif"
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">
                        Fonte: dos autores
                    </span>
                </picture>
                <p className="mb-4 text-justify indent-8">
                    Para otimizar o carregamento da página inicial utilizamos
                    Javascript para criar funções que criam e inserem os <i>cards</i>
                    dos pontos turísticos dinamicamente. Utilizando o método de
                    rotas HTTP criamos uma rota que acessa o banco de dados e
                    retorna os dados necessários para a criação dos <i>cards</i>. A
                    mesma tecnologia foi utilizada nas páginas individuais dos
                    pontos turísticos, onde uma única página com o código base é
                    acessada e, a partir dos dados da requisição HTTP, é
                    preenchida com as informações dos pontos turísticos.
                </p>
                
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                    Figura 11 - Exemplo de função JS utilizada para a criação de cards
                    </span>
                    <Image
                        src="/figura11.png"
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">
                        Fonte: dos autores
                    </span>
                </picture>
                <p className="mb-4 text-justify indent-8">
                    Por fim, entregamos o projeto.
                </p>
                {/* 
                
                <p className="mb-4 text-justify indent-8">
                    Outras tecnologias além do HTML geralmente são usadas para
                    descrever a aparência/apresentação (CSS) ou a
                    funcionalidade/comportamento (JavaScript) de uma página da
                    web (MDN, 2021).
                </p>
                <p className="mb-4 text-justify indent-8">
                    Conforme MARQUES (2019), as principais tags em HTML são:
                </p>
                <ul className="list-disc list-inside ml-8 mb-8">
                    <li>
                        &lt;head&gt; – local para declarar todas informações,
                        como título e metadados da sua página;
                    </li>
                    <li>&lt;title&gt; – define o título;</li>
                    <li>
                        &lt;body&gt; – local para declarar todos os elementos
                        que irão compor o corpo da página;
                    </li>
                    <li>
                        &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;,
                        &lt;h5&gt; e &lt;h6&gt; – tags para definir um título e
                        subtítulos, variando de 1 a 6, sendo h1 o título mais
                        importante e h6 o de menor importância;
                    </li>
                    <li>&lt;p&gt; – tag para definir um parágrafo;</li>
                    <li>
                        &lt;a&gt; – tag de link, junto ao atributo href=“” é
                        responsável pela principal característica da web;
                    </li>
                    <li>&lt;header&gt; – define um cabeçalho;</li>
                    <li>&lt;section&gt; – define uma seção;</li>
                    <li>&lt;article&gt; – define um artigo;</li>
                    <li>&lt;div&gt; – define uma divisão;</li>
                    <li>&lt;footer&gt; – define um rodapé;</li>
                    <li>
                        &lt;nav&gt; – define uma área de navegação (como menus);
                    </li>
                    <li>&lt;table&gt; – define uma tabela;</li>
                    <li>&lt;ol&gt; – define uma lista ordenada;</li>
                    <li>&lt;ul&gt; – define uma lista não ordenada;</li>
                    <li>&lt;li&gt; – define o item de uma lista;</li>
                    <li>&lt;form&gt; – define um formulário;</li>
                    <li>&lt;input&gt; – define os campos do formulário;</li>
                    <li>
                        &lt;textarea&gt; – define uma área para o usuário
                        digitar um texto;
                    </li>
                    <li>&lt;button&gt; – define um botão;</li>
                    <li>
                        &lt;img&gt; – permite inserir uma imagem no seu
                        documento.
                    </li>
                </ul>
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">Figura 2 - Código HTML5</span>
                    <Image
                        src='/figura2.png'
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">Fonte: dos autores</span>
                </picture> */}
            </div>
            <NavigationBtns
                ante="/trabalho/cronograma"
                prox="/trabalho/resultados"
            />
        </div>
    );
}
