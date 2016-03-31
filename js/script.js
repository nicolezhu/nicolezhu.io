// tabletop
var spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1zmfoTcFIxDtF_QHff5WzYkiSVp1Aq3fzBFVe5vDiUIw/pubhtml';
var talks_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Hqhkn6tLeKT_eVHoYwuZofzVh2WrxSAa6-pcP9Z-CHY/pubhtml';
function init() {
		Tabletop.init({ 
            key: spreadsheet_url,
            callback: readData,
            simpleSheet: false 
        });
	}

// read data
var projects, talks;
function readData(data, tabletop) { 
	projects = data.Work.elements;
    talks = data.Talks.elements;
    console.log(projects);
	showWorkGrid();
    showTalksGrid();
}

function showWorkGrid() {
	for (i=0; i < projects.length; i++) {
		$('#work-grid').append('<div class="item"><div class="element-top"><a href="'+ projects[i].link + '"><img src="' + projects[i].screenshot + '" /></a><div class="details"><h4>' + projects[i].project + '</h4><p class="org"><strong>' + projects[i].organization + '</strong></p><p class="description">' + projects[i].description + '</p></div></div></div>');
	}
}

function showTalksGrid() {
    for (i=0; i < talks.length; i++) {
        $('#talks-grid').append('<div class="item"><div class="element-top"><a href="'+ talks[i].link + '"><img src="' + talks[i].screenshot + '" /></a><div class="details"><h4>' + talks[i].talk + '</h4><p class="org"><strong>' + talks[i].purpose + '</strong></p><p class="description">' + talks[i].description + '</p></div></div></div>');
    }
}

$(document).ready(function() {
	// sticky nav
	var mn = $(".main-nav");
    mns = "main-nav-scrolled";
    var sticky_navigation_offset_top = $('.main-nav').offset().top;

	$(window).scroll(function() {
	  if( $(this).scrollTop() > sticky_navigation_offset_top ) {
	    mn.addClass(mns);
	  } else {
	    mn.removeClass(mns);
	  }
	});

    // navigation
    var scrollToSection = function(section) {
        var sticky_nav = $('.main-nav').outerHeight();
        $('html, body').animate({ scrollTop: $(section).offset().top - sticky_nav }, 800);
    }

    $("#nav-about").click(function() {
        scrollToSection('.about');
    });

    $("#nav-work").click(function() {
        scrollToSection('.work');
    });

    $("#nav-writing").click(function() {
        scrollToSection('.writing');
    });

    $("#nav-talks").click(function() {
        scrollToSection('.talks');
    });

    $("#nav-contact").click(function() {
        scrollToSection('.contact');
    });

	init();
});