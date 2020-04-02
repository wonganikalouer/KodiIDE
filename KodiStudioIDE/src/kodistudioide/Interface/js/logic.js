var tool_data=null
var dragState=false
var objectsCount=0
var elementE=null
function _ready(argument) {
	document.addEventListener("mousemove",function(evt){
		var d=0
		if(!dragState){
			d=0
		}else{
			d=30
		}
		get("#drag_icon").style.marginLeft=(evt.screenX-0)+"px"
		get("#drag_icon").style.marginTop=(evt.screenY-(180-d))+"px"
	
	},true)
	setupToolDG()
}

function setupToolDG(argument) {
	var tools=get("#tools").children
	for(var i=0;i<tools.length;i++){
	var t1=tools[i]
	t1.addEventListener("mousedown",function(evt) {
		evt.preventDefault()
		tool_data=evt.target
		dragState=true
		document.querySelector("#drag_icon").style.display="block"
	},true)
}
	get(".app").addEventListener("mouseup",function(evt) {
		evt.preventDefault()
		if(dragState){
		dragState=false
		//create this objec here
		var ob=create(tool_data.tagName)
		ob.id="obj_"+objectsCount
		ob.style.margin="0px"
		ob.innerHTML="object "+objectsCount
		get(".app").appendChild(ob)
		tool_data=null
		objectsCount++
		editorEvents()
		editProperties(ob)
		hide("#drag_icon")
	}
	},true)
}

function editorEvents() {
	var a=get(".app").children
	for(var k=0;k<a.length;k++){
		a[k].addEventListener("click",function(evt) {
			evt.preventDefault()
			var t=evt.target
			editProperties(t)
		},true)
	}
}


function editProperties(t) {
	//
	elementE=t
	setValue("propertyID",t.id)	
	setValue(".t2","Properties [ "+t.id+" ]")	
}

function updateWidth() {
	var w=get("w").value
	setWidth("ow","0%")
	if(w=="Fill Parent"){
		elementE.style.width="100%"
	}else if(w=="Wrap Text"){
		elementE.style.width="auto"
	}else{
		setWidth("ow","90%")
	}
}

function updateWidthOther() {
	var w=get("ow").value
	elementE.style.width=w+"px"
}

function updateHeight() {
	var w=get("h").value
	setWidth("oh","0%")
	if(w=="Fill Parent"){
		elementE.style.height="100%"
	}else if(w=="Wrap Text"){
		elementE.style.height="auto"
	}else{
		setWidth("oh","90%")
	}
}

function updateHeightOther() {
	var w=get("oh").value
	elementE.style.height=w+"px"
}

function updateElementID() {
	elementE.id=getValue("propertyID")	
	setValue(".t2","Properties [ "+elementE.id+" ]")	
}

function changeElementBG() {
	elementE.style.backgroundColor=get("bgColor").value
}
function changeElementColor() {
	elementE.style.color=get("fColor").value
}

function updateText() {
	try{
		elementE.innerHTML=get("propertyText").value
		elementE.value=get("propertyText").value
}catch(err){
	Toast(err)
}
}