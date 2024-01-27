import { User, ROLES } from './01-enums';

const currentUser: User = {
    username: 'Emanuel',
    role: ROLES.COSTUMER,
};

export const checkAdminRole = () => {
    if (currentUser.role === ROLES.ADMIN) {
        return true;
    }
    return false;
};

console.log(checkAdminRole());

export const checkRole = (...roles: string[]) => {
    if (roles.includes(currentUser.role)) {
        return true;
    }
    return false;
};

console.log(checkRole(ROLES.ADMIN, ROLES.SELLER, ROLES.COSTUMER));
