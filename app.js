import express from 'express';
import session from 'express-session';
import MySQLSession from 'express-mysql-session';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { indexRouter } from './src/routers/indexRouter.js';

const app = express();

dotenv.config();

const MySQLStore = new MySQLSession(session);

const options = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    expiration: 1000 * 60 * 60 * 24, // ������ ���� �Ⱓ�� 24�ð�(1��)�� ����
    clearExpired: true, //����� ������ �ڵ����� Ȯ���ϰ� �������� ���θ� ����
    createDatabaseTable: true, // ���� �����ͺ��̽� ���̺��� ���� �������� �ʴ� ��� �������� ����
};

const sessionStore = new MySQLStore(options);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    session({
        name: process.env.COOKIE_NAME,
        secret: process.env.COOKIE_SECRET,
        resave: false,  //������ �׻� �������� ����
        saveUninitialized: true,   //������ ����Ǳ� �� uninitialized ���·� �̸� ����� ����.������ �ʿ��ϸ� ������ �����ĭ��(������ �δ��� ���̱� ����)
        cookie: {   //���� ��Ű ����(���� ���� �� Ŭ���̾�Ʈ�� ������ ��Ű)
            httpOnly: true, //�ڹٽ�ũ��Ʈ�� ���� ���� ��Ű�� ����� �� ������ ��
            maxAge: 1000 * 60 * 60 * 24, //��Ű ��ȿ�ð� 24�ð�
        },
        store : sessionStore,
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/pet-sitter', indexRouter);
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on : http://127.0.0.1:${process.env.SERVER_PORT}`);
});

export default app;