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
                    1.3 Atividades realizadas
                </h1>
                <h3 className="uppercase italic mb-4">Júlia Moraes da Silva</h3>
                <ul className="list-disc list-inside ml-8 mb-8">
                    <li>Produção e entrega do plano de trabalho;</li>
                    <li>
                        Desenvolvimento do sistema usando as linguagens HTML e
                        CSS;
                    </li>
                    <li>Pesquisas sobre as linguagens de programação;</li>
                    <li>Estudo sobre UX (User Experience);</li>
                    <li>Realização de testes.</li>
                </ul>
                <h3 className="uppercase italic mb-4">
                    Kaio Lucas silva nunes
                </h3>
                <ul className="list-disc list-inside ml-8 mb-8">
                    <li>Criação do design da aplicação;</li>
                    <li>
                        Desenvolvimento do sistema usando as linguagens HTML e
                        CSS;
                    </li>
                    <li>Pesquisas sobre as linguagens de programação;</li>
                    <li>Estudo sobre UI (User Interface);</li>
                    <li>Realização de testes.</li>
                </ul>
            </div>
            <NavigationBtns
                ante="/introducao/descricao-tecnica"
                prox="/introducao/objetivos"
            />
        </div>
    );
}
