﻿

g_text_objs = [];
// web fonts take unpredictable time to load properly, so I just call this a few times
function update_webfonts() {
	
	for (var i = 0; i < g_text_objs.length; i++) {
		if (g_text_objs[i].pixitext == null) continue;
		g_text_objs[i].pixitext.font = 'Montserrat';
		
		//if (g_text_objs[i].pixitext.font != 'Montserrat') {
			
		//}


	}
} 

NumberClass = Class.extend({

});

CircleClass = Class.extend({
	phasersprite: null,
	pixisprite: null,
	layer: 0,
	filled: true,

	init: function(layer, colour, radius, filled) {
		if (using_phaser == true) {
			radius = radius*1.25;
			this.phasersprite = game.add.graphics(0,0);

			if (filled == false) this.phasersprite.lineStyle(8, colour);
			else this.phasersprite.beginFill(colour, 1);  // colour, alpha

			this.phasersprite.drawCircle(0, 0, radius);
			this.phasersprite.endFill();
			

			// drawCircle(x, y, diameter)

			if (layer == Types.Layer.GAME) game_group.add(this.phasersprite);		// game_container
			else if(layer == Types.Layer.POP_MENU) options_menu_group.add(this.phasersprite);   // options_menu_container
			else if(layer == Types.Layer.GAME_MENU) game_menu_group.add(this.phasersprite);  // game_menu_container
			else if(layer == Types.Layer.HUD) menu_group.add(this.phasersprite);	// menu_container
			else if(layer == Types.Layer.TILE) tile_group.add(this.phasersprite);	// tile_container
			else if(layer == Types.Layer.BACKGROUND) background_group.add(this.phasersprite);    // background_container
			
		} else {
			this.pixisprite = new PIXI.Graphics();
			if (filled == true) this.pixisprite.beginFill(colour);
			if (filled == false) this.pixisprite.lineStyle( 8 , colour);
			
			this.pixisprite.drawCircle(0, 0, radius); // the circle is at 0,0 rel to pixisprite
			this.pixisprite.endFill();

			if (layer == Types.Layer.GAME) game_group.add(this.pixisprite);		// game_container
			else if(layer == Types.Layer.POP_MENU) options_menu_group.add(this.pixisprite);   // options_menu_container
			else if(layer == Types.Layer.GAME_MENU) game_menu_group.add(this.pixisprite);  // game_menu_container
			else if(layer == Types.Layer.HUD) menu_group.add(this.pixisprite);	// menu_container
			else if(layer == Types.Layer.TILE) tile_group.add(this.pixisprite);	// tile_container
			else if(layer == Types.Layer.BACKGROUND) background_group.add(this.pixisprite);    // background_container

		}
	},

	set_colour: function() {

	},

	set_scale: function(x, y) {
		if (using_phaser == true) {
			this.phasersprite.scale.setTo(x, y);
			//this.phasersprite.scale = x;
		} else {
			this.pixisprite.scale.x = x;
			this.pixisprite.scale.y = y;
		}
	},

	update_pos: function(x, y) {
		if (using_phaser == true) {
			//this.phasersprite.moveTo(x, y);
			this.phasersprite.position.x = x;
			this.phasersprite.position.y = y;
		} else {
			this.pixisprite.position.x = x;
			this.pixisprite.position.y = y;
		}
	},

	make_vis: function() {
		if (using_phaser == true) {
			
		} else {
			
		}
	},

	hide: function () {
		if (using_phaser == true) {
			//this.phasersprite.moveTo(-999, -999);
			this.update_pos(-999,-999);
		} else {
			this.pixisprite.position.x = -999;
			this.pixisprite.position.y = -999;
		}
	}

});

SquareClass = Class.extend({
	phasersprite: null,
	pixisprite: null,
	layer: 0,
	filled: true,
	colour: 0x00000,
	

	x: 0,
	y: 0,

	init: function(x, y, xx, yy,layer, colour, filled) {
		this.new_graphics(x, y, xx, yy,layer, colour, filled);
		
	},

	new_graphics : function(x, y, xx, yy,layer, colour, filled) {
		this.layer = layer;
		this.colour = colour;
		this.filled = filled;
		
		if (using_phaser == true) {
			this.x = (x + xx)/2;
			this.y = (y + yy)/2;
			this.phasersprite = game.add.graphics(0,0);

			this.phasersprite.lineStyle(8, colour);

			if (filled == false) {}
			else this.phasersprite.beginFill(colour, 1);  // colour, alpha

			this.phasersprite.moveTo(x,y);
    			this.phasersprite.lineTo(xx, y);
    			this.phasersprite.lineTo(xx,  yy);
    			this.phasersprite.lineTo(x, yy);
			this.phasersprite.lineTo(x, y);
			this.phasersprite.endFill();
			

			// drawCircle(x, y, diameter)

			if (layer == Types.Layer.GAME) game_group.add(this.phasersprite);		// game_container
			else if(layer == Types.Layer.POP_MENU) options_menu_group.add(this.phasersprite);   // options_menu_container
			else if(layer == Types.Layer.GAME_MENU) game_menu_group.add(this.phasersprite);  // game_menu_container
			else if(layer == Types.Layer.HUD) menu_group.add(this.phasersprite);	// menu_container
			else if(layer == Types.Layer.TILE) tile_group.add(this.phasersprite);	// tile_container
			else if(layer == Types.Layer.BACKGROUND) background_group.add(this.phasersprite);    // background_container
			
		} else {
			xx = xx - x;
			yy = yy - y;
			this.pixisprite = new PIXI.Graphics();
			if (filled == true) this.pixisprite.beginFill(colour);
			if (filled == false) this.pixisprite.lineStyle( 8 , colour);
			
			this.pixisprite.drawRect(x, y,xx, yy);
			if (filled == true) this.pixisprite.endFill();

			if (layer == Types.Layer.GAME) game_group.add(this.pixisprite);		// game_container
			else if(layer == Types.Layer.POP_MENU) options_menu_group.add(this.pixisprite);   // options_menu_container
			else if(layer == Types.Layer.GAME_MENU) game_menu_group.add(this.pixisprite);  // game_menu_container
			else if(layer == Types.Layer.HUD) menu_group.add(this.pixisprite);	// menu_container
			else if(layer == Types.Layer.TILE) tile_group.add(this.pixisprite);	// tile_container
			else if(layer == Types.Layer.BACKGROUND) background_group.add(this.pixisprite);    // background_container

		}
	},

	set_colour: function() {

	},

	set_scale: function(x, y) {
		if (using_phaser == true) {
			//this.phasersprite.scale(x, y);
			//this.phasersprite.scale = x;
			this.phasersprite.width *= x;
			this.phasersprite.height *= y;
			this.phasersprite.scale.x = x;
			this.phasersprite.scale.y = y;
		} else {
			
			this.pixisprite.scale.x = x;
			this.pixisprite.scale.y = y;
		}
	},

	update_line_w : function (w) {
		if (using_phaser == true) {
			this.phasersprite.lineStyle(w, '0xffffff');
		}
	},

	update_size : function(x, y, w, h) {
		this.x = x;
		this.y = y;
		if (using_phaser == true) {
			

			//this.phasersprite.scale.setTo(x,y,w,h);
			//alert('before ' +this.phasersprite.bottomRight);
			//this.phasersprite.bottomRight = new Phaser.Point(x + w, y + h);
			//alert('after ' +this.phasersprite.bottomRight);
			//this.phasersprite.topLeft = new Phaser.Point(x, y);
			this.phasersprite.x = x;
			this.phasersprite.y = y;
			this.phasersprite.width = w;
			this.phasersprite.height = h;
		}
	},

	

	update_rect: function(x, y, w, h) {

		
		if (using_phaser == true) {

		} else {

			this.pixisprite.destroy();
			this.new_graphics(x, y, x+w, y+h,this.layer, this.colour, this.filled);

			return;

			this.pixisprite.position.x = x;
			this.pixisprite.position.y = y;
			this.pixisprite.x = x;
			this.pixisprite.y = y;
			this.pixisprite.width = w;
			this.pixisprite.height = h;
			//this.pixisprite.moveTo(x,y);

			var scale_ = 1;

			this.pixisprite.setTransform(x, y, scale_, scale_, 0, 0, 0, 0, 0);
		}
	},

	update_pos: function(x, y) {
		
		if (using_phaser == true) {
			this.x = x;
			this.y = y;
			//this.phasersprite.moveTo(x, y);
			this.phasersprite.position.x = x;
			this.phasersprite.position.y = y;
		} else {
			
			this.pixisprite.position.x = x;
			this.pixisprite.position.y = y;
		}
	},

	visible: true,

	make_vis: function() {
		//if (this.visible == true) return;
		//this.visible = true;
		if (using_phaser == true) {
			//this.update_pos(this.x, this.y);
			this.phasersprite.visible = true;
		} else {
			this.update_pos(this.x, this.y);
		}
	},

	hide: function () {
		//if (this.visible == false) return;
		//this.visible = false;
		if (using_phaser == true) {
			//this.phasersprite.moveTo(-999, -999);
			//this.update_pos(-999,-999);
			this.phasersprite.visible = false;
		} else {
			this.pixisprite.position.x = -9999;
			this.pixisprite.position.y = -9999;
		}
	}

});



