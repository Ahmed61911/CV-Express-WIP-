<?php
// ...

function validateLogin($username, $password){
    global $mysqli;

    /* Sanitize the input to prevent SQL injection
    $username = $mysqli->real_escape_string($username);
    $password = $mysqli->real_escape_string($password);*/

    // Query the database for the username and password
    $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $mysqli->query($query);

    if(empty($username) || empty($password)){
        echo "<script> empty_error() </script>";
    }
    else if($result->num_rows == 1){
        session_start();
        $_SESSION["user"] = "Ahmed";
        header("location:home.php");
    }
    else{
        echo "<script> wrong_data() </script>";
    }
}

?>