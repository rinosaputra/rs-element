function rs_Modal(_op){
	o = Object.assign({
		id:'untitleModal',
		header_id:'untitleModalHeader',
		content_id:'untitleModalContent',
		main_id:'untitleModalMain',
		button: {}, //OBJECT
		title: '', //NULL
		class: '',
		header: '',
		content: '',
		main_class: '',
		footer: '',
		panel: '',
		done:function(){ //FUNCTION
			console.log(_op.id + ' Ready');
		}
	}, _op);
	if($('#'+o.id).length < 1){
		_panel = '<i class="fa fa-expand" data-id="'+o.id+'" onclick="rs_ModalSize(\''+o.id+'\')"></i>'+
							'<i class="fa fa-times" data-id="'+o.id+'" onclick="$(\'#'+o.id+'\').remove();"></i>';

		_out = '<div class="ino-modal transSize loader-dom'+(o.class !== '' ? ' '+o.class : '')+'" id="'+o.id+'">'+
				'<div class="content" id="'+o.content_id+'">'+
					'<div class="header" id="'+o.header_id+'">'+
						'<h1>'+__marquee(o.header)+'&nbsp;</h1>'+
					'</div>'+
					'<div class="panel">'+o.panel+_panel+'</div>'+
					'<div class="container">'+
						'<div class="footer" id="'+o.footer_id+'">'+o.footer;
						$.each(o.button, function(key, value){
							_out += '<button';
							$.each(value, function(k, v){
								_out += ' '+k+'="'+v+'"';
							})
							_out += '>'+key.replace(/_/g, ' ')+'</button>';
						})
						_out += '</div>'+
						'<div class="main'+(o.main_class !== '' ? ' '+o.main_class : '')+'" id="'+o.main_id+'">'+o.content+'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
		if($('body').append(_out)){
			o.done(o);
			setTimeout(function(){
				$('#'+o.id).removeClass('loader-dom');
			}, _html.attr('rs-buffer'));
		}
	}
}

function rs_ModalSize(_id){
	$('#'+_id).toggleClass('fullSize');
	$('#expandModal'+_id).toggleClass('fa-compress');
}

function rs_ModalImg(op){
	o = Object.assign({
		id: 'untitleImg',
		url: null,
		panel: ''
	}, op);
	$('body').append('<div class="ino-modal transSize img" id="'+o.id+'">'+
			'<div class="ino-modal-img">'+
				'<div class="panel">'+
					'<i class="fa fa-times" onclick="$(\'#'+o.id+'\').remove();"></i>'+o.panel+
				'</div>'+
				'<img src="'+o.url+'">'+
			'</div>'+
		'</div>');
}