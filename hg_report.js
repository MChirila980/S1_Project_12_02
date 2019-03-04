"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Melinda Chirila
   Date:   3/4/2019
   
   Filename: hg_report.js
	
*/



//this is information about the game, its in a var of gameReport
var gameReport = "<h1>" + itemTitle + "</h1>" + "<h2>By:" + itemManufacturer + "</h2>" + "<img src='hg_" +
    itemID + ".png'" + "alt='" + itemID + "'" + "id='gameImg'/>" + "<table>" + "<tr> <th> Product ID </th>" 
    + "<td>" +  itemID + "</td>" + "</tr>" + "<tr><th>List Price</th>" + "<td>" + itemPrice + "</td>" + "</tr>" + "<tr> <th> Platform </th>" +
    "<td>" + itemPlatform + "</td>" + "</tr><tr><th>ESRB Rating</th>" + "<td>" + itemESRB + "</td>" + "</tr>" + "<tr> <th> Condition </th>" +
    "<td>" + itemCondition + "</td>" + "</tr>" + "<tr><th>Release</th>" + "<td>" + itemRelease + "</td>" + "</tr>" + "</table>" + itemSummary;

//this is the value for the game report, that is referencing first item in the array of article elements.
document.getElementsByTagName("article")[0].innerHTML = gameReport;

//the variable for the ratings sum
var ratingsSum = 0;

//this is the variable for the ratings count,the length
var ratingsCount = ratings.length;


for (var i = 0; i < ratingsCount; i++) {

    ratingsSum += ratings[i];
}
var ratingsAvg = ratingsSum / ratingsCount;
//the rating report for the customer reviews on the website.
var ratingReport = "<h1>Customer Reviews</h1>" + "<h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>"

for (var i = 0; i <= 2; i++) {


    ratingReport += "<div class = 'review'> <h1>" + ratingTitles[i] + "</h1>" + "<table> <tr> <th> By </th>" +
        "<td>" + ratingAuthors[i] + "</td>" + "</tr>" + "<tr><th>" + "Review Date</th>" + "<td>" + ratingDates[i] +
        "</td>" + "</tr>" + "<tr> <th>  Rating</th>" + "<td>";

    for (var x = 0; x < ratings[i]; x++) {

        ratingReport += "<img src='hg_star.png'/>";
    }
    //the rating summaries for the rating report.
    ratingReport += "</td>" + "</tr>" + "</table>" + ratingSummaries[i] + "</div>";
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;