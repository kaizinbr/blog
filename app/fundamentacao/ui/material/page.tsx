import NavigationBtns from "@/components/NavigationBtns";
import Image from "next/image";
import Link from "next/link";


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
                    2.10.3 Material Design
                </h1>
                <p className="mb-4 text-justify indent-8">
                    O <i>Material Design</i> é uma linguagem de design que foi
                    desenvolvida e apresentada pela Google em 2014 (AQUINO,
                    2017). A ideia desse estilo é mostrar que não é preciso
                    eliminar totalmente os efeitos visuais que fazem referência
                    ao mundo real, anteriormente característicos do
                    <i>Skeumorfismo</i>, linguagem de design amplamente utilizada nas
                    primeiras interfaces web criadas.
                </p>
                <p className="mb-4 text-justify indent-8">
                    O Material Design mistura um pouco de skeumorfismo com <i>flat</i>,
                    linguagem de design desenvolvida pela Apple onde se deixa
                    tudo mais liso e sem referências ao mundo real, utilizando
                    em abundância layouts baseados em grids, sombras, cores,
                    animações, transições responsivas e elementos em 3D assim
                    criando mais conexões com elementos do mundo real em uma
                    interface (SILVESTRI, 2018).
                </p>
                <p className="mb-4 text-justify indent-8">
                    A grande ideia inovadora desse estilo foram as camadas de
                    elevação na interface, cada elemento dentro de uma interface
                    material tem uma certa elevação, e isso faz com que os
                    elementos ganhem mais sentido e contexto (SILVESTRI,
                    adaptado 2018).
                </p>
                
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">Figura 3 e Figura 4 - Antiga <i>homepage</i> do Google Docs x <i>homepage</i> atual</span>
                    <Image
                        src='/figura3.png'
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">Fonte: <Link href="http://googlesystem.blogspot.com/2011/01/" target="_blank">http://googlesystem.blogspot.com/2011/01/</Link></span>
                    <Image
                        src='/figura4.png'
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    
                    <span className="text-center text-sm mb-3">Fonte: dos autores</span>
                
                </picture>
                <p className="mb-4 text-justify intent-8">Nas versões do Material Design já lançadas, a Google buscou destacar a responsividade e fluidez da página. Informações importantes e semelhantes estão agrupadas em macrorregiões de modo que o usuário possa visualizá-las com mais facilidade; as cores utilizadas seguem uma paleta limitada muitas vezes a tons claros e pouco saturados, a fim de deixar a visualização agradável a longo prazo. As fontes e o espaço em branco também são um destaque importante: não há uma variação muito notável de fontes, apenas tamanho e espessura mudam para mostrar a hierarquia dos tópicos; e o espaço em branco está sempre lá, impedindo que a interface pareça poluída com muitas informações.
                </p>
                
                <picture className="w-full mt-8 flex flex-col">
                    <span className="font-bold text-center text-sm mb-3">Figura 5 - Exemplo de espaços em branco do site OtoLugar</span>
                    <Image
                        src='/figura5.png'
                        alt=""
                        width={600}
                        height={400}
                    ></Image>
                    <span className="text-center text-sm mb-3">Fonte: dos autores</span>
                </picture>
            </div>
            <NavigationBtns
                ante="/fundamentacao/ui/pincipais-elementos"
                prox="/trabalho/aplicabilidade"
            />
        </div>
    );
}
