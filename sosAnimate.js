/*======================================================================
 * Alexander Sosna {alexander (at) xxor (dot) de}
 * Find more stuff: http://xxor.de or https://github.com/xxorde
 *
 * This code is licensed to you under the terms of the GNU General
 * Public License, version 2.0. 
 * See GPL2 file for the text of the licenses!
 * http://www.gnu.org/licenses/gpl-2.0.txt
 * You want any other licence? Mail me, I am a nice person :D
 *
======================================================================*/
var sosAnimator = 0;
var sosAnimateTimer = new Array();

function easyAnimate(target,variable,begin,end) {
	animate(target,variable,begin,end,40,0,0)
}

function animate(target,variable,begin,end,delay,countdown,incdelay) {
 	var value = begin;
 	eval ("document.getElementById(target).style." + variable+ " = '"+value+"px'");
 	sosAnimateTimer[sosAnimator]=setTimeout("animateHelper('"+target+"','"+variable+"','"
				+value+"','"+end+"','"+delay+"','"+countdown+"','"+incdelay+"','"+sosAnimator+"')",delay);
	sosAnimator++;
 }
 		 
 function animateHelper(target,variable,value,end,delay,countdown,incdelay,animatorID){
	window.clearInterval(sosAnimateTimer[animatorID]);
 	if(countdown > 0){
 		countdown--;
 	} else {
 		if(incdelay)
 			delay = Number(delay) + (Number(delay) * ( Number(incdelay) * 0.01));
		eval ("document.getElementById(target).style." + variable+ " = '"+value+"px'");
		value++;
	}
	
	if(value <= end)
		sosAnimateTimer[animatorID]=setTimeout("animateHelper('"+target+"','"+variable+"','"+value+"','"+end+"','"+delay+"','"+countdown+"','"+incdelay+"','"+animatorID+"')",delay);
 }	

 function easyFade(target,begin,end) {
 	fade(target,begin,end,40,0,0);
 }
 
 function fade(target,begin,end,delay,countdown,incdelay) {
  	var value = begin;
  	document.getElementById(target).style.opacity = value/100;
  	sosAnimateTimer[sosAnimator]=setTimeout("fadeHelper('"+target+"','"+value+"','"+end+"','"+delay+"','"+countdown+"','"+incdelay+"','"+sosAnimator+"')",delay);
  	sosAnimator++;
  }
  		 
  function fadeHelper(target,value,end,delay,countdown,incdelay,animatorID){
  window.clearInterval(sosAnimateTimer[animatorID]);
  	if(countdown > 0){
  		countdown--;
  	} else {
  		if(incdelay)
  			delay = Number(delay) + (Number(delay) * ( Number(incdelay) * 0.01));
 		document.getElementById(target).style.opacity = value/100;
 		value++;
 	}
 	if(value <= end)
 		sosAnimateTimer[animatorID]=setTimeout("fadeHelper('"+target+"','"+value+"','"+end+"','"+delay+"','"+countdown+"','"+incdelay+"','"+animatorID+"')",delay);
  }	
 
