App = Ember.Application.create();

App.Router.map(function() {
  this.route('about');
  this.resource('team', function() {
  	this.resource('member', {path: '/:name'});
  });
  this.route('contact');
  this.route('schedule');
  this.route('conference');
  this.route('overview', {path:"/conference/overview"});
  this.route('dates', {path:"/conference/dates"});
  this.route('questions', {path:"/conference/questions"});
  this.route('schedule', {path:"/conference/schedule"});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
App.TeamRoute = Ember.Route.extend({
	model: function() {
		return App.TEAM;
	}
});
App.MemberRoute = Ember.Route.extend({
	model:function(params) {
		return App.TEAM.findBy('name', params.name);
	}
});
App.TEAM = [
	{
		name:'David Jiang',
		image: 'images/david.jpg',
		bio: 'David is studying Computer Science with an emphasis on Human-Computer Interaction at Stanford University. In his free time, he loves to play basketball and sing.'
	},
	{
		name:'Andrew Khor',
		image: 'images/andrew.jpg',
		bio: 'Andrew Khor'
	},
	{
		name:'Steven Hong',
		image: 'images/stevenh.jpg',
		bio: 'This is Steven Hong'
	},
	{
		name:'Emily Tang',
		image: 'images/emilyt.jpg',
		bio: 'Emily is a sophomore from Taipei, Taiwan looking to double major in computer science and psychology. Outside of academics, Emily enjoys dancing in her hip hop group and playing violin in the Stanford Symphony Orchestra.'
	},
	{
		name:'Jonathan Yan',
		image: 'images/Jonathan.png',
		bio: 'Jonathan is a sophomore at Stanford studying computer science and product design.  He enjoys working with and learning from other people to solve problems.  Bike making and film photography are his latest obsessions.  '
	},
	{
		name:'Steven Qian',
		image: 'images/stevenq.jpg',
		bio: 'Sup, this is Steven. I am a cs major, bboy, and musician. This is my room, and this is my cactus.'
	},
	{
		name:'Calvin Ling',
		image: 'images/Calvin.jpg',
		bio: 'Calvin was born and raised in Austin, Texas. He is currently a sophomore majoring in Management Science and Engineering. He is a big fan of cars and traveling.'
	},
	{
		name:'Quentin',
		image: 'images/quentin.jpg',
		bio: 'This is Quentin'
	},
	{
		name:'Allen Yu',
		image: 'images/allen.jpg',
		bio: 'Allen wants to help promote global entrepreneurship. He loves to learn and his passion is combining computer science and business. When he is not drinking orange juice, Allen enjoys snowboarding, playing bridge, and going on adventures.'
	},
	{
		name:'Emily Xie',
		image: 'images/emilyxie.jpeg',
		bio: 'Emily is a freshman from Minnesota who is planning to major in Computer Science and minor in Economics. She likes to blog, learn new things, and work on various projects outside of school. Emily is currently learning more about web design and Javascript in her free time and hopes to be able to create well-designed web pages in the future.'
	},
	{
		name:'Nghia Nguyen',
		image: 'images/nghia.jpg',
		bio: 'Nghia is a freshman from Burlington, Vermont. He loves playing soccer and is on the club team at Stanford. He is also involved in SASE (Society of Asian Scientists & Engineers). He was born in Vietnam and moved the the United States at the age of 5. As a member of ASES, he hopes to integrate business and engineering at Stanford as well as follow his entrepreneurial passion.'
	},
	{
		name:'Surya Narayanan',
		image: 'images/surya.jpg',
		bio: 'My name is Surya Narayanan, currently I am a freshman at Stanford.  I have been involved in ASES since fall 2013. I am heavily interested in and involved in education and public service in south asia, specifically india.'
	},
	{
		name:'Shreyam Desai',
		image: 'images/shreyam.jpg',
		bio: 'Watup, I am Shreyam from Mumbai and I am currently a freshman at Stanford looking to major in Economics and minor in mathematical and computational science.  Prior to coming to the farm, I was heavily involved in Indian Development, particularly microcredit and sustainability, through entrepreneurship and hope to continue doing something meaningful at the farm. In my spare time I enjoy reading, deep conversations, tennis, smooth jazz, and the Mumbai monsoons'
	},
	{
		name:'Manu Chopra',
		image: 'images/manu.jpg',
		bio: "Manu Chopra is a freshman at Stanford University and a member of the Class of 2017. He invented and patented the anti molestation device in high school for which he was awarded by the Indian President. He is also the winner of India's most prestigious scholarship, Times Scholar. His aim in ASES is to meet entrepreneurs from a similar yet different background."
	},
	{
		name:'Alex',
		image: 'images/alex.jpg',
		bio: 'This is Alex'
	}
];