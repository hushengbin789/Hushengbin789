~function() {
	function ajaxPromise(options) {
		var _default = {
			url: "",
			type: "GET",
			async: true,
			data: null,
		}

		for(var key in options) {
			if(options.hasOwnProperty(key)) {
				_default[key] = options[key];
			}
		}
		var pro = new Promise(function(reslove, reject) {

			var xhr = new XMLHttpRequest();
			if(_default.type == "GET") {
				var suffix = _default.url.indexOf("?") > -1 ? "&" : "?";
				_default.url += suffix + "_=" +Math.random();
			}

			xhr.open(_default.type, _default.url, _default.async);
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					reslove(xhr.responseText);
				}
			}
			setTimeout(function() {
				reject("数据请求失败");
			}, 1000);
			
			xhr.send(_default.data);
			
		});
		return pro;
	}
	window.ajaxPromise = ajaxPromise;
}();