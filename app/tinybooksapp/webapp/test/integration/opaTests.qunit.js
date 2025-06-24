sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/test/tinybooksapp/test/integration/FirstJourney',
		'sap/test/tinybooksapp/test/integration/pages/BooksList',
		'sap/test/tinybooksapp/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/test/tinybooksapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);