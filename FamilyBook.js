var images=[
    "Indraneel Mandal.png",
    "Jyoti Mandal.jpg",
    "Hirak K. Mandal.jpg",
    "Madhabi Mandal.jpg",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    ];
    function flipimage(){
    document.getElementById("img1").src="Indraneel Mandal.png"
    }
    var i=0;
    function next_image(){
    document.getElementById("img1").src=images[i];
    document.getElementById("reason_text").innerHTML=reasons[i];
    i++;
    }