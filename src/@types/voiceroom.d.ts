export type Voiceroom = {
    id: string;
    title: string;
    hostId: string;
    participants: Participant[];
    isActive: boolean;
    languageUsed: string;
    hostName: string;
    hostPictUrl: string;
};

export type Participant = {
    id: string;
    firstName: string;
    lastName: string;
    profilePictUrl: string;
};
