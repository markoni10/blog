import bcrypt from "bcrypt";

export const generatePasswordHash = (password: string) => {
    const password_salt = bcrypt.genSaltSync();
	const password_hash = bcrypt.hashSync(password, password_salt);

    return password_hash;
}