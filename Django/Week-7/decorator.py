def my_awesome_decorator(fun):

    def wrapped(*args):        
        new_list = [number+1 for number in args]
        print("wrapper: ", fun(*new_list))
    return wrapped


@my_awesome_decorator
def mod_batch(*numbers):
    
    result = all([True if number % 3 == 0 else False for number in numbers])
    return not result

mod_batch(5,8,23)
mod_batch(5,8,1)
