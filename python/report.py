import sys
from collections import Counter
import pprint


logs=[]

def apache_output(line):
    split_line = line.split()
    logs.append(split_line[6])
    return {'remote_host': split_line[0],
            'page': split_line[6],
            'apache_status': split_line[8],
            'data_transfer': split_line[9],
    }


def final_report(logfile):
    for line in logfile:
        line_dict = apache_output(line)
        # print(line_dict)

def print_report():
     a = dict(Counter(logs))
    #  print(a, sep=',')
     pprint.pprint(a)


if __name__ == "__main__":
    infile_name = 'access.log'
    try:
        infile = open(infile_name, 'r')
    except IOError:
        print ("You must specify a valid file to parse")
        print (__doc__)
        sys.exit(1)
    log_report = final_report(infile)
    infile.close()
    print_report()
   
   