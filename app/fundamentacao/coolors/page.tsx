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
                    2.8 Coolors
                </h1>
                <p className="mb-4 text-justify indent-8">
                    A plataforma Coolors tem como principal funcionalidade criar
                    paleta de cores através de um sistema simples.
                </p>
                <p className="mb-4 text-justify indent-8">
                    É ideal para criar combinações que se parecem com o seu
                    logo, projeto ou trabalho. Ele é gratuito e está disponível
                    apenas na internet. O programa apresenta diferentes
                    tonalidades, que podem ser editadas de acordo com as
                    preferências do usuário.
                </p>
                <p className="mb-4 text-justify indent-8">
                    O site cria paletas de cor usando um sistema muito simples,
                    basta clicar na barra de espaço do teclado. Você também pode
                    alterar cores que estejam na paleta com muita facilidade.
                </p>
                <p className="mb-4 text-justify indent-8">
                    O programa apresenta as tonalidades na maior parte do
                    navegador, mostrando o código hexadecimal de cada uma na
                    parte inferior. Isto torna o visual do site muito bonito e
                    livre de distrações.
                </p>
                <p className="mb-4 text-justify indent-8">
                    No rodapé você encontra o logo, alguns botões de
                    compartilhamento e pode editar as cores. A url da paleta
                    criada é composta por códigos hexadecimais de cada tom.
                </p>
            </div>
            <NavigationBtns
                ante="/fundamentacao/tecnologias/vscode"
                prox="/fundamentacao/ux"
            />
        </div>
    );
}
