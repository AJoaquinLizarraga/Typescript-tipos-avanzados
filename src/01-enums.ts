export enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    COSTUMER = 'costumer',
}

export type User = {
    username: string;
    role: ROLES;
};

const abelUser: User = {
    username: 'Abel',
    role: ROLES.ADMIN,
};
