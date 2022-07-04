# Question: Research on Error Handling in the framework

Django comes with an out of the box [Exception handler](https://docs.djangoproject.com/en/4.0/ref/exceptions/) that can be used to handle errors. This means that when an error occurs, the framework will automatically generate an error - typically containing an error status code and error message.

However, there're cases where you'd want to have more control over how errors are handled and Django provides ways for you to do so.

- One of the most common cases is overriding the default 404 and 500 pages from Django. It's useful to do this as it allows you to create your own messages that not only relay the error message in a user friendly manner, but also give you an opportunity to showcase what your brand is all about by adding some personality to the pages. The following is a snippet on how you'd do that:

  ```python
  from django.shortcuts import render

  def error_404(request, exception):
  return render(request,'404.html')

  def error_500(request, exception):
      return render(request,'500.html')

  def error_403(request, exception):
      return render(request,'403.html')
  ```

- For other server-side errors, it's recommended that you use `try... except ..` clauses to catch errors that you're already anticipating and handle them in a way that's appropriate for your application. For instance, you can have the following, for a hypothetical signup logic:

  ```python
  try:
      user = User.objects.get(email=email)
  except User.DoesNotExist:
      user = User.objects.create(name=name, email=email, phone=phone)
  ```

  - You can also use third party libraries such as Sentry for error reporting:

    ```python
    from sentry_sdk import capture_exception

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        user = User.objects.create(name=name, email=email, phone=phone)
    except Exception as e:
        capture_exception(e)
    ```

[Prev: API Integration](django-and-apis.md)
