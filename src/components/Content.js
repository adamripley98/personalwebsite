import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import img1 from '../images/gallery/1.JPG';
import img2 from '../images/gallery/2.JPG';
import img3 from '../images/gallery/3.JPG';
import img4 from '../images/gallery/4.JPG';
import img5 from '../images/gallery/5.JPG';
import img6 from '../images/gallery/6.JPG';
import img7 from '../images/gallery/7.JPG';
import img8 from '../images/gallery/8.JPG';
import img9 from '../images/gallery/9.JPG';
import img10 from '../images/gallery/10.JPG';
import img11 from '../images/gallery/11.jpg';
import img12 from '../images/gallery/12.JPG';
import img13 from '../images/gallery/13.JPG';
import img14 from '../images/gallery/14.JPG';
import img15 from '../images/gallery/15.JPG';


class Content extends Component {
  render() {
    return (
      <div className="container hero" id="content">
        <div className="space-2 hidden-md-down" />
        <div className="row">
          <div className="col-12 col-md-6">
            <Fade right>
              <div className="card about-card">
                <h1 className="title-text">
                  Pictures
                </h1>
                <div className="line-break" />
                <div className="demo__gallery" />
              </div>
            </Fade>
          </div>
        </div>
        <div className="space-4 hidden-lg-down" />
        <div className="space-2 hidden-xl-down" />
        <div className="space-4 hidden-md-down" />
        <div className="space-4 hidden-lg-down" />
      </div>
    );
  }
}

/* eslint-disable */
"use strict";
$(document).ready(function() {

  var rows = 3; //change this also in css
  var cols = 5; //change this also in css
  var staggerTime = 150;

  var urls = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];

  var $gallery = $(".demo__gallery");
  var $help = $(".demo__help");
  var partsArray = [];
  var reqAnimFr = (function() {
    return window.requestAnimationFrame || function(cb) {
      setTimeout(cb, 1000 / 60);
    }
  })();

  for (let row = 1; row <= rows; row++) {
    partsArray[row - 1] = [];
    for (let col = 1; col <= cols; col++) {
      $gallery.append(`<div class="show-front demo__part demo__part-${row}-${col}" row="${row}" col="${col}"><div class="demo__part-back"><div class="demo__part-back-inner"></div></div><div class="demo__part-front"></div></div>`);
      partsArray[row - 1][col - 1] = new Part();
    }
  }

  var $parts = $(".demo__part");
  var $image = $(".demo__part-back-inner");
  var help = true;

  for (let i = 0; i < $parts.length; i++) {
    $parts.find(".demo__part-front").eq(i).css("background-image", `url(${urls[i]})`);
  }

  $gallery.on("click", ".demo__part-front", function() {

    $image.css("background-image", $(this).css("background-image"));
    if (help) {
      help = false;
    }

    let row = +$(this).closest(".demo__part").attr("row");
    let col = +$(this).closest(".demo__part").attr("col");
    waveChange(row, col);
  });

  $gallery.on("click", ".demo__part-back", function() {
    if (!isShowingBack()) return;

    setTimeout(function() {
      for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
          partsArray[row - 1][col - 1].showing = "front";
        }
      }
    }, staggerTime + $parts.length * staggerTime / 10);


    showFront(0, $parts.length);

  });

  function showFront(i, maxI) {
    if (i >= maxI) return;
    $parts.eq(i).addClass("show-front");

    reqAnimFr(function() {
      showFront(i + 1);
    });
  }

  function isShowingBack() {
    return partsArray[0][0].showing == "back" && partsArray[0][cols - 1].showing == "back" && partsArray[rows - 1][0].showing == "back" && partsArray[rows - 1][cols - 1].showing == "back";
  }

  function Part() {
    this.showing = "front";
  }

  function waveChange(rowN, colN) {
    if (rowN > rows || colN > cols || rowN <= 0 || colN <= 0) return;
    if (partsArray[rowN - 1][colN - 1].showing == "back") return;
    $(".demo__part-" + rowN + "-" + colN).removeClass("show-front");
    partsArray[rowN - 1][colN - 1].showing = "back";
    setTimeout(function() {
      waveChange(rowN + 1, colN);
      waveChange(rowN - 1, colN);
      waveChange(rowN, colN + 1);
      waveChange(rowN, colN - 1);
    }, staggerTime);
  }
});

export default Content;
