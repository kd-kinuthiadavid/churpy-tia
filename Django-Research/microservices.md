# Question: Understand Microservice implementation in the framework

We can answer the above question by exploring the following questions:

- What are microservices?
- How can we use Django to implement microservices?

## What are microservices?

Microservices is a software architectural style that structures an application as a collection of services that have the following attributes:

- Highly maintainable and testable
  - Each service (or a group of related services) should ideally be maintained by one team without the need to consult with other teams
- Independently deployable
  - It should be possible to deploy each service independently without affecting other services
- Loosely coupled
  - Changes done in one microservice shouldn’t lead to a need for changes to be done in another service.
- Owned by a small team (ideally 2-pizza people teams)
  - Each team is responsible for anything and everything that has to do with a particular service (or group of related services, e.g, auth: identity, authorization and roles, token-syncing) from the database, deployment, testing, documentation, APIs, views e.t.c
- Language/database/tech-stack agnostic.
  - Ideally, a microservice architecture should be language/tech-stack agnostic. The whole point of microservices is to make small teams autonomous. Therefore, teams that own a particular service should be free to choose their tech stack depending on what works best for their needs. Ideally, each service has its own database.

## How can we use Django to implement microservices?

There’re two main ways of implementing microservices in Django:

- Creating multiple [Django apps](https://docs.djangoproject.com/en/4.0/ref/applications/) as services in one Django project

  - Here, you’d have each app as a service. For instance, for a blog:
    - Posts app as a service
    - Comments app as a service
    - Auth app as a service e.t.c
  - As far as a database goes, there’re two ways of doing it:
    - Shared database:
      - where all apps (services) share the same database
        - some apps could map to specific tables, e.g, Posts app -> Posts Table
    - Each App has its own database (recommended), i.e:
      - Posts App -> Posts database (MongoDB)
      - Comments App -> Comments database (Firebase)
      - Auth App -> Auth DB (Postgress)
  - Ideally, we’d have the following with this approach:

    - Each app is independent:
      - can be tested and deployed independently
      - has its own database
      - has its own documentation
      - each app is loosely coupled such that changes in one of the apps don’t require changes to be made in other apps

  - We'd have to think about the following things too:
    - Inter-App communication:
      - Each app should be able to communicate with any other app at any given time as it may need information that it can only get from a particular app. E.g:
        - Posts: say we want to know the author of a post, we should be able to get the user info from the Auth App/Service.
    - API Gateway:
      - Finally, we’d need an API that would act as an abstraction between the individual apps/services and external clients.
        - For instance, say we used Django to build the backend for our Blog and we have a separate frontend built with Vue and:
          - say, I need to display the currently signed-in user and a list of their most popular posts:
            - I shouldn’t be getting this info by directly interacting with each of the auth and posts apps. There should be an API that collects all this info and then makes it available for my Vue frontend.

- Building a service as a Django project
  - This is the way to go if you’re to build a true microservice architecture. Here you’d create a Django project and build a service out of that.

[Prev: Fundamentals And Overview](overview.md)

[Next: API Integration](django-and-apis.md)
