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
                    4. Considerações Finais
                </h1>
                <p className="mb-4 text-justify indent-8">
                    O projeto trata de um <i>Website</i> desenvolvido em HTML e CSS que
                    tem como objetivo auxiliar turistas e/ou pessoas
                    interessadas no turismo paraibano. Ele apresenta diversos
                    pontos turísticos, exibindo também uma breve descrição, sua
                    localização no mapa e seu valor.
                </p>
                <p className="mb-4 text-justify indent-8">
                    Ao decorrer desse projeto conseguimos alcançar um número
                    mais do que satisfatório de nossas metas, optamos por um
                    design <i>clean</i>, minimalista, que não sobrecarregasse o usuário
                    com excesso de informação, mas que ainda fosse estéticamente
                    agradável. Exercitamos as matérias aprendidas durante o
                    curso, aprimorando nossas habilidades acerca delas, através
                    de pesquisas e da prática. Colocamos em prática diversas
                    habilidades além das relacionadas à informática, como
                    trabalho em equipe, design e organização de prazos.
                </p>
                <p className="mb-4 text-justify indent-8">
                    Houve dificuldade em alguns pontos do caminho, como ajustar
                    a responsividade, ajuste de certos elementos do design e
                    também divisão de tarefas dentro do grupo do projeto.
                </p>

            </div>
            <NavigationBtns ante="/trabalho/resultados" prox="/consideracoes/continuacao" />
        </div>
    );
}
