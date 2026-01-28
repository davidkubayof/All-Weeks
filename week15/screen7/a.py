def add(x,y):
    return x+y
def sub(x,y):
    return x-y
def mul(x,y):
    return x*y
def div(x,y):
    if(y==0):
        return "canot dividi by ziro"
    return x/y

num1 = int(input("enter first num:"))
num2 = int(input("enter second num:"))
print('''
      1 +
      2 -
      3 *
      4 /
      ''')
choes = str(input("enter a num 1/2/3/4"))

