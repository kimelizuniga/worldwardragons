<?php
require_once("clsSQLConnection.php");

if(isset($_POST['userName']))
{
    $userName = $_POST['userName'];
    $score = $_POST['score'];
    $timeStamp = $_POST['timeStamp'];
    $mysqlObj = new clsSQLConnection();
    $mysqlObj->InsertData($userName, $score, $timeStamp);
}
else
{
    $mysqlObj = new clsSQLConnection();
    $mysqlObj->GetData();
}

?>