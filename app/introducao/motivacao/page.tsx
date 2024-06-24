import NavigationBtns from "@/components/NavigationBtns";

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
                    1.1 Motivação e Definição do problema
                </h1>
                <p className="mb-4 text-justify indent-8">
                    Com a chegada da Covid-19, se tornou difícil viajar e
                    conhecer novos lugares fisicamente. Os preços para viajar
                    subiram sem parar por conta da baixa procura pelo turismo
                    tanto no mercado do nosso Estado quanto no mercado nacional,
                    contudo, com o avanço da vacinação e a eficácia das medidas
                    de proteção adotadas pela população, o mercado vem se
                    aquecendo cada vez mais.
                </p>
                <p className="mb-4 text-justify indent-8">Além do setor econômico, quem também sofreu bastante foi o setor cultural; setores como artes cênicas e feiras culturais chegaram a perder 100% de suas receitas. A falta de acesso à informação correta e a baixa propaganda afetam esse setor diretamente, já que é muitas vezes difícil transmitir a essência histórica de algo sem aquilo ser mostrado fisicamente.</p>
                <p className="mb-4 text-justify indent-8">Ademais, a pandemia também nos tornou mais conectados virtualmente, 81% da população com mais de 10 anos já usa a <i>Internet</i> diariamente no Brasil. Com isso, novos meios de divulgação surgiram, e o contato entre prestador de serviços e consumidor passou a ser bem mais virtual.</p>
                <p className="mb-4 text-justify indent-8">O nosso site busca solucionar, principalmente, a falta de acesso à informação, montando textos explicativos e divulgando não só a beleza dos lugares, mas também seu contexto histórico e relevância para a cidade de João Pessoa e toda a Paraíba.</p>
                
            </div>
            <NavigationBtns
                ante="/abstract"
                prox="/introducao/descricao-tecnica"
            />
        </div>
    );
}