CounterClass = Class.extend({

	number: 0,
	num_to_str: "",

	pos : {x: 0, y: 0},

	numerals: [3],

	char_sprites: [3],

	char_widths: [3],

	font_type: 0,
	font: "",
	font_size: 14,

	layer: 0,

	colour: 0, // 0 white, 1 darkblue, 2 grey

	init: function(layer) {
		this.font = "";
		this.font_size = 6;
		this.layer = layer;

		this.char_sprites[0] = new SpriteClass();
		this.char_sprites[1] = new SpriteClass();
		this.char_sprites[2] = new SpriteClass();

		for(var i = 0; i < this.char_sprites.length; i++) {
			this.numerals[i] = 0;
			this.char_sprites[i].setup_sprite('0.png', this.layer);
		}
	},

	set_font: function(f_) {
		this.font_type = f_;
	},

	set_text: function(t_) {
		this.change_text(t_);
	},

	set_alpha: function(alpha_) {
		//this.phasersprite.alpha = alpha_;

		for(var i = 0; i < this.char_sprites.length; i++) {
			this.char_sprites[i].set_alpha(alpha_);
		}
	},

	change_text: function(text_) {
		
		this.num_to_str = text_;

		this.str_len = text_.length;

		var crown = false;

		// if (this.str_len > 0) alert(text_ + ' ' + this.str_len);

		this.char_sprites[2].hide();
		this.char_sprites[1].hide();

		if (this.str_len == 0) {
			this.char_sprites[0].hide();
			return;
		} 

		for(var i = 0; i < this.char_sprites.length; i++) {


			this.char_sprites[i].hide();

			if (this.num_to_str.length <= i) {
				this.char_sprites[i].hide();
				continue;
			}

			this.char_sprites[i].make_vis();

			if (this.num_to_str[i] == 'K') {
				this.char_sprites[i].set_texture('tinycrown.png');
				
			} else if (this.num_to_str[i] == 'L') this.char_sprites[i].set_texture('tinyheart.png');
			else if (this.num_to_str[i] == 'B') this.char_sprites[i].set_texture('tinybracket.png');
			else if (this.num_to_str[i] == '.') this.char_sprites[i].set_texture('cover_minimap.png');
			else if (this.num_to_str[i] == '-') this.char_sprites[i].set_texture('negsign.png');
			else if (this.num_to_str[i] == 'N') this.char_sprites[i].set_texture('negsign.png');
			else if (this.font_type == Types.Fonts.SMALL) {
				if (this.colour == 0) this.char_sprites[i].set_texture(this.num_to_str[i] + 'smallgrey.png');
				else if (this.colour == 1) this.char_sprites[i].set_texture(this.num_to_str[i] + 'smallblue.png');
				else this.char_sprites[i].set_texture(this.num_to_str[i] + 'small.png');
			} else this.char_sprites[i].set_texture(this.num_to_str[i] + '.png');
		}

		if (this.char_sprites.length == 2) this.char_sprites[2].hide();
	},

	set_colour : function(c) {
		this.colour = c;
	},

	str_len: 1,

	set_num: function(num) {

		

		this.number = num;
		this.num_to_str = num.toString();
		

		for(var i = 0; i < this.char_sprites.length; i++) {

			this.char_sprites[i].make_vis();
			if (this.num_to_str.length <= i) {
				this.char_sprites[i].hide();
				continue;
			}
			this.char_sprites[i].set_texture(this.num_to_str[i] + '.png');
		}
			
		
	},

	center_x : function(x_) {
		
	},

	hide : function() {
		this.char_sprites[0].hide();
		this.char_sprites[1].hide();	
		this.char_sprites[2].hide();
	},

	make_vis : function(){
		this.char_sprites[0].make_vis();
		this.char_sprites[1].make_vis();	
		this.char_sprites[2].make_vis();
	},

	update_pos : function (x_start,y_start,w,h) {

		if (x_start < -999) {
			this.hide();
			return;
		}

		if (this.str_len == 0) {
			this.char_sprites[0].hide();
			this.char_sprites[1].hide();	
			this.char_sprites[2].hide();
			return;
		} 

		if (this.str_len == 2) x_start = x_start - 6;
		if (this.str_len == 3) x_start = x_start - 14;

		this.pos.x = x_start;
		this.pos.y = y_start;

		var x = x_start;
		var y = y_start;

		

		for(var i = 0; i < this.char_sprites.length; i++) {

			if (this.str_len == 1 && i == 1) break; 
			if (this.str_len == 2 && i == 2) break; 

			this.char_sprites[i].update_pos(x,y + 16);

			if (x < -999) this.char_sprites[i].hide();
			else this.char_sprites[i].make_vis();

			

			//spr_name = spr_name + this.font + ".png";
			
			if (i < this.char_sprites.length - 1) x = x + 14;//this.font_size;
			
			

			if (x > x_start + w) {
				//x = x_start;
				//y = y + this.font_size;
			}
		}

		this.total_x = x - x_start;// + 0.5*this.char_widths[0] + 0.5*this.char_widths[this.char_sprites.length - 1];
	},

});


createText = function () {};

