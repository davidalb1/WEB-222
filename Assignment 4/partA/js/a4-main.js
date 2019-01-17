var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = loadTableWithFilters;
function loadTableWithFilters() {
document.querySelector("#main-table-body").innerHTML = '';

    for (var i = 0; i < petData.length; i++) {
     document.querySelector("#main-table-body")

     if ((filterType == petData[i].type || filterType == "") && petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax) {
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        var img = document.createElement("img");
      
        img.setAttribute("src", petData[i].image.src);
        img.setAttribute("alt", petData[i].image.alt);
        img.setAttribute("width", petData[i].image.width);
        img.setAttribute("height", petData[i].image.height);
        td1.appendChild(img);
        row.appendChild(td1);
       
        var td2 = document.createElement("td");
        td2.setAttribute("style", "text-align:center;");
       
        var header4 = document.createElement("h4");
        var name = document.createTextNode(petData[i].name);
        header4.appendChild(name);
        td2.appendChild(header4);
       
        var p = document.createElement("p");
        p.innerHTML = petData[i].description.toString();
        td2.appendChild(p);
       
        var span = document.createElement("span");
        var age = document.createTextNode("Age: " + petData[i].age + " years old.");
        span.appendChild(age);
        td2.appendChild(span);
        row.appendChild(td2);
       
        document.querySelector("#main-table-body").appendChild(row);

     }
    }

};

function filterDog() {
 
    filterType = "dog";
    loadTableWithFilters();
  };
  
  function filterCat() {
   
    filterType = "cat";
    loadTableWithFilters();
  };
  
  function filterBird() {

    filterType = "bird";
    loadTableWithFilters();
  };

  function filter_zero_1() {
    
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
  };
  
  function filter_1_3() {
  
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
  };
  
  function filter_4_plus() {
  
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
  };
  
  function filterAllPets() {
  
    /*var filterType = "";
    var filterAgeMin = 0;
    var filterAgeMax = Number.MAX_VALUE; */
    loadTableWithFilters();
  };
