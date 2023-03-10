# search_app

The aim of the project is make a search app which provides a quick and relevent search experience to the end users.<br>
I have used **Meilisearch** open source search API to make this project a bit better and easier.

<br>
<br>

> ## Run the project on Local Machine

1. You need to run Meilisearch locally by following any of the installation guides mentioned [here](https://docs.meilisearch.com/learn/getting_started/quick_start.html#setup-and-installation)

     **NOTE** : <br>
           You need to to update MEILI_URL to ```localhost:7700``` and MEILI_API_KEY to `<YourAPIKEY>` if you are running on local <br>           
            Same for index.html file in public directory ( _line 25_ )

2. Open a New Terminal and run the command ```npm install``` and then ```npm start```
3. Go to the **localhost** url to check the app.


<br><br>

> ## If you have **DOCKER** installed run the following commands in order

```
docker pull sumit85/searchapp:1.0
```

```
docker run -p 5000:5000 sumit85/searchapp:1.0
```    

<br>
<br>

### You can directly see my project online which I have deployed on **Render** and **Railway** Platforms

   * Deployed Link :  [https://search-app-y5se.onrender.com/](https://search-app-y5se.onrender.com/)
