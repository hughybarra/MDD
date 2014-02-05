<?
/*
This is to make a comment on a post by sending a couple of $_GET variables 
through a form to create a new comment.

List of GET variables:
	id (the id of the post)
	author
	text

Testing Example: localhost:8887/xhr/postCommentAdd.php?id=52e1201868dc9&author=Billy&text=I like beans.

*/
session_start();

function param($scope, $key, $default){
	return array_key_exists($key, $scope) 
	&& is_scalar($scope[$key]) ? $scope[$key] : $default;
}

$db = new Mongo();
$blog = $db->selectDb("blog")->selectCollection("blog");

$output = array();

$output["id"] = param($_GET, 'id', '');
$output["author"] = param($_GET, 'author', '');
$output["text"] = param($_GET, 'text', '');

if(empty($output["id"]) || empty($output["author"]) || empty($output["text"]) ){ 

	echo("Please fill out all fields."); 

}else{
	$id = $output["id"];

	$time = new DateTime();
	$now = $time->format('Y-m-d H:i:s');

	$blog->update(array("_id"=>$id), 
		array('$push' => array("comment"=>array(
			"datetime"=>$now, 
			"author"=>$output["author"], 
			"text"=>$output["text"]))));

	echo("Comment Success!");
}

?>