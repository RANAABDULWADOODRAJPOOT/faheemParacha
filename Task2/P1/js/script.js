
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': '58991e7162msh03180c28d4d8e6ap1c32f8jsnba2fae5860dc',
            'Content-Type':'application/json'

        }
    };
    
    fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));