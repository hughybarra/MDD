<?
/*
To get the details of a specific post send this with the post's ID as a GET variable

List of GET variables:
	id (the id of the post)
	
IE: http://localhost:8887/xhr/postInfo.php?id=52e1201868dc9
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

if(empty($output["id"])){ 

	echo("No post selected."); 

}else{
	$id = $output["id"];

	$results = $blog->find(array("_id"=>$id));
	
	$post = array();

	foreach($results as $rec){
		array_push($post, $rec);
	}

	echo json_encode($post);
}

?>