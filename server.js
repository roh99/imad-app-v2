var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
    
    'article-one' :{
    title='Article one|Rohan Garg';
    heading='Article one';
    date='March 11,2017';
    content=      '<p>This is my first article based on the elections concluded recently with BJP                emerging as the supremely favoured force to be reckoned among the UP public</p>'  },
    'article-two' :{title='Article two|Sakshi Garg',
    heading='Article two',
    date='March 11,2017',
    content='<p>This is my second article</p>'},
    'article-three' :{ title='Article three |Pankaj Pant',
            heading='Article three',
            date='March 12,2017',
            content='<p>This is my third article </p>'}
};

functon createTemplate(data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content; 

var htmlTemplate='<html>
    <head>
        <title>
           ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
       <div class="container"> <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <h3>${heading}</h3>
        <div>${date}
        </div>
        <div>
            ${content}
              </div>
    </body>
</html>

'
return htmlTemplate;
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
//articleName == article-one
//articles[articleName]={} content object for article one
 var articleName=req.params.articleName;
 res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
