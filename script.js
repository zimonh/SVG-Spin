const paths = [{
	d:'M12,29.2c0.4-2.3,3.5-4.7,5.3-6.1c3-2.2,5.6-4,6.8-7.2c1.7-4.7,1.8-10.4-5-13.8c-0.1,0,1.9,2.8,2.3,4.1c0.6,1.8,0.9,8.6-4.4,14.1c-1.9,1.9-5.6,4.2-9.7,2.2c-4.5-2.1-4-6.3-3.2-9.2c1.5-5.1,5.1-9,10.4-11.9C11.7-2.4,4.7,5.8,4.1,6.9C2.2,10.4,0,15.1,0.9,19.4c0.8,4.1,5.1,5.4,7,8.7c0.7,1.2,1.1,3.2,1.4,4.2c0.2,0.8,0.4,3.6,2,2.4 C12.6,33.7,11.7,30.5,12,29.2z',
	x:-13,y:-16},{
	d:'M6.6,43.8c0,2.4,0,4.5,0.1,7c0.2,5.3-2.5,3.5-4.1,6.1c-1.2,2,2.9,6.3,5.4,4.5c0.7-0.5,1.4-0.5,2-0.6c1.1-0.1,5.4,3.9,7.7,3.4c2.2-0.4,1.8-2.9,1.3-4.8c-0.8-2.9-2.5-0.9-6.2-5.4c-3.6-4.3,0.7-32.1,0.3-37.5c-0.2-2.8,2.2-4.2,3.6-7c1.3-2.6,2.8-3.4,1.4-6.3c-0.5-1-2.9-3.7-4.4-2.5c-1.7,1.4-1.9,4.5-3.6,5.7C7.7,8.2,5,2.3,2,2.9 C0.2,3.4,0.5,9.4,2.1,9.7c3.3,0.8,4.8,5,4.8,5S6.6,40.1,6.6,43.8z',
	x:-9,y:-31},{
	d:'M8.6,22.1C8.8,25.8,7,41.1,6.8,45c-0.1,2.5,0.3,5.7-0.1,8.3c-0.4,2.8-2.7,3.3-3.4,6.5c-0.6,3.1,0.6,6.5,2.9,4.9c0.6-0.5,1.8-3.7,5.4-3.8c2.6-0.1,3.1,3.2,5.2,2.9c1.9-0.3,2.9-3.2,1.7-4.6c-2.2-2.6-4.3-2.7-6.5-10.4c-1.5-5.6,1-29.9,0.8-35.7c-0.1-2.9,4.6-0.4,6-3.3c1.3-2.7,0-3.2-1-6.4c-0.4-1.1-2.2-3.4-3.5-2.3C12.9,2.4,12,3.8,10.5,5C8.4,6.6,6.6,1.4,4,1.9C2.5,2.3-0.8,8,1.4,12.1c2.5,1.6,2.4-1.3,4.7-0.3C8.5,12.9,8.5,20.3,8.6,22.1z',
	x:-10,y:-33},{
	d:'M12.6,33.3c0-4,0-8.1,0.2-12.1c0.2-3.5-0.2-8,2-10.9c2-2.7,4.4-4.7,2.5-8.2c-0.3-0.6-0.7-0.8-1.2-0.8c-1.6,0-3.9,3-4.5,3.6C11,5.4,10.5,5.6,10,5.6c-1.8,0-3.1-3-4.5-4.4C5.1,0.8,4.8,0.7,4.4,0.7c-1.7,0-3.6,3.5-3.5,4.8c0.4,3.1,4.3,5.8,5.7,8.6c1.8,3.3,0.9,8.8,0.9,12.4c0,4.1,0.1,8.2,0.1,12.3c0,3.8,0.6,8.3-1.8,11.5c-2.2,2.9-4.8,2.8-5.1,6.8c0.1,2.1,1,2.8,2.2,2.8c0.8,0,1.7-0.4,2.7-1c1.2-0.8,2.5-2.8,4-2.8c1.2,0,2.3,1.2,3.3,1.7 c0.4,0.2,0.8,0.3,1.3,0.3c2.4-0.1,5.2-2.6,3.9-4.9c-0.7-1.3-2.3-1.3-3.3-2.1c-1.2-1-1.2-2.6-1.4-4C12.9,42.4,12.6,37.8,12.6,33.3z',
	x:-10,y:-30}];

const group = inp => `<g transform='rotate(${inp.rotate}) translate(${paths[inp.number].x + inp.translateX} ${paths[inp.number].y + inp.translateY}) scale(${inp.scale})'><path d="${paths[inp.number].d}"/></g>`;

