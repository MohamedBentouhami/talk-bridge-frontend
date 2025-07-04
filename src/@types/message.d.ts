export type Message = {
    id: string,
    senderId?: string,
    receiverId: string,
    content: string,
    createdAt?: Date;
    hasBeenCorrected : Boolean;
    correctionProvided? : string; 
}