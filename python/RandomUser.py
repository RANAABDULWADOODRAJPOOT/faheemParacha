import requests
response = requests.get("https://randomuser.me/api", headers={"Accept":"application/json"})
data=response.json()
# print(data["results"])


for x in data["results"]:
  print("Name:"+x['name']['title']+" "+x['name']['first']+" "+x['name']['last'])
  print("Gender:"+x['gender'])
  print("City:"+x['location']['city'])
  print("Country:"+x['location']['country'])
  print("Phone:"+x['phone'])