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
  navigator.serviceWorker.register("/ICS20-3-02-volume-of-a-Pyramid/sw.js", {
    scope: "/ICS20-3-02-Volume-of-a-Pyramid/sw.js",
  })
}

function enterClicked() {
  // input
  const length = parseFloat(document.getElementById("length-of-pyramid").value)
  const width = parseFloat(document.getElementById("width-of-Pyramid").value)
  const height = parseFloat(document.getElementById("height-of-pyramid").value)
  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById("volume").innerHTML =
    "the volume of the pyramid is: " + volume.toFixed(2) + " ㎣."
}