TextClass = Class.extend({

	pixitext: null,

	scale: 1,

	pos : {x: 0, y: 0},

	text_string: "",

	char_sprites: [],

	char_widths: [],
	char_heights: [],

	font_type: 0,
	font: "",
	font_size: 14,

	layer: 0,

	width: 999,

	

	init: function(layer) {

		update_webfonts();

		this.font = "";
		this.font_size = 32;
		this.layer = layer;

		

		g_text_objs.push(this);

		if (using_phaser == true) {
			this.use_pixitext = 1;
		} else {
			
		}

		

		
	},

	

	set_scale: function (scale) {
		if (using_phaser == true) {
			this.scale = scale;
		}
	},

	set_width: function (width) {
		if (using_phaser == true) {
			this.width = width;
		}
	},

	set_font_size : function(size) {
		if (using_phaser == true) {
			this.font = size.toString();
			this.font_size = size;
		}
	},

	set_font: function (font) {
		this.font_type = font;
		if (font == Types.Fonts.SMALL) {
			this.font = "22";
			this.font_size = 22;
		} else if (font == Types.Fonts.MEDIUM) {
			this.font = "30";
			this.font_size = 30;
			//this.set_scale(1.5);
		} else if (font == Types.Fonts.MED_SMALL) {
			this.font = "18";
			this.font_size = 18;
			//this.set_scale(1.5);
		} else if (font == Types.Fonts.LARGE) {
			this.font = "36";
			this.font_size = 36;
		} else if (font == Types.Fonts.SMALL_WHITE) {
			this.font = "smw";
			this.font_size = 26;
		} else if (font == Types.Fonts.XSMALL) {
			this.font = "14";
			this.font_size = 14;
			//this.set_scale(1.5);
		} else if (font == Types.Fonts.TUTSMALL) {
			this.font = "16";
			this.font_size = 16;
			//this.set_scale(1.5);
		}else {
			this.font = "32";
			this.font_size = 32;
		}

		//this.font_size = this.font_size*window.devicePixelRatio;	

		//if (this.pixitext) {
		//	this.pixitext.font = this.font_size.toString() + "px " + this.font_name;
		//}
	},

	use_pixitext: 1,
	font_name: "Montserrat",//"Hind Vadodara",
	style: null,

	change_text: function (str) {
		if (this.pixitext == null) return;
		this.pixitext.text = str;

	},

	change_size: function(font) {
		this.set_font(font);
		if (this.pixitext == null) return;
		this.pixitext.fontSize = this.font_size;
	},

	set_colour : function (col_) {
		if (using_phaser == true) {
			this.pixitext.fill = col_;//'#ffffff';
		} else {
			//this.pixitext.tint = '0xffffff';
			//this.pixitext.tint = col_;

			this.pixitext.style.fill = col_;

		}
	},

	shadow: false,

	set_text : function(str) {

		

		var font = this.font_size.toString() + "px " + this.font_name;
			//font = '36px Hind Vadodara';
			var fill = "#ffffff";

		if (using_phaser == true) {

			this.style = {	
				font : font,				
				fill : fill,	
				align : "left",			
				//stroke : '#4a1850',				
				//strokeThickness : 5,				
				//dropShadow : true,				
				//dropShadowColor : '#000000',				
				//dropShadowAngle : Math.PI / 6,				
				//dropShadowDistance : 6,				
				wordWrap : true,				
				wordWrapWidth : 9999			};




			var st_ = {
				fontSize : this.font_size.toString + 'px',
				
			};
			
			this.pixitext = game.add.text(-999,-999, str);//, st_);
			//this.pixitext.font = 'Arial';
			this.pixitext.font = 'Montserrat';
			this.pixitext.fill = '#ffffff';
			this.pixitext.fontSize = this.font_size;

			//this.pixitext.smoothed = false;

			

			// set padding may help with the garbled text problem
			this.pixitext.padding.set(2, 2);	// http://www.html5gamedevs.com/topic/11469-text-cut-out-with-webfont/

			//this.pixitext = new PIXI.Text(str, this.style);
			this.pixitext.resolution = window.devicePixelRatio;


			this.pixitext.x = -999;		
			this.pixitext.y = -999;

			

			

			//this.pixitext.smoothed = true;
			//this.pixitext.scale.x = 1/window.devicePixelRatio;
			//this.pixitext.scale.y = 1/window.devicePixelRatio;

			

		} else {
			this.style = {	
				font : font,				
				fill : fill,	
				align : "left",			
				//stroke : '#4a1850',				
				//strokeThickness : 1,				
				//dropShadow : true,				
				//dropShadowColor : '#000000',				
				//dropShadowAngle : Math.PI / 6,				
				//dropShadowDistance : 6,				
				wordWrap : true,				
				wordWrapWidth : 9999			};




			
			if (this.shadow == true) {
				this.style.dropShadow = true;
				//this.style.dropShadow = true;
				this.style.dropShadowColor = '#222222';
				this.style.dropShadowDistance = 3;
				this.style.dropShadowAngle = Math.PI / 2;
			}
			
			

			this.pixitext = new PIXI.Text(str, this.style);

			this.pixitext.x = -999;		
			this.pixitext.y = -999;

		}




		if (this.layer == Types.Layer.GAME) game_group.add(this.pixitext);
		else if(this.layer == Types.Layer.POP_MENU) options_menu_group.add(this.pixitext);
		else if(this.layer == Types.Layer.GAME_MENU) game_menu_group.add(this.pixitext);
		else if(this.layer == Types.Layer.HUD) menu_group.add(this.pixitext);
		else if(this.layer == Types.Layer.TILE) tile_group.add(this.pixitext);
		else if(this.layer == Types.Layer.BACKGROUND) background_group.add(this.pixitext);
		else if(this.layer == Types.Layer.GAME_SCREEN) game_screen_group.add(this.pixitext);
		else if(this.layer == Types.Layer.LEVEL_TEXT) text_group.add(this.pixitext);

		return;

		this.text_string = str;

		
		this.char_heights = [];
		this.char_widths = [];

		this.total_x = 0;
		

		for(var i = 0; i < str.length; i++) {
			this.add_char(str[i], i);
			this.char_sprites[i].make_vis();
			
		}

		for(var i = str.length; i < this.char_sprites.length; i++) {
			this.char_sprites[i].hide();
			
		}
	},

	center_x: function(x) {
			if (this.pixitext == null) return;

		if (using_phaser == true) {
			this.pixitext.anchor.set(0.5,0);
			//this.style.align = 'center';

			//this.pixitext.boundsAlignH = "center";
			//this.pixitext.anchor.x = this.pixitext.width;// (x, this.pixitext.y);

			//this.pixitext.x = x - this.pixitext.width*0.5;

			
		} else {
			this.style.align = 'center';

			//this.pixitext.style = this.style;
			//this.pixitext.anchor.x = this.pixitext.width;// (x, this.pixitext.y);

			this.pixitext.x = x - this.pixitext.width*0.5;

		}

	},

	hide: function () {
		if (using_phaser == true) {
			this.pixitext.visible = false;
			this.pixitext.kill();
		} else {
			this.pixitext.visible = false;

		}
	},

	make_vis: function () {
		if (using_phaser == true) {
			this.pixitext.visible = true;
			this.pixitext.revive();
		} else {
			this.pixitext.visible = true;

		}
	},


	update_pos : function (x_start,y_start,w,h) {

		if (this.pixitext == null) return;	// do phaser text L8R

		if (using_phaser == true) {
			this.pixitext.x = x_start;		
			this.pixitext.y = y_start;

			//this.pixitext.height = 999;

			if (x_start < 0) {
				this.pixitext.visible = false;
			} else this.pixitext.visible = true;

			//this.pixitext.wordWrapWidth = w;

			if (w != null) {
				this.pixitext.wordWrap = true;
				this.pixitext.wordWrapWidth = w;
			}
			
			//this.style.wordWrapWidth = w;

			//this.pixitext.style = this.style;

		} else {
			this.pixitext.x = x_start;		
			this.pixitext.y = y_start;
			this.pixitext.wordWrapWidth = w;
			
			this.style.wordWrapWidth = w;

			this.pixitext.style = this.style;


		}

		
	},

	

	
	
});


ButtonClass = Class.extend({

	
	sprite_obj: null,

	button_sprite: null,

	init: function() {
		//this.button_shadow_sprite = new SpriteClass();
		this.button_sprite = new SpriteClass();
		this.sprite_obj = new SpriteClass();
	},

	set_scale: function(scale) {
		this.sprite_obj.set_scale(scale);
	},

	make_vis: function() {
		this.button_sprite.make_vis();
		//this.button_shadow_sprite.make_vis();
		this.sprite_obj.make_vis();
	},

	hide: function() {
		this.button_sprite.hide();
		//this.button_shadow_sprite.hide();
		this.sprite_obj.hide();
	},

	setup_sprite: function(name,layer) {
		//this.button_shadow_sprite.setup_sprite("button_shadow.png",layer);
		this.button_sprite.setup_sprite("button.png",layer);
		this.sprite_obj.setup_sprite(name,layer);
	},


	rotate_ninety : function() {
		this.sprite_obj.rotate_ninety();
	},

	update_pos: function(x,y) {
		//this.button_shadow_sprite.update_pos(x + 6,y + 6);
		this.button_sprite.update_pos(x,y);
		this.sprite_obj.update_pos(x,y);
	}

});

