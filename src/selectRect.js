import $ from 'jquery';
var dataFormate = "px";
selectRect.prototype.ElementName = "box";
selectRect.prototype.init = function (name) {
    //元素名称
    if (name) selectRect.prototype.ElementName = name;
    var _Box = document.getElementsByClassName(name)[0];
    _Box.setAttribute("class", "box" + " " + this.ElementName);
    var _this = this;
    this.select = null;

    ["r", "l", "t", "b", "br", "bl", "tr", "tl"].map(function (value) {
        var ele = document.createElement("span")
        ele.setAttribute("class", value)
        _Box.appendChild(ele);
    });
    $("body").click(function (e) {
        if (e.target.className != "test" && e.target.className != "rrr") { return };
        _Box.style.display = "block";
        _this.select = document.getElementsByClassName(e.target.className)[0];
        _this.registTouchEvent.call(_this, _this.select);
        _Box.style.width = _this.select.offsetWidth + dataFormate;
        _Box.style.height = _this.select.offsetHeight + dataFormate;
        _Box.style.left = _this.select.offsetLeft + dataFormate;
        _Box.style.top = _this.select.offsetTop + dataFormate;
    })
    var lines = _Box.getElementsByTagName('span');
    for (var i = 0; i < lines.length; i++) {
        this.registTouchEvent.call(this, lines[i]);
    }
}
selectRect.prototype.registTouchEvent = function (obj) {
    var _this = this;
    var _Box = document.getElementsByClassName(this.ElementName)[0];
    var className = obj.className;
    obj.onmousedown = function (ev) {
        var oldWidth = _Box.offsetWidth,
            oldHeight = _Box.offsetHeight,
            oldX = ev.clientX,
            oldY = ev.clientY,
            oldLeft = _Box.offsetLeft,
            oldTop = _Box.offsetTop;
            var distanceX = oldX - oldLeft;
　　　　     var distanceY = oldY - oldTop;

        document.onmousemove = function (ev) {
            var offsetX = ev.clientX - oldX;
            var offsetY = ev.clientY - oldY;
            switch (className) {
                case "tl":
                    _Box.style.width = oldWidth - offsetX + dataFormate;
                    _Box.style.height = oldHeight - offsetY + dataFormate;
                    _Box.style.left = oldLeft + offsetX + dataFormate;
                    _Box.style.top = oldTop + offsetY + dataFormate;
                    break;
                case "bl":
                    _Box.style.width = oldWidth - offsetX + dataFormate;
                    _Box.style.height = oldHeight + offsetY + dataFormate;
                    _Box.style.left = oldLeft + offsetX + dataFormate;
                    break;
                case "tr":
                    _Box.style.width = oldWidth + offsetX + dataFormate;
                    _Box.style.height = oldHeight - offsetY + dataFormate;
                    _Box.style.top = oldTop + offsetY + dataFormate;
                    break;
                case "br":
                    _Box.style.width = oldWidth + offsetX + dataFormate;
                    _Box.style.height = oldHeight + offsetY + dataFormate;
                    break;
                case "t":
                    _Box.style.height = oldHeight - offsetY + dataFormate;
                    _Box.style.top = oldTop + offsetY + dataFormate;
                    break;
                case "b":
                    _Box.style.height = oldHeight + offsetY + dataFormate;
                    break;
                case "l":
                    _Box.style.height = oldHeight + dataFormate;
                    _Box.style.width = oldWidth - offsetX + dataFormate;
                    _Box.style.left = oldLeft + offsetX + dataFormate;
                    break;
                case "r":
                    _Box.style.height = oldHeight + dataFormate;
                    _Box.style.width = oldWidth + offsetX + dataFormate;
                    break;
                default:
                    _Box.style.left = ev.clientX-distanceX + 'px';
                    _Box.style.top = ev.clientY-distanceY + 'px'; 
                    break;
            }
            _this.select.style.width = _Box.style.width;
            _this.select.style.height = _Box.style.height;
            _this.select.style.left = _Box.style.left;
            _this.select.style.top = _Box.style.top;
        };
        document.onmouseup = function () {
            document.onmousemove = null;
        };
        return false;
    };
}
export function selectRect() {}