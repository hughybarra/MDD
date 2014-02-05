<?
/*
This is to edit the post made by the author by passing a couple of GET variables. All fields are required

List of GET variables:
	id (the id of the post)
	title
	text

Testing Example: localhost:8887/xhr/postUpdate.php?id=52e1201868dc9&title=Thinking&text=Fruits are fruity!
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
$output["title"] = param($_GET, 'title', '');
$output["text"] = param($_GET, 'text', '');

if(empty($output["id"]) || empty($output["title"]) || empty($output["text"]) ){ 

	echo("Please fill out all fields."); 

}else{
	$id = $output["id"];

	$blog->update(array("_id"=>$id), array('$set'=>array( 
		"title"=>$output["title"], 
		"text"=>$output["text"])));

	echo("Update Success!");
}

?>