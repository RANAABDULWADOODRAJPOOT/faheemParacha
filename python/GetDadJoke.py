import requests
response = requests.get("https://icanhazdadjoke.com/", headers={"Accept":"application/json"})
data=response.json()
print(data['id'])
print(data['joke'])
