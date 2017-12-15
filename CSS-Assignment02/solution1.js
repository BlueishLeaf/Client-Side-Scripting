//NOTE: The vast majority of the css in this assignment was done using the css() function

$(document).ready(function(){
    //Call ajax function to fetch json from website, then call parseData()
    $("#populateBtn").click(function() {
        $.ajax({
            type:"GET",
            url:"https://www.jasonbase.com/things/e22D.json",
            success: function(data) {
                parseData(data);
                styleData();
            },
            error:function () {
                alert("Error fetching json data!")
            },
            dataType: 'json'
        });

    });

    //When mouse enters the first anchor link in an unorganised link, change the css
    $("ul a:nth-child(1)").mouseenter(function() {
        $(this).css("background-color", "#283fc5").css("opacity", "0.6").html("www.kattis.com");
    });

    //Animation that triggers when you click the image of the person
    $("#person").click(function() {
        $(this).animate({
            height: '70%',
            width: '70%'
        },1000,function(){
            $(this).css("transform","rotate(180deg)").fadeOut(2000);
        });
    });

    //On mouse enter in the slide-show, style the headings
    $(".carousel-inner .item").mouseenter(function () {
        alert("Styling Headings!...");
        styleText('h1');
        styleText('h2');
        styleText('h3');

    });

    //When you mouse out of the list items in an unorganised list, change the css
    $("ul > li").mouseout(function() {
        $(this).css("background-color","#ff1a8c").css("color","#ffe6f2").css("font","30px Arial");
    });

    //When sibling paragraph is clicked, change the position of the list
    $("p + p").click(function() {
        var x = document.getElementsByTagName("ul");
        $("ul").slideUp('slow', function(){
            $("p:eq(3)").after(x);
            $("ul").slideDown();
        });
    });

    //Increase size of the paragraphs that are siblings to h3 on mouse over
    $("h3 + p").mouseover(function() {
        animateText(this,"20px","0.6",1500);
    });

    //When any of the cards are double-clicked, animate them and slide them up
    $(".card").dblclick(function() {
        $(this).css("transform","rotate(180deg)");
        slideCard(this);
    });

    //When the header is double-clicked, clone the list underneath it
    $("header").dblclick(function() {
        $("ul > li").clone(true).appendTo(this);
    });

    //Function for adding a new work experience item on button click
    $("#addWorkBtn").click(function() {
        var newDiv = document.createElement("div");
        document.getElementById("workExp").appendChild(newDiv);
        var newForm = document.createElement("form");
        newDiv.appendChild(newForm);
        //Create work experience form
        $(newForm).html("<form id='wrkForm'><fieldset><legend>Job Details</legend><label for='jobTitle'>Job</label><input id='jobTitle' type='text'/><label for='dates'>Dates</label><input id='dates' type='text'/><label for='description'>Description</label><br><textarea id='description'></textarea><br><input type='button' id='submitWork' value='Submit'/></fieldset></form>");
        styleForm();
        var response = prompt("Disable typing in text box? (y/n)");
        //Disable text input if the user enters 'y'
        $("input").focus(function(){
            if(response==="y"){
                $(this).blur();
            }

        });
        //Submit the form, call function to create the item
        $("#submitWork").click(function () {
            var jobval = document.getElementById("jobTitle").value;
            var dates = document.getElementById("dates").value;
            var desc = document.getElementById("description").value;
            createWorkExp(jobval,dates,desc);
            $(newDiv).remove();
        })
    });

    //Toggles collapse on all cards when the following button is clicked
    $("#toggleCollapseBtn").click(function() {
        $(".card").css("transform","rotate(360deg)");
        slideCard(".card");
    });

    //Replace the whole footer with the following heading on mouse out
    $("footer").mouseout(function() {
        $(this).replaceWith("<h1>The footer has been replaced with this text!</h1>");
        $(this).css("font","20px Arial").css("text-align","center");
    });

    //Function to create new work experience item
    function createWorkExp(jobTitle,workDates,jobDescription){
        var newDiv = document.createElement("div");
        $(newDiv).addClass("class","work-experience");
        document.getElementById("workExp").appendChild(newDiv);
        $(newDiv).html("<small id='date' class='date'></small><h3 id='title' class=\"h5 date-title\"></h3>\n<p id='desc'></p>");
        $("#date").text(workDates);
        $("#title").text(jobTitle);
        $("#desc").text(jobDescription);

    }

    //Function to animate text based on its arguments
    function animateText(context,x,y,speed) {
        $(context).animate({
            fontSize: x,
            opacity: y
        },speed);
    }

    //Function to style whatever element is passed into it
    function styleText(context){
        $(context).css("font-family","Times New Roman").css("font-style","oblique").css("text-decoration","underline").prepend("Prepended Text! : ");
    }

    //Function to toggle slide any element passed into it
    function slideCard(context){
        $(context).slideToggle(1500);
    }

    //Function to create the html for each json object
    function parseData(data){
         for (var x=0;x<10;x++){
             $('#ajaxBlock').append("<div class='ajaxInnerBlock'><h3>" + data.weapons[x].name + "</h3><p>Damage : " + data.weapons[x].damage.min + "-" + data.weapons[x].damage.max +"<br>Price : "+ data.weapons[x].price + "GP</p></div>");
         }
    }

    //Function to style the json data
    function styleData(){
        $(".ajaxInnerBlock").css("border","3px solid #ff1a1a").css("border-radius","10px").css("margin","10px");
        $(".ajaxInnerBlock h3").css("font","40px Arial").css("text-shadow","2px 2px #ff5050" ).css("text-transform","capitalize").css("text-align","center");
        $(".ajaxInnerBlock p").css("opacity","0.8").css("color","#ff1a1a").css("letter-spacing","2px").css("font-weight","bold").css("margin-left","10px").css("margin-right","10px").css("font-size","20px");
    }

    //Function to style the work experience form
    function styleForm(){
        $('form fieldset input[type=text]').css("width","100%").css("display","inline-block");
        $('form fieldset input[type=textarea]').css("width","200em").css("height","4em");
        $('form fieldset input[type=button]').css("width","100%");

    }

});