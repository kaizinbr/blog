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
                    2.10 <i>User Interface</i> (UI)
                </h1>
                <p className="mb-4 text-justify indent-8">
                    Quando se projeta um website devem ser levados em
                    consideração três aspectos: a apresentação, ou seja, como o
                    website será exposto ao usuário; a organização, que diz
                    respeito à parte estrutural do website, e a interação, que é
                    como o website reage dando o <i>feedback</i> ao usuário
                    (WROBLEWSKI, 2002).
                </p>
                <p className="mb-4 text-justify indent-8">
                    <i>User Interface</i> (UI) significa interface do usuário em
                    português, e é considerada uma ponte que possibilita que um
                    usuário possa realizar uma determinada tarefa. O conceito de
                    UI pode ser aplicado em diversas áreas, podendo ir da
                    interface de um microondas ao painel de um carro, isso
                    porque a interface do usuário é a forma como aquele usuário
                    interage com a aplicação ou sistema (SILVESTRI, 2018).
                </p>
                <p className="mb-4 text-justify indent-8">
                    E essa interação entre usuário e interface pode nem sempre
                    ser boa. Por isso é importante considerar o público e quais
                    dificuldades, facilidades e preferências ele tem, a fim de
                    garantir uma <i>user-friendly</i>, ou seja, uma experiência
                    amigável do usuário. Embora sejam diferentes, assim como no
                    UX, no UI também é necessário pesquisar sobre o usuário,
                    mesmo que com menor profundidade, pois é preciso saber as
                    preferências do público ao pensar na usabilidade (SILVESTRI,
                    2018).
                </p>
            </div>
            <NavigationBtns
                ante="/fundamentacao/ux"
                prox="/fundamentacao/ui/design"
            />
        </div>
    );
}
