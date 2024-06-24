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
                    3.2 Cronograma
                </h1>
                <ul className="list-inside ml-8 mb-8">
                    <li>1° Etapa: Produção e Entrega do Plano de Trabalho;</li>
                    <li>2° Etapa: Pesquisa Bibliográfica;</li>
                    <li>3° Etapa: Estudo sobre UI e UX;</li>
                    <li>4° Etapa: Montagem da Documentação;</li>
                    <li>5° Etapa: Desenvolvimento do sistema;</li>
                    <li>6° Etapa: Realização de testes;</li>
                    <li>
                        7° Etapa: Envio para última análise antes da entrega;
                    </li>
                    <li>8° Etapa: Entrega do Relatório Final.</li>
                </ul>
            </div>
            <NavigationBtns
                ante="/trabalho/aplicabilidade"
                prox="/trabalho/metodologia"
            />
        </div>
    );
}
