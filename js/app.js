(function(){
	var app = angular.module("site", ['ngRoute']);

	app.controller("headerController", function(){
		this.headerLinks = links;
	})

	app.controller("infoController", function(){
		this.testimonials = quotes;
		this.photos = images;
	})

	app.controller("PanelController", function(){
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		}; 
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}
	})

	var links = [
		{
			type: "logo",
			content: "Hayley's Happy Healthy Hounds",
			url: "index.html",
		},
		{
			type: "tagline",
			content: "Experienced Dunedin Dog Walking Services",
			url: "index.html",
		},
		{
			type: "navHome",
			content: "Home",
			url: "index.html",
		},
		{
			type: "navAbout",
			content: "About",
			url: "about.html",
		},
		{
			type: "navContact",
			content: "Contact",
			url: "#contact",
		}
	]

	// Testimonials for Hayley's services
	var quotes = [
		{
			owner: "John",
			puppy: "Patches",
			said: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ducimus, blanditiis corrupti voluptatibus commodi sequi. Deserunt aliquam repudiandae culpa, quo neque officiis vel expedita! Modi doloremque, consequatur animi sint.",
			location: "Dunedin",
		},
		{
			owner: "Jess",
			puppy: "Princess",
			said: "Aut deleniti adipisci quidem, iste inventore, nisi rerum mollitia doloremque iure modi, placeat laborum accusamus veniam consequatur earum consectetur dolore at fugiat vitae. Voluptatem ex molestiae, voluptas, praesentium magnam ratione laborum quaerat ab expedita eius numquam tenetur officiis vero id? Amet iure quidem veniam rerum, nisi, perspiciatis harum. Neque, explicabo!",
			location: "North-East Valley",
		},
		{
			owner: "Jerome",
			puppy: "Pickle",
			said: "Laudantium praesentium similique obcaecati nesciunt facilis doloremque, expedita ducimus, cupiditate dolorum tenetur! Recusandae eveniet nulla quam, voluptatibus doloremque voluptatem pariatur odio ipsum repellat deserunt atque corporis doloribus, eos, ut assumenda quisquam rerum molestias impedit facilis temporibus sunt!",
			location: "South Dunedin",
		},
		{
			owner: "Jackie",
			puppy: "Piglet",
			said: "Dignissimos, aut, repellat. Optio, laboriosam! Est ipsa nisi accusamus pariatur nobis voluptate doloremque.",
			location: "St Kilda",
		},
		{
			owner: "Joshua",
			puppy: "Pip",
			said: "Sint corporis nisi autem quia. Qui unde temporibus quibusdam, adipisci repudiandae mollitia officia nulla nesciunt veritatis in aliquam fugit facere eum quasi dolor cumque exercitationem odio beatae blanditiis iusto sapiente laborum, quis est velit tempore.",
			location: "Mornington",
		}
	]

	// Photos from Hayley's walks
	var images = [
		{
			url: 'images/walk1.jpg',
			alt: 'Odin and Padfoot' 
		},
		{
			url: 'images/walk2.jpg',
			alt: 'Padfoot in the snow' 
		},
		{
			url: 'images/walk3.jpg',
			alt: 'Beatiful south' 
		}
	]

})();

