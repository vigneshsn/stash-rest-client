var express = require('express');
var app = express();
var Client = require('./lib/client');


var stashApi = new Client('url', 'username', 'pwd');

//get all projects for all repo
app.get('/getProjects', function(req, res){
	stashApi.projects.get().then(function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

//get all repo
app.get('/getRepo', function(req, res){
	stashApi.repos.get('reponame').then(function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

//pull request
app.get('/getAllPullRequest', function(req, res){
	stashApi.prs.get('reponame', 'reposlug').then(function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});


app.get('/getComments', function(req, res){
	stashApi.prs.getComments('reponame', 'reposlug', 1).then(function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.get('/getActivities', function(req, res){
	stashApi.prs.getActivities('reponame', 'reposlug', 1).then(function(response){
		res.send(response);
	}, function(err){
		res.send(err);
	});
});

app.listen(3000);