StarRatingClass = Class.extend({
// this seems similar to a toggle

	x: 0,	// pos of first star, rest are horiz
	y: 0,

	rating: 0,

	star_sprites: [5],
	text: null,

	init: function() {

		//this.text = new TextClass(Types.Layer.GAME_MENU);
		

		this.star_sprites[0] = new SpriteClass();
		this.star_sprites[0].setup_sprite("emptystar.png", Types.Layer.GAME_MENU);

		this.star_sprites[1] = new SpriteClass();
		this.star_sprites[1].setup_sprite("emptystar.png", Types.Layer.GAME_MENU);

		this.star_sprites[2] = new SpriteClass();
		this.star_sprites[2].setup_sprite("emptystar.png", Types.Layer.GAME_MENU);

		this.star_sprites[3] = new SpriteClass();
		this.star_sprites[3].setup_sprite("emptystar.png", Types.Layer.GAME_MENU);

		this.star_sprites[4] = new SpriteClass();
		this.star_sprites[4].setup_sprite("emptystar.png", Types.Layer.GAME_MENU);

	},

	update_pos: function (x,y) {
		this.x = x;
		this.y = y;
		for (var i = 0; i < 5; i++) {
			this.star_sprites[i].update_pos(x + 24*i, y);

		}

	
	},

	hide: function() {
		this.star_sprites[0].hide();
		this.star_sprites[1].hide();
		this.star_sprites[2].hide();
		this.star_sprites[3].hide();
		this.star_sprites[4].hide();
	},

	make_vis: function() {
		this.star_sprites[0].make_vis();
		this.star_sprites[1].make_vis();
		this.star_sprites[2].make_vis();
		this.star_sprites[3].make_vis();
		this.star_sprites[4].make_vis();

		this.star_sprites[0].set_alpha(0.5);
		this.star_sprites[1].set_alpha(0.5);
		this.star_sprites[2].set_alpha(0.5);
		this.star_sprites[3].set_alpha(0.5);
		this.star_sprites[4].set_alpha(0.5);

		this.voted = 0;
	},

	set_rating: function(rating) {

		this.star_sprites[0].set_alpha(1);
		this.star_sprites[1].set_alpha(1);
		this.star_sprites[2].set_alpha(1);
		this.star_sprites[3].set_alpha(1);
		this.star_sprites[4].set_alpha(1);

		// input 1-5
		if (rating >= 5) this.rating = 5;
		if (rating == 4) this.rating = 4;
		if (rating == 3) this.rating = 3;
		if (rating == 2) this.rating = 1;
		if (rating == 1) this.rating = -1;
		if (rating <= 0) this.rating = -2;

		//this.rating = rating;

		for (var i = 0; i < 5; i++) {
			if (i < rating) {
				this.star_sprites[i].set_texture('fullstar.png',Types.Layer.GAME_MENU);
			} else {
				this.star_sprites[i].set_texture('emptystar.png',Types.Layer.GAME_MENU);
			}
		}
	},

	voted: 0,

	click: function(x,y) {

		

		if (x < this.x - 12 ||
		    x > this.x + 24*4 + 12 ||
		    y < this.y - 12 ||
		    y > this.y + 12) return;

		this.voted = 1;


		var stars = 0;
		
		for (var i = -1; i < 5; i++) {
			//this.star_sprites[i].update_pos(x + 24*i, y);
			if (x > this.x + 24*i - 12 &&
		    	    x < this.x + 24*i + 12 &&
		    	    y > this.y - 12 &&
		    	    y < this.y + 12) this.set_rating(i+1);
		}

	},

	


});

MultiToggleClass = Class.extend({
	x: 0,
	y: 0,

	code: 0,
	
	sprite_obj: null,

	button_sprite: null,

	layer: 0,

	init: function() {
		//this.button_shadow_sprite = new SpriteClass();
		this.button_sprite = new SpriteClass();
		this.sprite_obj = new SpriteClass();
	},

	set_scale: function(scale) {
		this.sprite_obj.set_scale(scale);
	},

	make_vis: function() {
		this.button_sprite.make_vis();
		//this.button_shadow_sprite.make_vis();
		this.sprite_obj.make_vis();
	},

	hide: function() {
		this.button_sprite.hide();
		//this.button_shadow_sprite.hide();
		this.sprite_obj.hide();
	},

	setup_sprite: function(name,layer) {
		this.layer = layer;
		//this.button_shadow_sprite.setup_sprite("button_shadow.png",layer);
		this.button_sprite.setup_sprite("button_small.png",layer);
		this.sprite_obj.setup_sprite(name,layer);

		this.toggle();
	},

	horiz: true,

	update_pos: function(x,y) {
		this.make_vis();
		this.x = x;
		this.y = y;
		//this.button_shadow_sprite.update_pos(x + 6,y + 6);
		this.button_sprite.update_pos(x,y);
		if (this.horiz == true) this.sprite_obj.update_pos(x + 52,y);
		else this.sprite_obj.update_pos(x,y + 38);
	},

	toggled: -1,	// -1, 0, 1

	toggle: function() {
		
		this.toggled++;
		if (this.toggled == 2) this.toggled = -1;
		
		//this.toggled = -this.toggled;
		if (this.toggled == 1) this.button_sprite.set_texture("button_small_on.png",this.layer);
		else if (this.toggled == -1) this.button_sprite.set_texture("button_small.png",this.layer);
		else this.button_sprite.set_texture("button_small_half.png",this.layer);
		
		
	}
});

ToggleClass = Class.extend({

	x: 0,
	y: 0,

	code: 0,
	
	sprite_obj: null,

	button_sprite: null,

	layer: 0,

	init: function() {
		//this.button_shadow_sprite = new SpriteClass();
		this.button_sprite = new SpriteClass();
		this.sprite_obj = new SpriteClass();
	},

	set_scale: function(scale) {
		this.sprite_obj.set_scale(scale);
	},

	make_vis: function() {
		this.button_sprite.make_vis();
		//this.button_shadow_sprite.make_vis();
		this.sprite_obj.make_vis();
	},

	hide: function() {
		this.button_sprite.hide();
		//this.button_shadow_sprite.hide();
		this.sprite_obj.hide();
	},

	setup_sprite: function(name,layer) {
		this.layer = layer;
		//this.button_shadow_sprite.setup_sprite("button_shadow.png",layer);
		this.button_sprite.setup_sprite("button_small.png",layer);
		this.sprite_obj.setup_sprite(name,layer);

		this.toggle();
	},

	horiz: true,

	update_pos: function(x,y) {
		this.make_vis();
		this.x = x;
		this.y = y;
		//this.button_shadow_sprite.update_pos(x + 6,y + 6);
		this.button_sprite.update_pos(x,y);
		if (this.horiz == true) this.sprite_obj.update_pos(x + 52,y);
		else this.sprite_obj.update_pos(x,y + 38);
	},

	toggled: -1,

	three_toggle: false,

	toggle: function() {
		

		if (this.three_toggle == false) {
			this.toggled = -this.toggled;
			if (this.toggled == 1) this.button_sprite.set_texture("button_small_on.png",this.layer);
			else this.button_sprite.set_texture("button_small.png",this.layer);
		} else {
			this.toggled++;
			if (this.toggled > 2) this.toggled = 0;

			if (this.toggled == 0) this.button_sprite.set_texture("button_small_on.png",this.layer);
			if (this.toggled == 1) this.button_sprite.set_texture("button_small_off.png",this.layer);
			if (this.toggled == 2) this.button_sprite.set_texture("button_small.png",this.layer);

		}
	}

});

var mini_wall_sprite = null;
var mini_cover_sprite = null;
var mini_heart_sprite = null;
var mini_eye_sprite = null;
var mini_joiner_sprite = null;

