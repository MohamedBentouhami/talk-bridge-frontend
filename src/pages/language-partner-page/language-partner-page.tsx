import Loader from "../../components/loader/loader";
import NewPartnerList from "../../containers/new-partner-list/new-partner-list";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { partnersFetch } from "../../store/friends/friend.action";
import { useEffect } from "react";

export default function PartnerPage() {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const lg: string = localStorage.getItem("learning_language") ?? "en";
    const { isLoadingPartners, partners, errorPartner } = useSelector((state: RootState) => state.friend);
    useEffect(() => {
        dispatch(partnersFetch(lg));
    }, []);

    if (errorPartner) return <div>Error loading partners...</div>;
    return <div>
        <h1>{t('connect.title')}</h1>
        {isLoadingPartners ?
            <Loader /> :
            (partners != undefined && partners!.length > 0) ?
                <NewPartnerList newPartners={partners || []}></NewPartnerList>
                : errorPartner ? (
                    <p>{errorPartner}</p>
                ) : (
                    <p>No Partners found.</p>
                )}
    </div>
}