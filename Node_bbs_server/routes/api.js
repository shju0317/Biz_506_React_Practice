// ES 2015 이상의 문법
// import express from "express";

//현재 nodejs가 지원하는 문법
const express = require("express");
const router = express.Router();
const { bbsDao } = require("../models");

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

  bbsDao.findAll({ order: [{ b_date_time: "DESC" }] }).then((bbsList) => {
    res.json(bbsList);
  });
  //res.json(list);
});

router.get("/insert", (req, res) => {
  bbsDao
    .create({
      b_writer: req.query.writer || "Anonymous",
      b_date_time: Date().toString(),
      b_subject: "게시판 작성",
      b_content: "게시판 작성 읭??",
    })
    .then((result) => {
      //res.json(result);
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