const rand = e => Math.floor(e * Math.random());

//generate spinning bone circle
const svg = inp => {

	let layer = '',
		spin = 'spin';

	if(inp.direction === 0) spin = 'spinR';

	for (var i = 0; i < inp.layers; i++){

		const density = inp.density-i;

		let groups = '';

		for (var j = 0; j < density * density * inp.multi ; j++) {
			groups += group({number: rand(4),
				rotate:rand(366),
				translateX:rand(inp.rand1),
				translateY:inp.rand2Stable+rand(inp.rand2),
				scale:inp.scale});
		}
		layer += `<layer>
		<svg
		style="
			animation: ${spin} ${inp.minSpeed+density*inp.Speed}s linear infinite;"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-${inp.size/2} -${inp.size/2} ${inp.size} ${inp.size}" >${groups}</svg></layer>`;

	}
	return layer;
};


const settings = {
	"direction":1,
	"layers":2,
	"density":6,
	"multi":38,
	"rand1":290,
	"rand2":216,
	"scale":1.3,
	"size":787,
	"minSpeed":70,
	"Speed":8,
	"rand2Stable":0
};


document.querySelector('#svg_container').innerHTML = svg(settings);


/*settings menu*/

setTimeout(()=>{

	document.querySelector('body').insertAdjacentHTML('beforeend', `<form id="formy">

	<p onclick="document.querySelector('#settings').style.display='inline-block';">Settings</p>
	<div id="settings" style="display:none;">
	<p style="float:right" onclick="document.querySelector('#settings').style.display='none';">x</p>
	<textarea></textarea>
	<inny>layers:			<input id="T_layers" 		type="range" min="0" 		max="15" 	step="1" 	value="${settings.layers}"		onmouseup="adjustSettings();"></inny>
	<inny>density:			<input id="T_density" 		type="range" min="0" 		max="15" 	step="1" 	value="${settings.density}"	onmouseup="adjustSettings();"></inny>
	<inny>nr per layer:		<input id="T_multi" 		type="range" min="0" 		max="100" 	step="1" 	value="${settings.multi}" 		onmouseup="adjustSettings();"></inny>
	<inny>Y-random:			<input id="T_rand1" 		type="range" min="0" 		max="366" 	step="1" 	value="${settings.rand1}"  	onmouseup="adjustSettings();"></inny>
	<inny>X-random::		<input id="T_rand2" 		type="range" min="0" 		max="366" 	step="1" 	value="${settings.rand2}"  	onmouseup="adjustSettings();"></inny>
	<inny>scale:			<input id="T_scale" 		type="range" min="0" 		max="2" 	step="0.1"	value="${settings.scale}" 		onmouseup="adjustSettings();"></inny>
	<inny>size:				<input id="T_size" 			type="range" min="0" 		max="1000" 	step="1" 	value="${settings.size}"  		onmouseup="adjustSettings();"></inny>
	<inny>minSpeed:			<input id="T_minSpeed" 		type="range" min="0" 		max="300" 			 	value="${settings.minSpeed}"  	onmouseup="adjustSettings();"></inny>
	<inny>Slow:				<input id="T_Speed" 		type="range" min="0" 		max="100" 	step="1" 	value="${settings.Speed}"  	onmouseup="adjustSettings();"></inny>
	<inny>Hole:				<input id="T_rand2Stable"	type="range" min="0" 		max="200" 	step="1" 	value="${settings.rand2Stable}"onmouseup="adjustSettings();"></inny>
	<inny>direction:		<input id="T_direction" 	type="range" min="0" 		max="1" 	step="1" 	value="${settings.direction}" 	onmouseup="adjustSettings();"></inny>
	</div></form>`);

},1000);


const va = inp => Number(document.querySelector(inp).value);


const adjustSettings = ()=>{

	const hill_1 = {
		direction:	va('#T_direction'),
		layers:		va('#T_layers'),
		density:	va('#T_density'),
		multi:		va('#T_multi'),
		rand1:		va('#T_rand1'),
		rand2:		va('#T_rand2'),
		scale:		va('#T_scale'),
		size:		va('#T_size'),
		minSpeed:	va('#T_minSpeed'),
		Speed:		va('#T_Speed'),
		rand2Stable:va('#T_rand2Stable')};

	document.querySelector('textarea').value = JSON.stringify(hill_1);

	document.querySelector('#svg_container').innerHTML = svg(hill_1);

};