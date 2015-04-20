app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Soccer Stadiums in the MLS'; 
  $scope.products = [
  	{ 
    	name: 'Avaya Stadium', 
    	opened: 2015, 
    	team: "San Jose",
      capacity: 18000,
    	cover: 'http://img.sfbay.ca/home/wp-content/uploads/2015/02/150228_GalaxyEarthquakes0085_bay109-845x563.jpg',
    	likes: 0,
    	dislikes: 0
  	},
    { 
      name: 'BBVA Compass Stadium', 
      opened: 2012, 
      team: "Houston",
      capacity: 22039,
      cover: 'http://www.mlssoccer.com/sites/league/files/imagecache/620x350/image_nodes/2012/05/bbva_0.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'BC Place', 
      opened: 1983, 
      team: "Vancouver Whitecaps FC",
      capacity: 22500,
      cover: 'http://media-cdn.tripadvisor.com/media/photo-s/02/89/ca/46/bc-place-is-home-to-major.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'BMO Field', 
      opened: 2007, 
      team: "Toronto FC",
      capacity: 30000,
      cover: 'https://static.bmosoccer.com/images/BMO-field.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'CenturyLink Field', 
      opened: 2009, 
      team: "Seattle Sounders FC",
      capacity: 40000,
      cover: 'http://mls.mp7.seattle.prod.s3.amazonaws.com/elfinderimages/2014/matchday/stadium.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Citrus Bowl', 
      opened: 2015, 
      team: "Orlando City SC",
      capacity: 19500,
      cover: 'http://www.trbimg.com/img-54fe0a2b/turbine/os-pictures-orlando-city-soccer-fans-20150308-102/500/500x281',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Dick\s Sporting Goods Park', 
      opened: 2007, 
      team: "Colorado Rapids",
      capacity: 18086,
      cover: 'http://www.dickssportinggoodspark.com/media/3821/dsgp-panoramic-603x203.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Gillette Stadium', 
      opened: 2002, 
      team: "New England Revolution",
      capacity: 20000,
      cover: 'http://nesoccerjournal.com/news/pros/2013/photos/brazil_kickoff_640.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Mapfre Stadium', 
      opened: 1999, 
      team: "Columbus Crew SC",
      capacity: 20145,
      cover: 'http://4.bp.blogspot.com/-34yKdxd4VRA/T0fQA-qD2dI/AAAAAAAAAT0/ubsfAFNUupI/s640/crew_slide.png',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'PPL Park', 
      opened: 2010, 
      team: "Philadelphia Union",
      capacity: 18500,
      cover: 'http://www.yanksarecoming.com/wp-content/uploads/2010/10/PPL_Park.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Providence Park', 
      opened: 2011, 
      team: "Portland Timbers",
      capacity: 20438,
      cover: 'http://www.mlssoccer.com/sites/league/files/imagecache/620x350/image_nodes/2012/09/timbers-army.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'RFK Stadium', 
      opened: 1996, 
      team: "DC United",
      capacity: 20000,
      cover: 'http://www.stadiumguide.com/wp-content/uploads/rfkstadium_front.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'RedBull Arena', 
      opened: 2010, 
      team: "New York Red Bulls",
      capacity: 25000,
      cover: 'http://www.newyorkredbulls.com/sites/newyork/files/imagecache/620x350/image_nodes/2013/03/arena_image_620x350.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Rio Tinto Stadium', 
      opened: 2008, 
      team: "Real Salt Lake",
      capacity: 20213,
      cover: 'https://newd7000user.files.wordpress.com/2012/08/rio-tinto-stadium-sunset-panorama-july-21-2012.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Saputo Stadium', 
      opened: 2012, 
      team: "Montreal Impact",
      capacity: 20801,
      cover: 'http://www.impactmontreal.com/sites/montreal/files/imagecache/620x350/image_nodes/2012/08/StadeSaputo_MTLvCLB_620x350.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Sporting Park', 
      opened: 2011, 
      team: "Sporting Kansas City",
      capacity: 18467,
      cover: 'http://populous.com/wp-content/uploads/2012/02/LIVESTRONGSportingPark-KansasCity-InteriorSeating-990x465.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Stub Hub Center', 
      opened: 2003, 
      team: "Los Angeles Galaxy",
      capacity: 27000,
      cover: 'http://upload.wikimedia.org/wikipedia/commons/7/7f/LA_Galaxy_vs_Houston_Dynamo-_Western_Conference_Finals_panorama.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Toyota Park', 
      opened: 2006, 
      team: "Chicago Fire",
      capacity: 20000,
      cover: 'http://upload.wikimedia.org/wikipedia/commons/4/45/Toyota_Park,_9_March_2013.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Toyota Stadium', 
      opened: 2005, 
      team: "FC Dallas",
      capacity: 20500,
      cover: 'http://www.sbisoccer.com/images/2013/09/PizzaHutParkFCDallas1-FriscoStyle.jpg',
      likes: 0,
      dislikes: 0
    },
    { 
      name: 'Yankee Stadium', 
      opened: 2015, 
      team: "New York City FC",
      capacity: 27470,
      cover: 'http://www.mlssoccer.com/sites/league/files/imagecache/620x350/image_nodes/2014/04/yankee-stadium-soccer.jpg',
      likes: 0,
      dislikes: 0
    }

  	
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
	$scope.minusOne= function(index) { 
  	$scope.products[index].dislikes += 1; 
	};
}]);