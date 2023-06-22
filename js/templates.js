// simple templates for elements common to several pages
// note every line of the html templates expressed as strings ends with \
// simplest way to do client side templating with broad browser support

function footer(footerID){
    // inject the standard footer html into the element with ID footerID

    footerHTML = "\
    	<img src='images/footer2019.png'>\
		<p>Maintained by Rebecca Cowley, Developed by Ricardo Domingues</p>\
	"

    document.getElementById(footerID).innerHTML = footerHTML
}

function nav(navID, currentID){
	// inject standard nav in to the element with ID navID
	// highlight the element with ID currentID

    navHTML = "\
		<div class='container'>\
			<table  id='headertable' border='0px' width='100%'>\
				<tr>\
					<td width=7% >\
						<a href='index.html'><img src='images/iquod_logo.png'></a>\
					</td>\
					<td width='65%' >\
						<a class='navbar-brand' style='margin-top: 20px; font-size:35px; color:#edebeb;' rel='home' href='index.html' title=' '>International Quality-controlled Ocean Database (IQuOD)</a>\
					</td>\
				</tr>\
				<tr>\
					<td colspan='2'>\
						<ul class='nav navbar-nav' style='margin-top:4px;'>\
							<li id='home'><a id='homelink' href='index.html'>Home</a></li>\
							<li id='about'><a id='aboutlink' href='about.html'>About us</a></li>\
							<li id='news'><a id='newslink' href='news.html'>News</a></li>\
							<li id='docs'><a id='docslink' href='documents.html'>Documents and Progress reports</a></li>\
							<li id='pubs'><a id='pubslink' href='publications.html'>IQuOD Publications</a></li>\
							<li id='specs'><a id='specslink' href='specifications.html'>IQuOD Specifications</a></li>\
							<li id='links'><a id='linkslink' href='links.html'>Links</a></li>\
                            <li id='contactus'><a id='contactlink' href='contactus.html'>Contact</a></li>\
						</ul>\
					</td>\
				</tr>\
			</table>\
		</div>\
	"

	document.getElementById(navID).innerHTML = navHTML
	document.getElementById(currentID).style = 'background-color:#428bca'
	document.getElementById(currentID+'link').style = 'color:#000000' 
}
