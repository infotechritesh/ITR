// Javascript





// BTN Click Show More Project's

// Nav Active Bar

// Home Page Display 
function home() {
    document.getElementById('main').style.display = 'block';
    document.getElementById('btn').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('blogs').style.display = 'none';
    document.getElementById('title').innerHTML = 'Home | InfoTech Ritesh';
    document.getElementById('con-page').style.display = 'none';
    document.getElementById('con-ul').style.display = 'block';
    document.getElementById('allsub').style.display = 'none';
}

// Contact Section Display 

function cnt() {
    document.getElementById('contact').style.display = 'block';
    document.getElementById('main').style.display = 'none';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('blogs').style.display = 'none';
    document.getElementById('title').innerHTML = 'Contact | InfoTech Ritesh';
    document.getElementById('con-page').innerHTML = 'My Social Contact ! ';
    document.getElementById('con-ul').style.display = 'none';
    document.getElementById('allsub').style.display = 'none';
}

// Blogs Diplay
function bg() {
    document.getElementById('blogs').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('title').innerHTML = 'Blogs | InfoTech Ritesh';
    document.getElementById('con-page').innerHTML = 'My Blogs ';
    document.getElementById('con-page').style.display = 'block';
    document.getElementById('con-ul').style.display = 'none';
    document.getElementById('allsub').style.display = 'none';
}

// ALL Subject Introduction & Projects 
function jssub() {
    document.getElementById('allsub').style.display = 'block';
    // Change
    document.getElementById('subject-title').innerHTML = ' Javascript ';
    document.getElementById('h-sub').innerHTML = ' JavaScript';
    document.getElementById('sub-descri').innerHTML = 'JavaScript is a versatile and dynamic programming language that has played a pivotal role in shaping the modern web. It is an essential tool for web developers and is responsible for adding interactivity, functionality, and dynamic content to websites. In this essay, we will explore the history, features, importance, and future of JavaScript in the world of web development.';
    document.getElementById('sub-descri-history').innerHTML = 'JavaScript was created by Brendan Eich in just ten days in 1995 while he was working at Netscape Communications Corporation. Originally called "Mocha" and later "LiveScript," it was eventually renamed JavaScript as part of a partnership with Sun Microsystems. This naming decision was somewhat misleading, as JavaScript shares only a superficial similarity with the Java programming language.  JavaScript quickly gained popularity due to its ability to run in web browsers, making it the first widely adopted client-side scripting language. This enabled developers to create interactive web pages and respond to user actions without relying solely on server-side processing..';
    document.getElementById('sub-descri-conclusion').innerHTML = 'JavaScript has played a pivotal role in shaping the modern web by enabling interactivity, responsiveness, and dynamic content. It has evolved from a simple scripting language into a versatile tool for web developers, powering everything from simple web pages to complex single-page applications and server-side development. As JavaScript continues to evolve and adapt to the changing needs of the web, it remains an essential language for anyone involved in web development, and its importance is unlikely to diminish in the foreseeable future.';
    // Other
    document.getElementById('blogs').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('title').innerHTML = 'JS | InfoTech Ritesh';
    document.getElementById('con-page').innerHTML = ' Javascript ';
    document.getElementById('con-page').style.display = 'none';
    document.getElementById('con-ul').style.display = 'block';
}
function pysub() {
    document.getElementById('allsub').style.display = 'block';
    // Change
    document.getElementById('subject-title').innerHTML = 'Python Programming ';
    document.getElementById('h-sub').innerHTML = ' Python programming ';
    document.getElementById('sub-descri').innerHTML = 'Python is a dynamic and versatile programming language that has gained immense popularity and widespread adoption across various domains of computer science, data analysis, web development, and more. Known for its simplicity and readability, Python has become a favorite choice for both beginners and experienced developers. In this essay, we will explore the history, key features, significance, and future trends of Python programming.';
    document.getElementById('sub-descri-history').innerHTML = 'Python was created by Guido van Rossum and first released in 1991. Guidos aim was to design a language that emphasized code readability and offered a clear, straightforward way to express concepts in fewer lines of code compared to other programming languages. Pythons name was inspired by the British comedy group Monty Python, highlighting its playful and approachable nature';
    document.getElementById('sub-descri-conclusion').innerHTML = 'Pythons rise to prominence in the world of programming is a testament to its simplicity, versatility, and community support. Whether you are a beginner looking to learn programming or an experienced developer tackling complex tasks, Python offers a welcoming and efficient environment. As Python continues to evolve and adapt to emerging technologies, it will likely remain a dominant force in the software development landscape for years to come.';
    // Other
    document.getElementById('blogs').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('title').innerHTML = 'Python | InfoTech Ritesh';
    document.getElementById('con-page').innerHTML = ' Javascript ';
    document.getElementById('con-page').style.display = 'none';
    document.getElementById('con-ul').style.display = 'block';
}

