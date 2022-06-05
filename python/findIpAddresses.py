import re
import os

log_file=input("Enter File Name")

dir_path=os.path.dirname(os.path.realpath(__file__))
f=open(dir_path+'/'+log_file, "r")

log_lines=f.readlines()
f.close()


# Regex Pattern

regex_pattern= r"^(?:[0-9]{1,3}\.){3}[0-9]{1,3}"
result_dictionary={}


for line in log_lines:
    m=re.search(regex_pattern, line)
    if m:
        status_code=m.group()
        if status_code in result_dictionary.keys():
            result_dictionary[status_code] +=1
        else:
            result_dictionary[status_code]=1

print(result_dictionary)


