// ES 2015 이상의 문법
// import express from "express";

//현재 nodejs가 지원하는 문법
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send("Hello!");
  res.render("index", { data: "data" });
});

router.get("/bbsList", (req, res) => {
  const list = [
    { id: 0, write: "홍길동", subject: "게시판" },
    { id: 1, write: "최다정", subject: "게시판" },
    { id: 2, write: "애치", subject: "게시판" },
  ];
  res.json(list);
});

module.exports = router;
