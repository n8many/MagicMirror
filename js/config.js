var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: secrets.loc,
            units: 'imperial', //#MURICAH
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: secrets.appid
        }
    },
    compliments: {
        interval: 50000,
        fadeInterval: 4000,
        morning: [
            'Good morning.',
            'Get out of bed.'
        ],
        afternoon: [
            'Good afternoon.'
        ],
        evening: [
            'Good evening.',
            'Be productive.'
        ],
        night: [
            'Good night.',
            'Go to bed.',
            'Go the fuck to sleep!'
        ]
    },
    calendar: {
        maximumEntries: 10, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		{//Main
			symbol: 'fa-home', 
			url: secrets.cals.cal0,
		},
		{//School
			symbol: 'fa-institution',
			url: secrets.cals.cal1,
		},
		{//Work
			symbol: 'fa-wrench',
			url: secrets.cals.cal2,
		},
		{//Exams
			symbol: 'fa-exclamation-triangle',
			url: secrets.cals.cal3,
		},
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		]
    },
    news: {
        feed: 'http://rss.cnn.com/rss/cnn_tech.rss'
    }
}
