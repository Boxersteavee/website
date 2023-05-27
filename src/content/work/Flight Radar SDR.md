---
title: FR24 SDR
publishDate: 2019-12-01 00:00:00
img: /assets/SDR.jpg
img_alt: A Photo of an SBC (Single Board Computer) with an SDR (Software Defined Radio) Plugged in, with a 1090MHz antenna.
description: |
  This page describes my SDR Project, getting my SDR gear to transmit ADS-B Data to FlightRadar 24.
tags:
  - SDR
  - Flight Radar
  - Orange Pi

---

On Thursday, 16th March 2023, it was a teacher strike day. So instead of sitting, playing games, doing nothing all day. I decided to make use of our SDR gear that came in the mail the weekend prior. I got an Orange Pi 3 LTS, which is a replacement for the Raspberry Pi 4, bought from ali-express for about £35, an NESDR SMARTee SDR, and a 1090MHz Antenna. I had a browse on the interwebs, and found that if I install Armbian (a fork of debian for the Orange Pi 3 LTS), I can manually install Pi24, for flightradar24. Instead, I noticed they had a simple script, and gave it a go. After about 45 minutes of setup, I had a radar registered to Flightradar24's Database, and about an hour later, we had recieved the business package. Oh yeah, if you setup your own radar, they give you the business package, worth $500/yr. A package was delivered recently that contains a much better antenna, and I'll post about that when we set it up.