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
		name:'David',
		image: 'images/david.jpg',
		bio: 'This is David'
	},
	{
		name:'Steven Hong',
		image: 'images/stevenh.jpg',
		bio: 'This is Steven Hong'
	},
	{
		name:'Emily Tang',
		image: 'images/emilyt.jpg',
		bio: 'This is Emily Tang'
	},
	{
		name:'Jonathan',
		image: 'images/jonathan.jpg',
		bio: 'This is Jonathan'
	},
	{
		name:'Steven Qian',
		image: 'images/stevenq.jpg',
		bio: 'This is Steven Qian'
	},
	{
		name:'Quentin',
		image: 'images/quentin.jpg',
		bio: 'This is Quentin'
	},
	{
		name:'Allen',
		image: 'images/allen.jpg',
		bio: 'This is Allen'
	},
	{
		name:'Emily Xie',
		image: 'images/emilyx.jpg',
		bio: 'This is Emily Xie'
	},
	{
		name:'Nghia',
		image: 'images/nghia.jpg',
		bio: 'This is Nghia'
	},
	{
		name:'Surya',
		image: 'images/surya.jpg',
		bio: 'This is Surya'
	},
	{
		name:'Shreyam',
		image: 'images/shreyam.jpg',
		bio: 'This is Shreyam'
	},
	{
		name:'Manu',
		image: 'images/manu.jpg',
		bio: 'This is Manu'
	},
	{
		name:'Aashna',
		image: 'images/aashna.jpg',
		bio: 'This is Aashna'
	}
];