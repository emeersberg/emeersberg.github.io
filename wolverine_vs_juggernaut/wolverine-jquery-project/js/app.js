$(document).ready(function() {
	$(".damage1").on("click",function(){
	}).mousedown(function() {
		c1();
	}).mouseup(function() {
		stand();
	});
	$(".damage2").on("click",function(){
	}).mousedown(function() {
		hp();
	}).mouseup(function() {
		stand();
	});
	$(".crouchblock").on("click",function(){
		;
	}).mousedown(function() {
		crouchblock()
	}).mouseup(function() {
		stand();
	});
	$(".dashing").on("click",function(){
	}).mousedown(function() {
		dashing();
	}).mouseup(function() {
		stand();
	});
	$(".drillclaw").on("click",function(){
		
	}).mousedown(function() {
		drillclaw();
	}).mouseup(function() {
		stand();
	});
	$(".standingattacks").on("click",function(){
		
	}).mousedown(function() {
		standingattacks();
	}).mouseup(function() {
		stand();
	});
	$(".timeout").on("click",function(){
		
	}).mousedown(function() {
		timeout();
	}).mouseup(function() {
		stand();
	});
	$(".tnt").on("click",function(){
		
	}).mousedown(function() {
		tnt();
	}).mouseup(function() {
		stand();
	});
	$(".wins").on("click",function(){
		
	}).mousedown(function() {
		wins2();
	}).mouseup(function() {
		stand();
	});
	$(".stands").on("click",function(){
		stand();
	});
	$(document).keydown(function(event) {
		if(event.which == 49) {
			c1();
		} else if(event.which == 50) {
			hp ();
		} else if(event.which == 51) {
			crouchblock();
		} else if(event.which == 52) {
			dashing ();
		} else if(event.which == 53) {
			drillclaw();
		} else if(event.which == 54) {
			standingattacks();
		} else if(event.which == 55) {
			timeout();
		} else if(event.which == 56) {
			tnt();
		} else if(event.which == 57) {
			wins2();
		} else {
			stand();
		}
	}).keyup(function() {
		stand();
	});
	function c1 () {
		addstarburst ();
		wvberzerkerbarrage ();
		$("h2").remove();
		$(".header2").append("<h2>ATTACK #1</h2>");
		juggernaughttaunt ();
		$('.wolv-c1').show();
		$('.wolv-hp').hide();
		$('.wolvie-crouchblock').hide();
		$('.wolvie-dashing').hide();
		$('.wolvie-drillclaw').hide();
		$('.wolvie-stand').hide();
		$('.wolvie-standingattacks').hide();
		$('.wolvie-timeout').hide();
		$('.wolvie-tnt').hide();
		$('.wolvie-wins2').hide();
	}
	function hp () {
		addlightstarburst ();
		wvtornadoclaw ();
		$("h2").remove();
		$(".header2").append("<h2>ATTACK #2</h2>");
		juggernaughttaunt ();
		$('.wolv-c1').hide();
		$('.wolv-hp').show();
		$('.wolvie-crouchblock').hide();
		$('.wolvie-dashing').hide();
		$('.wolvie-drillclaw').hide();
		$('.wolvie-stand').hide();
		$('.wolvie-standingattacks').hide();
		$('.wolvie-timeout').hide();
		$('.wolvie-tnt').hide();
		$('.wolvie-wins2').hide();
	}
	function crouchblock () {
		addlightstarburst ();
		$("h2").remove();
		$(".header2").append("<h2>CROUCH BLOCK!</h2>");
		juggernaughtdash ();
		$('.wolv-c1').hide();
		$('.wolv-hp').hide();
		$('.wolvie-crouchblock').show();
		$('.wolvie-dashing').hide();
		$('.wolvie-drillclaw').hide();
		$('.wolvie-stand').hide();
		$('.wolvie-standingattacks').hide();
		$('.wolvie-timeout').hide();
		$('.wolvie-tnt').hide();
		$('.wolvie-wins2').hide();
	}
	function dashing () {
		addstarburst ();
		wvberzerkerbarrage ();
		$("h2").remove();
		$(".header2").append("<h2>DASHING!</h2>");
		juggernaughtearth ();
		$('.wolv-c1').hide();
		$('.wolv-hp').hide();
		$('.wolvie-crouchblock').hide();
		$('.wolvie-dashing').show();
		$('.wolvie-drillclaw').hide();
		$('.wolvie-stand').hide();
		$('.wolvie-standingattacks').hide();
		$('.wolvie-timeout').hide();
		$('.wolvie-tnt').hide();
		$('.wolvie-wins2').hide();
	}
	function drillclaw () {
		addlightstarburst ();
		wvdrillclaw () ;
		$("h2").remove();
		$(".header2").append("<h2>DRILL CLAW!</h2>");
		juggernaughtdive ();
		$('.wolv-c1').hide();
		$('.wolv-hp').hide();
		$('.wolvie-crouchblock').hide();
		$('.wolvie-dashing').hide();
		$('.wolvie-drillclaw').show();
		$('.wolvie-stand').hide();
		$('.wolvie-standingattacks').hide();
		$('.wolvie-timeout').hide();
		$('.wolvie-tnt').hide();
		$('.wolvie-wins2').hide();
	}
	function standingattacks () {
		addstarburst ();
		wvberzerkerbarrage ();
		$("h2").remove();
		$(".header2").append("<h2>STANDING ATTACKS!</h2>");
		juggernaughtcrazy ();
		$('.wolv-c1').hide();
		$('.wolv-hp').hide();
		$('.wolvie-crouchblock').hide();
		$('.wolvie-dashing').hide();
		$('.wolvie-drillclaw').hide();
		$('.wolvie-stand').hide();
		$('.wolvie-standingattacks').show();
		$('.wolvie-timeout').hide();
		$('.wolvie-tnt').hide();
		$('.wolvie-wins2').hide();
	}
	function timeout () {
		removestarburst ();
		$("h2").remove();
		$(".header2").append("<h2>TIME OUT!</h2>");
		juggernaughttaunt ()
		$('.wolv-c1').hide();
		$('.wolv-hp').hide();
		$('.wolvie-crouchblock').hide();
		$('.wolvie-dashing').hide();
		$('.wolvie-drillclaw').hide();
		$('.wolvie-stand').hide();
		$('.wolvie-standingattacks').hide();
		$('.wolvie-timeout').show();
		$('.wolvie-tnt').hide();
		$('.wolvie-wins2').hide();
	}
	function tnt () {
		removestarburst ();
		wvletsgobub ();
		$("h2").remove();
		$(".header2").append("<h2>TNT!</h2>");
		juggernaughttaunt ()
		$('.wolv-c1').hide();
		$('.wolv-hp').hide();
		$('.wolvie-crouchblock').hide();
		$('.wolvie-dashing').hide();
		$('.wolvie-drillclaw').hide();
		$('.wolvie-stand').hide();
		$('.wolvie-standingattacks').hide();
		$('.wolvie-timeout').hide();
		$('.wolvie-tnt').show();
		$('.wolvie-wins2').hide();
	}
	function wins2 () {
		removestarburst () ;
		wvrookie ();
		$("h2").remove();
		$(".header2").append("<h2>WINS!</h2>");
		juggernaughttaunt ();
		$('.wolv-c1').hide();
		$('.wolv-hp').hide();
		$('.wolvie-crouchblock').hide();
		$('.wolvie-dashing').hide();
		$('.wolvie-drillclaw').hide();
		$('.wolvie-stand').hide();
		$('.wolvie-standingattacks').hide();
		$('.wolvie-timeout').hide();
		$('.wolvie-tnt').hide();
		$('.wolvie-wins2').show();
	}
	function stand () {
		removestarburst ();
		$("h2").remove();
		$(".header2").append("<h2>READY!</h2>");
		juggernaughtstand1 ();
		$('.wolv-c1').hide();
		$('.wolv-hp').hide();
		$('.wolvie-crouchblock').hide();
		$('.wolvie-dashing').hide();
		$('.wolvie-drillclaw').hide();
		$('.wolvie-stand').show();
		$('.wolvie-standingattacks').hide();
		$('.wolvie-timeout').hide();
		$('.wolvie-tnt').hide();
		$('.wolvie-wins2').hide();
	}
	
	function juggernaughttaunt () {
		$('.juggernaut-stand').hide();
		$('.juggernaut-crazy').hide();
		$('.juggernaut-taunt').show();
		$('.juggernaut-dive').hide();
		$('.juggernaut-earth').hide();
		$('.juggernaut-dash').hide();
	}
	function juggernaughtstand1 () {
		$('.juggernaut-stand').show();
		$('.juggernaut-crazy').hide();
		$('.juggernaut-dive').hide();
		$('.juggernaut-taunt').hide();
		$('.juggernaut-earth').hide();
		$('.juggernaut-dash').hide();
	}
	function juggernaughtcrazy () {
		$('.juggernaut-stand').hide();
		$('.juggernaut-crazy').show();
		$('.juggernaut-dive').hide();
		$('.juggernaut-taunt').hide();
		$('.juggernaut-earth').hide();
		$('.juggernaut-dash').hide();
	}
	function juggernaughtdive () {
		$('.juggernaut-stand').hide();
		$('.juggernaut-crazy').hide();
		$('.juggernaut-dive').show();
		$('.juggernaut-taunt').hide();
		$('.juggernaut-earth').hide();
		$('.juggernaut-dash').hide();
	}
	function juggernaughtearth () {
		$('.juggernaut-stand').hide();
		$('.juggernaut-crazy').hide();
		$('.juggernaut-dive').hide();
		$('.juggernaut-taunt').hide();
		$('.juggernaut-earth').show();
		$('.juggernaut-dash').hide();
	}
	function juggernaughtdash () {
		playheadcrush () ;
		$('.juggernaut-stand').hide();
		$('.juggernaut-crazy').hide();
		$('.juggernaut-dive').hide();
		$('.juggernaut-taunt').hide();
		$('.juggernaut-earth').hide();
		$('.juggernaut-dash').show();
	}
	function playheadcrush () {
		$('#headcrush')[0].volume = 1;
		$('#headcrush')[0].load();
		$('#headcrush')[0].play();
	}
	function wvberzerkerbarrage () {
		$('#wvberzerkerbarrage')[0].volume = 1;
		$('#wvberzerkerbarrage')[0].load();
		$('#wvberzerkerbarrage')[0].play();
	}
	function wvdrillclaw () {
		$('#wvdrillclaw')[0].volume = 1;
		$('#wvdrillclaw')[0].load();
		$('#wvdrillclaw')[0].play();
	}
	function wvletsgobub () {
		$('#wvletsgobub')[0].volume = 1;
		$('#wvletsgobub')[0].load();
		$('#wvletsgobub')[0].play();
	}
	function wvrookie () {
		$('#wvrookie')[0].volume = 1;
		$('#wvrookie')[0].load();
		$('#wvrookie')[0].play();
	}
	function wvtornadoclaw () {
		$('#wvtornadoclaw')[0].volume = 1;
		$('#wvtornadoclaw')[0].load();
		$('#wvtornadoclaw')[0].play();
	}
	function addlightstarburst() {
		$(".main").addClass("lightstarburst");
	}
	function addstarburst() {
		$(".main").addClass("starburst");
	}
	function removestarburst() {
		$(".main").removeClass("lightstarburst");
		$(".main").removeClass("starburst");
	}
});