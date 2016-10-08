var express = require('express'); 
var router = express.Router();

//api for all post
router.route('/posts')
	//return all posts
	.get(function(req, res){
		//temporary solution
		res.send({message: 'TODO return all posts in DB'});
	})

	.post(function(req, res){
		//temporary solution
		res.send({message: 'TODO Create a new post in DB'});
	})

//api for specific post
router.route('/posts/:id')
	//return a particular post with ID
	.get(function(req, res){
		//temporary solution
		return res.send({message: 'TODO return the post with ID ' + req.param.id});
	})

	//updates particlar post
	.put(function(req, res){
		//temporary solution
		return res.send({message: 'TODO modify the post with ID ' + req.param.id});
	})

	//delete particlar post
	.delete(function(req, res){
		//temporary solution
		return res.send({message: 'TODO delete the post with ID ' + req.param.id});
	})
;
module.exports = router;
