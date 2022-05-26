const bcrypt = require("bcrypt")

// const myPassword = "generic";
// const hash = bcrypt.hash("generic", 5, function (err, hash) {
//     console.log(hash);
// })


bcrypt.genSalt(10, function (err, salt) {
        
        console.log(salt)
        bcrypt.hash("generic", 5, function (err, hash) {
        bcrypt.compare("generic", hash, function (err, result) {
            console.log("generic", result);
        })

            bcrypt.compare("falsy", hash, function (err, result) {
            console.log("falsy", result);
        })   
            console.log(hash);
    })
});

// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("generic", salt);
// console.log(hash)