const grid=document.querySelector('#grid');
for(var i=0;i<16;i++){
		const row=document.createElement('tr');
		row.setAttribute('id','row');
		grid.appendChild(row);
		for(var j=0;j<16;j++){
			const col=document.createElement('td');
			col.classList.add('col');
			col.setAttribute('style','border:1px solid black; height:30px; width:30px;');
			row.appendChild(col);
		}
}
var color="white";
var state=0;

var tds = document.getElementsByClassName('col');

for(var i=0; i<tds.length; i++){
	tds[i].addEventListener('mouseover', function(event){
		if(state === 0)
			return;
		var td = event.target;
		td.style.background = color;
	});
}

var allcolors = document.getElementById('colorpanel').childNodes;

for(var i=0; i<allcolors.length; i++){
	allcolors[i].addEventListener('click',function(event){
		state=1;
		var node = event.target;
		color = node.id;
	})
}

document.getElementById('nochange').addEventListener('click',function(event){
	state=0;
});