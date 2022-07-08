var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { PrismaClient } from '../../prisma/index.js';
import bcrypt from 'bcrypt';
const router = express.Router();
const prisma = new PrismaClient();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    if (!users || !users.length) {
        res.send({ message: 'No users found.' });
        return;
    }
    res.send(users);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const user = yield prisma.user.findUnique({
        where: {
            id,
        },
    });
    if (!user) {
        res.send({ message: 'User not found.' });
        return;
    }
    res.send(user);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, username, password } = req.body;
    const password_salt = bcrypt.genSaltSync();
    const password_hash = bcrypt.hashSync(password, password_salt);
    const user = yield prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        yield prisma.user.create({
            data: {
                email,
                username,
                password: password_hash,
            },
        });
        return res.send({ message: 'User created.' });
    }
    res.send({ message: 'User with that email already exists.' });
}));
export default router;
