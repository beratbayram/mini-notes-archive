# Python Keynotes

``` python
print(""" \
Usage: thingy [OPTIONS]
-h Display this usage message
-H hostname Hostname to connect to
""")
```

Multi-line strings (\ => prevents auto-newline)

``` python
word = 'Python'
word[ 5 ] # character in position 5 (n)
word[- 2 ] # second-last character  (o)
word[- 6 ] # (p)
```

Note that since -0 is the same as 0, negative indices start from -1.

``` python
>>> word[ 0 : 2 ] # characters from position 0 (included) to 2 (excluded)
'Py'
>>> word[ 2 : 5 ] # characters from position 2 (included) to 5 (excluded)
'tho'
```

Slice indices have useful defaults; an omitted first index defaults to zero, an omitted second index defaults to the size of the string being sliced.Python strings cannot be changed — they are immutable. Therefore, assigning to an indexed position in the string results in an error.If you need a different string, you should create a new one:

``` python
>>> 'J' + word[ 1 :]
'Jython'
>>> word[: 2 ] + 'py'
'Pypy'
```

## Lists

``` python
>>> squares = [ 1 , 4 , 9 , 16 , 25 ]
>>> squares[ 0 ] # indexing returns the item
1
>>> squares[- 1 ]
25
>>> squares[- 3 :] # slicing returns a new list
[9, 16, 25]
>>> squares + [ 36 , 49 , 64 , 81 , 100 ] # concatenation is supported
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
>>> x = [['a', 'b', 'c'], [1, 2, 3]]
```

When a compound statement is entered interactively, it must be followed by a blank line to indicate completion (since the parser cannot guess when you have typed the last line). append() can be used (e.g. cubes.append( 216 )) instead of +.

``` python
>>> a, b = 0 , 1
>>> while a < 1000 :
...     print(a, end=',')
...     a, b = b, a+b
... 
0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,
```

**NOTE:** Since \*\* has higher precedence than -, -3\*\*2 will be interpreted as -(3\*\*2) and thus result in -9. To avoid this and get 9 , you can use (-3)\*\*2.

### List Methods

``` python
>>> fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
>>> fruits.count('apple')
2
>>> fruits.count('tangerine')
0
>>> fruits.index('banana')
3
>>> fruits.index('banana', 4)  # Find next banana starting a position 4
6
>>> fruits.reverse()
>>> fruits
['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange']
>>> fruits.append('grape')
>>> fruits
['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange', 'grape']
>>> fruits.sort()
>>> fruits
['apple', 'apple', 'banana', 'banana', 'grape', 'kiwi', 'orange', 'pear']
>>> fruits.pop()
'pear'
```

### List Comprehensions

``` python
>>> combs = []
>>> for x in [1,2,3]:
...     for y in [3,1,4]:
...         if x != y:
...             combs.append((x, y))
...
>>> combs
[(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
```

These two are equal.

``` python
>>> [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
[(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
```

### del

``` python
>>> a = [-1, 1, 66.25, 333, 333, 1234.5]
>>> del a[0]
>>> a
[1, 66.25, 333, 333, 1234.5]
>>> del a[2:4]
>>> a
[1, 66.25, 1234.5]
>>> del a[:]
>>> a
[]
```

## Control Flow Tools

``` python
>>> # Measure some strings:
... words = ['cat', 'window', 'defenestrate']
>>> for w in words:
...     print(w, len(w))
... 
cat 3
window 6
defenestrate 12
```

**WARNING:** If you need to modify the sequence you are iterating over while inside the loop (for example to duplicate selected items), it is recommended that you first make a copy. Iterating over a sequence does not implicitly make a copy. The slice notation makes this especially convenient:

``` python
>>> for w in words[:]: # Loop over a slice copy of the entire list.
...     if len(w) > 6 :
...         words.insert( 0 , w)
... 
>>> words
['defenestrate', 'cat', 'window', 'defenestrate']
```

With for w in words:, the example would attempt to create an infinite list, inserting defenestrate over and over again.

``` python
>>> for i in range( 5 ):
...     print(i, end=” “)
... 
0 1 2 3 4
>>> 
>>> a = ['Mary', 'had', 'a', 'little', 'lamb']
>>> for i in range(len(a)):
...     print(i, a[i])
... 
0 Mary
1 had
2 a
3 little
4 lamb
```

