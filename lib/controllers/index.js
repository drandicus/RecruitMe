var path = require('path');

exports.partials = function(req, res){
    var stripped = req.url.split('.')[0];
    var request = path.join('./', stripped);

    console.log('here');

    res.render(request, function(err, html){
        if (err) {
            res.send(404);
        } else {
            console.log(html);
            res.send(html);
        }
    });
};

exports.index = function(req, res){
    console.log('here at index');
    res.render('index');
}