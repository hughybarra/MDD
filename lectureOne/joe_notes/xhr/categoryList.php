<?
/*
Send this to get a return of all of the categories in the database.

Testing: localhost:8887/xhr/categoryList.php
*/

session_start();

$db = new Mongo();
$categories = $db->selectDb("blog")->selectCollection("categories");
$results = $categories->find();

$output = array();

foreach($results as $rec){
	array_push($output, $rec);
}

echo json_encode($output);

?>