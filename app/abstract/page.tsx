import NavigationBtns from "@/components/NavigationBtns";

export default function Page() {
    return (
        <div>
            <div className="mb-8">
                <h1
                    className={`
                        font-bold text-2xl
                        mb-8 text-center
                    `}
                >
                    Abstract
                </h1>
                <p className="mb-4 text-justify  indent-8">
                    Front-End Project of the OtoLugar website that seeks to
                    unite people who want to travel and be able to know João
                    Pessoa and the coast of Paraíba. The site has a clean and
                    interactive interface, easy to understand for the user. It
                    offers tourists the possibility to search for locations and
                    evaluate the experience. For tourist guides and/or business
                    people, you will have the tool for inserting tourist
                    attractions. The website interface was designed in a
                    minimalist way, taking care not to present a polluted
                    interface that discourages the use of the application by the
                    user.
                </p>
                <span className="">
                    <strong>KeyWords:</strong> Front-End; Interface; HTML; CSS.
                </span>
            </div>
            <NavigationBtns
                ante="/resumo"
                prox="/introducao/motivacao"
            />
        </div>
    );
}
