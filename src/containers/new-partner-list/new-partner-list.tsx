import { Person } from "../../@types/person";
import NewPartnerCard from "../../components/new-partner-card/new-partner-card";

export default function NewPartnerList( { newPartners }: { newPartners: Person[]}) {
    
    return <ul> {newPartners.map(user => <NewPartnerCard key={user.id} user={user}></NewPartnerCard>)}</ul>
} 