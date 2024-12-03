<!DOCTYPE html>
<html>
    <head>
        <title>Créez CV</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style_create.css">
        <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet">
        <script src="script.js"></script>
    </head>
    <body>
        <form id="main_form" action="create.php" method="post">
            <div id="personal_infos" class="info_box">
                <h2 class="titles">Données Personnelles:</h2>
                <div calss="info_div">
                    <label class="info_label">Image de profile:</label>
                    <input type="file" id="image" name="img" accept="image/*">
                    <!--<input type="submit" value="Ajouter" class="image_add_btn">--></br></br>
                </div>
                <div class="info_div" id="gender_div">
                    <label class="info_label" >Sexe:</label>
                    <input id="male" type="radio" name="gender" value="male"><label class="info_label">Homme</label>
                    <input id="female" type="radio" name="gender" value="female"><label class="info_label">femme</label></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">Nom:</label>
                    <input name="first_name" class="input_box" id="first_name" type="text"></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">Prénom:</label>
                    <input name="last_name" class="input_box" id="last_name" type="text"></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">date de naissance:</label>
                    <input name="birthdate" class="input_box" id="birthdate_date" type="date"></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">Adresse:</label>
                    <input name="adresse" class="input_box" id="adresse" type="text"></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">Ville:</label>
                    <input name="city" class="input_box" id="city" type="text"></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">Pays:</label>
                    <input name="country" class="input_box" id="first_name" type="text"></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">Télephone:</label>
                    <input name="phone" class="input_box" id="phone_number" type="number"></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">E-mail:</label>
                    <input name="email" class="input_box" id="email" type="email"></br></br>
                </div>
            </div>

            <div id="separation_line"></div>

            <div id="academic_infos" class="info_box">
                <h2 class="titles">Diplomes:</h2>
                <div id="filled_academic" class=info_div></div>
                <div class="info_div">
                    <label class="info_label">Ecole:</label>
                    <input class="input_box" id="school" type="text"></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">Diplome:</label>
                    <input class="input_box" id="diploma" type="text"></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">Spécialité:</label>
                    <input class="input_box" id="study_field" type="text"></br></br>
                </div>
                <!--<div class="info_div">
                    <label class="info_label">date de debut:</label>
                    <input class="input_box" id="study_start_date" type="date"></br></br>
                </div>-->
                <div class="info_div">
                    <label class="info_label">date de d'obtention:</label>
                    <input class="input_box" id="study_end_date" type="date"></br></br>
                </div>
                <input type="button" value="+Ajouter le diplome" id="add_diploma_btn" class="add_btn" onclick="academic_creation()">
            </div>

            <div id="professional_infos" class="info_box">
                <h2 class="titles">Experience Professionel:</h2>
                <div id="filled_professional" class=info_div></div>
                <div class="info_div">
                    <label class="info_label">fonction:</label>
                    <input class="input_box" id="work_function" type="text"></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">Employeur:</label>
                    <input class="input_box" id="work_employer" type="text"></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">depuis:</label>
                    <input class="input_box" id="work_start_date" type="date"></br></br>
                </div>
                <div class="info_div">
                    <label class="info_label">jusqu'au:</label>
                    <input class="input_box" id="work_end_date" type="date"></br></br>
                </div>
                <input value="+Ajouter l'EXP" type="button" id="add_diploma_btn" class="add_btn" onclick="add_professional()">
            </div>

            <div id="languages" class="info_box">
                <h2 class="titles">Langues:</h2>
                <div class="info_div">
                    <label class="info_label">langue 1:</label>
                    <input name="language1" class="language_input_box" id="language_1" type="text">
                    <select name="language1_value">
                        <option value="Débutant">Débutant</option>
                        <option value="Intermédiare">Intermédiare</option>
                        <option value="Bien">Bien</option>
                        <option value="Trés bien">Trés bien</option>
                    </select></br></br>
                </div>
                <div class="info_div" class="info_box">
                    <label class="info_label">langue 2:</label>
                    <input name="language2" class="language_input_box" id="language_2" type="text">
                    <select name="language2_value">
                        <option value="Débutant">Débutant</option>
                        <option value="Intermédiare">Intermédiare</option>
                        <option value="Bien">Bien</option>
                        <option value="Trés bien">Trés bien</option>
                    </select></br></br>
                </div>
                <div class="info_div" class="info_box">
                    <label class="info_label">langue 3:</label>
                    <input name="language3" class="language_input_box" id="language_3" type="text">
                    <select name="language3_value">
                        <option value="Débutant">Débutant</option>
                        <option value="Intermédiare">Intermédiare</option>
                        <option value="Bien">Bien</option>
                        <option value="Trés bien">Trés bien</option>
                    </select></br></br>
                </div>
            </div>

            <div id="intrests" class="info_box">
                <h2 class="titles">Interéts:</h2> 
                <div id="filled_interest" class=info_div></div>   
                <div class="info_div">
                    <label class="info_label">Interéts Personnels   :</label>
                    <input class="input_box" id="interest" type="text"></br></br>
                </div>
                <input value="+Ajouter l'intéret" type="button" id="add_interest_btn" class="add_btn" onclick="add_interest()">
            </div>

            </br></br>
            <center><div class="main_button_box">
                <button id="donload_btn" class="main_btn">Télecharger</button>
                <button type="submit" name="submit_button" id="submit_btn" class="main_btn">Valider</button>
            </div></center>

            <input type="number" name="interestCount" id="interestCounter" class="invisibleCounter">
            <input type="number" name="licenceCount" id="licenceCounter" class="invisibleCounter">
            <input type="number" name="jobCount" id="jobCounter" class="invisibleCounter">
        </form>
    </body>