BitmapClass = Class.extend({

	// maybe:
	// http://examples.phaser.io/_site/view_full.html?d=display&f=render%20texture%20trail.js&t=render%20texture%20trail&phaser_version=v2.0.7&

	bitmapdata: null,
	
	w: 0,
	h: 0,
	layer: 0,

	x: 0,
	y: 0,

	scale: 1,

	image: null,

	rendertexture: null,
	rendertexturesprite: null,

	init: function(layer, w, h) {


		if (mini_wall_sprite == null) {
			mini_wall_sprite = game.add.sprite(-999,-999,'atlas_blocks','wall_minimap.png');
			mini_cover_sprite = game.add.sprite(-999,-999,'atlas_blocks','cover_minimap.png');
			mini_heart_sprite = game.add.sprite(-999,-999,'atlas_blocks','heart_minimap.png');
			mini_eye_sprite = game.add.sprite(-999,-999,'atlas_blocks','eye_minimap.png');
			mini_joiner_sprite = game.add.sprite(-999,-999,'atlas_blocks','joiner_minimap.png');
			
		}

		this.bitmapdata = game.add.bitmapData(w, h);
		//this.bitmapdata = game.add.bitmapData(100, 100); 

		//http://examples.phaser.io/_site/view_full.html?d=display&f=render%20texture%20trail.js&t=render%20texture%20trail&phaser_version=v2.0.7&
		//this.rendertexture = game.add.renderTexture(100, 100);
		this.rendertexture = game.add.renderTexture(w, h);
		this.rendertexturesprite = game.add.sprite(0,0,this.rendertexture);

		
		//this.bitmapdata.rect(3, 7, 22, 22, '#00dd00');
		this.bitmapdata.update();
		
		// http://blogs.bytecode.com.au/glen/2015/12/23/hacking-bitmap-sprites-in-phaser.html

		//this.image = this.bitmapdata.addToWorld(0, 0, 0, 0, 1, 1);

		this.image = game.add.sprite(0, 0, this.bitmapdata);

		this.w = w;
		this.h = h;
		this.layer = layer;


		if (layer == Types.Layer.GAME) game_group.add(this.image);		// game_container
		else if(layer == Types.Layer.POP_MENU) options_menu_group.add(this.image);   // options_menu_container
		else if(layer == Types.Layer.GAME_MENU) game_menu_group.add(this.image);  // game_menu_container
		else if(layer == Types.Layer.HUD) menu_group.add(this.image);	// menu_container
		else if(layer == Types.Layer.TILE) tile_group.add(this.image);	// tile_container
		else if(layer == Types.Layer.BACKGROUND) background_group.add(this.image);    // background_container

		

	},

	last_tile_addx: 0,
	last_tile_addy: 0,
	last_tile_col: "",

	secret: 0,

	set_secret: function (newsec) {
		this.secret = newsec;
		
	},

	hide : function() {
		this.bitmapdata.destroy();
		this.image.destroy();
		this.rendertexture.destroy();
		this.rendertexturesprite.destroy();
	},

	make_vis : function () {

		if (this.bitmapdate != null) return;

		this.bitmapdata = game.add.bitmapData(this.w, this.h);
		this.rendertexture = game.add.renderTexture(this.w, this.h);
		this.rendertexturesprite = game.add.sprite(0,0,this.rendertexture);

		this.bitmapdata.update();

		this.image = game.add.sprite(0, 0, this.bitmapdata);


		if (this.layer == Types.Layer.GAME) game_group.add(this.image);		// game_container
		else if(this.layer == Types.Layer.POP_MENU) options_menu_group.add(this.image);   // options_menu_container
		else if(this.layer == Types.Layer.GAME_MENU) game_menu_group.add(this.image);  // game_menu_container
		else if(this.layer == Types.Layer.HUD) menu_group.add(this.image);	// menu_container
		else if(this.layer == Types.Layer.TILE) tile_group.add(this.image);	// tile_container
		else if(this.layer == Types.Layer.BACKGROUND) background_group.add(this.image);    // background_container
	},

	draw_rect : function (x, y, w, h, colour) {

		
		this.bitmapdata.fillStyle = colour;
		this.bitmapdata.rect(x, y, w, h, colour); 
		return;

		if (using_phaser == true) {

			var graphics_obj = game.add.graphics(x,y);
			this.bitmapdata.ctx.add(graphics_obj);



			graphics_obj.beginFill(colour);
			graphics_obj.lineStyle(0, colour, 0);
			graphics_obj.moveTo(x,y);
    			graphics_obj.lineTo(x + w, y);
    			graphics_obj.lineTo(x + w, y + h);
    			graphics_obj.lineTo(x, y + h);
			graphics_obj.lineTo(x, y);
			graphics_obj.endFill();

		} else {
			var graphics = new PIXI.Graphics();
			graphics.beginFill(colour);
			graphics.drawRect(x, y,w, h);
			this.bitmapdata.ctx.add(graphics);



		}
		return;

		//this.bitmapdata.ctx.fillStyle = colour;
		//this.bitmapdata.ctx.rect(x, y, w, h, colour); 
		
		this.bitmapdata.ctx.beginPath();
		this.bitmapdata.ctx.rect(x, y, w, h);
		//this.bitmapdata.ctx.fillStyle = colour;
		this.bitmapdata.ctx.fill();
	},

	// currently assuming this is only used for minimaps in the level selection
	add_tile : function(x,y, code) {

		


		this.last_tile_addx = x;
		this.last_tile_addy = y;

		//console.log('this.last_tile_addx ' + this.last_tile_addx);

		////console.log('spritesheet add_tile ' + code + ' x ' + x + ' y ' + y);
		
		//this.bitmapdata.rect(3, 7, 22, 22, '#ee0000'); 

		var colour = '#000000';
		
		if (code == 0) {
			colour = '#00FF00'; //empty
		} else if (code == 1) {
			colour = '#2E70ee'; // wall
			this.bitmapdata.draw(mini_wall_sprite,x*5, y*5);
		} else if (code == 6) {
			colour = '#D3D3D3'; // whitetile cover
			this.bitmapdata.draw(mini_cover_sprite,x*5, y*5);
		} else if (code == 10) {
			colour = '#FF7777'; // red
			this.bitmapdata.draw(mini_heart_sprite,x*5, y*5);
		} else if (code == 4) {
			colour = '#FF7777'; // red
			this.bitmapdata.draw(mini_eye_sprite,x*5, y*5);
		} else if (code == 7 || code == 8) {
			colour = '#FF7777'; // red
			this.bitmapdata.draw(mini_joiner_sprite,x*5, y*5);
		} else return;

		this.last_tile_col = colour;

		//this.bitmapdata.rect(x*5, y*5, 5, 5, colour);	
	
		
			
		//this.bitmapdata.update(100, 100);


		//this.rendertexture.rect(x*10, y*10, 10, 10, colour);

		//console.log('spritesheet done! added_tile ' + code + ' x ' + x + ' y ' + y + ' colour ' + colour);

	},

	clear : function () {
		this.bitmapdata.clear();
	},

	add_a_rect : function () {
		
		//console.log('blue rect added and bitmapdata updated');
		this.bitmapdata.rect(0, 0, 20, 10, '#0000FF');
		this.bitmapdata.update();
	},

	fill_map : function(data_, w, h) {
		for (var x = 0; x < w; x++) {
			for (var y = 0; y < h; y++) {

				

				var code = 0;
				var n = 1 + 10*x + y;


				if (data_[n] >= 100 ) code = 6;
				else if (data_[n] == 1 ) code = 1;

				this.add_tile(x,y,code);

			} } // for x for y
	},

	

	update_pos : function (x, y) {

		tile_group.cache_as_bitmap(false);// false;
		game_group.cache_as_bitmap(false);// false;
		g_cache_as_bitmap_timer = 10;
		

		this.image.x = x;
		this.image.y = y;

		//this.rendertexturesprite.x = x;
		//this.rendertexturesprite.y = y;

//
		//this.bitmapdata.x = x;
		//this.bitmapdata.y = y;

		//this.image = game.add.sprite(0, 0, this.bitmapdata);

		
		//console.log('butmap update pos ' + x + ' ' + y);

		
		
		//if (tilecode != null)  {
		
			// changes seem to get ignored after the first frame of this objects life
			//this.add_tile(tilex, tiley, tilecode); // this does not work 
			//this.add_tile(5,5, 1); 		       // this does not work works
		//}

		this.bitmapdata.update(100, 100);
		this.bitmapdata.render();

	},

	resize : function (newsize) {
		
		this.bitmapdata.resize(newsize,newsize);	// width, height
	},

	

	fill : function(colour_) {
		////console.log('FILL');
		this.bitmapdata.ctx.rect(0, 0, this.w, this.h);	
		this.bitmapdata.ctx.fillStyle = colour_;//'#b2ddc8';
        	this.bitmapdata.ctx.fill();
	},

	// rect(x, y, width, height, fillStyle) → {Phaser.BitmapData}
	// Draws a filled Rectangle to the BitmapData at the given x, y coordinates and width / height in size.

	// circle(x, y, radius, fillStyle) 

	// https://phaser.io/docs/2.3.0/Phaser.BitmapData.html#draw
	draw_sprite : function(sprite, x, y) {
		this.bitmapdata.draw(sprite, x, y );
	}

});


