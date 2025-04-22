---
title: FlightRadar24 SDR 3.0
description: This project is my new upgraded version of my original Flightradar24 SDR, using a Raspberry Pi 3b+, a nooelec smart NESDR and a 15db 1090MHz antenna.
---
![A Raspberry Pi 3B+ sitting on a shelf in a small metal shed, with an SDR device plugged into it.](https://imagedelivery.net/8mDeb5dj0w69F4TILSzPUQ/46f70531-0e9c-485b-4659-40f8248fd700/largesquare)

## I made yet another Flightradar SDR thingy majiggy!!

### The original upgrade.
I had already upgraded my SDR 1.0. I used another OrangePi and set it up the same way, put it in my shed and connected it to a 15db antenna and a USB-powered LNA. This ran well for over a year, only occasionally needing to be rebooted to reconnect to the WiFi. The original Pi kept running in my Bedroom for a while, before I moved it to our Caravan to replace SDR 2.0 in early-march (article coming soon).

In early 2025, these cut outs started happening more often, and in mid-march, it cut out again, but wouldn't come back after a reboot. After some investigating, I discovered that the Orange Pi 3 LTS was completely dead, not showing any signs of power. I tried some troubleshooting but couldn't get any sign of life, and decided it was time for a replacement.

![A picture of a shed with a large pole sticking out of the side, and an antenna one top.](https://imagedelivery.net/8mDeb5dj0w69F4TILSzPUQ/4ddd5931-1908-45b4-5baa-af528dfac800/mediumshrink)

### Upgrade to 3.0
When looking for replacements, I decided that an official Raspberry Pi would probably be my best option, since they're now much cheaper than they used to be. After some research, I decided a Raspberry Pi 3b+ would be best, as it meets the requirements for Flightradar's Pi24 image, and it has WiFi! I ordered it from The Pi Hut, and it arrived 2 days later!!

Setting up took about an hour. I wrote the Flightradar 24 Pi24 image to an SD card, and booted the Pi. I had some issues with setting up WiFi, and giving it the original Sharing ID, but once I had that sorted, it just worked! Now I have a working SDR feeder at home again, feeding information from the skies to the interwebs for nerds like me to be fascinated by :D

<sub>Published 22nd April 2025</sub>