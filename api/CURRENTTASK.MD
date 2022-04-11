Currently, we're trying to give users of the website, the ability to create a new account.
Some things to consider:
-preventing the same email from being used
-

At the moment:
-I have signup basics done, we'll add additional features once we get token auth completed.
-I think now might be a good time to implement token auth, let's work on that next.

Features to implement later:
-Check for existing user and email address before creating new user.
-Let's mess with permissions at a later date.

for user authentication, I will be using the following to somewhat help:
https://dev.to/koladev/django-rest-authentication-cmh

TOKENS:
-We know there are two types of tokens: one that you get initially and one that you get when your old one expires.