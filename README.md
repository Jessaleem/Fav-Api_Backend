# Fav-Api_Backend
Jessaleem/Jessaleem-Fav-Api_Backend

Fav-Api_Backend is a mission in wich I had to create an API that allows to provide a better way to organize people's favorite things like clothes, music, courses, etc.

considerations:

url: '//localhost:8080'
script to run: npm run dev

1. Each user has an unique id. 
You can create your acount with your email and password with a 'POST' method in the `/api/users` route, 
{
    "email": "test@mail.com",
    "password": "PasswordTest01"
}
Make sure that you password had an uppercase, and minimun 8 characters

2. Login to access to the platform.
Yo can access to the API by a 'POST' method in the `/auth/local/login route,
{
    "email": "test@mail.com",
    "password": "PasswordTest01"
}

***note: to have acces to the following routes you must be authenticated with the bearer token given in the login response!***

3. You can add your favorite lists by adding a ListName and the id of the user in the `/api/favs` route with a 'POST' method
{
    "listName": "Music",
    "user": "63226462dc9275eeac79XXXX"
}

4. You can add an item to your favorite list by adding a title, desciption, link and adding the id of the favList generated previously with a 'POST' 
method in the `/api/favs/items` route
{
    "title": "El camino",
    "description": "Pablo Lopez",
    "link": "https://www.youtube.com/watch?v=y_L6iDWq_Kk&list=RDGMEM2VCIgaiSqOfVzBAjPJm-ag&index=6",
    "favList":"63226509dc9275eeac79XXX"
}

5. You can access to all your favorites Lists in the `/api/favs/` route with a 'GET' method

6. You can access to an specific List in the `/api/favs/:id` route with a 'GET' method

7. You can delete an specific List in the `/api/favs/:id` route with a 'DELETE' method
