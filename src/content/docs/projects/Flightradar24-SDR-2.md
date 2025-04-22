---
title: Flightradar24 SDR 2.0
description: This project is my second Flightradar24 SDR feeder. Running an original raspberry pi, and a home-made copper SDR antenna
---

![A Raspberry Pi 1 (2011) with an SDR Device plugged in, with a home-made copper antenna calibrated at 1090MHz](https://cdn.boxersteavee.dev/cdn-cgi/imagedelivery/8mDeb5dj0w69F4TILSzPUQ/a532d284-bb1f-43d7-62fb-173754426e00/public)

I did it again! I made another Flight Radar Radar thingy majiggy!

...But this time I used a home-made antenna and an original Raspberry Pi from 2011.

I started off a few weeks ago when I found a coil of copper wire, and a few balun connectors. I measured and cut the copper wire to 28cm, which when bent in half equated to roughly 2 half wavelength antennae for the 1090MHz frequency, which is what ADS-B uses in the UK. I then plugged each end into the balun, and connected it to another nooelec NESDR device. I also found an ancient relic, an original Raspberry Pi from 2011!!! This device still works (amazingly) and surprisingly well too! It does get quite hot though, and- I'm getting off track...

This amazing little [SBC](https://en.wikipedia.org/wiki/Single-board_computer) still had an SD card with it, and didn't have anything important on it. So after downloading the Flight Radar Pi24 image (which took nearly an hour due to countryside mobile data peaking at 500Kb/s), I plugged in an ethernet cable, a power cable, we were off to the races!

I opened the Flightradar24 "Add your ADS-B Coverage" page, and activated the device by telling it the exact coordinates (down to 6 figures!!!). After an hour or so, it started picking up aircraft, and now it's away, picking up anything it sees, and sending it off to FlightRadar24 for millions of people around the world to be fascinated by!

<sub>Published 27th May 2023</sub>