</html>

<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
    $conn = mysqli_connect('localhost', 'root', '', 'login_page');

    if (!$conn) {
        die('Connection failed: ' . mysqli_connect_error());
    }
    
    
    if(isset($_POST['submit_button'])){
        
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $email = $_POST['email'];
        $adresse = $_POST['adresse'];
        $birthdate = $_POST['birthdate'];
        $city = $_POST['city'];
        $country = $_POST['country'];
        $phone = $_POST['phone'];
        if(isset($_POST['male'])){
            $gender = 'Male';
        }
        else if(isset($_POST['female'])){
            $gender = 'Female';
        }
        $language_1 = $_POST['language1']. ",". $_POST['language1_value']. ".";
        $language_2 = $_POST['language2']. ",". $_POST['language2_value']. ".";
        $language_3 = $_POST['language3']. ",". $_POST['language3_value']. ".";
        
        //////////////////////////////////////////////////////////////////////////////////////////
        //query_1
        if(!empty($_FILES["file"]["name"])){
            echo "<script> console.log('Success..') </script>";
            $targetDir = "uploads/";
            $fileName = basename($_FILES["file"]["name"]);
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
            move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath);
        }
        $query_1 = "INSERT INTO cvs (first_name, last_name, gender, email, adresse, birthdate, city, country, phone, language1, language2, language3, image) 
                    VALUES ('$first_name', '$last_name', '$gender', '$email', '$adresse', '$birthdate', '$city', '$country', '$phone', '$language_1', '$language_2', '$language_3', '$photo')";
        
        if (mysqli_query($conn, $query_1)) {
            echo "Data inserted successfully.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        //query_2
        $interest_counter = $_POST['interestCount'];

        for($i = 1; $i <= $interest_counter; $i++){
            $interest = $_POST['interest'. $i];
            $query_2 = "INSERT INTO interests (interest) VALUES ('$interest')";
    
            if ($conn->query($query_2) === TRUE) {
                echo "Interest inserted successfully: $interest";
            } else {
                echo "Error inserting interest: " . $conn->error;
            }
        }


        //query_4
        $job_counter = $_POST['jobCount'];

        for($i = 1; $i <= $job_counter; $i++){
            $job = mysqli_real_escape_string($conn, $_POST['job' . $i]);
            $query_4 = "INSERT INTO experiences (job) VALUES ('$job')";
            
            if ($conn->query($query_4) === TRUE) {
                echo "work experience inserted successfully: $job";
            } else {
                echo "Error inserting interest: " . $conn->error;
            }
        }
        
        //query_5
        $study_counter = $_POST['licenceCount'];
        
        for($i = 1; $i <= $study_counter; $i++){
            $licence = mysqli_real_escape_string($conn, $_POST['licence' . $i]);
            $query_5 = "INSERT INTO licences (licence_value) VALUES ('$licence')";
            
            if ($conn->query($query_5) === TRUE) {
                echo "licence inserted successfully: $licence";
            } 
            else {
                echo "Error inserting interest: " . $conn->error;
                echo "<script> console.log('ERROR!!!') </script>";
            }
        }
        header('Location:home.php');
        //query_6
        /*$file_name = $_FILES['img']['name'];
        $file_tmp = $_FILES['img']['tmp_name'];
        
        // Define the destination directory where you want to store the uploaded image
        $destination_directory = '/'; // Change this to your desired directory path
        
        // Generate a unique name for the uploaded file
        $new_file_name = uniqid() . '_' . $file_name;
        
        // Move the uploaded file to the destination directory
        if(move_uploaded_file($file_tmp, $destination_directory . $new_file_name)) {
            // File moved successfully
            // Now you can store the file path or filename in the `cv` table in your database
            $image_path = $destination_directory . $new_file_name;
    
            // Insert the image path into the `cv` table
            $query = "INSERT INTO cv (image) VALUES ('$image_path')";
            
            if ($conn->query($query) === TRUE) {
                echo "Image uploaded successfully.";
            } else {
                echo "Error inserting image: " . $conn->error;
                echo "<script> console.log('ERROR!!!') </script>";
            }
        } else {
            echo "Error moving the uploaded file.";
        }*/

    } 
    
    

    
    
?>