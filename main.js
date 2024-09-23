const $ = selector => document.querySelector(selector)
const form = $('#form')
const input = $('#input')
const submit = $('#submit')
const results = $('#results')

const OPTIONS = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c99cb13cdcmsh3d8d4d3c0e76a11p145027jsn16dfccc02960',
		'x-rapidapi-host': 'ip-geolocation-metadata.p.rapidapi.com'
	}
};
  const fetchIpInfo =async ip => {
    const req=await fetch(`https://ip-geolocation-metadata.p.rapidapi.com/json/${ip}`, OPTIONS);
    const res=await req.json();
    return res;
}
  
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
  