LayerClass = Class.extend({

	layer: null,
	
	init: function() {
		if (using_phaser == true) {
			this.layer = game.add.group();

		} else {
			// 0x1F1129
			// pixi
			this.layer = new PIXI.DisplayObjectContainer('0x1F1129');	// Container();
		}

	},

	set_color: function (col) {
		if (using_phaser == true) {
			

		} else {
			
		}

	},

	set_x: function (x) {
		if (using_phaser == true) {
			this.layer.x = x;

		} else {
			// 0x1F1129
			// pixi
			this.layer.position.x = x;

			//for (var c = 0; c < this.layer.children.length; c++) {
			//	this.layer.children[c].position.x = x;
			//}
		}

	},

	set_y: function (y) {
		if (using_phaser == true) {
			this.layer.y = y;

		} else {
			// 0x1F1129
			// pixi
			this.layer.position.y = y;
		}

	},

	set_pos: function(x, y) {
		if (using_phaser == true) {
			this.layer.position.set(x, y);

		} else {
			// 0x1F1129
			// pixi
			this.layer.position.x = x;
			this.layer.position.y = y;
		}
	},

	hide: function () {
		if (using_phaser == true) {
			this.layer.visible = false;

		} else { //pixi
			this.layer.visible = false;
		}
	},

	make_vis: function () {
		if (using_phaser == true) {
			this.layer.visible = true;

		} else { //pixi
			this.layer.visible = true;
		}
	},

	scale: function(x, y) {
		if (using_phaser == true) {
			this.layer.scale.set(x,y);

		} else { //pixi
			this.layer.scale.x = x;
			this.layer.scale.y = y;
		}

	},


	add: function (another) {
		if (using_phaser == true) {
			this.layer.add(another);

		} else {
			this.layer.addChild(another);

		}

	},

	cache_as_bitmap: function(bool) {
		
		if (using_phaser == true) {
			this.layer.cacheAsBitmap = bool;
		} else {
			this.layer.cacheAsBitmap = bool;

		}
	}

});

SplashClass = Class.extend({
	phasersprite: null,
	pixisprite: null,

	init: function(x, y) {
		if (using_phaser == true) {

			this.phasersprite = game.add.sprite(x, y, 'titlesplash');
			this.phasersprite.anchor.setTo(0.5,0.5);

			game_menu_group.add(this.phasersprite);  // game_menu_container
		} else {
			this.pixisprite = new PIXI.Sprite.fromImage('assets/title2.png');
			this.pixisprite.anchor.x = 0.5;
			this.pixisprite.anchor.y = 0.5;
			this.pixisprite.visible = true;

			game_menu_group.add(this.pixisprite);  // game_menu_container

		}
	},

	make_vis: function() {

		tile_group.cache_as_bitmap(false);// false;
		game_group.cache_as_bitmap(false);// false;
		g_cache_as_bitmap_timer = 10;

		if (using_phaser == true) {
			this.phasersprite.revive();
			this.phasersprite.visible = true;
		} else {
			this.pixisprite.visible = true;
			//this.pixisprite.alpha = 1;
			
		}

		

		
	},

	hide: function() { 

		

		tile_group.cache_as_bitmap(false);// false;
		game_group.cache_as_bitmap(false);// false;
		g_cache_as_bitmap_timer = 10;		

		if (using_phaser == true) {
			this.phasersprite.visible = false;
			this.phasersprite.kill();
		} else {
			this.pixisprite.visible = false;
			//this.pixisprite.rotation = 0;
		}
	},

	scale: function(xscale, yscale) {

		tile_group.cache_as_bitmap(false);// false;
		game_group.cache_as_bitmap(false);// false;
		g_cache_as_bitmap_timer = 10;

		if (using_phaser == true) {
			this.phasersprite.scale.setTo(xscale, yscale);
		} else {
			//this.pixisprite.scaleMode = PIXI.SCALE_MODES.NEAREST;
			//this.pixisprite.scale.set(xscale,yscale);
		}
	},

	update_pos: function(x,y) {

		tile_group.cache_as_bitmap(false);// false;
		game_group.cache_as_bitmap(false);// false;
		g_cache_as_bitmap_timer = 10;

		this.x = x;
		this.y = y;

		if (using_phaser == true) {
			this.phasersprite.position.x = x;
			this.phasersprite.position.y = y;
		} else {
			
		
			this.pixisprite.position.x = x;
			this.pixisprite.position.y = y;

			//this.pixisprite.rotation = 0;
			

		}
		
	},

});

pixi_render_sprite_to_tilegrid = function(pixisprite) {
	return;
	if (g_tilegrid_ready == false) return;
	pixisprite.visible = true;
	g_tile_canvas_renderer.render(pixisprite, g_tile_canvas_texture);
	pixisprite.visible = false;
	static_tile_group.hide();
	g_tile_canvas_texture.update();
	return;
	if (g_tilegrid_ready == false) return;

	pixisprite.visible = true;
	pixisprite.blendMode = PIXI.BLEND_MODES.SCREEN;
	renderer.render(pixisprite, g_pixi_tilegrid_texture);

	pixisprite.visible = false;

	g_pixi_tilegrid_single_sprite.texture = g_pixi_tilegrid_texture;
};

// http://pixijs.github.io/examples/?v=v4.1.1#/basics/render-texture.js
var g_tilegrid_changed = false;
var g_tilegrid_ready = false;

var g_pixi_tilegrid_w = 48*12;
var g_pixi_tilegrid_h = 48*12;

// call this once per draw
pixi_update_tilegrid = function() {
	return;
	if (g_tilegrid_changed == false) return;
	if (g_tilegrid_ready == false) return;
	g_tilegrid_changed = false;

	//g_tile_canvas_texture.setFrame(new PIXI.Rectangle(0, 0, g_pixi_tilegrid_w, g_pixi_tilegrid_h));
	//g_tile_canvas_texture.update();	// if using canvas
	//return;

	// need to clear g_pixi_tilegrid_texture
	g_pixi_tilegrid_texture.setFrame(new PIXI.Rectangle(0, 0, g_pixi_tilegrid_w, g_pixi_tilegrid_h));


	static_tile_group.make_vis();

	// g_pixi_tilegrid_container - remove all children sprites?

	// // ... add all the sprites to the container
	// // render the tilemap to a render texture
	

	// waiiit maybe replace mapContainer with tile_group / game_group.layer
	// I've been using PIXI.Container for layers
	// This method reccomends PIXI.DisplayObjectContainer - does this difference matter??

	//g_pixi_tilegrid_texture.render(mapContainer);	// game_group.layer is a PIXI.Container
	//var pt = new PIXI.Point(0, 0);
	//g_pixi_tilegrid_texture.render(static_tile_group.layer, pt, true);


	//renderer.bindRenderTexture(g_pixi_tilegrid_texture);
	//renderer.clear();
	renderer.render(static_tile_group.layer, g_pixi_tilegrid_texture);

	// hidden_tile_group - attached to play_screen

	// g_pixi_tilegrid_single_sprite has his texture set to g_pixi_tilegrid_texture
	// soo... does this update g_pixi_tilegrid_single_sprite

	g_pixi_tilegrid_single_sprite.texture = g_pixi_tilegrid_texture;
	//g_pixi_tilegrid_single_sprite = new PIXI.Sprite(g_pixi_tilegrid_texture);
	//play_screen_group.add(g_pixi_tilegrid_single_sprite);
	//renderer.render(g_pixi_tilegrid_single_sprite);

	// game_group.hide
	static_tile_group.hide();
};

