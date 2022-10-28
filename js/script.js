// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-3-01-volume-of-a-Pyramid/sw.js", {
    scope: "/ICS20-volume-of-a-pyramid/",
  })
}

function enterClicked() {
  // input
  const length = parseInt(document.getElementById("length-of-trapzoid").value)
  const width = parseInt(document.getElementById("width-of-trapzoid").value)
  const height = parseInt(document.getElementById("height-of-trapzoid").value)
  // process
  const volume = (length * width * height) / 3

  // output
  document.getElementById("volume-of-a-pyramid").innerHTML =
    "the volume of the pyramid is: " + volume + " ㎣."
}
