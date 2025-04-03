import { User } from "../../@types/user";

type NewPartnerCardProps = {
    user: User;
};

export default function NewPartnerCard({ user }: NewPartnerCardProps) {
    return <p>{user.firstName}<button>Add partner</button></p>;
}