// This worked!
// ~50 FPS on canvas+ (iphone dev app)
// BUT the texture wasnt clearing
// when doing a small level after a big level, lots of glitch
// I'll come back to this
// also the texture wasn't always crisp
// unless i set the resolution/dpi to 2 ... but then the canvas+ app (whole app) is zoomed in 2x
// https://phaser.io/docs/2.4.4/PIXI.RenderTexture.html#clear

// https://github.com/pixijs/pixi.js/issues/1147
// RenderTexture not clearing correctly on CanvasRenderer
// WebGL seems fine
// so my cocoon.js build is using CanvasRenderer?????????
// yes it does! console says Pixi ... Canvas
// on my laptop the console says Pixi ... WebGL

// idea: can I just resize the rendertexture (or baserendertexture) ?
// A texture is just a description of what rectangle of a base texture to use, a base texture is just a description of what image to use.
// A sprite describes where and how to draw a texture in the world. This includes scaling and other things.
// g_pixi_tilegrid_texture.width = tile_size*level_w


// google for things around 'pixi paintbrush effect'

g_pixi_tilegrid_container = null;
g_pixi_tilegrid_base_render_texture = null;
g_pixi_tilegrid_texture = null;
g_pixi_tilegrid_single_sprite = null;

g_tile_canvas = null;
g_tile_canvas_renderer = null;
g_tile_canvas_texture = null;
g_tile_canvas_sprite = null;

pixi_init_tilegrid = function() {
	return;
	console.log('pixi_init_tilegrid');
	g_tilegrid_ready = true;

	/*
	g_tile_canvas =  document.getElementById("tilecanvas");   // <canvas> at the end of index.html
	g_tile_canvas_renderer = new PIXI.CanvasRenderer(g_tile_canvas.width, g_tile_canvas.height,g_tile_canvas,true);	
	g_tile_canvas_texture = PIXI.Texture.fromCanvas(g_tile_canvas, PIXI.SCALE_MODES.LINEAR);
	g_tile_canvas_sprite = new PIXI.Sprite(g_tile_canvas_texture);
	g_tile_canvas_sprite.anchor.x = 0;
	g_tile_canvas_sprite.anchor.y = 0;
	g_tile_canvas_sprite.visible = true;
	
	//g_tile_canvas_sprite.scale = 1;
	play_screen_group.add(g_tile_canvas_sprite);
	*/
	// g_tile_canvas_texture.update();	// https://github.com/pixijs/pixi.js/issues/1980

	g_pixi_tilegrid_container = new PIXI.DisplayObjectContainer();

	// the last param is the resolution/device pixel ratio of the texture being generated
	// http://pixijs.download/dev/docs/PIXI.BaseRenderTexture.html
	//g_pixi_tilegrid_base_render_texture = new PIXI.BaseRenderTexture(2000, 2000, PIXI.SCALE_MODES.LINEAR, 1);
	var resolution = 1;
	if (using_cocoon_js == false) resolution = 2;
	//resolution = 2;
	g_pixi_tilegrid_base_render_texture = new PIXI.BaseRenderTexture(48*12, 48*12, PIXI.SCALE_MODES.LINEAR, resolution);

	// BaseTexture - my blocks.png assest would be a BaseTexture
	// A Texture describes a frame into that source

	// is this reusable?
	g_pixi_tilegrid_texture = new PIXI.RenderTexture(g_pixi_tilegrid_base_render_texture);

	g_pixi_tilegrid_single_sprite = new PIXI.Sprite(g_pixi_tilegrid_texture);
	g_pixi_tilegrid_single_sprite.anchor.x = 0;
	g_pixi_tilegrid_single_sprite.anchor.y = 0;
	g_pixi_tilegrid_single_sprite.visible = true;

	// play_screen_layer...
	//stage.addChild(g_pixi_tilegrid_single_sprite);
	play_screen_group.add(g_pixi_tilegrid_single_sprite);
};

// interesting
// http://www.html5gamedevs.com/topic/3208-pixi-performance-tile-maps-canvas-and-rendertexture/

TileSpriteClass = Class.extend({

	// http://www.html5gamedevs.com/topic/1706-basic-tiled-game-performance-enhancement/
	// // your tilemap container
	// var mapContainer = new PIXI.DisplayObjectContainer();
	// // ... add all the sprites to the container
	// // render the tilemap to a render texture
	// var texture = new PIXI.RenderTexture():
	// texture.render(mapContainer);
	// // create a single background sprite with the texture
	// var background = new PIXI.Sprite(texture);
	// // add the background to the stage
	// // (notice I didn't add the mapContainer to the scene graph)
	// stage.addChild(background);

	sprite_class: null,	// composition

});

