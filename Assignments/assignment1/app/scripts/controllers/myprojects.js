'use strict';

angular.module('assignment1App')
  .controller('MyprojectsCtrl', function ($scope, $firebase) {
    console.log('firebase connect running');
    // tutorial page
    // https://www.firebase.com/quickstart/angularjs.html
    var peopleRef = new Firebase("http://personalproj.firebaseIO.com");
    // Automatically syncs everywhere inrealtime
    $scope.people = $firebase(peopleRef);

    // console.log($scope);
    console.log($scope.people);



    $scope.projects =[
    	{'projectName': 'Protozone',
    	 'projectGitLink': 'https://github.com/hughybarra/GroupProject',
    	 'projectAbout': 'This was a fun group project where we built a simple shooter video game. My team consisted of Henrique Balaroni, Bisike Nadi, Hugh Ybarra, and Matt Antonio. All of u
         us together created the simple game. The game is coded in action script using several free to use libraries. Starling was the primary powerhouse behind the scenes. PDParticle system
         was another tool used to help create the particle effects. ',
    	 'projectImage': 'path to image',
    	 'id': '001'
    	},
    	{'projectName': 'Cupcake Factory',
    	 'projectGitLink': 'https://github.com/hughybarra/asl_cupcakes',
    	 'projectAbout': 'This was a group project for Advanced server side languages. Together our team made a fun simple ecomm site for selling cupcakes. The purpose
         of this project was to teach us how to use Fuel PHP',
    	 'projectImage': 'path to image',
    	 'id': '002'
    	},
    	{'projectName': 'Weather API',
    	 'projectGitLink': 'https://github.com/hughybarra/WeatherAPI',
    	 'projectAbout': 'Last week I had a job interview and bascially the company wanted me to build this weather api. I was unable to complete the task in their offices in the alloted time, so I decided to build this online to practice.
          Basically I was getting stuck on the XML and JSon parsing. I was a bit rusty but I feel a lot more confident now.
          This is the first of many little projects taht I will be buildling. Just thought I would throw it up here.',
    	 'projectImage': 'path to image',
    	 'id': '003'
    	},
    	{'projectName': 'Streaming Media / Live Chat',
    	 'projectGitLink': 'https://github.com/hughybarra/hYbarraSMS/tree/master/assignment',
    	 'projectAbout': 'This was a project for Streaming media servers class. The project consited of building a custom video player and controls, streaming a video, and then
         implementing a live chat using Firebase as a back end',
    	 'projectImage': 'path to image',
    	 'id': '004'
    	},
    	{'projectName': 'This Project',
    	 'projectGitLink': 'git link',
    	 'projectAbout': 'about project',
    	 'projectImage': 'path to image',
    	 'id': '005'
    	},
    	{'projectName': 'project name',
    	 'projectGitLink': 'git link',
    	 'projectAbout': 'about project',
    	 'projectImage': 'path to image',
    	 'id': '006'
    	}
    ];
  });
