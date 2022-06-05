import requests
import json
response = requests.get('https://egator.greenriver.edu/api/v1/courses', 
headers={'Authorization': 'Bearer 9~odMeZ2H6EJAp8SrGDGQCnBi5xnCj5QuIoaej0fgme1bqH4TujzqZcbVm5aFL2irC'})
print(json.dumps(response.json(), indent=2))