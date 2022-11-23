# Uber Clone (uber-clone)

### Tutorial series on how to build this

If you'd like a step by step guide on how to build this just **CLICK THE IMAGE BELOW**

[![GO TO JOHN WEEKS DEV TUTORIAL VIDEOS](https://user-images.githubusercontent.com/108229029/203519788-671b6891-e2fb-4a68-8418-2d359df54acc.jpeg)](https://www.youtube.com/watch?v=zXpr8zaK2eA)

Come and check out my YOUTUBE channel for lots more tutorials -> https://www.youtube.com/@johnweeksdev

**LIKE**, **SUBSCRIBE**, and **SMASH THE NOTIFICATION BELL**!!!

## App Setup

Clone the repository
```
git clone https://github.com/John-Weeks-Dev/uber-clone.git
```

Open a terminal, CD in to the folder and run these commands
```
npm i

cp .env.example .env
```

Now go to https://console.cloud.google.com/

Generate an API KEY.

You'll need to ENABLE Maps API, Directions API, Places API, and Distance Matrix API.

Add your new API KEY to the script inside **public/index.html**

![Screenshot 2022-11-23 at 17 40 53](https://user-images.githubusercontent.com/108229029/203526600-42f9f3be-6e9d-4fcc-aff0-5d6c6c7e8d87.png)

Now run this command to start the project 
```
npm run serve
```

And to start in PWA mode run the command
```
npm run pwa
```
![Screenshot 2022-11-23 at 17 44 01](https://user-images.githubusercontent.com/108229029/203527683-4b43f88e-07d8-4e2a-bfad-9a785afed02f.png)

Open another terminal
```
cd server

npm i

cp .env.example .env
```

Add the Google API Key to the .env

```
GOOGLE_MAPS_API_KEY=keyhere

npm run watch
```

![Screenshot 2022-11-23 at 17 53 00](https://user-images.githubusercontent.com/108229029/203529049-d7790bc7-0d0e-4b20-80d5-9cea46017c57.png)

You should be good to go!

# Application Images

<p float="left">
  <img width="270" alt="Screenshot 2022-11-23 at 17 10 03" src="https://user-images.githubusercontent.com/108229029/203521356-c0f3956f-2b71-4e53-998a-65d10ffd6f29.png">
  <img width="270" alt="Screenshot 2022-11-23 at 17 11 15" src="https://user-images.githubusercontent.com/108229029/203521447-f9ad69eb-67c1-4bc5-89c2-378d7a2dd27f.png">
  <img width="270" alt="Screenshot 2022-11-23 at 17 12 14" src="https://user-images.githubusercontent.com/108229029/203521544-3b982e89-ad62-4e63-a376-5f614acbb588.png">
</p>

