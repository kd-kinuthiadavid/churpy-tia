# Question: Review the (Django) framework and its fundamentals

We can answer this question by exploring the following questions:

- What is Django?
- What is the purpose of the framework?
- What is unique about the framework?

## What is Django?

Django is a python web framework that encourages rapid development of web apps and clean, well-structured code.

## Fundamentals and overview

Django is well known for its "batteries included" approach to development. This is just a fancy way of saying that Django provides you with a lot of tools to help you develop your web application faster by removing much of the hassle of web development. Some of the "included batteries" are:

- [Django's ORM](https://docs.djangoproject.com/en/2.2/ref/models/): Object Relational Mapping (ORM) is a way to map data to objects in your code. It is a way to map your data to Python objects.
- [A dynamic admin interface](https://docs.djangoproject.com/en/2.2/ref/contrib/admin/): The Django admin interface is a powerful tool for managing your web application.
- [A clean and elegant URL scheme](https://docs.djangoproject.com/en/2.2/ref/urls/): The Django URL scheme is a way to map URLs to views.

Another important thing that sets Django apart is its architecture. Django follows an MVT architecture - which is derived from MVC. Django's MVT architecture can be broken down into the following:

- Model: The model is the data. It is the data that is stored in the database.
- View: The view is the interface that is used to interact with the data.
- Template: The template is the HTML that is used to display the data.

A key difference between Django's MVT and the MVC architecture is that:

> In Django, the "View" is where you define **which** data gets presented to the user while the "Template" is where you define **how** the data is presented to the user. According to Django, the view describes which data is to be presented but it eventually delegates to the template to define how the data is presented. In **MVC** the **View** is responsible for anything and everything as far as data presentation goes

[Back To Research Home](README.md)

[Next: Django And Microservices](microservices.md)