SpriteClass = Class.extend({

	phasersprite: null,
	pixisprite: null,

	layer: 0,
	name: '',

	init: function() {
	},

	setup_sprite: function(name,layer,x,y) {
		// 'pixi layer' is now 'phaser group'

		tile_group.cache_as_bitmap(false);// false;
		game_group.cache_as_bitmap(false);// false;
		g_cache_as_bitmap_timer = 10;

		this.name = name;
		this.layer = layer;

		// performance - render to INTEGER POSITIONS
		x = Math.round(x);
		y = Math.round(y);

		if (x == null) x = -999;
		if (y == null) y = - 999;

		//var test = game.add.sprite(20,40,'atlas_blocks',name);
		//
	
		if (using_phaser == true) {

			//this.phasersprite = game.add.sprite(x,y,'atlas_blocks',name);
			this.phasersprite = game.add.image(x,y,'atlas_blocks',name);
			this.phasersprite.anchor.setTo(0.5,0.5);
		
			//this.phasersprite.smoothed = false;

			if (layer == Types.Layer.GAME) game_group.add(this.phasersprite);		// game_container
			else if(layer == Types.Layer.POP_MENU) options_menu_group.add(this.phasersprite);   // options_menu_container
			else if(layer == Types.Layer.GAME_MENU) game_menu_group.add(this.phasersprite);  // game_menu_container
			else if(layer == Types.Layer.HUD) menu_group.add(this.phasersprite);	// menu_container
			else if(layer == Types.Layer.TILE) tile_group.add(this.phasersprite);	// tile_container
			else if(layer == Types.Layer.BACKGROUND) background_group.add(this.phasersprite);    // background_container
			else if(this.layer == Types.Layer.GAME_SCREEN) game_screen_group.add(this.phasersprite);
			else if(this.layer == Types.Layer.LEVEL_TEXT) text_group.add(this.phasersprite);

		} else {
			this.pixisprite = new PIXI.Sprite(g_textures[name]);
			this.pixisprite.anchor.x = 0.5;
			this.pixisprite.anchor.y = 0.5;
			this.pixisprite.visible = true;

			if (layer == Types.Layer.GAME) game_group.add(this.pixisprite);		// game_container
			else if(layer == Types.Layer.POP_MENU) options_menu_group.add(this.pixisprite);   // options_menu_container
			else if(layer == Types.Layer.GAME_MENU) game_menu_group.add(this.pixisprite);  // game_menu_container
			else if(layer == Types.Layer.HUD) menu_group.add(this.pixisprite);	// menu_container
			else if(layer == Types.Layer.TILE) tile_group.add(this.pixisprite);	// tile_container
			else if(layer == Types.Layer.BACKGROUND) background_group.add(this.pixisprite);    // background_container
			else if(this.layer == Types.Layer.GAME_SCREEN) game_screen_group.add(this.pixisprite);
			else if(this.layer == Types.Layer.LEVEL_TEXT) text_group.add(this.pixisprite);
			else if(this.layer == Types.Layer.STATIC_TILE) static_tile_group.add(this.pixisprite);
		}

		

		// all our sprites are 2x - do nothing if DPR == 2
		//this.phasersprite.scale.setTo(window.devicePixelRatio/2, window.devicePixelRatio/2);

		return;
		
		if (layer == Types.Layer.GAME_MENU && 
		    menu_scale_ratio > 1) this.phasersprite.scale.setTo(menu_scale_ratio, menu_scale_ratio);
	},

	

	x: -999,
	y: -999,

	make_vis: function() {

		if(this.layer == Types.Layer.STATIC_TILE) g_tilegrid_changed = true;

		tile_group.cache_as_bitmap(false);// false;
		game_group.cache_as_bitmap(false);// false;
		g_cache_as_bitmap_timer = 10;

		if (using_phaser == true) {
			
			

		 	//this.phasersprite.body = null;	
			// may need to do this first http://www.html5gamedevs.com/topic/4774-destroy-a-sprite/
		 	//this.phasersprite.destroy();
			//this.setup_sprite(this.name, this.layer, this.x, this.y);

			this.phasersprite.revive();

			this.phasersprite.visible = true;
		} else {
			this.pixisprite.visible = true;
			this.pixisprite.alpha = 1;

			if(this.layer == Types.Layer.STATIC_TILE) pixi_render_sprite_to_tilegrid(this.pixisprite);
			
		}

		

		
	},

	hide: function() { 

		if(this.layer == Types.Layer.STATIC_TILE) g_tilegrid_changed = true;

		tile_group.cache_as_bitmap(false);// false;
		game_group.cache_as_bitmap(false);// false;
		g_cache_as_bitmap_timer = 10;		

		if (using_phaser == true) {
			

			this.phasersprite.visible = false;

			this.phasersprite.kill();

			// just destroy the object?
			// this.phasersprite.body = null;	
			// may need to do this first http://www.html5gamedevs.com/topic/4774-destroy-a-sprite/
			// this.phasersprite.destroy();
		} else {
			this.pixisprite.visible = false;
			//this.pixisprite.rotation = 0;
		}
	},

	scale: function(xscale, yscale) {

		if(this.layer == Types.Layer.STATIC_TILE) g_tilegrid_changed = true;

		tile_group.cache_as_bitmap(false);// false;
		game_group.cache_as_bitmap(false);// false;
		g_cache_as_bitmap_timer = 10;

		if (using_phaser == true) {
			this.phasersprite.scale.setTo(xscale, yscale);
		} else {
			this.pixisprite.scaleMode = PIXI.SCALE_MODES.NEAREST;
			this.pixisprite.scale.set(xscale,yscale);
		}
	},

	update_pos: function(x,y) {

		if(this.layer == Types.Layer.STATIC_TILE) g_tilegrid_changed = true;

		tile_group.cache_as_bitmap(false);// false;
		game_group.cache_as_bitmap(false);// false;
		g_cache_as_bitmap_timer = 10;

		this.x = x;
		this.y = y;

		if (using_phaser == true) {
			
			this.phasersprite.body = null;
			this.phasersprite.destroy();

			this.setup_sprite(this.name, this.layer,x,y);
		
		
			//this.phasersprite.x = x;
			//this.phasersprite.y = y;
		} else {
			
		
			this.pixisprite.position.x = x;
			this.pixisprite.position.y = y;

			//this.pixisprite.rotation = 0;
			
			if(this.layer == Types.Layer.STATIC_TILE) pixi_render_sprite_to_tilegrid(this.pixisprite);
		}
		
	},

	reset_angle: function () {

		if(this.layer == Types.Layer.STATIC_TILE) g_tilegrid_changed = true;
		if (using_phaser == true) {
		
		
			this.phasersprite.angle = 0;
		} else {
			this.pixisprite.rotation = 0;

		}
	},

	rotate_ninety: function () {
		if(this.layer == Types.Layer.STATIC_TILE) g_tilegrid_changed = true;
		if (using_phaser == true) {
		
		
			this.phasersprite.angle += 90;
		} else {
			this.pixisprite.rotation += 1.5708;

		}
	},

	set_z_to_top: function() {
		// Group.moveUp	   or   Group.bringToTop
	},

	set_texture: function(name) {
		if(this.layer == Types.Layer.STATIC_TILE) g_tilegrid_changed = true;
		if (using_phaser == true) {
		
			// this.phasersprite.body = null;	// may need to do this first http://www.html5gamedevs.com/topic/4774-destroy-a-sprite/
			this.phasersprite.destroy();

			this.setup_sprite(name, this.layer, this.x, this.y);

		} else {
			
			//this.pixisprite.setTexture(g_textures[name]);
			if (g_textures[name] == null) {	
				console.log('no such g_textures[' + name + ']');
				return;
			}
			this.pixisprite.texture = g_textures[name];
			this.pixisprite.rotation = 0;

		}
	},

	set_anchor: function(x, y) {
		if (using_phaser == true) {
			this.phasersprite.anchor.setTo(0,0);
		} else {


		}

	},

	set_alpha: function(alpha_) {
		if(this.layer == Types.Layer.STATIC_TILE) g_tilegrid_changed = true;
		if (using_phaser == true) {
			this.phasersprite.alpha = alpha_;
		} else {
			this.pixisprite.alpha = alpha_;
		}
	},

	

	
});

var background_group;
var tile_group;
var game_group;
var menu_group;
var game_menu_group;
var game_screen_group;
var options_menu_group;
var whole_app_group;

var background_container;
var tile_container;
var game_container;
var menu_container;
var level_menu_container;
var game_menu_container;
var options_menu_container;

var play_screen_group;
var play_screen_container;

var play_group;
var play_container;

setup_layers = function () {
	background_group = new LayerClass();//game.add.group();
		static_tile_group = new LayerClass();//game.add.group();
		tile_group = new LayerClass();//game.add.group();
		game_group = new LayerClass();//game.add.group();
		menu_group = new LayerClass();//game.add.group();

		

		//level_menu_container = new LayerClass();
		
		//tile_group.cacheAsBitmap = true;
		

		play_screen_group =  new LayerClass();//game.add.group();

		play_group =  new LayerClass();//game.add.group();

		
		play_screen_group.add(static_tile_group.layer)
		play_screen_group.add(tile_group.layer);
		play_screen_group.add(game_group.layer);
		
		
		play_group.add(background_group.layer);
		play_group.add(play_screen_group.layer);
		play_group.add(menu_group.layer);

		game_screen_group = new LayerClass();//game.add.group(); // used for menu pop up (pop right)
		game_screen_group.add(play_group.layer);

		game_menu_group = new LayerClass();//game.add.group();

		text_group = new LayerClass();//game.add.group();
		game_screen_group.add(text_group.layer);

		options_menu_group = new LayerClass();//game.add.group();
		//options_menu_group.bringToTop();
		//game.bringToTop(options_menu_group.layer);

		background_container = background_group;
		tile_container =tile_group;
		game_container =game_group;
		menu_container =menu_group;
		game_group_container =game_menu_group;
		options_menu_container =options_menu_group;

		whole_app_group = new LayerClass();//game.add.group();
		//whole_app_group.add(play_group);
		//whole_app_group.add(game_menu_group);
		///whole_app_group.add(options_menu_group);

		play_screen_container = play_screen_group;

		play_container = play_group;


	
};

g_cache_as_bitmap_timer = 10;

pBar.value += 10;