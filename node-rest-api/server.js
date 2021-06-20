
const express = require('express'); //import nodeJS MVC framework

const app = express(); //object for app

app.use(express.json()); //a middleware to parse req into JSON so that you can read req body data

/* http://localhost:8080 */
app.listen(8080, () => {
	console.log('Server started listening on port 8080');
});

// handle CORS errors
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  	next();
});

/* 
	=============================
	Define REST API end points
	=============================
*/

/* 
http://localhost:8080/api/login 
Http Method = POST
*/
app.post('/api/login', (req, res) => {
	let flag = false;
	console.log("NodeJS Received Request: ", req.body);
	
	if(req.body.username == "admin" && req.body.password == "admin123!"){
		res.json({ token: "12433sjdfsljflsjfdlj" });
	}
	else {
		res.json({ token: ""});
	}
});

/* 
	http://localhost:8080/api/tutorials 
	Http method = GET
*/
app.get('/api/tutorials', (req, res) => {
	res.json([
	{
		name: 'AWS Cloud Certification',
		price: 30000,
		startDate: new Date(),
		status: 'Not-Started'
	},
	{
		name: 'ReactJS Certification',
		price: 35000,
		startDate: new Date(),
		status: 'In-Progress',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1024px-AWS_Simple_Icons_AWS_Cloud.svg.png'
	},
	{
		name: 'Angular  Certification',
		price: 35000,
		startDate: new Date(),
		status: 'Not-Started',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1024px-AWS_Simple_Icons_AWS_Cloud.svg.png'
	}
	]);
});