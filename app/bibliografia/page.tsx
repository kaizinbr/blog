import NavigationBtns from "@/components/NavigationBtns";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <div className="mb-8">
                <h1
                    className={`
                        font-bold text-2xl
                        mb-8 text-start uppercase
                    `}
                >
                    Referências bibliográficas
                </h1>
                <ul className="text-justify">
                    <li>
                        <Link
                            href="https://rockcontent.com/br/blog/sites-o-guia-definitivo-da-rock-content/"
                            target="_blank"
                        >
                            CLEMENTE, M. Sites — O guia definitivo da Rock
                            Content. Disponível em:
                            https://rockcontent.com/br/blog/sites-o-guia-definitivo-da-rock-content/.
                            Acesso em: 25 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.techtudo.com.br/tudo-sobre/coolors/"
                            target="_blank"
                        >
                            Coolors | Software. Disponível em:
                            https://www.techtudo.com.br/tudo-sobre/coolors/.
                            Acesso em: 25 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.raffcom.com.br/blog/o-que-e-ui/#:~:text=O%20User%20Interface%20%E2%80%93%20ou%20interface,ou%20at%C3%A9%20mesmo%20um%20som."
                            target="_blank"
                        >
                            DEVH2K. O que é UI - User Interface? Veja aqui- Blog
                            Raffcom. Disponível em:
                            https://www.raffcom.com.br/blog/o-que-e-ui/#:~:text=O%20User%20Interface%20%E2%80%93%20ou%20interface,ou%20at%C3%A9%20mesmo%20um%20som..
                            Acesso em: 26 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="http://designr.com.br/como-criar-uma-otima-estrategia-de-ux-user-experience/"
                            target="_blank"
                        >
                            DUTRA, R. Como criar uma ótima estratégia de UX
                            (User Experince). Disponível em:
                            http://designr.com.br/como-criar-uma-otima-estrategia-de-ux-user-experience/.
                            Acesso em: 28 ago. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://ejcm.com.br/ui-e-ux-entendendo-diferencas-convergencias/?gclid=Cj0KCQjw3eeXBhD7ARIsAHjssr9k9uy7zaJHNif8RMXPuvzB9XktKSCD1JGKClxpdsHYf0zYyHwE7hsaAgZcEALw_wcB"
                            target="_blank"
                        >
                            EJCM, M. UI e UX - Entendendo suas diferenças e
                            convergências. Disponível em:
                            https://ejcm.com.br/ui-e-ux-entendendo-diferencas-convergencias/?gclid=Cj0KCQjw3eeXBhD7ARIsAHjssr9k9uy7zaJHNif8RMXPuvzB9XktKSCD1JGKClxpdsHYf0zYyHwE7hsaAgZcEALw_wcB.
                            Acesso em: 28 ago. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://pt.wikipedia.org/wiki/Figma"
                            target="_blank"
                        >
                            Figma. Disponível em:
                            https://pt.wikipedia.org/wiki/Figma. Acesso em: 25
                            jul. 2022
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.hostinger.com.br/tutoriais/o-que-e-site"
                            target="_blank"
                        >
                            G‌, A. O Que é Site, Que Tipos Existem e Como ter o
                            seu Próprio. Disponível em:
                            https://www.hostinger.com.br/tutoriais/o-que-e-site.
                            Acesso em: 25 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.hostinger.com.br/tutoriais/diferenca-entre-html-e-html5"
                            target="_blank"
                        >
                            H, R. O Que é HTML5 e Quais Vantagens ele Traz para
                            seu Site. Disponível em:
                            https://www.hostinger.com.br/tutoriais/diferenca-entre-html-e-html5.
                            Acesso em: 18 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://medium.com/chocoladesign/o-que-%C3%A9-ux-user-experience-e-como-come%C3%A7ar-nessa-carreira-81b766f9103"
                            target="_blank"
                        >
                            HELLER. O que é UX — User Experience e como começar
                            nessa carreira. Disponível em:
                            https://medium.com/chocoladesign/o-que-%C3%A9-ux-user-experience-e-como-come%C3%A7ar-nessa-carreira-81b766f9103.
                            Acesso em: 1 set. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                            target="_blank"
                        >
                            HTML: Linguagem de Marcação de Hipertexto | MDN.
                            Disponível em:
                            https://developer.mozilla.org/pt-BR/docs/Web/HTML.
                            Acesso em: 18 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.devmedia.com.br/javascript-tutorial/37257"
                            target="_blank"
                        >
                            JOEL. JavaScript Tutorial. Disponível em:
                            https://www.devmedia.com.br/javascript-tutorial/37257.
                            Acesso em: 25 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        LEVY, J. Estratégia de UX: Técnicas de Estratégia de
                        Produto Para Criar Soluções Digitais Inovadoras. 2o
                        edição ed. [s.l: s.n.].
                    </li>
                    <li>
                        Linguagem de programação I / Reginaldo Gotardo, Rio de
                        Janeiro: SESES, 2015.
                    </li>
                    <li>
                        <Link
                            href="https://www.homehost.com.br/blog/tutoriais/o-que-e-html/"
                            target="_blank"
                        >
                            MARQUES, R. O que é HTML? Entenda de forma
                            descomplicada. Disponível em:
                            https://www.homehost.com.br/blog/tutoriais/o-que-e-html/.
                            Acesso em: 18 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://blog.betrybe.com/javascript/#1"
                            target="_blank"
                        >
                            NOLETO, C. Javascript: o que é, aplicação e como
                            aprender a linguagem JS. Disponível em:
                            https://blog.betrybe.com/javascript/#1. Acesso em:
                            25 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.dialhost.com.br/blog/o-que-e-design-de-interface-do-usuario/"
                            target="_blank"
                        >
                            O que é design de interface do usuário? - Blog
                            DialHost. Disponível em:
                            https://www.dialhost.com.br/blog/o-que-e-design-de-interface-do-usuario/.
                            Acesso em: 26 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://grasshopper.app/pt_br/what-is-coding/"
                            target="_blank"
                        >
                            O que é programação – Grasshopper. Disponível em:
                            https://grasshopper.app/pt_br/what-is-coding/.
                            Acesso em: 18 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://blog.betrybe.com/tecnologia/aprenda-tudo-sobre-programacao/"
                            target="_blank"
                        >
                            RENAN FRANÇA. Programação: guia completo sobre a
                            área! Disponível em:
                            https://blog.betrybe.com/tecnologia/aprenda-tudo-sobre-programacao/.
                            Acesso em: 18 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.dicasux.com.br/figma/figma-tutorial-prototipo/"
                            target="_blank"
                        >
                            SOUZA, N. Figma tutorial: protótipo básico.
                            Disponível em:
                            https://www.dicasux.com.br/figma/figma-tutorial-prototipo/.
                            Acesso em: 25 jul. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.digitalhouse.com/br/blog/diferenca-entre-ux-e-ui/"
                            target="_blank"
                        >
                            UX x UI: qual a diferença e como as áreas se
                            completam. Disponível em:
                            https://www.digitalhouse.com/br/blog/diferenca-entre-ux-e-ui/.
                            Acesso em: 1 set. 2022.
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://en.wikipedia.org/wiki/Replit"
                            target="_blank"
                        >
                            WIKIPEDIA CONTRIBUTORS. Replit. Disponível em:
                            https://en.wikipedia.org/wiki/Replit. Acesso em: 12
                            set. 2022.
                        </Link>
                    </li>
                    <li>
                        WROBLEWSKI, L..Site-Seeing: a visual approach to web
                        usability. Hungry Minds, 2002.
                    </li>
                </ul>
            </div>
            <NavigationBtns
                ante="/consideracoes/continuacao"
                prox="/bibliografia"
            />
        </div>
    );
}
