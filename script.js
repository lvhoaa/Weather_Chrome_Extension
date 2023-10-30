// Then upload the folder to Chrome Extension using Developer Mode
// Use load unpack

async function fetchData(){
    url = 'https://cors-anywhere.herokuapp.com/https://api.weatherapi.com/v1/current.json?key=e9ceb9ea96164a72964134054233010&q=amherst'
    const res = await fetch(url)
    const data = await res.json()
    console.log(data['current']['last_updated'])
    document.getElementById('city').innerHTML=data['location']['name']
    document.getElementById('country').innerHTML=data['location']['country']
    document.getElementById('tempc').innerHTML=data['current']['temp_c']
    document.getElementById('tempf').innerHTML=data['current']['temp_f']
}
fetchData()