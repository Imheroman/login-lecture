"use strict";

const UserStorage = require("../../models/UserStorage")

const output = {
    home: (req, res) => { // req, res를 받음
        res.render("home/index");
    }, // object 이기 때문에 ;이 아닌 ,로 변경
    
    login: (req, res) => {
        res.render("home/login");
    },
};



const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        const users = UserStorage.getUsers("id", "psword");

        const response = {};
        if (users.id.includes(id)) { // users.id에 있는 값과 입력된 id의 값이 같으면
            const idx = users.id.indexOf(id); // id의 인덱스를 불러옴.
            if (users.psword[idx] === psword) { // id 위치와 동일한 psword 값이 같으면
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다."
        return res.json(response);
    },
};



module.exports = {
    output,
    process,
};
