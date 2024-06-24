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
                    2.7.1 Repl.it
                </h1>
                <p className="mb-4 text-justify indent-8">
                    Replit é um IDE online que pode ser usado com uma variedade
                    de linguagens de programação, incluindo JavaScript, Python,
                    Go, C++, Node.js, Rust e qualquer outra linguagem disponível
                    com o gerenciador de pacotes Nix. Ele usa o componente de
                    editor CodeMirror 6, o mesmo componente de editor empregado
                    por outros grandes sites como o CodePen.
                </p>
                <p className="mb-4 text-justify indent-8">
                    O principal recurso do Replit é a codificação colaborativa,
                    a capacidade de compartilhar um Repl com um ou muitos outros
                    usuários e ver edições em tempo real nos arquivos, enviar
                    mensagens uns aos outros e depurar código juntos. Usando um
                    mecanismo de computação compartilhado, o código pode ser
                    executado e exibido da mesma forma para vários usuários em
                    um Repl. O IDE da Replit também tem bate-papo ao vivo e
                    threads in-line que permitem aos usuários discutir sobre o
                    código. Por meio da comunidade global da Replit, os usuários podem
                    compartilhar projetos, pedir ajuda, aprender com tutoriais e
                    usar modelos. 
                </p>
                <p className="mb-4 text-justify indent-8">
                    A Replit suportava mais de 50 linguagens de
                    programação, mas a partir de 23 de fevereiro de 2022, a
                    Replit usa NixOS em todos os Repls, o que significa que os
                    usuários têm acesso a todo o banco de dados de pacotes NixOS
                    e podem usar qualquer linguagem de programação. Novos Repls
                    podem ser criados por meio de modelos de idioma oficiais ou
                    por meio de uma configuração Nix personalizada do usuário.
                    Os usuários podem configurar qualquer coisa, desde o
                    Language Server Protocol até o suporte ao depurador para um
                    Repl.
                </p>
            </div>
            <NavigationBtns
                ante="/fundamentacao/figma"
                prox="/fundamentacao/tecnologias/vscode"
            />
        </div>
    );
}
