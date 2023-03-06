# gambitChallengeBackEnd
Gambit Challenges

Information on libraries and packages used
-npm : 8.5.0
-express : 4.18.2
-nodemon : 2.0.15
-mongoose : 6.5.0
-Mongo DB

-Thunder Client(API)

-This application has using two schema(Result schema and User schema), MONGO DB is used for data storage.
     -Result Schema : user can save "Result" three proparty [register, result, description]
      Note: User can save results one by one, but not several results at once.
     -User Schema : user can save user's data  [username, email, password]
     
-Use Json Web Token (https://jwt.io/) for authentication.

-The authentication method is to verify identity with user's e-mail address and password.

-The token is issued when the email address and password match those of a user who has logged in once. (If the user's information is available in the Mongo DB, the token will be issued if the email address and password match.)

-The token is valid for 23 hours after issuance.

-Render(deploy)Because I use the free version, page loading, etc., might be slow.
https://tomoko-gambitchallengebackend.onrender.com/
