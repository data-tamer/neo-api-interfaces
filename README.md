## USERS:

The API provides the following endpoints for managing users:

//Get a list of all users
GET {API}/users 

// Response for /users endpoint
type UsersResponse = User[];

//Get a specific user
GET {API}/users/:id 

// Response for /users/:id endpoint
type UserResponse = User;

//Create a new user
POST {API}/users/create

//Update a user
PUT {API}/users/:id/update

//Remove a user
DELETE {API}/users/:id/remove 

## PROJECTS:

The API provides the following endpoints for managing projects:

//Get a list of all projects
GET {API}/projects

// Response for /projects endpoint
type ProjectsResponse = Project[];

//Get a specific project
GET {API}/projects/:id 

// Response for /projects/:id endpoint
type ProjectResponse = Project;

//Create a new project
POST {API}/projects/create

//Update a project
PUT {API}/projects/:id/update

//Remove a project
DELETE {API}/projects/:id/remove 

## DATASOURCES:

The API provides the following endpoints for managing datasources:

//Get a list of all projects
GET {API}/datasources

// Response for /datasources endpoint
type DatasourcesResponse = datasource[];

//Get a specific datasource
GET {API}/datasources/:id 

// Response for /datasources/:id endpoint
type DatasourceResponse = datasource;

//Create a new datasource
POST {API}/datasources/create

//Update a datasource
PUT {API}/datasources/:id/update

//Remove a datasource
DELETE {API}/datasources/:id/remove 