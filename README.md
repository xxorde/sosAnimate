sosAnimate.js
=============

This is a litle set of functions, wich can help you with simple animations.  

Have a look at the two examples: example-animate.html and example-fade.html.

## Install

	<script type="text/javascript" src="sosAnimate.js"></script>

## Animate

These functions help you to change different variables over time.

### easyAnimate
	easyAnimate(target,variable,begin,end)
	
#### example: easyAnimate('menuBottom','bottom',-32,0);
<table border=1>
	<tr>
		<th>name</th><th>example</th><th>description</th>
	</tr>
	<tr>
		<td>target</td><td>'menuBottom'</td><td>The element wich should be animated.</td>
	</tr>
	<tr>
		<td>variable</td><td>'bottom'</td><td>Thr variable, wich should be changed. Top / Bottom / Left ....</td>
	</tr>
	<tr>
		<td>begin</td><td>-32</td><td>The startposition of the element. For a 32px heigh div, maybe -32px is right for you.</td>
	</tr>
	<tr>
		<td>end</td><td>0</td><td>The point where the animation stops.</td>
	</tr>
</table>

### animate
	animate(target,variable,begin,end,delay,countdown,incdelay)
	
#### example: animate('menuTop','top',-32,0,20,15,4);
<table border=1>
	<tr>
		<th>name</th><th>example</th><th>description</th>
	</tr>
	<tr>
		<td>target</td><td>'menuTop'</td><td>The element wich should be animated.</td>
	</tr>
	<tr>
		<td>variable</td><td>'top'</td><td>Thr variable, wich should be changed. Top / Bottom / Left ....</td>
	</tr>
	<tr>
		<td>begin</td><td>-32</td><td>The startposition of the element. For a 32px heigh div, maybe -32px is right for you.</td>
	</tr>
	<tr>
		<td>end</td><td>0</td><td>The point where the animation stops.</td>
	</tr>
	<tr>
		<td>delay</td><td>20</td><td>The time between animation.</td>
	</tr>
	<tr>
		<td>countdown</td><td>15</td><td>Countdown before animation. (countdown * delay = time to begin).</td>
	</tr>
	<tr>
		<td>incdelay</td><td>4</td><td>Changing speed over time. Bigger value makes it slower.</td>
	</tr>
</table> 
	
## Fade

These functions help you to fade in and out elements.

### easyFade
	easyFade(target,begin,end)
	
#### example: easyFade('menuBottom',0,100);
<table border=1>
	<tr>
		<th>name</th><th>example</th><th>description</th>
	</tr>
	<tr>
		<td>target</td><td>'menuBottom'</td><td>The element wich should be animated.</td>
	</tr>
	<tr>
		<td>begin</td><td>0</td><td>Start opacity. (0% to 100%)</td>
	</tr>
	<tr>
		<td>end</td><td>100</td><td>End opacity. (0% to 100%)</td>
	</tr>
</table>

### fade
	fade(target,begin,end,delay,countdown,incdelay)

#### example: fade('menuTop',0,100,20,15,2);
<table border=1>
	<tr>
		<th>name</th><th>example</th><th>description</th>
	</tr>
	<tr>
		<td>target</td><td>'menuTop'</td><td>The element wich should be animated.</td>
	</tr>
	<tr>
		<td>begin</td><td>0</td><td>Start opacity. (0% to 100%)</td>
	</tr>
	<tr>
		<td>end</td><td>100</td><td>End opacity. (0% to 100%)</td>
	</tr>
	<tr>
		<td>delay</td><td>20</td><td>The time between animation.</td>
	</tr>
	<tr>
		<td>countdown</td><td>15</td><td>Countdown before animation. (countdown * delay = time to begin).</td>
	</tr>
	<tr>
		<td>incdelay</td><td>2</td><td>Changing speed over time. Bigger value makes it slower.</td>
	</tr>
</table> 
