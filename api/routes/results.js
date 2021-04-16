
exports.postNew = function(req, res){
    
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.setHeader("Content-Type", "application/json; charset=utf-8");

    //взять переменные из req 
    //  if(!req.body) {
    //    // return res.sendStatus(400);
    // }
    //проверить правильность ответов теста
    let results = { message: "еще не реализовано", questions: [ ] };
    //отправить назад данные о том, какой ответ правильный, какой нет

    
    res.send( JSON.stringify(results) );
    console.log(req.body, ' & ', JSON.stringify(results) );
}


