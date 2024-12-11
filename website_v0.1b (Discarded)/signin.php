<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign up!</title>
    </head>
    <body>
        <form id="main_subcontainer" action="signin.php" method="post">
            <h1>Sign in to create your CV:</h1>
            <label>Username :</label>
            <input name="username" type="text" class="input_area"></br>
            <label>Email :</label>
            <input name="email" type="email" class="input_area"></br>
            <label>Password :</label>
            <input name="password1" id="password_1" type="password" class="input_area"></br>
            <label>Retype Password :</label>
            <input name="password2" id="password_2" type="password" class="input_area"></br>
            <input name="submit" type="submit" class="input_area" value="Sign in">
        </form>
    </body>
</html>
<?php
if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password1'];
    $conn = mysqli_connect('localhost', 'root', '', 'login_page');

    if (!$conn) {
        die('Connection failed: ' . mysqli_connect_error());
    }

    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if (mysqli_query($conn, $sql)) {
        echo "Record created successfully.";
        header("Location:login.php");
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>