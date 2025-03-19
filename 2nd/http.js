let http = require('http');
let server = http.createServer((req, res) => {
    res.write('<h1>Hello World, ki obosta vai shab vala asen ni. Website check korte aisen . khub vala kam korsen</h1>');
    res.end();
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// Now, open your browser and type http://localhost:3000