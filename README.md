# mpritter

## Deskripsi

Mpitter adalah sebuah web app sederhana yang nantinya berfungsi sebagai situs micro-blogging yang mirip seperti Twitter, dimana setiap user nantinya dapat mendaftar dan juga posting tweet, pada app tersebut.

## Fitur

Auth (Login & Register)
Post tweet with hastags
Display all tweets
Display tweets based on hastags
Delete tweets
Edit profile, change profile pic

## Build Setup

``` bash
# clone project
git clone https://github.com/zuhrinurhuda/mpritter

# move into directory
cd mpritter
cd client or cd server

# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev
```

Access the website via `http://localhost:8080` for client and `http://localhost:3000/api` for API server. 

## API Endpoint

List of basic routes:

| Route                   | HTTP | Description            |
| ----------------------- | ---- | ---------------------- |
| `/api/hello?name={name}`| GET  | Print hello, `{name}`! |

List of user routes:

| Route            | HTTP   | Description                 |
| ---------------- | ------ | --------------------------- |
| `/api/users`     | GET    | Get all the user            |
| `/api/users/:id` | GET    | Get a single user           |
| `/api/users`     | POST   | Create a user               |
| `/api/users/:id` | DELETE | Delete a user               |
| `/api/users/:id` | PUT    | Update a user with new info |

List of filter routes:

| Route                      | HTTP | Description                 |
| -------------------------- | ---- | --------------------------- |
| `/api/users?name="{name}"` | GET  | Get `{name}` match in users |
| `/api/users?name="{na}"`   | GET  | Get `{na}` like in users    |