export type User = {
	email: string,
	firstName: string,
	lastName: string,
	avatar: string,
	role: string
}

export type Query = {
  users: User[];
}