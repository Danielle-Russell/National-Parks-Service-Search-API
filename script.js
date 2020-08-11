'use strict';

function getParks(input, maxResults) {
  fetch(`https://developer.nps.gov/api/v1/parks?q=${input}&limit=${maxResults}&api_key=QThr6EVLHvgBVnWwfVwsZ4TiDej0g7OYDLN7VXMC`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  for (let i = 0; i < responseJson.data.length; i++) {
  $('.results').append(`<li><strong>${responseJson.data[i].fullName}: </strong> ${responseJson.data[i].description} <a href = "${responseJson.data[i].url}">Link To Website</a></li>`)
  }
  }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let input = $(".text").val();
     let maxResults = $(".max-results").val();
    getParks(input, maxResults);
    $('.results').empty();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});