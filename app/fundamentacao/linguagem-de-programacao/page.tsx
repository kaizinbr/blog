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
                    2.2 Linguagem de Programação
                </h1>
                <p className="mb-4 text-justify indent-8">
                Uma linguagem de programação é um método padronizado que usamos para expressar as instruções de um programa a um computador programável. Ela segue um conjunto de regras sintáticas e semânticas para definir um programa de computador. Regras sintáticas dizem respeito à forma de escrita e regras semânticas ao conteúdo (GOTARDO, 2015).
                </p>
                <p className="mb-4 text-justify indent-8">
                Através da especificação de uma linguagem de programação você pode especificar quais dados um computador vai usar; como estes dados serão tratados, armazenados, transmitidos; quais ações devem ser tomadas em determinadas circunstâncias. Ao usarmos uma linguagem de programação você cria o chamado “Código Fonte”. Um código fonte é um conjunto de palavras escritas de acordo com as regras sintáticas e semânticas de uma linguagem (GOTARDO, 2015).

                </p>
            </div>
            <NavigationBtns
                ante="/fundamentacao/programacao"
                prox="/fundamentacao/html"
            />
        </div>
    );
}
