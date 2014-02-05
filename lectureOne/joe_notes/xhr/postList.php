<?
/*
Send this to retrieve a list of all of the posts.

Testing: localhost:8887/xhr/postList.php
*/
session_start();

$db = new Mongo();
$blog = $db->selectDb("blog")->selectCollection("blog");

$results = $blog->find()->sort(array("datetime"=>-1));

$output = array();

foreach($results as $rec){
	array_push($output, $rec);
}

echo json_encode($output);

?>