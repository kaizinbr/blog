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
                    3.1 Aplicabilidade
                </h1>
                <p className="mb-4 text-justify indent-8">
                    Conseguimos atingir a maioria das nossas metas, com exceção
                    de algumas funcionalidades adicionais que foram removidas ou
                    alteradas levando em conta a experiência do usuário.
                    Desenvolvemos um <i>design</i> para o site através da plataforma
                    Figma, e depois programamos em HTML considerando todos os
                    tópicos necessários para que ele pudesse ser juntado com o
                    <i>backend</i>, como o modelo de requisitos. Por fim, usamos o CSS
                    para estilizar o site seguindo o <i>design</i> criado e torná-lo
                    responsivo. Já quanto às dificuldades, tivemos algumas a
                    respeito da responsividade de imagens, mas conseguimos
                    juntar nosso projeto com o de <i>backend</i> com sucesso.
                </p>
                {/* <p className="mb-4 text-justify indent-8">
                    Essa linguagem funciona de modo estático, o que significa
                    que você não pode criar uma página na internet dinâmica ou
                    interativa usando o HTML. Ele apenas modifica os elementos
                    estáticos de uma página na web, como cabeçalho de conteúdo,
                    rodapé, posição de imagens, etc, como visto na Figura 2.
                </p>
                <p className="mb-4 text-justify indent-8">
                    O HTML usa diversas <i>tags</i>, incluindo cabeçalhos,
                    tabelas e parágrafos para definir as estruturas de uma
                    página. Cada tag é definida usando a fórmula{" "}
                    <code>&lt;a&gt;</code> e <code>&lt;/a&gt;</code>. Elas são
                    geralmente chamadas de <i>tag</i> de “abertura” e de
                    “fechamento”, respectivamente (HERTEL, 2021).
                </p>
                <p className="mb-4 text-justify indent-8">
                    Outras tecnologias além do HTML geralmente são usadas para
                    descrever a aparência/apresentação (CSS) ou a
                    funcionalidade/comportamento (JavaScript) de uma página da
                    web (MDN, 2021).
                </p>
                <p className="mb-4 text-justify indent-8">
                    Conforme MARQUES (2019), as principais tags em HTML são:
                </p>
                <ul className="list-disc list-inside ml-8 mb-8">
                    <li>
                        &lt;head&gt; – local para declarar todas informações,
                        como título e metadados da sua página;
                    </li>
                    <li>&lt;title&gt; – define o título;</li>
                    <li>
                        &lt;body&gt; – local para declarar todos os elementos
                        que irão compor o corpo da página;
                    </li>
                    <li>
                        &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;,
                        &lt;h5&gt; e &lt;h6&gt; – tags para definir um título e
                        subtítulos, variando de 1 a 6, sendo h1 o título mais
                        importante e h6 o de menor importância;
                    </li>
                    <li>&lt;p&gt; – tag para definir um parágrafo;</li>
                    <li>
                        &lt;a&gt; – tag de link, junto ao atributo href=“” é
                        responsável pela principal característica da web;
                    </li>
                    <li>&lt;header&gt; – define um cabeçalho;</li>
                    <li>&lt;section&gt; – define uma seção;</li>
                    <li>&lt;article&gt; – define um artigo;</li>
                    <li>&lt;div&gt; – define uma divisão;</li>
                    <li>&lt;footer&gt; – define um rodapé;</li>
                    <li>
                        &lt;nav&gt; – define uma área de navegação (como menus);
                    </li>
                    <li>&lt;table&gt; – define uma tabela;</li>
                    <li>&lt;ol&gt; – define uma lista ordenada;</li>
                    <li>&lt;ul&gt; – define uma lista não ordenada;</li>
                    <li>&lt;li&gt; – define o item de uma lista;</li>
                    <li>&lt;form&gt; – define um formulário;</li>
                    <li>&lt;input&gt; – define os campos do formulário;</li>
                    <li>
                        &lt;textarea&gt; – define uma área para o usuário
                        digitar um texto;
                    </li>
                    <li>&lt;button&gt; – define um botão;</li>
                    <li>
                        &lt;img&gt; – permite inserir uma imagem no seu
                        documento.
                    </li>
                </ul>
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">Figura 2 - Código HTML5</span>
                    <Image
                        src='/figura2.png'
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">Fonte: dos autores</span>
                </picture> */}
            </div>
            <NavigationBtns
                ante="/fundamentacao/ui/material"
                prox="/trabalho/cronograma"
            />
        </div>
    );
}
