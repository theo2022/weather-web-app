const ApiKey = "24beec599c021ea4168d02a5caf9798c";
$(document).ready(function () {
  const form = $("form");

  form.submit(function (e) {
    e.preventDefault();
    const inpval = $("#cityname").val();

  });

  $("#sub").click(function () {
    const inpval = $("#cityname").val();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inpval}&appid=${ApiKey}&units=metric`;
    $.get(url, function (result) {
     
      const {main,sys,weather,name}=result;
      const icon = `https://openweathermap.org/img/wn/${
        weather[0]["icon"]
      }@2x.png`;
       
    
      $("#cities").add("li").addClass("one");
    
      $(".one").append(`<h2 class="city-name" data-name=${name},${sys.country}>
      <span>${name}</span>
      <sup class="countryname">${sys.country}</sup></h2>
         <div class="city-temperature">${Math.round(main.temp)}<sup>°C</sup></div> 
         <figure> 
         <img src=${icon} alt="">
        <figcaption>${weather[0]["description"]}</figcaption> 
        </figure>`);
        

        
        
        
        $("#cities").append($(".one"));
        $(".weather").show();
    })
  })
});


// $.ajaxComplete(function () {
//   form.reset();
//   input.focus();
// })
    
    
//   })
//   })

