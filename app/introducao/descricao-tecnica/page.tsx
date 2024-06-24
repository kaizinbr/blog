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
                    1.2 Descrição técnica
                </h1>
                <p className="mb-4 text-justify indent-8">
                    Este projeto teve como principal objetivo a criação de uma
                    interface limpa e minimalista, de fácil compreensão para o
                    usuário, e que proporcione uma boa usabilidade do site
                    OtoLugar. No site, o usuário pode visualizar pontos
                    turísticos de João Pessoa e seu entorno, ver sua localização
                    exata, criar um usuário com login e senha e publicar seus
                    próprios pontos. A equipe deste projeto é composta pelos
                    alunos Júlia Moraes da Silva e Kaio Lucas Silva Nunes, alunos
                    do terceiro ano do curso de informática.
                </p>
            </div>
            <NavigationBtns
                ante="/introducao/motivacao-e-definicao-do-problema"
                prox="/introducao/atividades-realizadas"
            />
        </div>
    );
}
