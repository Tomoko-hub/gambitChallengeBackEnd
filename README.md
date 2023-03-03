# gambitChallengeBackEnd
Gambit Challenges

Information on libraries and packages used
-npm : 8.5.0
-express : 4.18.2
-nodemon : 2.0.15
-mongoose : 6.5.0
-Mongo DB

-Thunder Client(API)

-Result values are stored in Mongo DB in the form of registration number(number), numerical value(number), and details(string).

-User info(User's name, email address and password.)

-Using Json Web Token (https://jwt.io/) for authentication.
-The authentication method is to verify  identity with user's e-mail address and password.

-The token is issued when the email address and password match those of a user who has logged in once. (If the user's information is available in the Mongo DB, the token will be issued if the email address and password match.)

-The token is valid for 23 hours after issuance.
