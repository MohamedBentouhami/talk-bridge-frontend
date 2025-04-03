import useSWR from "swr"
import { fetchNewPartners } from "../../services/user.service"
import Loader from "../../components/loader/loader";
import NewPartnerList from "../../containers/new-partner-list/new-partner-list";

export default function PartnerPage() {
    // TODO get it from the local storage info
    const lg: string = "fr";
    const { data, error, isLoading } = useSWR('api/users', () => fetchNewPartners(lg))
    if (error) return <div>Error loading partners...</div>;
    return <div>
        <h1>Find a partner</h1>
        {isLoading ? <Loader /> : <NewPartnerList newPartners={data || []}></NewPartnerList>}
    </div>
}