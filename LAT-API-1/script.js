const content = document.querySelector('#content')
const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

const hitAPI = async (url) => {
    const api = await fetch(url)
    const data = await api.json()
    return data
}

document.addEventListener('DOMContentLoaded', async () => {
    let result = await hitAPI(url)
    let data = result.data

    let teks = '<ul class="population">'
    data.forEach(item => {
        teks += `<li>`
        teks += `<h3>${item.Nation} (${item.Year})</h3>`
        teks += `<p>Population: ${item.Population.toLocaleString()}</p>`
        teks += `</li>`
    })
    teks += '</ul>'

    content.innerHTML = teks
})
