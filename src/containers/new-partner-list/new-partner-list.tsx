import { User } from "../../@types/user";
import NewPartnerCard from "../../components/new-partner-card/new-partner-card";

export default function NewPartnerList( { newPartners }: { newPartners: User[]}) {

    return <ul> {newPartners.map(user => <NewPartnerCard key={user.id} user={user}></NewPartnerCard>)}</ul>
} 