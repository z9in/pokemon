const express = require('express');
const app = express();
const cors = require('cors');
//CORS 설정 : 모두 허용
app.use(cors());
const pokemons = require('./data.js');
console.log(pokemons)
//get요청 응답
app.get('/', (req,res)=>{
    res.send(`<h1>홈</h1>`)
})

//API 요청
app.get('/api/:id',function(req,res){
    const id = req.params.id;
    console.log(id);
    // 요청한 변수(params.id)의 포케몬 데이터 보내기
    if(id=='all') {
        res.json(pokemons);    
    }else {
        res.json(pokemons[id]);
    }
    
})



//서버 오픈
app.listen(3005, ()=>{
    console.log('서버열림')
})