function csssub() {
    document.getElementById('allsub').style.display = 'block';
    // Change
    document.getElementById('subject-title').innerHTML = ' CSS ( Cascading Style Sheets )';
    document.getElementById('h-sub').innerHTML = ' CSS ';
    document.getElementById('sub-descri').innerHTML = 'Cascading Style Sheets, commonly known as CSS, are a fundamental technology that defines the visual presentation of web pages. It is a cornerstone of web development, responsible for styling and layout, making web content not just functional but also visually appealing. In this essay, we will explore the history, core concepts, significance, and future trends of CSS in the world of web design.';
    document.getElementById('sub-descri-history').innerHTML = 'CSS was first proposed in 1994 by Håkon Wium Lie, who worked at CERN, the European physics research center. The concept gained momentum, and by 1996, CSS1 was introduced as a formal specification by the World Wide Web Consortium (W3C). CSS1 enabled developers to separate the structure (HTML) from the presentation (CSS) of web content, fostering greater design flexibility.';
    document.getElementById('sub-descri-conclusion').innerHTML = 'Cascading Style Sheets (CSS) are an integral part of web development, responsible for the visual presentation and aesthetics of web content. Its ability to separate structure from presentation, ensure consistency, and adapt to different devices and user preferences makes it a crucial technology in modern web design. As web technologies continue to evolve, CSS will likely remain at the forefront, enabling designers and developers to create visually stunning and responsive web experiences.    ';
    // Other
    document.getElementById('blogs').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('title').innerHTML = 'CSS | InfoTech Ritesh';
    document.getElementById('con-page').innerHTML = ' Javascript ';
    document.getElementById('con-page').style.display = 'none';
    document.getElementById('con-ul').style.display = 'block';
}

function htmlsub() {
    document.getElementById('allsub').style.display = 'block';
    // Impletation For Content Chnage For Subject wise .. 
    document.getElementById('subject-title').innerHTML = 'HTML (Hypertext Markup Language)';
    document.getElementById('h-sub').innerHTML = ' H T M L';
    document.getElementById('sub-descri').innerHTML = 'HTML, short for Hypertext Markup Language, is the foundational language of the World Wide Web. It is the backbone upon which websites and web applications are built, providing the structure and content that users interact with. In this essay, we will explore the history, structure, key elements, and the significance of HTML in modern web development.';
    document.getElementById('sub-descri-history').innerHTML = 'HTML was first conceived by Tim Berners-Lee, a British computer scientist, in the late 1980s while he was working at CERN, the European physics research center. The first version of HTML, HTML 1.0, was released in 1993, and it served as a simple markup language for creating and linking documents. Over the years, HTML has undergone several revisions and updates, with HTML5 being the latest major version as of my last knowledge update in September 2021.';
    document.getElementById('sub-descri-conclusion').innerHTML = 'HTML is the cornerstone of the World Wide Web, providing the structure and foundation for web content. It has come a long way since its inception and remains a vital language for web development. Its semantic elements, multimedia support, and adaptability to new technologies ensure that HTML will continue to play a central role in shaping the webs future, making it an essential skill for anyone involved in web design and development    ';
    // Other
    document.getElementById('blogs').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('title').innerHTML = 'H T M L | InfoTech Ritesh';
    document.getElementById('con-page').innerHTML = ' Javascript ';
    document.getElementById('con-page').style.display = 'none';
    document.getElementById('con-ul').style.display = 'block';
}

// Change Sub - Projects Card Images Change 


// JavaScript function to change the card's image
// JavaScript function to change the card's image
function changeImage() {
    var cardImage = document.getElementById('cardImage');
    if (cardImage.src.endsWith('images/html/html1.png')) {
        cardImage.src = 'images/html/html5.png'; // Change to your second image source
        cardImage.alt = 'Card Image 2'; // Change to your second image alt text
    }
    else {
        cardImage.src = 'images/html/html1.png'; // Change to your first image source
        cardImage.alt = 'Card Image 1'; // Change to your first image alt text
    }
}