``` python
range( 5 , 10 )             # 5 , 6 , 7 , 8 , 9
range( 0 , 10 , 3 )         # 0 , 3 , 6 , 9
range(-10 , -100 , -30 ) # 10 , -40 , -70
```

---

``` python
>>> print(range( 10 ))
range(0, 10)
```

A strange thing happens if you just print a range. In many ways the object returned by range() behaves as if it is a list, but in fact it isn’t. It is an object which returns the successive items of the desired sequence when you iterate over it, but it doesn’t really make the list, thus saving space.  
  
We say such an object is iterable, that is, suitable as a target for functions and constructs that expect something from which they can obtain successive items until the supply is exhausted. We have seen that the for statement is such an iterator. The function list() is another; it creates lists from iterables:

``` python
>>> list(range( 5 ))
[0, 1, 2, 3, 4]
```

**WARNING:** Unlike C, assignment inside expressions must be done explicitly with the walrus operator :=. This avoids a common class of problems encountered in C programs: typing = in an expression when == was intended.

### Else of a Loop

a loop’s else clause runs when no break occurs:

``` python
>>> for n in range( 2 , 10 ):
...     for x in range( 2 , n):
...         if n % x == 0 :
...             print(n, 'equals', x, '*', n//x)
...             break
...     else: # loop fell through without finding a factor
...         print(n, 'is a prime number')
... 
2 is a prime number
3 is a prime number
4 equals 2 * 2
5 is a prime number
6 equals 2 * 3
7 is a prime number
8 equals 2 * 4
9 equals 3 * 3
```

### Pass

The pass statement does nothing. It can be used when a statement is required syntactically but the program requires no action. For example:

``` python
>>> while True :
...     pass # Busy-wait for keyboard interrupt (Ctrl+C)
...
```

This is commonly used for creating minimal classes:

``` python
>>> class MyEmptyClass :
...     pass
... 
```

Another place pass can be used is as a place-holder for a function or conditional body when you are working on new code, allowing you to keep thinking at a more abstract level. The pass is silently ignored:

``` python
>>> def initlog(*args):
...     pass # Remember to implement this!
```

## Comparisons

``` python
(1, 2, 3)              < (1, 2, 4)
[1, 2, 3]              < [1, 2, 4]
'ABC' < 'C' < 'Pascal' < 'Python'
(1, 2, 3, 4)           < (1, 2, 4)
(1, 2)                 < (1, 2, -1)
(1, 2, 3)             == (1.0, 2.0, 3.0)
(1, 2, ('aa', 'ab'))   < (1, 2, ('abc', 'a'), 4)
```

## Functions

``` python
>>> def fib(n, sep = ' '): # write Fibonacci series up to n
...     """Print a Fibonacci series up to n."""
...     a, b = 0 , 1
...     while a < n:
...         print(a, end=sep)
...         a, b = b, a+b
...     print()
... 
>>> fib( 2000 )
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597
>>> fib(sep = '-',5)
0-1-1-2-3
```

The first statement of the function body can optionally be a string literal; this string literal is the function’s documentation string, or docstring. There are tools which use docstrings to automatically produce online or printed documentation, or to let the user interactively browse through code; it’s good practice to include docstrings in code that you write, so make a habit of it.  
  
Global variables cannot be directly assigned a value within a function (unless named in a global statement), although they may be referenced.

If a function returns nothing it returns *None*.Writing the value None is normally suppressed by the interpreter if it would be the only value written. You can see it if you really want with print().

**WARNING:** The default value is evaluated only once. This makes a difference when the default is a mutable object such as a list, dictionary, or instances of most classes. For example, the following function accumulates the arguments passed to it on subsequent calls:

``` python
def f(a, L=[]):
    L.append(a)
    return L

print(f(1)) # [1]
print(f(2)) # [1, 2]
print(f(3)) # [1, 2, 3]
```

If you don’t want the default to be shared between subsequent calls, you can write the function like this instead:

``` python
def f(a, L=None):
    if L is None:
        L = []
    L.append(a)
    return L
```

### Special Parameters

When a final formal parameter of the form \*\*name is present, it receives a dictionary . This may be combined with a formal parameter of the form \*name which receives a tuple. (\*name must occur before \*\*name.) For example, if we define a function like this:

``` python
>>> def foo(*args,**kwargs):
...     for a in args:
...         print a
...     for a in kwargs:
...         print a, kwargs[a]
... 
>>> foo(1,2,3,name='one', age=27)
1
2
3
age 27
name one
```

