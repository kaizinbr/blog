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
                    2.9 <i>User Experience</i> (UX)
                </h1>
                <p className="mb-4 text-justify indent-8">
                    A sigla UX significa User Experience, sendo traduzida como
                    Experiência do Usuário. Ela faz referência a forma como o
                    cliente interage com seu produto ou serviço a partir dos
                    elementos que lhe são disponibilizados.
                </p>
                <p className="mb-4 text-justify indent-8">
                    A estratégia UX é o processo que deve ser iniciado primeiro,
                    antes do início do projeto ou desenvolvimento do produto
                    digital. É a visão de uma solução que precisa ser validada
                    com clientes potenciais reais para provar que é desejado no
                    mercado (LEVY, 2015).
                </p>
                <p className="mb-4 text-justify indent-8">
                    O UX é a área mais racional do projeto que elabora a parte
                    conceitual do projeto e as pesquisas, buscando criar
                    soluções que sejam eficazes. Os designers de UX estudam o
                    comportamento humano e o serviço oferecido para encontrar
                    meios de satisfazer melhor o cliente e sua necessidade,
                    garantindo assim sua lealdade (HELLER, 2017). Isso é
                    alcançado normalmente através de 3 pilares bases:
                </p>
                <ul className="list-disc list-inside ml-8 mb-8">
                    <li className=" mb-4">Utilidade - o nível de utilidade para o cliente;</li>
                    <li className=" mb-4">
                        Facilidade de uso - o quão rápido e simples é o uso da
                        aplicação;
                    </li>
                    <li className=" mb-4">
                        Prazer - o quão satisfatório, divertido e interessante é
                        usar o serviço e não seus concorrentes.
                    </li>
                </ul>
                <p className="mb-4 text-justify indent-8">
                    Conforme HELLER, 2017 o desenvolvimento da experiência em UX
                    parte do entendimento do desafio a ser resolvido. Esse
                    entendimento pode ser alcançado através de variadas
                    metodologias, mas normalmente são incluídas:
                </p>
                <ul className="list-disc list-inside ml-8 mb-8">
                    <li className=" mb-4">Entrevista com usuários/clientes reais do serviço,</li>
                    <li className=" mb-4">Entrevista com a equipe da empresa;</li>
                    <li className=" mb-4">Benchmarking de serviços existentes ou análogos;</li>
                    <li className=" mb-4">
                        Levantamento das informações que a empresa e o mercado
                        têm sobre o desafio a ser solucionado
                    </li>
                </ul>
                <p className="mb-4 text-justify indent-8">
                    As skills técnicas necessárias para solucionar o desafio
                    envolve diversas metodologias, porém as mais usadas são:
                </p>
                <ul className="list-disc list-inside ml-8 mb-8">
                    <li className=" mb-4">
                        Arquitetura de informação - desenho sobre como as
                        informações serão distribuídas pelo serviço e exibidas
                        para ajudar o cliente a executar as tarefas necessárias.
                    </li>
                    <li className=" mb-4">
                        Projetos de interação - desenho sobre como as interações
                        vão acontecer visando facilitar seu uso.
                    </li>
                    <li className=" mb-4">
                        Fluxos de tarefa - desenho passo-a-passo de como as
                        tarefas vão acontecer visando alcançar a simplicidade de
                        uso (HELLER,2017).
                    </li>
                </ul>
                <p className="mb-4 text-justify indent-8">
                    Esses conteúdos podem ser consolidados através de diversos
                    documentos como, por exemplo:
                </p>
                <ul className="list-disc list-inside ml-8 mb-8">
                    <li className=" mb-4">
                        Wireframes - desenho esquemático da solução para
                        apresentar a estratégia da experiência e da distribuição
                        do conteúdo.
                    </li>
                    <li className=" mb-4">
                        Wireflows - desenho esquemático do fluxo de uso de
                        serviço para mostrar os caminhos possíveis que o cliente
                        deve percorrer.
                    </li>
                    <li className=" mb-4">
                        Sitemaps - desenho esquemático da distribuição do
                        conteúdo pelos diferentes pontos de contato do cliente
                        com o serviço para mostrar a hierarquia do conteúdo.
                    </li>
                </ul>
            </div>
            <NavigationBtns
                ante="/fundamentacao/coolors"
                prox="/fundamentacao/ui"
            />
        </div>
    );
}
