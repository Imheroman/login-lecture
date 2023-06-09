"use strict";

// 모듈
const express = require("express"); // download module
const bodyParser = require( "body-parser");
const app = express();

// 라우팅
const home = require("./src/routes/home");



// 앱 세팅
app.set("views", "./src/views"); // 파일명, 폴더명 
app.set("view engine", "ejs"); // view engine을 ejs로 사용 -> html과 흡사
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded( { extended: true}));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;

// / 경로로 요청이 들어오면 이런 일을 하겠다.
// app.get("/", (req, res) => { // req, res를 받음
//     res.send("여기는 루트입니다.") // 화면에 여기는 루트입니다. 출력
// });

// app.get("/login", (req, res) => {
//     res.send("여기는 로그인 화면입니다.");
// });





