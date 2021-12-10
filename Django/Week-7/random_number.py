import random

def random_number_generator(n, l=6):

    min = 10 ** (l-1)
    max = 10 ** l

    try:
        new_numbers = random.sample(range(min, max), n)
        for item in new_numbers:
            print(item)
    except ValueError:
        print("Sample larger than population or is negative")
        

random_number_generator(4, 4)