Alternate form:

``` python
def f(pos1, pos2, /, pos_or_kwd, *, kwd1, kwd2):  
      -----------    ----------     ----------  
        |             |                  |  
        |       Positional or keyword    |  
        |                                Keyword only  
        Positional only  
```

### Unpacking Argument Lists

``` python
>>> args1 = [3, 6]
>>> list(range(*args1))            # call with arguments unpacked from a list
[3, 4, 5]
>>> def parrot(voltage, state='a stiff', action='voom'):
...     print("-- This parrot wouldnt", action, end=' ')
...     print(". You put", voltage, "volts through it.")
... 
>>> d = {"voltage": "four million", "action": "VOOM"}
>>> parrot(**d)
This parrot wouldnt VOOM. You put four million volts through it
```

### Lambda Expressions

```python
lambda a, b: a+b
```

Small anonymous functions. Lambda functions can be used wherever function objects are required. They are syntactically restricted to a single expression. Semantically, they are just syntactic sugar for a normal function definition. Like nested function definitions, lambda functions can reference variables from the containing scope:

``` python
>>> def make_incrementor(n):
...     return lambda x: x + n
...
>>> f = make_incrementor(42)
>>> f(0)
42
>>> f(1)
43
```

### Function Annottations

``` python
def f(ham: str, eggs: str = 'eggs') -> str:  
    ...
```

Annotations are stored in the \_\_annotations\_\_ attribute of the function as a dictionary and have no effect on any other part of the function.

## Exceptions

``` python
>>> def divide(x, y):
...     try:
...         result = x / y
...     except ZeroDivisionError:
...         print("division by zero!")
...     else:
...         print("result is", result)
...     finally:
...         print("executing finally clause")
... 
>>> divide(2, 1)
result is 2.0
executing finally clause
>>> divide(2, 0)
division by zero!
executing finally clause
>>> divide("2", "1")
executing finally clause
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 3, in divide
TypeError: unsupported operand type(s) for /: 'str' and 'str'
```

* If an exception occurs during execution of the try clause, the exception may be handled by an except clause. If the exception is not handled by an except clause, the exception is re-raised after the finally clause has been executed.

* An exception could occur during execution of an except or else clause. Again, the exception is re-raised after the finally clause has been executed.

* If the try statement reaches a break, continue or return statement, the finally clause will execute just prior to the break, continue or return statement’s execution.

* If a finally clause includes a return statement, the finally clause’s return statement will execute before, and instead of, the return statement in a try clause.

``` python
>>> def bool_return():
...     try:
...         return True
...     finally:
...         return False
... 
>>> bool_return()
False
```

### Predefined Clean-up Actions

``` python
for line in open("myfile.txt"):
    print(line, end="")
```

The problem with this code is that it leaves the file open for an indeterminate amount of time after this part of the code has finished executing. This is not an issue in simple scripts, but can be a problem for larger applications. The with statement allows objects like files to be used in a way that ensures they are always cleaned up promptly and correctly.

``` python
with open("myfile.txt") as f:
    for line in f:
        print(line, end="")
```

After the statement is executed, the file f is always closed, even if a problem was encountered while processing the lines. Objects which, like files, provide predefined clean-up actions will indicate this in their documentation.

## Classes

``` python
class Employee:
    pass

john = Employee()  # Create an empty employee record

# Fill the fields of the record
john.name = 'John Doe'
john.dept = 'computer lab'
john.salary = 1000
```

### Iterators

``` python
class Reverse:
    """Iterator for looping over a sequence backwards."""
    def __init__(self, data):
        self.data = data
        self.index = len(data)

    def __iter__(self):
        return self

    def __next__(self):
        if self.index == 0:
            raise StopIteration
        self.index = self.index - 1
        return self.data[self.index]
```

``` python
>>> rev = Reverse('spam')
>>> iter(rev)
<__main__.Reverse object at 0x00A1DB50>
>>> for char in rev:
...     print(char)
... 
m
a
p
s
```

### Generators 

``` python
def reverse(data):
    for index in range(len(data)-1, -1, -1):
        yield data[index]
```

``` python
>>> for char in reverse('golf'):
...     print(char)
... 
f
l
o
g
```

#### Generator Expressions

``` python
>>> sum(i*i for i in range(10))                 # sum of squares
285
```

## Brief Tour of the Standard Library

To be continued ...
