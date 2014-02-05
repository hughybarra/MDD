<?
/*
This is to create a new post. By sending a couple of $_GET variables 
through a form to create a new post.

List of GET variables:
	author
	title
	text
	category

Testing Example: localhost:8887/xhr/postAdd.php?author=Larry&title=Fruit&category=Apple&text=Oranges are better than apples.
*/

session_start();

function param($scope, $key, $default){
	return array_key_exists($key, $scope) 
	&& is_scalar($scope[$key]) ? $scope[$key] : $default;
}

$db = new Mongo();
$blog = $db->selectDb("blog")->selectCollection("blog");

$output = array();

$output["author"] = param($_GET, 'author', '');
$output["title"] = param($_GET, 'title', '');
$output["text"] = param($_GET, 'text', '');
$output["category"] = param($_GET, 'category', '');

if(empty($output["author"]) || empty($output["title"]) || 
	empty($output["text"]) || empty($output["category"]) ){ 

	echo("Please fill out all fields."); 

}else{
	$id = uniqid();

	$time = new DateTime();
	$now = $time->format('Y-m-d H:i:s');

	
	$blog->insert(array("_id"=>$id, "datetime"=>$now, 
		"author"=>$output["author"], "title"=>$output["title"], 
		"text"=>$output["text"], "category"=>$output["category"], "comment"=>array()));

	echo("Post Success!");
}

?>