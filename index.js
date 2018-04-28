function MyLunbo(container, imgwidth, imgheight, imgurl, imgmarginLeft, speed, imgborder, movedistance) {
	this.doc = document,
	this.container = container,
	this.width = imgwidth,
	this.height = imgheight,
	this.arr = [],
	this.dis = movedistance,
	this.marginLeft = imgmarginLeft,
	this.speed = speed,
	this.distance = movedistance,
	this.border = imgborder,
	this.timer,
	this.flag = true,
	this.init = function() {
		this.creatdom();
		this.move();
	}
};
MyLunbo.prototype = {
	constructor: MyLunbo,
	creatdom: function() {
		var div = this.doc.createElement("div");
		div.setAttribute('id', 'div');
		for(var i = 0; i < arr.length; i++) {
			this.arr.push(arr[i]);
			var img = this.doc.createElement('img');
			img.setAttribute("id", 'img')
			img.style.width = this.width + "px";
			img.style.height = this.height + "px";
			img.style.float = "left";
			img.style.border = "this.border solid #e3e3e4"
			img.style.marginLeft = this.marginLeft + "px";
			img.src = this.arr[i];
			div.appendChild(img)
		}
		if(img.style.marginLeft !== 0) {
			div.style.width = arr.length * (this.width + parseInt(img.style.marginLeft) + this.border) + "px";
		} else {
			div.style.width = arr.length * this.width + "px";
		}
		div.style.height = this.height + "px";
		div.style.position = 'absolute';
		div.style.left = 0;
		div.style.overflow = "hidden";
		this.container.appendChild(div);
	},
	move: function() {
		var _this = this;
		function auto() {
			_this.dis = _this.dis + _this.distance;
			var equal = parseInt(div.style.width) - _this.marginLeft - _this.border - _this.width;
			if(_this.dis >= equal) {
				_this.dis = 0;
			}
			div.style.left = -_this.dis + "px";
		}
		this.timer = setInterval(auto, _this.speed)
		this.container.onmouseenter = function() {
			clearInterval(_this.timer)
		},
		this.container.onmouseleave = function() {
			_this.timer = setInterval(auto, _this.speed)
		}
	},
}


//	var l = new Lunbo(box, 500, 500, arr, 0, 10, 1, 1)
//	l.init()