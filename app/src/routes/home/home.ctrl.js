"use strict";

const hello = (req, res) => { // req, res를 받음
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    hello,
    login,
};
