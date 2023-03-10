const { MeiliSearch } = require('meilisearch')
const links = require('./saved_links.json')
const express = require('express')
const path = require('path')
const app = express()

const MEILI_URL = "https://meilisearch-production-36fb.up.railway.app/"
const MEILI_API_KEY = "SomeKey321"

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.render('index.html')
})

// console.log(links.links)


// ? This is for better search filtering ------

const data = []
var id = 1
links.links.map(item => {
    
    const link_content = item.split('//')[1].split('/')[0]

    const link_title = link_content.includes('www.') ? link_content.split('www.')[1] : link_content

    const parts = item.split('//').join('/').split('/').join('.').split('.').join('?').split('?').join('=').split('=')

    data.push({id, title: link_title, link: item , parts})
    id ++
})

// ? -----------------------------------------
console.log(data[0])


const client = new MeiliSearch({ host: MEILI_URL, apiKey: MEILI_API_KEY})
try {
    client.index('links').addDocuments(data)
        .then(res => console.log(res))
} catch (error) {
    console.log(error)
}


// client.index('links').search('github')
//     .then(res => console.log(res))


app.listen(port, () => console.log(`Listenting on port ${port}`))
