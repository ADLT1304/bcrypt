const bcrypt = require("bcrypt")

// const myPassword = "generic";

// const hash = bcrypt.hashSync(myPassword, 15)
// console.log(hash)

// const result = bcrypt.compareSync(myPassword, hash)
// console.log(result)

// const hash = bcrypt.hash("generic", 5, function (err, hash) {
//     console.log(hash);
// })


// bcrypt.genSalt(10, function (err, salt) {
        
//         console.log(salt)
//         bcrypt.hash("generic", 5, function (err, hash) {
//         bcrypt.compare("generic", hash, function (err, result) {
//             console.log("generic", result);
//         })

//             bcrypt.compare("falsy", hash, function (err, result) {
//             console.log("falsy", result);
//         })   
//             console.log(hash);
//     })
// });

// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("generic", salt);
// console.log(hash)

// bcrypt
    // .hash("generic", 5)
    // .then((hash) => {
        // return bcrypt.compare("generic", hash)
        // .then((result) => {
            // console.log("generic", result);
        // })
    // })
    // .catch((err) => {
        // console.log(err)
    // })

async function  hashTest(password) {
    const hash = await bcrypt.hash(password, 5);
    
    const result = await bcrypt.compare(password, hash)
    console.log(result)
}

hashTest("generic");