function timeLeft(t){var e=Date.parse(t)-Date.parse(new Date);return{total:e,days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}}$(".about-me-img").hover(function(){$(".authorWindowWrapper").stop().fadeIn("fast").find("p").addClass("trans")},function(){$(".authorWindowWrapper").stop().fadeOut("fast").find("p").removeClass("trans")}),$(document).ready(function(){var t,e,a=new Date,s="January 1 "+(a.getFullYear()+1)+" 00:00:00";0==a.getMonth()&&1==a.getDate()&&(s="January 1 "+a.getFullYear()+" 00:00:00"),$("#header").hover(function(){$(this).toggleClass("bluelight")}),$(".clock").hover(function(){$(this).toggleClass("bluelight")}),t=s,e=setInterval(function(){var a=timeLeft(t);if($("#days").text(a.days),$("#hours").text(a.hours),$("#mins").text(("0"+a.minutes).slice(-2)),$("#secs").text(("0"+a.seconds).slice(-2)),a.total<=0){clearInterval(e);var s=new Date().getFullYear().toString();$("#header").text("Happy New Year!!!"),$("#days").text(s[0]),$("#days-text").text("Happy"),$("#hours").text(s[1]),$("#hours-text").text("New"),$("#mins").text(s[2]),$("#mins-text").text("Year"),$("#secs").text(s[3]),$("#secs-text").text("!!!"),$("#info").text("Countdown starts again tomorrow!")}},1e3)});