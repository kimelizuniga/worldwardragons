<?php

class clsSQLConnection
{
    public function CreateConnection()
    {
    // Get Heroku ClearDB connection information
    $cleardb_url            = parse_url(getenv("CLEARDB_DATABASE_URL"));
    
    if(isset($cleardb_url["host"])) // if in heroku database
    {
        $cleardb_server         = $cleardb_url["host"];
        $cleardb_username       = $cleardb_url["user"];
        $cleardb_password       = $cleardb_url["pass"];
        $cleardb_db             = substr($cleardb_url["path"], 1);
    
        $active_group = 'default';
        $query_builder = TRUE;
    
        // Connect to DB
        $conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);
    }
    else
    {
        // Connect to local DB
        $conn = new mysqli ("localhost", "root", "mysql", "ww_dragons");
    }
    
    return $conn;
    }

    public function GetData($pageNum)
    {
        $conn = $this->CreateConnection();
        $TableName = 'ww_dragons';

        $ranking = 10 * $pageNum;

        $limit = 10;
        $offset = $pageNum * 10;

        $query = "Select user_name, score from $TableName where score > 0
                  order by score desc limit $limit offset $offset";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $stmt->bind_result($UserName, $Score);

        
        echo "
            <div class=\"column-rank rank-number col-heading\">RANK</div>
            <div class=\"column userName col-heading\">NAME</div>
            <div class=\"column score col-heading\">SCORE</div>
        ";

        while($stmt->fetch())
        {
            $ranking++;

            echo "
                <div class=\"column-rank rank-number\">
                    $ranking
                </div>
                <div class=\"column userName\">
                        $UserName
                </div>
                <div class=\"column score\">
                    $Score
                </div>"
            ;
        }

        $stmt->close();
    }

    public function CountRows()
    {
        $conn = $this->CreateConnection();
        $TableName = 'ww_dragons';

        $query = "Select COUNT(*) from $TableName where score > 0 order by score desc limit 50";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $stmt->bind_result($count); 

        $stmt->fetch();
    
        echo "$count";
    }

    public function InsertData($userName, $score, $timeStamp)
    {
        $conn = $this->CreateConnection();
        $TableName = 'ww_dragons';
        
        $query = "Insert into $TableName (user_name, score, date_played)
                                        Values (?, ?, ?)";
        $stmt = $conn->prepare($query);
        $BindSuccess = $stmt->bind_param("sis", $userName, $score, $timeStamp);

        if ($BindSuccess)
            $success = $stmt-> execute();
        else
            echo "Bind failed" . $stmt->error;

        $stmt->close();
    }
}

?>