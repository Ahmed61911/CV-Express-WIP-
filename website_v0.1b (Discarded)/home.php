<!DOCTYPE html>
<html>
    <head>
        <title>Home</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style_home.css">
        <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet">
        <script src="script.js"></script> 
    </head>
    <body>
        <div id="menu_bar">
            <center>
                <img id="logo" src="logo.PNG"><br>
                <form action="home.php" method="POST">
                    <input type="submit" id="my_cvs" class="menu_bar_link" value="Mes CVs"><br>
                    <input type="submit" name="add_cv" id="create_cv" class="menu_bar_link" value="Créez un CV"><br>
                    <input type="submit" name="download_all" id="download_cv" class="menu_bar_link" value="Télecharger tout les CVs"></br>
                    <input type="submit" name="log_out" id="logout" class="menu_bar_link" value="Se deconnecter"><br>
                </form>
            </center>
        </div>
        <div id="main_menu">
            <!--<form class="cv_card" id="card_1" href="#"></form>-->
            <input type="button" id="add_sign" onclick="add_card()" value="+">
        </div>
    </body>
</html>


<?php
    //echo "<script> console.log('Hello') </script>";
    if(isset($_POST['log_out'])){
        session_destroy();
        header("location:login.php");
    }

    if(isset($_POST['add_cv'])){
        header("location:create.php");
    }

?>