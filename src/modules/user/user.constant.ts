import { User } from '../../database/schemas/user.schema';

export enum UserOrderBy {
    ID = 'id',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updatedAt',
}

export const UserAttributesForList: (keyof User)[] = [
    '_id',
    'id',
    'imageUrl',
    'name',
    'createdAt',
    'updatedAt',
    'email',
    'password',
    'role',
    'birthday',
    'phonenumber',
];

export const UserAttributesForDetail: (keyof User)[] = [
    '_id',
    'id',
    'imageUrl',
    'name',
    'email',
    'password',
    'role',
    'birthday',
    'phonenumber',
];
