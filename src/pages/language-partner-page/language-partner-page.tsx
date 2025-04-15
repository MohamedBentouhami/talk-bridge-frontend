import Loader from "../../components/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { partnersFetch } from "../../store/friends/friend.action";
import { useEffect } from "react";
import MultiFilterPartners from "../../components/multi-filter-partners/multi-filter-partners";
import "./language-partner-page.css"

export default function PartnerPage() {
    const dispatch = useDispatch<AppDispatch>();
    const { isLoadingPartners, partners, errorPartner, hasFetchedPartners } = useSelector((state: RootState) => state.friend);
    useEffect(() => {
        if (!hasFetchedPartners) {
            dispatch(partnersFetch());
        }
    }, [hasFetchedPartners]);
    if (errorPartner) return <div>Error loading partners...</div>;
    return <div>
        {isLoadingPartners ?
            <Loader /> :
            (partners != undefined && partners!.length > 0) ?
                <MultiFilterPartners partners={partners}></MultiFilterPartners>
                : errorPartner ? (
                    <p>{errorPartner}</p>
                ) : (
                    <p>No Partners found.</p>
                )}
    </div>
}