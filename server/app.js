
const https = require('https');
const fs = require('fs');
const express = require('express')
const session = require('express-session');
const indexRouter = require('./routes');
const app = express()
const PORT = 5999

const cors = require('cors')
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
      secret: '36sebfull_team_shotcoding',
      resave: false, //* false 세션데이터를 변경될때만 세션 저장소 값을 저장한다 true 안바뀌어도 계속 저장한다
      saveUninitialized: true, //* 세션이 필요하기 전까지 세션을 구동하지 않는다
      cookie: {
        domain: 'localhost', //* 쿠키를 보여줄 웹브라우저 도메인
      //   path: FILL_ME_IN, //*쿠키를 보여줄 웹브라우저 주소
        maxAge: 24 * 6 * 60 * 10000,
        sameSite: 'none', //* 
        httpOnly: false, //* 웹브라우저 웹서버가 통신할때만 쿠키를 발행 *JS로는 쿠키를 볼수 없다는 이야기
        secure: true, //* https 일때만 쿠키 발행
      },
    })
  );

app.use('/', indexRouter);

let server;
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  server = https.createServer(
      {
        key: fs.readFileSync(__dirname + `/` + 'key.pem', 'utf-8'),
        cert: fs.readFileSync(__dirname + `/` + 'cert.pem', 'utf-8'),
      },
      app
    )
    .listen(PORT);
} else {
  server = app.listen(PORT)
}

module.exports = server;

// https://localhost:5999/users/login