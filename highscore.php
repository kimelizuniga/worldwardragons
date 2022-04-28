<?php
require_once("clsSQLConnection.php");

if(isset($_POST['userName']) && isset($_POST['pageNum']) != true)
{
    $userName = $_POST['userName'];
    $score = $_POST['score'];
    $timeStamp = $_POST['timeStamp'];
    $mysqlObj = new clsSQLConnection();
    $mysqlObj->InsertData($userName, $score, $timeStamp);
}
else if(isset($_POST['pageNum']))
{
    $pageNum = $_POST['pageNum'];
    $mysqlObj = new clsSQLConnection();
    $mysqlObj->GetData($pageNum);
}
else
{
    $mysqlObj = new clsSQLConnection();
    $mysqlObj->CountRows();
}

?>