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
                    2.1 Programação
                </h1>
                <p className="mb-4 text-justify indent-8">
                A programação, às vezes chamada de programação computacional, é a forma como nos comunicamos com os computadores. A programação informa à máquina quais ações executar. Criar um código é como definir um conjunto de instruções. Ao aprender a programar, você pode dizer ao computador o que fazer ou como se comportar de uma maneira muito mais rápida. É possível usar essa habilidade para criar sites e apps, processar dados e fazer muitas coisas interessantes (GRASSHOPPER, 2022).
                </p>
                <p className="mb-4 text-justify indent-8">Quando paramos para analisar, os computadores não são de fato inteligentes, eles apenas executam processos com uma velocidade extremamente maior do que a nossa. Por isso, precisamos definir regras bem detalhadas e instruí-los cuidadosamente para que realizem algum trabalho, que pode ser calcular números como em uma calculadora ou simplesmente exibir um nome na tela (FRANÇA, 2021).</p>
                <p className="mb-4 text-justify indent-8">As linguagens se dividem em dois tipos: de baixo nível e de alto nível. As de baixo nível são instruções complexas que lidam com configurações das máquinas, em um padrão binário. Era assim que as primeiras pessoas programadoras trabalhavam. Com a modernidade, surgiu uma forma mais intuitiva: as linguagens de alto nível. Elas traduzem conceitos de um idioma comum, o inglês, para a linguagem das máquinas. Desse modo, é possível programar usando palavras compreensíveis para nós, e não um conjunto de comandos com <i>bits</i>. A partir do uso de linguagens e dessas instruções, as pessoas conseguem desenvolver sistemas simples e robustos que ajudam a modelar o mundo real. A programação auxilia a estruturar a criação dos sistemas de informação que fazem parte do nosso mundo. A Figura 1 exemplifica a estrutura de um código em Javascript.</p>
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">Figura 1 - Código JavaScript</span>
                    <Image
                        src='/figura1.png'
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">Fonte: dos autores</span>
                </picture>

            </div>
            <NavigationBtns
                ante="/introducao/objetivos/objetivos-especificos"
                prox="/fundamentacao/linguagem-de-programacao"
            />
        </div>
    );
}
