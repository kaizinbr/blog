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
                    1.4.2 Objetivos Específicos
                </h1>
                <p className="mb-4 text-justify indent-8">
                Estudo, análise e desenvolvimento do Front-End do site turístico OtoLugar, com foco na dinâmica, usabilidade e funcionalidade.
                </p>
            </div>
            <NavigationBtns
                ante="/introducao/objetivos/objetivo-geral"
                prox="/fundamentacao/programacao"
            />
        </div>
    );
}
