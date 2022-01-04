# 실행방법

1. 터미널에 `npm start`
   => `http://localhost:4999/` 서버 열린 거 확인 ("express 적용 및 서버 시작!")
2. client/index.html 라이브 서버 열기

3. postman 에서 `http://localhost:4999/` 접근

- upper 기능 확인
  => `http://localhost:4999/upper`
  => POST 요청, body에 raw/JSON 형식으로 문자열("") SEND!
- lower 기능 확인
  => `http://localhost:4999/lower`
  => POST 요청, body에 raw/JSON 형식으로 문자열("") SEND!

---

## express 설치

`npm install express --save`

### express 미들웨어 불러오기

`const express = require("express");`

### express 전용 서버 만들기

`const 서버이름 = express()`

## cors 설치

`npm install cors`

### cors 미들웨어 불러오기

`const cors = require("cors");`

### cors 미들웨어 적용하기

```js
app.use(express.static("client"));
// ? 모든 요청에 대한 CORS 허용
app.use(cors());
```

## express json 설정(초기값 strict: true)

`app.use(express.json({ strict: false }));`

## URI 설정

```js
const http = require("http");
const PORT = 4999;
const ip = "localhost";

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});
```

## nodemon 설치

`npm i nodemon --save`

- nodemon 적용

```js
"scripts": {
  "start": "nodemon server/mini-server.js",
}
```

## serve 설치

`npx install serve`

## serve client 설정

`npx serve client`

- 클라이언트 설정 후 확인해보기

```js
const defaultCorsHeader = {
  "Access-Control-Allow-Origin": "http://localhost:3000",
  // 생략
};
```

`npm start`
