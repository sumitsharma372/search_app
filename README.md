# search_app

The aim of the project is make a search app with good search Exprerience for better user experience.
I have used **Meilisearch** open source search engine to make this project a bit better and easier.



> ## Run the project on Local Machine

1. You need to run Meilisearch locally by following any of the installation guides mentioned [here](https://docs.meilisearch.com/learn/getting_started/quick_start.html#setup-and-installation)

2. Open a New Terminal and run the command ```npm install``` and then ```npm start```
3. Go to the **localhost** url to check the app.


> ## If you have **DOCKER** installed run the following commands in order

```
docker pull getmeili/meilisearch:v0.30
```

```
docker run -it --rm \
    -p 7700:7700 \
    -e MEILI_MASTER_KEY='MASTER_KEY'\
    -v $(pwd)/meili_data:/meili_data \
    getmeili/meilisearch:v0.30 \
    meilisearch --env="development"
```    

Open a new Terminal and cd to project directory and run ```npm install``` and then ```npm start```
