//console.log("Home page connected successful");
import * as libi from '/libi/lib.js';
import * as meta from '/JS/Home/head/head_meta.js';
import {headerBG} from '/JS/Home/header/headerBG.js';
import {menubar} from '/JS/Home/header/menu_bar.js';
import {main_block_container_card} from '/JS/Home/main/main_blocks.js';
import {footer} from '/JS/Home/footer/footer.js';

//console.log(menu_bar);
//*************head*************//
libi.get_set_tag_index_plus("head",0,meta.head_req);
//libi.get_set_tag_index_plus("head",0,meta.css_links);
libi.get_set_all_class_plus("scripts",meta.JS_scripts);

//************body************/
//header Background
libi.get_set_tag_index("body",0,headerBG);
//connect to header "inner-header" container
libi.get_set_all_class("inner-header",menubar);
//link to "main_main"
libi.get_set_all_class_plus("main_main",main_block_container_card);
//link footer to body
libi.get_set_tag_index_plus("body",0,footer);


