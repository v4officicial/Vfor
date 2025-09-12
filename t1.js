console.log("connected");
import * as libi from '/libi/lib.js';
import * as home from '/JS/Home/home_page.js';


// Container HTML block
export var form_container = `

`;

// Insert the initial container into element with class "main_main"
libi.get_set_all_class("main_main", form_container);



// Fetch profile data from localStorage in a new JS page
const profilesJSON = localStorage.getItem("portfolioProfiles");
let profiles = [];
if (profilesJSON) {
  try {
    profiles = JSON.parse(profilesJSON);
    // Now 'profiles' is an array of portfolio objects.
    console.log(profiles[0]);
  } catch (e) {
    console.error("Error parsing profile data:", e);
  }
} else {
  console.log("No portfolio profiles found in local storage.");
}
