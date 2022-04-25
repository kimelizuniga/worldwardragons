<?php
require_once("clsSQLConnection.php");

if(isset($_POST['userName']))
{
    $userName = $_POST['userName'];
    $score = $_POST['score'];
    $mysqlObj = new clsSQLConnection();
    $mysqlObj->InsertData($userName, $score);
}
else
{
    $mysqlObj = new clsSQLConnection();
    $mysqlObj->GetData();
}

?>