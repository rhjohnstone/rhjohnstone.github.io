---
title:  "Random Art with ChatGPT"
---

If you haven't seen the [random art page](/random_art/), have a look there first!

I asked ChatGPT to write me some Python code that would generate random art.
That original code is [here](https://github.com/rhjohnstone/chatgpt-random-art/blob/main/random_art.py).
It's obviously pretty simple, but I like the output anyway.

I then decided I wanted to incorporate it into this website.
However, I don't know anything about JavaScript, so I copied and pasted that Python code back into ChatGPT and asked it to rewrite it in JavaScript.
The first version correctly produced the same art, but just saved the output as a file.
I wanted to display it on the page, so I told ChatGPT to update the code accordingly.
The final version is [here](https://github.com/rhjohnstone/chatgpt-random-art/blob/main/random_art.js).

I also got ChatGPT to help with integrating it into the page's HTML (about which I also know very little), and now it works!
It's not perfect though, because when viewed on a mobile device with a small screen, the image goes off the edge and requires scrolling.
I would prefer to dynamically resize the drawing based on the device, but I haven't got around to investigating that yet.
Maybe ChatGPT can help me.
