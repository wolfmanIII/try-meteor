Router.map(function () {
	this.route('login', {
		path: '/login',
		template: 'login',
		layoutTemplate: 'layout',
		before: function() {
			if ( Meteor.user() ) {
				this.redirect('profile');
			}
		},
		after: function () {
			document.title = "Login";
		}
	});

	this.route('logout', {
		path: '/logout',
		template: 'logout',
		layoutTemplate: 'layout',
        before: function() {
			Meteor.logout();
		},
		after: function () {
			document.title = "Logout";
		}
	});

	this.route('profile', {
		path: '/profile',
        template: 'profile',
		layoutTemplate: 'layout2col',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		before: function() {
			if ( !Meteor.user() ) {
				this.redirect("login")
			}
		},
		after: function () {
			document.title = "Profile";
		}
	});

});