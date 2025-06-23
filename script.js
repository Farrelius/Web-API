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

    let text = '<ul class="population">'
    data.forEach(element => {
        text += `<li>`
        text += `<h3>${element.Nation} (${element.Year})</h3>`
        text += `<p>Population: ${element.Population.toLocaleString()}</p>`
        text += `</li>`
    })
    text += '</ul>'

    content.innerHTML = text
})
