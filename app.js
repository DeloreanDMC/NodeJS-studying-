const http = require("http");

const server = http.createServer((req,res) => {
    // console.log(req.url, req.method, req.headers);
    console.log(req.url);
    try{
        let num = eval(req.url.slice(1));
        res.setHeader('Content-Type','text/html');  
        res.write('<html>');
        res.write('<head><title>HI NODEjs</title></head>');
        res.write(`<body>Result of calculating = ${num}</body>`);
        res.write('</html>');
        res.end();
    }
    catch(e){
        res.setHeader('Content-Type','text/html');  
        res.write('<html>');
        res.write('<head><title>HI NODEjs</title></head>');
        res.write(`<body>WHAT THE FUCK = ${req.url}</body>`);
        res.write('</html>');
        res.end();
    }
    
});

server.listen(3000);