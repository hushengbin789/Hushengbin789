
//js片段

if (typeof ZeroClipboard != 'undefined' && $('#ZeroClipboardScript').length) {
	ZeroClipboard.setMoviePath(($('#ZeroClipboardScript').attr('src')).replace('.js', '.swf'));
}
function copyURL(obj, callback) {
	// 创建账户URL的剪切板
	var clip = new ZeroClipboard.Client();
	clip.setHandCursor(true);

	clip.addEventListener('mouseOver', function (client) {
		clip.setText($(obj).attr('url'));
	});
	if (typeof callback == 'function') {
		clip.addEventListener("complete", callback);
	}
	clip.glue(obj);
}

//初始化checkbox
function initCheckbox() {
	var $ckbs = $('.ckbWrap:visible').not('.inited');
	$ckbs.each(function (index) {
		var $wrap = $(this);
		var $ctrl = $(this).find('input[type=checkbox]');
		if ($ctrl.is(':disabled')) {
			$(this).addClass('disabled');
		}
		if ($ctrl.prop('checked')) {
			$(this).addClass('checked');
		}
		$(this).addClass('inited');

		$ctrl.change(function () {
			if ($ctrl.prop('checked')) {
				$wrap.addClass('checked');
			} else {
				$wrap.removeClass('checked');
			}
		});
	});
}

//初始化radio
function initRadio() {
	var $rdos = $('.rdoWrap:visible').not('.inited');
	$rdos.each(function (index) {
		var $ctrl = $(this).find('input[type=radio]');
		if ($ctrl.is(':disabled')) {
			$(this).addClass('disabled');
		}
		if ($ctrl.prop('checked')) {
			$(this).addClass('checked');
		}
		$(this).addClass('inited').click(function () {
			if ($(this).hasClass('disabled')) {
				return false;
			}
			if (!$ctrl.prop('checked')) {
				$ctrl.prop('checked', true).trigger('change');
				var $others = $('input[name=' + $ctrl.attr('name') + ']').not($ctrl);
				$(this).addClass('checked');
				$others.prop('checked', false).parent().removeClass('checked');
			}
		});
	});
}

//初始化select
function initSelect() {
	var $slts = $('.g-select:visible').not('.inited');
	$slts.each(function () {
		var $slt = $(this).find('select');
		var $ipt = $(this).find('.ipt');
		$slt.change(function () {
			$ipt.val($(this).find('option:selected').text());
		});
		$(this).addClass('inited');
	});
}

//将内容插入到光标处
(function ($) {
	$.fn.extend({
		insertAtCaret: function (myValue) {
			var $t = $(this)[0];
			if (document.selection) {
				this.focus();
				sel = document.selection.createRange();
				sel.text = myValue;
				this.focus();
			} else
				if ($t.selectionStart || $t.selectionStart == '0') {
					var startPos = $t.selectionStart;
					var endPos = $t.selectionEnd;
					var scrollTop = $t.scrollTop;
					$t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
					this.focus();
					$t.selectionStart = startPos + myValue.length;
					$t.selectionEnd = startPos + myValue.length;
					$t.scrollTop = scrollTop;
				} else {
					this.value += myValue;
					this.focus();
				}
		}
	})
})(jQuery);

$(function () {
	//启会科技下拉菜单
	$('.dropdown').each(function () {
		var $this = $(this);
		var $menus = $(this).find('.dropdownMenus');
		$(this).click(function (e) {
			if (!$(this).hasClass('isHidden')) {
				$menus.slideDown(300);
				$(this).addClass('isHidden');
			} else {
				$menus.slideUp(300);
				$(this).removeClass('isHidden');
			}
		});
		$menus.mouseleave(function () {
			$menus.slideUp(300);
			$this.removeClass('isHidden');
		});
	});

	//左侧菜单固定
	var $aside = $('.aside');
	if ($aside.length) {
		var timerScroll = null;
		var asideH = $aside.outerHeight();
		var winH = $(window).height();
		//$aside.css('minHeight', winH);
		function setAsidePos() {
			winH = $(window).height();
			if (asideH > winH && !$aside.hasClass('fixed')) {
				return;
			}
			if ($(window).scrollTop() >= 76) {
				$aside.addClass('fixed');
			} else {
				$aside.removeClass('fixed');
			}
		}
		$(window).scroll(function () {
			if (timerScroll) {
				clearTimeout(timerScroll);
				timerScroll = null;
			}
			timerScroll = setTimeout(setAsidePos, 100);
		});
		setAsidePos();
	}

	//复制链接
	(function () {
		//var $copyURL = $('a[name=copyURL]');
		//if (!$copyURL.length) {
		//	return;
		//}

		if (typeof ZeroClipboard != 'undefined') {
			$(window).resize(reSetClipPos);
		}
		//reSetClipPos();

		function reSetClipPos() {
			var clips = ZeroClipboard.clients;
			for (var id in clips) {
				clips[id].reposition();
			}
		}
	})();

	
	//初始化checkbox
	initCheckbox();
	
	//初始化radio
	initRadio();

	//初始化select
	initSelect();

	//分页每页显示条数
	$('#pagebar').delegate('.g-select select', 'change', function () {
		var val = $(this).val();
		var valIpt = $(this).closest('.pagebar_numlist').find('.g-input').val();
		setTimeout(function () {
			$('#sltPage input').val(val);
		}, 50);
		if (typeof getData == 'function') {
			getData(valIpt, val, true);
			console.log('getData(' + valIpt + ', ' + val + ', true)');
		}
	});

});
