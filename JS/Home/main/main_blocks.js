//console.log("block_container.js connected successful");
import * as libi from '/libi/lib.js';

/*export var main_block_container_card=`
<div class="container">
    
    <div class="card">
      <div class="box">
        <a href='#'>
        <div class="content">
          <h2>01</h2>
          <h3>Card One</h3>
          <i class="fa fa-vcard"></i>
        </div>
        </a>
      </div>
    </div>

  </div>

`;*/

export var main_block_container_card=
`<div class="container"></div>`
;

//loop json  with html tags
fetch('/JSON/home/home_content.json')
  .then(response => response.json())
  .then(data => {
    const content_blocks = data.map((item, index) => `
      <div class="card">
        <div class="box">
          <a href="${item.href_link}">
            <div class="content">
              <h2>${index + 1}</h2>
              <h3>${item.header}</h3>
              <i class="${item.icon}"></i>
            </div>
          </a>
        </div>
      </div>
    `).join(''); // join array into one big string
    
    //link to "container class"
libi.get_set_all_class("container",content_blocks);
  
  })
  .catch(error => console.error('Error loading JSON:', error));


//link to "main_main"
libi.get_set_all_class_plus("main_main",main_block_container_card);

//stylesheet link
var css_link=`
<link rel="stylesheet" href="/CSS/Home/main/main_blocks.css" type="text/css" media="all" />
`;

libi.get_set_tag_index_plus("head",0,css_link);

