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
                    1.4 Objetivos
                </h1>
                <p className="mb-4 text-justify indent-8">
                    Buscamos definir bem os objetivos que iríamos seguir para
                    manter uma maior organização durante o processo de
                    desenvolvimento do projeto.
                </p>
            </div>
            <NavigationBtns
                ante="/introducao/atividades-realizadas"
                prox="/introducao/objetivos/objetivo-geral"
            />
        </div>
    );
}
