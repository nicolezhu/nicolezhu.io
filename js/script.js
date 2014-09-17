// tabletop
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1zmfoTcFIxDtF_QHff5WzYkiSVp1Aq3fzBFVe5vDiUIw/pubhtml';
function init() {
		Tabletop.init( { key: public_spreadsheet_url,
                   callback: readData,
                   simpleSheet: true } )
	}

// read data
var projects;
function readData(data, tabletop) { 
	projects = data;
	console.log(projects);
	showGrid();
}

function showGrid() {
	for (i=0; i < projects.length; i++) {
		$('.grid').append('<div class="item"><div class="element-top"><a href="'+ projects[i].link + '"><img src="' + projects[i].screenshot + '" /></a><div class="details"><h4>' + projects[i].project + '</h4><p class="org"><strong>' + projects[i].organization + '</strong></p><p class="description">' + projects[i].description + '</p></div></div></div>');
	}
}

function scrollTo(section) {
	var sticky_nav = $('.main-nav').outerHeight();
  $('html,body').animate({scrollTop: $(section).offset().top - sticky_nav}, 800);
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

	init();
});