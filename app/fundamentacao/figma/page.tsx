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
                    2.6 Figma
                </h1>
                <p className="mb-4 text-justify indent-8">
                    Figma é um editor gráfico de vetor e prototipagem de
                    projetos de design baseado principalmente no navegador web,
                    com ferramentas offline adicionais para aplicações desktop
                    para GNU/Linux, macOS e Windows.
                </p>
                <p className="mb-4 text-justify indent-8">
                    É um software focado no desenvolvimento de sistemas de
                    design gráfico, prototipagem de interface gráfica de usuário
                    e desenvolvimento de UI/UX (user interface experience ou
                    experiência da interface com o usuário), permitindo também o
                    desenvolvimento colaborativo em tempo real com outros
                    usuários remotamente (FIGMA, 2021).
                </p>
                <p className="mb-4 text-justify indent-8">
                    Figma teve início oferecendo seu serviço apenas para
                    convidados em dezembro de 2015. O primeiro lançamento
                    público do software foi feito em 27 de setembro de 2016.
                    Hoje o Figma possui seu plano gratuito e seus planos pagos
                    para usuários profissionais e corporativos.
                </p>
                <p className="mb-4 text-justify indent-8">
                    Em outubro de 2019, a Figma lançou o Figma Community,
                    permitindo que designers pudessem publicar seu trabalho para
                    outros visualizarem e editarem, como uma espécie de modelo
                    <i>open source</i> de design.
                </p>
            </div>
            <NavigationBtns
                ante="/fundamentacao/javascript"
                prox="/fundamentacao/tecnologias/replit"
            />
        </div>
    );
}
