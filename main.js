const OPTIONS = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c99cb13cdcmsh3d8d4d3c0e76a11p145027jsn16dfccc02960',
		'x-rapidapi-host': 'ip-geolocation-metadata.p.rapidapi.com'
	}
};
  const fetchIpInfo = ip => {
    return fetch(`https://ip-geolocation-metadata.p.rapidapi.com/json/${ip}`, OPTIONS)
      .then(res => res.json())
      .catch(err => console.error(err))
  }
  
  const $ = selector => document.querySelector(selector)
  
  const form = $('#form')
  const input = $('#input')
  const submit = $('#submit')
  const results = $('#results')
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = input
    if (!value) return
  
    submit.setAttribute('disabled', '')
  
    const ipInfo = await fetchIpInfo(value)
  
    if (ipInfo) {
      results.innerHTML="";
      results.innerHTML = JSON.stringify(ipInfo,null,3)
    }
    input.value="";
    submit.removeAttribute('disabled')
  
  })
  