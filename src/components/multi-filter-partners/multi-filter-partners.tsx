import { useEffect, useState } from "react";
import { Person } from "../../@types/person";
import "./multi-filter-partners.css";
import NewPartnerCard from "../new-partner-card/new-partner-card";
import getFiltersLanguages from "../../utils/common/tools";

type multiFilterProps = {
    partners: Person[]
}

export default function MultiFilterPartners({ partners }: multiFilterProps) {
    const filters  = getFiltersLanguages();
    const [selectedFilter, setSelectedFilter] = useState(filters[1].code);
    const [filterPartners, setFilterPartners] = useState<Person[]>(partners);
    const handleFilterClick = (code: string) => {
        setSelectedFilter(code)
    }
    useEffect(() => {
        filterByLg();
    }, [selectedFilter, partners]);


    const filterByLg = () => {
        if (partners.length === 0) return
        if (selectedFilter === "all") {
            setFilterPartners([...partners])
            return;
        }
        const tmpPartners = partners.filter(partner => partner.nativeLanguage === selectedFilter);
        setFilterPartners(tmpPartners);
    }

    return <div>
        <div className="buttons-containers">
            {filters.map((filter, idx) => (

                <button key={`filter-${idx}`} className={`btn-filter ${selectedFilter === filter.code && "filter-active"}`}
                 onClick={() => handleFilterClick(filter.code)}>{filter.name}</button>

            ))}
        </div>
        <div className="items-container">
            <ul className="partner-ul">
                {filterPartners.map((partner) => <NewPartnerCard key={partner.id} user={partner}></NewPartnerCard>)}
            </ul>



        </div>
    </div>
}
