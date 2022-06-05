#import the necessary modules!
from asyncio.windows_events import NULL
import random
import string
import pwnedpasswords

print('hello, Welcome to Password generator and Uniqe Tester!')

#input the length of password
length = int(input('\nEnter the length of password: '))                      

#define data
lower = string.ascii_lowercase

upper_data = int(input('\nEnter 1 if you want to add UpperCase Characters: '))  
if(upper_data==1):
    upper = string.ascii_uppercase
else:
    upper=string.ascii_lowercase

num_data = int(input('\nEnter 1 if you want to add Number Characters: '))  
if(num_data==1):
    num = string.digits
else:
    num=string.ascii_lowercase

sym_data = int(input('\nEnter 1 if you want to add Symbol Characters:'))  
if(sym_data==1):
    symbols = string.punctuation
else:
    symbols=string.ascii_lowercase

#combine the data
all = lower + upper + num + symbols

#use random 
temp = random.sample(all,length)

#create the password 
password = "".join(temp)

#print generated the password
print(password)

# check if password is unique or not
print(pwnedpasswords.check(password))
if(pwnedpasswords.check(password)==0):
    print("Password is Unique")
    print(password)
else:
    print("Generated Password is not Unique")