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
                    2.4 CSS
                </h1>
                <p className="mb-4 text-justify indent-8">
                    Segundo Evandro Miletto e Silvia Bertagnolli (2014), as
                    folhas de estilo em cascata, ou CSS, do inglês Cascading
                    Style Sheet, mudam a forma de organização das páginas. O
                    HTML passa a ser utilizado como elemento para estruturar as
                    páginas, e o CSS é utilizado na formatação da aparência das
                    páginas. Com o CSS, é possível definir em um único local a
                    formatação que será utilizada por cada tag. Com isso, apenas
                    um arquivo é alterado, sendo que a mudança é automaticamente
                    propagada por todas as páginas que compõem o site.
                </p>
                <p className="mb-4 text-justify indent-8">
                    As folhas de estilo do CSS possibilitam criar estilos
                    personalizados para títulos, listas, imagens, etc., além de
                    permitirem a definição de cores, fontes, bordas,
                    alinhamentos, entre outras características vinculadas à
                    aparência das páginas Web.
                </p>
                <p className="mb-4 text-justify indent-8">
                    As regras podem de estilização do CSS podem ser utilizadas
                    de três maneiras:
                </p>
                <ul className="list-disc list-inside ml-8 mb-8">
                    <li className=" mb-8" >
                        <i>Inline</i> - As regras são definidas dentro da
                        própria Tag HTML que será modificada. É bastante
                        limitada, pois deve ser aplicada dentro de um atributo
                        style uma a uma para cada tag a ser modificada.
                    </li>
                    <li className=" mb-8">
                        Interna - As regras são definidas no cabeçalho do
                        arquivo HTML, ou seja, na head. É um estilo mais fácil
                        de ser implementado e modificado, pois pode atingir a
                        várias tags ao mesmo tempo e fica dentro do
                        arquivo.html, mas, assim como o método anterior, não é
                        prático para o caso de muitas páginas HTML com uma mesma
                        formatação.
                    </li>
                    <li className=" mb-8">
                        Externa - As regras são criadas em um arquivo.css
                        separado, que pode ser criado em um editor de texto
                        simples, como o bloco de notas do Windows. Ele precisa
                        ser indicado no cabeçalho do arquivo.html, por meio da
                        tag link. Ele é o mais recomendado para projetos onde se
                        tem mais de uma página HTML, pois ao ser referenciado
                        todas as suas regras são automaticamente implementadas.
                    </li>
                </ul>
                <p className="mb-4 text-justify indent-8">
                    Na tabela 1 é possível ver melhor a forma como as regras do
                    CSS funcionam:
                </p>
                <div className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">
                        Tabela 1 - Regras CSS
                    </span>
                    <table className="table-auto overflow-hidden mb-8 bg-slate-800 rounded-lg">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 bg-slate-700 text-slate-200 p-4 rounded-tl-lg">Exemplo</th>
                                <th className="border border-slate-600 bg-slate-700 text-slate-200 p-4 rounded-tr-lg">Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-600 text-slate-300 p-4">
                                    <code>
                                        h1 {'{'}font-size: 36px;{'}'}
                                    </code>
                                </td>
                                <td className="border border-slate-600 text-slate-300 p-4">
                                    Todos os títulos/cabeçalhos de nível 1
                                    usarão fonte de 36 pixels.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-600 text-slate-300 p-4">
                                    <code>
                                        h2 {'{'}font-size: 24px; color:
                                        gray;{'}'}
                                    </code>
                                </td>
                                <td className="border border-slate-600 text-slate-300 p-4">
                                    Todos os títulos/cabeçalhos de nível 2
                                    usarão fonte de 24 pixels.
                                </td>
                            </tr>

                            <tr>
                                <td className="border border-slate-600 text-slate-300 p-4">
                                    <code>
                                        p {'{'}font-family: Times; margin:
                                        20px;{'}'}
                                    </code>
                                </td>
                                <td className="border border-slate-600 text-slate-300 p-4">
                                    Todos os parágrafos utilizarão a fonte Times
                                    e serão recuados 20px a partir das margens.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mb-4 text-justify indent-8">
                    O CSS também possui seletores, pelos quais é possível
                    personalizar uma ou mais páginas. O seletor de <i>tag</i> é
                    o principal, onde é possível editar as <i>tags</i> HTML
                    diretamente e de forma rápida, pois ele altera todas as{" "}
                    <i>Tags</i> do documento. O seletor de classe é uma das
                    soluções para o possível problema apresentado no seletor de{" "}
                    <i>tag</i>: ele altera apenas
                    <i>Tags</i> com uma classe específica que é definida através
                    do atributo class, e é chamada no CSS na sintaxe{" "}
                    <strong>.nomeDaClasse</strong>.
                </p>

                <p className="mb-4 text-justify indent-8">
                    O seletor de id funciona de maneira semelhante ao seletor de
                    classe. Ele identifica uma palavra e a associa a <i>Tag</i>.
                    No CSS ele é chamado na sintaxe <strong>#meuId</strong>. Há
                    ainda os seletores de atributo, pseudo-classes e
                    pseudo-elementos.
                </p>
                <p className="mb-4 text-justify indent-8">
                    Já sobre a estilização da página em si, como foi dito é
                    possível modificar cores, fontes, tamanhos, bordas,
                    alinhamentos e outras formas de personalização através do
                    CSS. Quanto às propriedades de cores e medidas, é possível
                    alterá-las a partir de formas distintas: para as cores, é
                    possível utilizar valores hexadecimais, valores do sistema
                    RGB ou os próprios nomes das cores; já para medidas é
                    possível utilizar as unidades em, rem, pixel ou porcentagem
                </p>
            </div>
            <NavigationBtns
                ante="/fundamentacao/html"
                prox="/fundamentacao/javascript"
            />
        </div>
    );
}
