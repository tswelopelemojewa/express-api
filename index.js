import express from 'express';

const app = express();

//declare configurable port number
const PORT = process.env.PORT || 4009;


// app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// add the line below - and a public folder containing and index.html file
app.use(express.static('public'));


const greetings = {
    'english' : 'Hello',
}


// call the api like this - http://localhost:4009/api/greet?username=tswelopele
app.get('/api/greet', function(req, res){

    //req is used to send requests - request
    const username = req.query.username;
    const language = req.query.language;
    
    if (!greetings[language]) {
        return res.json({
            error : `Invalid language supplied :  ${language}`
        })
    }

    const greeting = greetings[language];

    // res is used to display back - response/result
    res.json({
        message : `${greeting}, ${username}!`
    })
});


app.post('/api/greet', function(req, res){
    
    // add and entry to our greetings map
    const language = req.body.language;
    greetings[language] = req.body.greeting

    res.json({
        status : 'success',
        message : `Added a greeting for ${language}`
    });

});





app.get('/api/greet/:username', function(req, res){
    console.log(req.params);
    const username = req.params.username;
    res.json({
        message : `Hello, ${username}!` 
    })
});



app.listen(PORT, function(){
    console.log(`app started on port ${PORT}`)
});
