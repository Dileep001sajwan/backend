const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
   console.log(1);
})

module.exports= router