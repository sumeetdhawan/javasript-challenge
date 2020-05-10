// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(tableData);


// Add table to the webpage
function loadTable() {
  tableData.forEach((aliens) => {
    var row = tbody.append("tr");
    Object.entries(aliens).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
} 

// Call the function to load table data
loadTable()

// Get a reference to the input element on the page with the id property 
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");



// Get a reference to the filter button on the page with the id property set to `filter-btn`
var filterButton = d3.select("#filter-btn");

// create a function for filtering the data with the given input
function filterData(){

  // Prevent the webpage from refreshing
  d3.event.preventDefault();

  // Extract the given input for all the fields on the web page
  var Datefilter = inputDate.property("value")
  var Cityfilter = inputCity.property("value")
  var Statefilter = inputState.property("value")
  var Countryfilter = inputCountry.property("value")
  var Shapefilter = inputShape.property("value")

  console.log(Datefilter)

  // Apply the conditions for filtering the data and assign to variables
  var filteredData = tableData.filter(
    //filtered => 
    //filtered.datetime === Datefilter && filtered.city === Cityfilter);
    // => Arrow function didnt work
    
    function(filtered){
    return ((filtered.datetime === Datefilter ||Datefilter == "" ) && 
              (filtered.city ===  Cityfilter||Cityfilter == "") &&
              (filtered.state === Statefilter ||Statefilter == "")&&
              (filtered.country === Countryfilter ||Countryfilter == "")&&
              (filtered.shape === Shapefilter ||Shapefilter== "")
          )
  })

  // Print the filtered data to the console
  console.log(filteredData)
  // Empty the table to append with the filtered data 
  tbody.text("")
  // update the table with the filtered data     
  filteredData.forEach((aliens) =>{
      var row = tbody.append("tr")
      Object.entries(aliens).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      })
  })
}

// Add event handler for the click button to filter the table with the given input
filterButton.on("click",filterData)


// Get a reference to the filter button on the page with the id property set to `filter-btn`
var resetButton = d3.select("#reset-btn");

// create a function for resetting the table 
function resetdata(){
    tbody.text("")
    loadTable()
    }
    
// Add event handler for the reset button to reset the table to original data 
resetButton.on("click",resetdata)
