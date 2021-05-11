const mongoose = require('mongoose');
const Product = require('./models/product');


const products = [
    {
        name: "Choco Drizzle",
        img: "https://lh3.googleusercontent.com/xweG7thGK1BWP8VWvKCdQax3lJrJQbnAMC-gGZ1kMw87H4E8apTAAnD4YkbwmlJiludT8JHsFZnqZykJ=w960-h960-n-o-v1",

    },
    {
        name: "Delectable Truffle",
        img: "https://lh3.googleusercontent.com/xN2xE1EqV_w_NqgiUmQZGoXpk5NdDLZw7Jd_Mw1ZX2dGm9pkxszB2FbS4n5mg76UtPBj4QaAgjWTcXu4=w204-h220-rw",
        
    },
    {
        name: "Trip To Paradise",
        img: "https://lh3.googleusercontent.com/WPNngDTpy6ESc8IEAbXN0ay7fkhDPCy3xjiofcvAzRCrkqX8Lmpq2u2edQdVM_xcH2BjSD83zLW90X0Y=w223-h220-rw",
        
    },
    {
        name: "Choco-Thrill",
        img: "https://lh3.googleusercontent.com/qu3rGhGe5drnfHedDTRupxchgp4_HY8678BHnpPCcyj2_mDUndCiokH9HLvFvi3CQZd8JudYW4rRj5vF=w165-h220-rw",
        
    },
    {
        name: "Oh Chocoholix",
        img: "https://lh3.googleusercontent.com/n_GsONlZE0UJMRQBCLXLRNuz9QApQhbrY1shorh35DWqmOk_vx7hPdbdJ1iZYz3qprI3m93ow-ky9XtA=w165-h220-rw",
        
    },
    {
        name: "Exotic Affair",
        img: "https://lh3.googleusercontent.com/wAYYCEZ1p0KSAWWnVl0gUulmh6QmWt1KdGlOs0zCSIfPJ31QBDQUFEr11DHPo8C5T2wVc4o2n3YtQwG3=w165-h220-rw",
        
    },

]

const seedDB = async ()=>{
    
    await Product.insertMany(products);
    console.log("DB Seeded");
}

module.exports = seedDB;