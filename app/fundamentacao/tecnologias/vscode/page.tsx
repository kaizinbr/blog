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
                    2.7.2 Visual Studio Code
                </h1>
                <p className="mb-4 text-justify indent-8">
                    Em 2015 foi lançado pela Microsoft um editor de código
                    destinado ao desenvolvimento de aplicações web chamado de
                    Visual Studio Code, ou simplesmente VSCode. Trata-se de uma
                    ferramenta leve e multiplataforma que está disponível tanto
                    para Windows, quanto para Mac OS e Linux e atende a uma gama
                    enorme de projetos, não apenas ASP.NET, como também Node.js.
                </p>
                <p className="mb-4 text-justify indent-8">
                    Adicionalmente, o editor possui suporte à sintaxe de
                    diversas linguagens como Python, Ruby, C++ (EDSON JOSÉ
                    DIONISIO, adaptado 2016).
                </p>
                <p className="mb-4 text-justify indent-8">
                    Além de ser totalmente gratuito, o editor foi anunciado como
                    open source, tendo código disponibilizado no GitHub, o que
                    permite à comunidade técnica contribuir com seu
                    desenvolvimento e facilitando a criação de extensões e novas
                    funcionalidades (EDSON JOSÉ DIONISIO, adaptado 2016).
                </p>
            </div>
            <NavigationBtns
                ante="/fundamentacao/tecnologias/replit"
                prox="/fundamentacao/coolors"
            />
        </div>
    );
}
