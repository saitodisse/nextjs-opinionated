export enum Roles_Enum {
  Admin = 'admin',
  User = 'user',
}

export type RoleProps = {
  id: Roles_Enum
  name: string
}

export const RoleList: {
  [id in Roles_Enum]: RoleProps
} = {
  user: {
    id: Roles_Enum.User,
    name: 'User',
  },
  admin: {
    id: Roles_Enum.Admin,
    name: 'Administrator',
  },
}
