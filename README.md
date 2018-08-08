**Instructions**
This is a Node.js, Express Application.  
The functionality of the application is to search a list of friends for a person with closest matching profile as the applicant. 
Applicant should enter his/her name, Image URL, and also should select answers to 10 questions. 
At the end of the survey click a submit button and the app resturns with a Match (Name of the Person anf a picture.
Also adds the applicant's name to the existing list. 
Development
The FriendsFinder App is a NodeJS, Express application. This app has the following file structure
*************************************************************************************************
Root(FriendsFinder)
    |
    README
    .gitIgnore
    package.JSON
    package-lock.JSON
    node_modules
    app
        |
        data
            |
            images
                |
                imagesfile(.jpg)
            friends.js
        public
            |
            index.html
            survey.html
        routing
            |
            apiRoutes.js
            htmlRoutes.js
    server.js
*************************************************************************************************
server.js contains dependencies like, "path", "express", "body-parser"
frinds.js contains an array object of all the existing list of friends and their profile charactersistics.
images folder contains all the friend's image jpg
htmlRouts.js cintaints all the Routes for the Home page and Survey Page
apiRoutes.js contains all teh api routes.
index.html is the home page with Header and Selection button
survey.html is a form input and survey questions and a submit button

        ![](https://github.com/JPillai2018/NodeJSMySQL/blob/master/assets/images/Customer-1.PNG)
        ![](https://github.com/JPillai2018/NodeJSMySQL/blob/master/assets/images/Customer-2.PNG)
        ![](https://github.com/JPillai2018/NodeJSMySQL/blob/master/assets/images/Customer-3.PNG)
        If incorrect Item code is entered a validation message will be displayed
        ![](https://github.com/JPillai2018/NodeJSMySQL/blob/master/assets/images/Customer-4.PNG)
        ![](https://github.com/JPillai2018/NodeJSMySQL/blob/master/assets/images/Customer-5.PNG)
        ![](https://github.com/JPillai2018/NodeJSMySQL/blob/master/assets/images/Customer-6.PNG)
