import "./style_cv1.css"

const Cv1 = () => {
  return (
    <div>
        <div class="container">
            <div class="profile">
                <div class="profile-photo"></div>
                <div class="profile-info">
                <h2 class="heading heading-light">
                Profile
                </h2>
                <p class="profile-text">
                Hello! I’m Robert Smith. Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background in project management and customer relations.
                </p>
                <div class="contacts">
                    <div class="contacts-item">
                    <h3 class="contacts-title">
                        <i class="fas fa-phone-volume"></i>
                        Phone
                    </h3>
                    <a href="tel:+18001234567" class="contacts-text">+(1800) 123 4567</a>
                    </div>
                    <div class="contacts-item">
                    <h3 class="contacts-title">
                        <i class="fas fa-envelope"></i>
                        Email
                    </h3>
                    <a href="mailto:Robertsmith@gamil.com" class="contacts-text">Robertsmith@gmail.com</a>
                    </div>
                    <div class="contacts-item">
                    <h3 class="contacts-title">
                        <i class="fas fa-globe-americas"></i>
                        Web
                    </h3>
                    <a href="http://www.robertsmith.com" class="contacts-text">www.robertsmith.com</a>
                    </div>
                    <div class="contacts-item">
                    <h3 class="contacts-title">
                        <i class="fas fa-map-marker-alt"></i>
                        Home
                    </h3>
                    <address class="contacts-text">
                        24058, Belgium, Brussels, <br/>Liutte 27, BE
                    </address>
                    </div>
                </div>
                <h2 class="heading heading-light">Languages</h2>
                <div class="languages">
                    <div class="language">
                    <span class="language-text">English</span>
                    <strong class="languages-per">100%</strong>
                    </div>
                    <div class="language">
                    <span class="language-text">French</span>
                    <strong class="languages-per">90%</strong>
                    </div>
                    <div class="language">
                    <span class="language-text">Greak</span>
                    <strong class="languages-per">80%</strong>
                    </div>
                    <div class="lines">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    </div>
                </div>
                </div>
            </div>
            <div class="resume">
                <div class="resume-wrap">
                <div class="logo">
                    <div class="logo-lines logo-lines_left">
                    <span class="logo-line"></span>
                    <span class="logo-line"></span>
                    <span class="logo-line"></span>
                    </div>
                    <div class="logo-img">
                    R/S
                    </div>
                    <div class="logo-lines logo-lines_right">
                    <span class="logo-line"></span>
                    <span class="logo-line"></span>
                    <span class="logo-line"></span>
                    </div>
                </div>
                <div class="about">
                    <h1 class="name">Robert Smith</h1>
                    <span class="position">Web Developer / Designer</span>
                    <address class="about-address">123 Street, 24058, Belgium, Brussels, Liutte 27, BE</address>
                    <div class="about-contacts">  
                    <a class="about-contacts__link" href="#">
                        <b>t</b>: (1800) 123 45678</a> |
                    <a class="about-contacts__link" href="#">
                        <b>e</b>: Robertsmith@gmail.com </a> |
                    <a class="about-contacts__link" href="#">
                        <b>w</b>: www.robertsmith.com</a>
                    </div>
                </div>
                <div class="experience">
                    <h2 class="heading heading_dark">
                    Experience
                    </h2>
                    <ul class="list">
                    <li class="list-item">
                        <h4 class="list-item__title">Hexogan Web Development Company</h4>
                        <span class="list-item__date">Jan 2016 - 0ct 2016</span>
                        <p class="list-item__text">Fleeing from the Cylon tyranny the last Battlestar – Galactica - leads a rag-tag fugitive fleet on a lonely quest - a shining planet known as Earth? Texas tea.</p>
                    </li>
                    <li class="list-item">
                        <h4 class="list-item__title">Hexogan Web Development Company</h4>
                        <span class="list-item__date">Jan 2016 - 0ct 2016</span>
                        <p class="list-item__text">Fleeing from the Cylon tyranny the last Battlestar – Galactica - leads a rag-tag fugitive fleet on a lonely quest - a shining planet known as Earth? Texas tea.</p>
                    </li>
                    <li class="list-item">
                        <h4 class="list-item__title">Hexogan Web Development Company</h4>
                        <span class="list-item__date">Jan 2016 - 0ct 2016</span>
                        <p class="list-item__text">Fleeing from the Cylon tyranny the last Battlestar – Galactica - leads a rag-tag fugitive fleet on a lonely quest - a shining planet known as Earth? Texas tea.</p>
                    </li>
                    </ul>
                </div>
                <div class="education">
                    <h2 class="heading heading_dark">
                    Education
                    </h2>
                    <ul class="list">
                    <li class="list-item list-item_non-border">
                        <h4 class="list-item__title">Hexogan Web Development Company</h4>
                        <span class="list-item__date">Jan 2016 - 0ct 2016</span>
                        <p class="list-item__text">Fleeing from the Cylon tyranny the last Battlestar – Galactica - leads a rag-tag fugitive fleet on a lonely quest - a shining planet known as Earth? Texas tea.</p>
                    </li>
                    </ul>
                </div>
                <div class="skills">
                    <h2 class="heading heading_dark heading_skills">
                    Skills
                    </h2>
                    <ul class="skills-list">
                    <li class="skills-list__item">
                        Wordpress
                        <div class="level level-80"></div>
                    </li>
                    <li class="skills-list__item">
                        HTML
                        <div class="level level-90"></div>
                    </li>
                    <li class="skills-list__item">
                        Photoshop
                        <div class="level level-50"></div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Cv1