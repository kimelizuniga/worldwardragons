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

    public function GetData()
    {
        $conn = $this->CreateConnection();
        $TableName = 'highscore';
    
        $query = "Select user_name, score from $TableName order by score desc limit 10";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $stmt->bind_result($UserName, $Score);

        while($stmt->fetch())
        {
            echo "
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

    public function InsertData($userName, $score)
    {
        $conn = $this->CreateConnection();
        $TableName = 'highscore';
        
        $query = "Insert into $TableName (user_name, score)
                                        Values (?, ?)";
        $stmt = $conn->prepare($query);
        $BindSuccess = $stmt->bind_param("si", $userName, $score);

        if ($BindSuccess)
            $success = $stmt-> execute();
        else
            echo "Bind failed" . $stmt->error;

        $stmt->close();
    }

    public function Register()
    {
        $conn = $this->CreateConnection();
        $registered = false;
        $TableName = "user_info";
        $user_name = $_POST["f_UserName"];
        $first_name = $_POST["f_FirstName"];
        $last_name = $_POST["f_LastName"];
        $user_pass = password_hash($_POST["f_Password"], PASSWORD_DEFAULT);
        $dateRegistered = date('Y-m-d');

        $query = "Insert into $TableName (user_name, first_name, last_name,
                                          user_pass, user_registered)
                                          Values (?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($query);
        $BindSuccess = $stmt->bind_param("sssss",
                                         $user_name, $first_name, $last_name,
                                         $user_pass, $dateRegistered);
                        
        if ($BindSuccess)
            $success = $stmt->execute();
        else
            echo "Bind failed" . $stmt->error;

        if($success)
        {
            echo "<p class=\"success\">Registered Successfully</p>";
            $registered = true;
        }
        else
        {
            $_SESSION["failed"] = true;
            header("Location: ./register.php");
        }

        $stmt->close();

        return $registered;
    }

    public function Login()
    {
        $conn = $this->CreateConnection();
        $TableName = "user_info";
        $userName = $_POST["f_UserName"];
        $userPass = $_POST["f_Password"];
        $authenticated = false;

        $query = "Select user_name, user_pass from $TableName where user_name = ?";
        $stmt = $conn->prepare($query);

        $BindSuccess = $stmt->bind_param("s", $userName);

        if ($BindSuccess)
            $success = $stmt->bind_result($user_name, $user_pass);
        else
            echo "Bind failed";

        if ($success)
            $stmt->execute();
        else
            echo "Bind failed";

        $stmt->fetch();

        if(password_verify($userPass, $user_pass))
        {
            $_SESSION["login"] = true;
            $authenticated = true;
            if(session_status() == PHP_SESSION_NONE)
                session_start();
            $_SESSION["userName"] =  $userName;
        }
        else
            echo "<div><p class=\"warning\">Failed login attempt</p></div>";

        $stmt->close();

        return $authenticated;
    }
}

?>