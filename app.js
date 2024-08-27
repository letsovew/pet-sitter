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
    expiration: 1000 * 60 * 60 * 24, // 세션의 만료 기간을 24시간(1일)로 설정
    clearExpired: true, //만료된 세션을 자동으로 확인하고 삭제할지 여부를 설정
    createDatabaseTable: true, // 세션 데이터베이스 테이블이 아직 존재하지 않는 경우 생성할지 여부
};

const sessionStore = new MySQLStore(options);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    session({
        name: process.env.COOKIE_NAME,
        secret: process.env.COOKIE_SECRET,
        resave: false,  //세션을 항상 저장할지 설정
        saveUninitialized: true,   //세션이 저장되기 전 uninitialized 상태로 미리 만들어 저장.세션이 필요하면 세션을 실행시칸다(서버에 부담을 줄이기 위해)
        cookie: {   //세션 쿠키 설정(세션 관리 시 클라이언트에 보내는 쿠키)
            httpOnly: true, //자바스크립트를 통해 세션 쿠키를 사용할 수 없도록 함
            maxAge: 1000 * 60 * 60 * 24, //쿠키 유효시간 24시간
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