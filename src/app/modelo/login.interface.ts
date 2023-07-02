export interface LoginI{
    dataUser: {
        id: string;
        user: string;
        email: string;
        typeusers_id: number | null;
      };
    token:string;
}