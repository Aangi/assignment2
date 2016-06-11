/*
Filename : App.js
@author Aayushi Shah
@date June 10,2016
StudentID : 300874124
website : 
@description : This file is the main javascript file for this web site
*/
/* main javascript file  */
//IIFE - Immediately Invoked Function Expression
(function() {

    "use strict";
    // code codes in here 

    // define an array of HTML elements
    var paragraphElements = [];

    paragraphElements[0] = document.getElementById("aboutPara");
    paragraphElements[1] = document.getElementById("projectsPara");
    paragraphElements[2] = document.getElementById("TravellingPara");
    paragraphElements[3] = document.getElementById("PaintingPara");
    
    // define your paragraphs array
    var paragraphs = [];

    


    // data for my pages
    paragraphs[0] = "My name is <strong>Aayushi Shah</strong>. I am from India. I am studying <strong>Software Engineering Technology</strong> at Centennial College. I want to become an outstanding Software Engineer after completing my course. I want to get a degree from a renowned university after graduating from this course. Other than my field, I like mathematics subject the most.";
    paragraphs[1] = "Reading inspirational books is my hobby. This book <strong>WINGS OF FIRE</strong> is the best book I have ever read. It is basically the autobiography of APJ Abdul Kalam who was a great person and had been one of the best Presidents of India.";
    paragraphs[2] = "I like to <strong>travel</strong> to new and exciting places. I like visiting the places which are in the lap of nature. I feel like heaven by travelling such places. I had been to many places such as Kashmir."
    paragraphs[3] = "I love <strong>painting</strong>. I like to draw village scenes the most. I have sketched some natural scenes, mostly the sunsets. Painting gives me inner peace."
    
    // if paragraph exists then populate each paragraph on this page
    for (var index = 0; index < paragraphElements.length; index++) {
        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraphs[index];
        }
    }


})(); 
