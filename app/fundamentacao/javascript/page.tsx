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
                    2.5 Javascript
                </h1>
                <p className="mb-4 text-justify indent-8">
                    Javascript, ou simplesmente JS, é uma linguagem de
                    programação de uso geral, aplicada principalmente para
                    desenvolvimento web e desenvolvimento de software.
                    Especificando mais, o Javascript atua na programação
                    front-end, — a parte “visual” de uma aplicação, porém por se
                    tratar de uma linguagem dinâmica também pode ser usado na
                    estrutura de back-end de aplicações e servidores, como o
                    processamento de informações de um banco de dados, com o uso
                    do Node.Js (NOLETO, 2022).
                </p>
                <p className="mb-4 text-justify indent-8">
                    O Javascript foi criado em 1995 pelo programador Brendan
                    Eich. Naquela época, o nome de batismo foi Mocha e, logo
                    depois, passou a ser conhecido por LiveScript.
                </p>
                <p className="mb-4 text-justify indent-8">
                    No entanto, uma jogada de marketing marcou a criação da
                    linguagem. No final de 1995, com a ascensão da linguagem
                    Java no mundo da programação, o fundador da linguagem
                    resolveu mudar o nome para algo que fosse sonoramente
                    parecido. Com o Javascript, a internet pode ficar mais
                    dinâmica, com mais interações em uma página, diversos tipos
                    de interações, animações, entre várias outras coisas.
                </p>
                <p className="mb-4 text-justify indent-8">
                    O JavaScript permite que seu usuário interaja de diversas
                    maneiras com uma página, como, por exemplo, para mostrar e
                    esconder informações ao clicar em certa área do site,
                    apresentar timers ou contagens regressivas, mostrar
                    animações e atualizar elementos sem a necessidade de
                    atualizar a página.
                </p>

                <p className="mb-4 text-justify indent-8">
                    Como principais vantagens da linguagem JavaScript podemos
                    citar a linguagem leve, o alto nível, a flexibilidade e
                    versatilidade e o fato de apresentar uma comunidade
                    consolidada por ser a linguagem mais conhecida do mundo. E
                    como principais desvantagens podemos citar a segurança
                    limitada e o fato de que pode ser renderizado de maneiras
                    diferentes pelos dispositivos compatíveis, causando
                    problemas de desempenho.
                </p>
            </div>
            <NavigationBtns
                ante="/fundamentacao/css"
                prox="/fundamentacao/figma"
            />
        </div>
    );
}
