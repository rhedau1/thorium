const express = require('express');
const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })




router.get('/movies', function(req, res) {
    let val= ["Fuckre", "Delhi","Dabang","Rockstar","Suryavash"]
    res.send(val)
});

router.get('./movies/:movieId',  function(req, res){

    movi=["Fuckrey", "Spiderman", "Dabang", "rockstar", "Suryavanshi"]
let value = req.param.movieId;
if(value>mov.length-1){
    res.send("Invalid Input")
}else{
    res.send(movi[value])
}
})

router.get('/movies', function (req, res){
  let ab =  ([{id: 1, name: "The Shining"},{id: 2, name: "The Shining"}, {id: 3, name: "The Shining"}])
    res.send(ab)
});

router.get('/films/:filmid', function(req, res){
    let movies=[{id: 1,name: 'The Shining'},
                {id: 2, name: 'Incendies'},
                {id:3, name:'Rang debasanti'},
                {id:4, name:'Finding demo'}]
           let value = req.param.filmId;
           let abc = false

    for(let i=0; i<movies.length; i++){
        if(movies[i].id==value){
            abc = true;
            res.send(movies[i])
            break;
        }
    }
    if(abc =false){
        res.send("Invalid Input");
    }
})






module.exports = router;
