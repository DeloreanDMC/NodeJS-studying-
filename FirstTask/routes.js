const requestHandler = (req,res) => {
    const url = req.url;
    switch(url) {
        case "/":
                res.setHeader('Content-Type','text/html');  
                res.write(`
                <html>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body>
                <form action="/create-user" method="POST">
                <input type="text" name="userName">
                <button type="submit">Send</button>
                </form>
                </body>
                </html>                
                `);
                res.end();
                break;
        case "/create-user":
            const body = [];
            req.on("data",chunk=>{body.push(chunk);})
            req.on("end",() => {
                let userName = Buffer.concat(body).toString();
                userName = userName.split("=")[1];
                console.log(userName);
                res.setHeader('Location','/');
                res.end();
            });

            break;
        case "/test":
            res.write("<h1>Hello From NodeJS</h1>");
            res.end();
            break;
        case "/users":
            res.write(`
            <html>
                <head>
                    <meta charset="UTF-8">
                </head>
                <body>
                    <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                        <li>User 4</li>
                        <li>User 5</li>
                    </ul>
                </body>
            </html>`);
            res.end();
            break;

    }
};

module.exports = requestHandler;