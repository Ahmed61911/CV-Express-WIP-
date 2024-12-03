<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style_login.css">
        <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet">
        <script src="script.js"></script>

    </head>
    <body>
        <div class="main_container">
            <img id="logo_img" href="logo.png">
            <form class="main_subcontainer" action="login.php" method="post">
                <h1 class="">Login</h1>
                <label class="main_label">Login to access your CV</label></br></br>
                <label class="text_label">Email or Username:</label></br>
                <input type="text" name="user" class="input_area" placeholder="johnDoe123@email.com/JhonDoe123" onclick="clear_error()"></br>
                <label class="text_label">Password:</label></br>
                <input type="password" name="password" class="input_area" placeholder="•••••••••" onclick="clear_error()"></br>
                <label id="error_msg"></label></br></br>
                <button id="login_btn" type="submit" name="login" class="main_button">Login</button></br>
                <label id="or_label">or sign up to create one:</label></br>
                <button id="signup_btn" type="submit" name="sign_up" class="main_button">Sign up</button>
            </form>
        </div>
    </body>
</html>

<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $username = $_POST["user"];
        $password = $_POST["password"];
        
        //echo "<script> console.log('Hello') </script>";
        $conn = mysqli_connect('localhost', 'root', '', 'login_page');

        if (!$conn) {
            die('Connection failed: ');
        }

        $query1 = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
        $result1 = $conn->query($query1);

        $query2 = "SELECT * FROM users WHERE email = '$username' AND password = '$password'";
        $result2 = $conn->query($query2);

        if(isset($_POST["login"])){
            /*if(empty($user) || empty($password)){
                echo "<script> empty_error() </script>";
            }*/
            if($result1->num_rows == 1 || $result2->num_rows == 1) {
                session_start();
                $_SESSION["user"] = "ahmed";
                header("location:home.php");
                exit;
            }
            else{
                echo "<script> wrong_data() </script>";
            }
        }

        if(isset($_POST["sign_up"])){
            $conn->close();
            session_start();
            $_SESSION["user"] = "temp";
            header("location:signin.php");
        }
    }
?>