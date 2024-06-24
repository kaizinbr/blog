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
                    2.10.1 UI Design
                </h1>
                <p className="mb-4 text-justify indent-8">
                    O <i>design</i> da interface do usuário é importante pois
                    considera a usabilidade, interação, eficiência do conteúdo e
                    acessibilidade da plataforma ou aplicativo. É por meio do
                    Design de UI que se verificam possíveis gestos, ações e
                    demais preferências gerais do usuário, e é tarefa do{" "}
                    <i>web designer</i> antecipar tais preferências (SILVESTRI,
                    2018).
                </p>
                <p className="mb-4 text-justify indent-8">
                    Segundo o DialHost (2019), o Design Visual melhora o valor
                    decorativo de um site, implementando estrategicamente
                    elementos como fontes, cores, imagens, textos e botões,
                    entre outras coisas. Quando bem feito, o Design Visual pode
                    tornar uma página bonita sem comprometer sua função ou
                    conteúdo.
                </p>
                <p className="mb-4 text-justify indent-8">
                    Já o Design Interativo é ligado a como os usuários interagem
                    com a tecnologia. Logo, a partir dessas interações, ele cria
                    uma interface com comportamentos bem pensados. Um excelente
                    design interativo não apenas antecipa como uma pessoa
                    interage com um sistema, mas também antecede e corrige
                    problemas em tempo hábil. Também pode inventar novas
                    maneiras pelas quais um sistema interage e responde aos
                    usuários (DIALHOST, 2018).
                </p>
                <p className="mb-4 text-justify indent-8">
                    Além de tudo isso, é preciso ajudar o usuário a completar
                    seu objetivo, e isso é feito por meio da arquitetura da
                    informação, que é projetada para ajudar os usuários a
                    encontrarem as informações necessárias para concluir
                    tarefas. Ela envolve, portanto, rotular, estruturar e
                    organizar o conteúdo da Web de uma maneira que o torne
                    facilmente acessível e sustentável.
                </p>
            </div>
            <NavigationBtns
                ante="/fundamentacao/ui"
                prox="/fundamentacao/ui/principais-elementos"
            />
        </div>
    );
}
