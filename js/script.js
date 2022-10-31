// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-3-01-volume-of-a-Pyramid/sw.js", {
    scope: "/ICS20-volume-of-a-pyramid/",
  })
}

const length = parseFloat(document.getElementById("length-of-pyramid").value)

function enterClicked() {
  // input
  const length = parseInt(document.getElementById("length-of-pyramid").value)
  const width = parseInt(document.getElementById("width-of-Pyramid").value)
  const height = parseInt(document.getElementById("height-of-pyramid").value)
  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById("volume-of-a-pyramid").innerHTML =
    "the volume of the pyramid is: " + volume + " ㎣."
}
