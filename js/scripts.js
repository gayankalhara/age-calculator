

$(document).ready(function(){

  (function(e){
		e.fn.countdown = function (t, n){
			function i(){
				birthDate = Date.parse(r.date) / 1e3;
				currentDate = Math.floor(e.now() / 1e3);
				//
				if(birthDate >= currentDate){
					n.call(this);
					clearInterval(interval)
				}

				diff = countdown(birthDate * 1000, currentDate * 1000, countdown.YEARS | countdown.MONTHS | countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
				console.log("years: " + diff.years + " months: " + diff.months + " days: " + diff.days + " hours: " + diff.hours + " minutes: " + diff.minutes + " seconds: " + diff.seconds);

				years = diff.years;
				months = diff.months;
				days = diff.days;
				hours = diff.hours;
				minutes = diff.minutes;
				seconds = diff.seconds;

				years == 1 ? thisEl.find(".timeRefYears").text("Years") : thisEl.find(".timeRefYears").text("Years");
				days == 1 ? thisEl.find(".timeRefDays").text("Days") : thisEl.find(".timeRefDays").text("Days");
				hours == 1 ? thisEl.find(".timeRefHours").text("Hours") : thisEl.find(".timeRefHours").text("Hours");
				minutes == 1 ? thisEl.find(".timeRefMinutes").text("Minutes") : thisEl.find(".timeRefMinutes").text("Minutes");
				seconds == 1 ? thisEl.find(".timeRefSeconds").text("Seconds") : thisEl.find(".timeRefSeconds").text("Seconds");

				if(r["format"] == "on"){
					years = String(years).length >= 2 ? years : "0" + years;
					days = String(days).length >= 2 ? days : "0" + days;
					hours = String(hours).length >= 2 ? hours : "0" + hours;
					minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
					seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
				}
				//
				if(!isNaN(birthDate)){
					thisEl.find(".years").text(years);
					thisEl.find(".days").text(days);
					thisEl.find(".hours").text(hours);
					thisEl.find(".minutes").text(minutes);
					thisEl.find(".seconds").text(seconds)
				}
        else{
          errorMessage = "Invalid date. Example: 27 March 2015 17:00:00";
					alert(errorMessage);
					console.log(errorMessage);
					clearInterval(interval)
				}
			}
			//
			var thisEl = e(this);
			var r = {
				date: null,
				format: null
			};
			//
			t && e.extend(r, t);
			i();
			interval = setInterval(i, 1e3)
		}
	})(jQuery);
	//
	$(document).ready(function(){
		function e(){
			var e = new Date;
			e.setDate(e.getDate() + 60);
			dd = e.getDate();
			mm = e.getMonth() + 1;
			y = e.getFullYear();
			futureFormattedDate = mm + "/" + dd + "/" + y;
			return futureFormattedDate
		}
		//
		$("#countdown").countdown({
			date: "02 November 1993 05:30:00",
			format: "on"
		});
	});
});