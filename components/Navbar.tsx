import Link from "next/link";
import { Badge, NavLink } from "@mantine/core";
import {
    IconHome2,
    IconGauge,
    IconChevronRight,
    IconActivity,
    IconCircleOff,
} from "@tabler/icons-react";

export default function Navbar() {
    return (
        <div className={`
            w-72 top-0 left-0 fixed h-full
            z-20 inset-0 right-auto  pb-10 overflow-y-auto
            hidden lg:block
        `}>
            <nav
                className={`
                        relative w-full overflow-visible
                        p-4
                    `}
            >
                <div
                    className={`
                        overflow-scroll
                    `}
                >
                    <NavLink component={Link} href="/home" label="Início" className="" />
                    <NavLink component={Link} href="/resumo" label="RESUMO" className="" />
                    <NavLink component={Link} href="/abstract" label="ABSTRACT" />
                    <NavLink component={Link}
                        href="/introducao"
                        label="1. Introdução"
                        childrenOffset={28}
                    >
                        <NavLink component={Link}
                            href="/introducao/motivacao"
                            label="1.1 Motivação e Definição do problema"
                        />
                        <NavLink component={Link}
                            href="/introducao/descricao-tecnica"
                            label="1.2 Descrição técnica"
                        />
                        <NavLink component={Link}
                            href="/introducao/atividades-realizadas"
                            label="1.3 Atividades realizadas"
                        />
                        <NavLink component={Link}
                            href="/introducao/objetivos"
                            label="1.4 Objetivos"
                            childrenOffset={28}
            
                        >
                            <NavLink component={Link}
                                href="/introducao/objetivos"
                                label="1.4 Objetivos"
                            />
                            <NavLink component={Link}
                                href="/introducao/objetivo-geral"
                                label="1.4.1 Objetivo Geral"
                            />
                            <NavLink component={Link}
                                href="/introducao/objetivos-especificos"
                                label="1.4.2 Objetivos Específicos"
                            />
                        </NavLink>
                    </NavLink>
                    <NavLink component={Link}
                        href="/fundamentacao"
                        label="2. Fundamentação Teórica"
                        childrenOffset={28}
                    >
                        <NavLink component={Link} href="/programacao" label="2.1 Programação" />
                        <NavLink component={Link}
                            href="/fundamentacao/linguagem-de-programacao"
                            label="2.2 Linguagem de programação"
                        />
                        <NavLink component={Link} href="/fundamentacao/html" label="2.3 HTML" />
                        <NavLink component={Link} href="/fundamentacao/css" label="2.4 CSS" />
                        <NavLink component={Link} href="/fundamentacao/javascript" label="2.5 Javascript" />
                        <NavLink component={Link} href="/fundamentacao/figma" label="2.6 Figma" />
                        <NavLink component={Link}
                            href="/fundamentacao/tecnologias"
                            label="2.7 Tecnologias utilizadas"
                            childrenOffset={28}
                        >
                            <NavLink component={Link} href="/fundamentacao/tecnologias/replit" label="2.7.1 Replit" />
                            <NavLink component={Link}
                                href="/fundamentacao/tecnologias/vscode"
                                label="2.7.2 Visual Studio Code"
                            />
                        </NavLink>
                        <NavLink component={Link} href="/fundamentacao/coolors" label="2.8 Coolors" />
                        <NavLink component={Link}
                            href="/fundamentacao/ux"
                            label="2.9 User Experience (UX)"
                        />
                        <NavLink component={Link}
                            href="/fundamentacao/ui"
                            label="2.10 User Interface (UI)"
                            childrenOffset={28}
                        >
                            <NavLink component={Link} href="/fundamentacao/ui/design" label="2.10.1 UI Design" />
                            <NavLink component={Link}
                                href="/fundamentacao/ui/principais-elementos"
                                label="2.10.2 Principais elementos de uma interface"
                            />
                            <NavLink component={Link}
                                href="/fundamentacao/ui/material"
                                label="2.10.3 Material Design"
                            />
                        </NavLink>
                    </NavLink>
                    <NavLink component={Link}
                        href="/trabalho"
                        label="3. Trabalho Realizado"
                        childrenOffset={28}
                    >
                        <NavLink component={Link}
                            href="/trabalho/aplicabilidade"
                            label="3.1 Aplicabilidade"
                        />
                        <NavLink component={Link} href="/trabalho/cronograma" label="3.2 Cronograma" />
                        <NavLink component={Link} href="/trabalho/metodologia" label="3.3 Metodologia" />
                        <NavLink component={Link} href="/trabalho/resultados" label="3.4 Resultados" />
                    </NavLink>
                    <NavLink component={Link}
                        href="/consideracoes"
                        label="4. Considerações Finais"
                        childrenOffset={28}
                    >
                        <NavLink component={Link} href="/consideracoes"
                        label="4. Considerações Finais"
                        />
                        <NavLink component={Link}
                            href="/consideracoes/continuacao"
                            label="4.1 Proposta para continuação"
                        />
                    </NavLink>
                    <NavLink component={Link}
                        href="/referencias"
                        label="REFERÊNCIAS BIBLIOGRÁFICAS"
                    />
                </div>
                {/* <ul className="">
                    <li className="">
                        <Link href="/">Início</Link>
                    </li>
                    <li className="">
                        <Link href="/resumo">RESUMO</Link>
                    </li>
                    <li className="">
                        <Link href="/abstract">ABSTRACT</Link>
                    </li>
                    <li className="">
                        <Link href="/sumario">SUMÁRIO</Link>
                    </li>
                    <li className="">
                        <Link href="/introducao">1. Introdução</Link>
                    </li>
                    <li className="">
                        <Link href="/motivacao-e-definicao-do-problema">
                            1.1 Motivação e Definição do problema
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/descricao-tecnicas">
                            1.2 Descrição técnicas
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/atividades-realizadas">
                            1.3 Atividades realizadas
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/objetivos">1.4 Objetivos</Link>
                    </li>
                    <li className="">
                        <Link href="/objetivo-geral">1.4.1 Objetivo Geral</Link>
                    </li>
                    <li className="">
                        <Link href="/objetivos-especificos">
                            1.4.2 Objetivos Específicos
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/fundamentacao-teorica">
                            2. Fundamentação Teórica
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/programacao">2.1 Programação</Link>
                    </li>
                    <li className="">
                        <Link href="/linguagem-de-programacao">
                            2.2 Linguagem de programação
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/html">2.3 HTML</Link>
                    </li>
                    <li className="">
                        <Link href="/css">2.4 CSS</Link>
                    </li>
                    <li className="">
                        <Link href="/javascript">2.5 Javascript</Link>
                    </li>
                    <li className="">
                        <Link href="/figma">2.6 Figma</Link>
                    </li>
                    <li className="">
                        <Link href="/tecnologias-utilizadas">
                            2.7 Tecnologias utilizadas
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/replit">2.7.1 Replit</Link>
                    </li>
                    <li className="">
                        <Link href="/visual-studio-code">
                            2.7.2 Visual Studio Code
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/coolors">2.8 Coolors</Link>
                    </li>
                    <li className="">
                        <Link href="/user-experience-ux">
                            2.9 User Experience (UX)
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/user-interface-ui">
                            2.10 User Interface (UI)
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/ui-design">2.10.1 UI Design</Link>
                    </li>
                    <li className="">
                        <Link href="/principais-elementos-de-uma-interface">
                            2.10.2 Principais elementos de uma interface
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/material-design">2.10.3 Material Design</Link>
                    </li>
                    <li className="">
                        <Link href="/trabalho-realizado">
                            3. Trabalho Realizado
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/aplicabilidade">3.1 Aplicabilidade</Link>
                    </li>
                    <li className="">
                        <Link href="/cronograma">3.2 Cronograma</Link>
                    </li>
                    <li className="">
                        <Link href="/metodologia">3.3 Metodologia</Link>
                    </li>
                    <li className="">
                        <Link href="/resultados">3.4 Resultados</Link>
                    </li>
                    <li className="">
                        <Link href="/consideracoes-finais">
                            4. Considerações Finais
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/proposta-para-continuacao">
                            4.1 Proposta para continuação
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/referencias-bibliograficas">
                            REFERÊNCIAS BIBLIOGRÁFICAS
                        </Link>
                    </li>
                </ul> */}
            </nav>
        </div>
    );
}
