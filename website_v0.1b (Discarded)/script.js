//login page functions
function wrong_data(){
    document.getElementById("error_msg").innerHTML = "Wrong email or password!! Please Try again.";
}
function clear_error(){
    document.getElementById("error_msg").innerHTML = "";
}
function empty_error(){
    window.alert("Please fill your email and password!");
}

//Sign in page functions
function unmatched_password(){
    if(document.getElementById("password_1").value != document.getElementById("password_2").value){
        window.alert("passwords do not match !");
    }
}

//creation page functions
let academic_count = 0;
let interest_count = 0;
let work_count = 0;

function academic_creation(){
    
    academic_count ++
    document.getElementById("licenceCounter").value = academic_count;

    const label = document.createElement("h4");
    const school_value = document.createElement("input");
    const br = document.createElement("br");

    school_value.id = "school_value" + academic_count;
    school_value.className = "school_value";
    school_value.setAttribute("name", "licence" + academic_count);

    
    label.innerHTML = "Diplome " + academic_count + ":";
    school_value.value = document.getElementById("study_end_date").value + ": "
     + document.getElementById("diploma").value + " en " +
    document.getElementById("school").value + " à l'" + document.getElementById("study_field").value + ".";

    document.getElementById("filled_academic").appendChild(label);
    document.getElementById("filled_academic").appendChild(school_value);
    document.getElementById("filled_academic").appendChild(br);
}

function add_interest(){
    interest_count ++;
    document.getElementById("interestCounter").value = interest_count;
    
    const interest_label = document.createElement("b");
    const interest_value = document.createElement("input");
    const br = document.createElement("br");

    interest_label.id = "interest_label" + interest_count;
    interest_label.className = "info_label";
    interest_value.id = "interest_value" + interest_count;
    interest_value.className = "filled_value";
    interest_value.setAttribute("name", "interest" + interest_count);

    interest_label.innerHTML = "Interet " + interest_count + ":";
    interest_value.value = document.getElementById("interest").value + ".";
    
    document.getElementById("filled_interest").appendChild(interest_label);
    document.getElementById("filled_interest").appendChild(interest_value);
    document.getElementById("filled_interest").appendChild(br);
}

function add_professional(){
    work_count ++;
    document.getElementById("jobCounter").value = work_count;

    const experience_label = document.createElement("h4");
    const work_value = document.createElement("input");
    const br = document.createElement("br");

    work_value.id = "work_value" + work_count;
    work_value.setAttribute("name", "job" + work_count);

    experience_label.innerHTML = "experience " + work_count + ":";
    work_value.value = document.getElementById("work_start_date").value + " à " + document.getElementById("work_end_date").value + ": " + 
    document.getElementById("work_function").value + " à " +document.getElementById("work_employer").value + ".";

    document.getElementById("filled_professional").appendChild(experience_label);
    document.getElementById("filled_professional").appendChild(work_value);
    document.getElementById("filled_professional").appendChild(br);
}

//home page functions
cv_count = 0;

function add_card(){
    cv_count ++;
    
    const cv = document.createElement("form");

    cv.id = "card_" + cv_count;
    cv.className = "cv_card";
    
    document.getElementById("main_menu").appendChild(cv);
}