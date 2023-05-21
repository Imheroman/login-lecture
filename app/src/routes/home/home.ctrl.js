"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => { // req, res를 받음
        res.render("home/index");
    }, // object 이기 때문에 ;이 아닌 ,로 변경
    
    login: (req, res) => {
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};



module.exports = {
    output,
    process,
};
