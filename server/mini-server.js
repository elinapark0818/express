const express = require("express");
const cors = require("cors");
const app = express();

// * 모든 요청에 대한 CORS 처리
// app.use(express.static("client"));
app.use(cors());

// * 배열과 객체만 허용되는 것을 비활성화
app.use(express.json({ strict: false }));

// * 포트설정
const ip = "localhost";
const port = 4999;

app.listen(port, ip, () => {
  console.log(`http server listen on ${ip}:${port}`);
});

// * get 요청 처리
app.get("/", (req, res) => {
  res.send("express 적용 및 서버 시작!");
  console.log(res);
});

app.post("/upper", (req, res) => {
  console.log(req.body);
  res.json(req.body.toUpperCase());
});

app.post("/lower", (req, res) => {
  console.log(req.body);
  res.json(req.body.toLowerCase());
});

// * Error handling
// ? 미들웨어는 무조건 next()로 넘겨야 한다.
// todo: 클라이언트 에러(400)는 err 인자를 안받는다.
app.use((req, res, next) => {
  res.status(404).send("404 Error! Not Found");
});
