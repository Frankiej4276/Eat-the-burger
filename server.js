var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3080;
var app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.listen(port);