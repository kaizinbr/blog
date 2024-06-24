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
                    4.1 Proposta para continuação
                </h1>
                <p className="mb-4 text-justify indent-8">
                Não pretendemos dar continuidade ao projeto. Ele se encontra finalizado, com seu back-end e front-end integrados.
                </p>
            </div>
            <NavigationBtns ante="/consideracoes/continuacao" prox="/bibliografia" />
        </div>
    );
}
