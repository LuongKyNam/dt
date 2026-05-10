(function ( w, d, PKAE ) {
'use strict';

setTimeout(function () {

	PKAudioEditor._deps.Wlc = function () {
			var body_str = '';
			var body_str2 = '';

			if (PKAE.isMobile) {
				change -= 15;
				body_str = 'Tips:<br/>Hãy đảm bảo thiết bị của bạn không ở chế độ im lặng. Bạn có thể cần phải bật công tắc im lặng. '+
				'<img src="phone-switch.jpg" style="max-width:224px;max-height:126px;width:40%;margin: 10px auto; display: block;"/>'+
				'<br/><br/>';
			}
			else {
				body_str = 'Mẹo:<br/>Xin lưu ý rằng hầu hết các phím tắt đều dựa vào <strong>Shift + <u>key</u></strong> kết hợp. (ví dụ: Shift+Z để hoàn tác, Shift+C sao chép, Shift+X cắt... v.v.)<br/><br/>';
				body_str2 = 'Ứng dụng hoạt động tại <a href="https://data.namls.name.vn" target="_blank">namls.name.vn</a><br/><br/>'; // checkout the code on github
			}

			// Welcome to AudioMass,
			var md = new PKSimpleModal({
				title: '<font style="font-size:15px">Chào mừng đến với LGV91 Editor Audio Mixer</font>',
				ondestroy: function( q ) {
					PKAE.ui.InteractionHandler.on = false;
					PKAE.ui.KeyHandler.removeCallback ('modalTemp');
			},
			body:'<div style="overflow:auto;-webkit-overflow-scrolling:touch;max-width:580px;width:calc(100vw - 40px);max-height:calc(100vh - 340px);min-height:110px;font-size:13px; color:#95c6c6;padding-top:7px;">'+
				'LGV91 Editor Audio Mixer là Trình chỉnh sửa dạng sóng và âm thanh dựa trên web, mã nguồn mở, miễn phí.<br />Nó chạy hoàn toàn trong trình duyệt mà không cần chương trình phụ trợ và không cần plugin!'+
				'<br/><br/><br/>'+
				body_str+
				'Bạn có thể tải bất kỳ loại âm thanh nào mà trình duyệt của bạn hỗ trợ và thực hiện các thao tác như tăng dần, cắt, cắt, thay đổi âm lượng, '+
				'và áp dụng rất nhiều hiệu ứng âm thanh.<br/><br/>'+
				body_str2+
				'</div>',
			setup:function( q ) {
					PKAE.ui.InteractionHandler.checkAndSet ('modal');
					PKAE.ui.KeyHandler.addCallback ('modalTemp', function ( e ) {
						q.Destroy ();
					}, [27]);

					// ------
					var scroll = q.el_body.getElementsByTagName('div')[0];
					scroll.addEventListener ('touchstart', function(e){
						e.stopPropagation ();
					}, false);
					scroll.addEventListener ('touchmove', function(e){
						e.stopPropagation ();
					}, false);

					// ------
				}
			});
			md.Show ();
			document.getElementsByClassName('pk_modal_cancel')[0].innerHTML = '&nbsp; &nbsp; &nbsp; OK &nbsp; &nbsp; &nbsp;';
	};

	var change = 96;
	var exists = w.localStorage && w.localStorage.getItem ('k');

	if (!exists) {
		change = 0;
		w.localStorage && w.localStorage.setItem ('k', 1);
	}

	if ( ((Math.random () * 100) >> 0) < change) return ;
	PKAudioEditor._deps.Wlc ();

}, 320);

})( window, document, PKAudioEditor );
