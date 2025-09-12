export function get_set_all_class(cls,output){
    var get_set= document.getElementsByClassName(cls);
    for(let i=0;i<get_set.length;i++){
      get_set[i].innerHTML=output;
    }
  }
export function get_set_all_class_plus(cls,output){
    var get_set= document.getElementsByClassName(cls);
    for(let i=0;i<get_set.length;i++){
      get_set[i].innerHTML+=output;
    }
  }
export function get_set_all_id(id,output){
    var get_set= document.getElementsByClassName(id);
    get_set.innerHTML=output;
  }
export function get_set_all_id_plus(id,output){
    var get_set= document.getElementsByClassName(id);
    get_set.innerHTML+=output;
  }
export function get_set_tag_index(tag,index=0,output){
    var get_set= document.getElementsByTagName(tag)[index];
    get_set.innerHTML=output;
  }
export function get_set_tag_index_plus(tag,index=0,output){
    var get_set= document.getElementsByTagName(tag)[index];
    get_set.innerHTML+=output;
  }
export function get_set_all_tag(tag,output){
    var get_set= document.getElementsByTagName(tag);
    for(let i=0;i<get_set.length;i++){
      get_set[i].innerHTML=output;
    }
  }
export function get_set_all_tag_pluss(tag,output){
    var get_set= document.getElementsByTagName(tag);
    for(let i=0;i<get_set.length;i++){
      get_set[i].innerHTML+=output;
    }
  }
  /*main end*/
  // button st
export function btn(type,btn_name,action,u_id,classs){
    var button=`<button type="`+type+`id="`+u_id+`" onclick=`+action+` class="`+classs+`">`+btn_name+`</button>`;
    return button;
  }
  // button end

    //set url function st
export function set_page_url(page_href, set_variable,u_value) {
  //page url + variable=value
  window.location.href = page_href + "?"+set_variable+"="+ u_value;
  //Replace with your desired URL
}
//set url function end

//set url2 function st
export function set_page_url2(page_href, set_variable1, u1_value,set_variable2, u2_value) {
      //page url + variable=value
      window.location.href = page_href + "?" + set_variable1 + "=" + encodeURIComponent(u1_value) + "&" + set_variable2 + "=" + encodeURIComponent(u2_value);
      //Replace with your desired URL
    }
//set url2 function end

 //get url function st
 export function get_url_parameter(set_variable){
  const queryString = window.location.search;  // gets query string part including "?"
  const urlParams = new URLSearchParams(queryString);
  const value = urlParams.get(set_variable); // get value of 'set_variable' parameter
  return value;
}
 //get url function end
 
 //onclick href st
 export function a_href(id, url_path) {
  const btn = document.getElementById(id);
  btn.addEventListener("click", function() {
    window.location.href = url_path;
  });
}
//onclick href end
//share fun st
export function setupShareButton(button_id, title, message, url) {
  /*` <!-- Copy notification -->
  <div id="copyNotification" role="alert" aria-live="assertive" style="opacity:0;">
    Link copied to clipboard!
  </div>`;*/
  const shareBtn = document.getElementById(button_id);
  const notification = document.getElementById('copyNotification');

  if (!shareBtn) {
    console.error(`Element with id "${button_id}" not found.`);
    return;
  }

  shareBtn.addEventListener('click', async () => {
    const currentUrl = url || window.location.href;
    const shareText = `${message}\n${currentUrl}`;

    const shareData = {
      title: title,
      text: message, // keep only message here
      url: currentUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Shared successfully!");
      } catch (err) {
        console.error('Share failed:', err.message);
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareText);
        if (notification) {
          notification.style.opacity = '1';
          setTimeout(() => {
            notification.style.opacity = '0';
          }, 2000);
        } else {
          alert("Link copied to clipboard!");
        }
      } catch (err) {
        alert('Sharing is not supported and copying failed. Please copy the URL manually.');
      }
    } else {
      alert('Sharing is not supported on this browser.');
    }
  });
}

//share fun end
  /*texto copy start*/
  /*text copy end*/
