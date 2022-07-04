# Question: Understand API integration implementation in the frameworks

In Django, there's a toolkit called [Django REST Framework](https://www.django-rest-framework.org/) that's used to create REST APIs. It's a powerful framework that's used to create APIs that can be consumed by other applications. It's best known for making serialization easy.

The main concepts are:

- serialization -> The process of translating Django models into JSON or XML.
- deserialization -> The process of translating JSON or XML into Django models.
- Views -> contains logic defining how your API responds to different resource requests, i.e:
  - a `UsersListView` to handle `/api/users/` which might include the following methods:
    - `get` -> get a list of all users
    - `create` -> create a user
      - Note that this can also be done in its own view if we had `/api/users/create` instead.
  - a `UsersDetailView` to handle `/api/users/<user_id>` where you might have the following methods:
    - `update` -> update a user
    - `delete` -> delete a user
    - `put` -> update or create a user
    - `getUser` -> fetch a single user
- URLs: specify the url path of API resources to be accessed
- Pagination: allows you to control how many objects per page are returned

[Prev: Django And Microservices](microservices.md)

[Next: Django And Error Handling](error-handling.md)
