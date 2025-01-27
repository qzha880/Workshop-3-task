# Workshop-3-task
Workshop 3 task


## Change made and experiments during coding
<img width="1137" alt="截屏2025-01-19 23 00 21" src="https://github.com/user-attachments/assets/5e9aba9b-d44d-44af-971b-e13777e8b0fb" />
- I want to make the shapes bigger near the edges and smaller shapes close to the center to make the image more clear.

- I created different shapes, different sizes

<img width="1136" alt="截屏2025-01-20 00 20 56" src="https://github.com/user-attachments/assets/f5d56f0c-38e4-433b-9f73-c2b205363c24" />
- Then I was thinking about change the time for the shapes to create. (big shape draw first and stop, after a few seconds the small shapes also stop)

- Using setInterval and counter (Everything start at the same time and stop at different times)

<img width="1137" alt="截屏2025-01-21 00 08 35" src="https://github.com/user-attachments/assets/26efa5a1-9b9e-4be9-bc23-bb274d9d0da6" />
- Tried with gif - works fine

- Tried to change colours for the gif - not working

<img width="1139" alt="截屏2025-01-21 00 24 29" src="https://github.com/user-attachments/assets/eac1bf0f-e87e-4e0d-8b3e-f8144dea95ec" />
- I moved the lines for drawing the gif down to the bottom, and added 'img' in front of 'loadPixels' and 'updatePixels', so I was able to give the gif filters.

- Changed colour
- I noticed that if I change the maximum for the random alpha value, the gif motion will become slower than before.
- Also for gif, when manipulate the level of the pixels, the gif colour will be changed slowly over time.

<img width="1137" alt="截屏2025-01-21 22 21 36" src="https://github.com/user-attachments/assets/d1ef34ee-c91c-4657-a3c2-5122a11696cc" />
- Tried to make a tiger & cat changing image.

- Image at a different (wrong) place - give the image a correct position to fix
- The frameRate(1) will also affect gifs.

<img width="1119" alt="截屏2025-01-23 17 32 10" src="https://github.com/user-attachments/assets/ffc04930-48f8-4731-84fd-0c466291fffc" />
- I want to give the sketch a new background each time the sketch is running.

- I used mousePressed function - image created but will block the fish image, and the background image sizes are different. 
- Changed mousePressed function to setup function - once the sketch started, the background will be randomly created.


### Problems met
<img width="1135" alt="截屏2025-01-19 22 27 27" src="https://github.com/user-attachments/assets/72910692-b0f3-4241-99fa-38134b57d8a7" />

- When I tried to draw an image on the canvas, the preview shows that it is loading - then I found out that I wrote 'image = loadImage...' instead of 'img = loadImage...'.

<img width="1140" alt="截屏2025-01-19 22 30 21" src="https://github.com/user-attachments/assets/8085fbbc-6f8c-4058-95a1-aaae99026493" />

- When I moved the image to the center of the canvas, but an extre image was created - Two draw functions for the image, after I delete one of it, it becomes normal.

### Here is the URL to the webpage for this project: https://qzha880.github.io/Workshop-3-task/
