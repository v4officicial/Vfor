//console.log("jobs.js connected");
import * as libi from '/libi/lib.js';
import * as home from '/JS/Home/home_page.js';


// Container HTML block
export var block_container_cards = `
  <div class="cards-container"></div>`;

// Insert the initial container into element with class "main_main"
libi.get_set_all_class("main_main", block_container_cards);

// Fetch JSON data and create cards dynamically
fetch('/JSON/Jobs/company_detailes.json')
  .then(response => response.json())
  .then(data => {
    // Generate HTML for all cards
    const content_blocks = data.map((item, index) => `
      <!-- CARD ${index + 1} -->
      <div class="card">
        <img src="${item.company_logo_url}" class="logo" alt="${item.company_name}" />
        <div class="title">${item.company_name}</div>
        <div class="description">${item.company_description}</div>
        <div class="card-footer">
          <div>🔢 ${item.total_no_of_opening}</div>
          <div>✅ Verified</div>
        </div>
        <button class="btn" id="apply-btn-${index}">Explore</button>
      </div>
    `).join('');

    // Populate cards-container with the cards HTML
    libi.get_set_all_class("cards-container", content_blocks);

    // Add event listeners to each Explore button
    data.forEach((item, index) => {
      const btn = document.getElementById(`apply-btn-${index}`);
      if (btn) {
        btn.addEventListener("click", () => {
          libi.set_page_url(item.jobs_page_url, 'index_val', index);
        });
      }
    });
  })
  .catch(error => console.error('Error loading JSON:', error));


/*// jobs.js

import * as libi from '/libi/lib.js';
import * as home from '/JS/Home/home_page.js';

// HTML for the card container
const blockContainerCards = `
  <div class="cards-container"></div>
`;

// Insert the initial container into elements with the "main_main" class
libi.get_set_all_class("main_main", blockContainerCards);

// Async function to load and render company cards
async function loadCompanyCards() {
  try {
    const response = await fetch('/JSON/Jobs/company_detailes.json');
    if (!response.ok) throw new Error('Failed to fetch company data');
    const data = await response.json();

    // Create all cards at once and update DOM only once
    const contentBlocks = data.map((item, index) => `
      <div class="card">
        <img src="${item.company_logo_url}" class="logo" alt="${item.company_name} logo" />
        <div class="title">${item.company_name}</div>
        <div class="description">${item.company_description}</div>
        <div class="card-footer">
          <div>🔢 ${item.total_no_of_opening}</div>
          <div>✅ Verified</div>
        </div>
        <button class="btn" id="apply-btn-${index}" aria-label="Explore jobs at ${item.company_name}">Explore</button>
      </div>
    `).join('');

    libi.get_set_all_class("cards-container", contentBlocks);

    // Event delegation for better performance if you expect many buttons
    document.querySelector('.cards-container').addEventListener('click', (event) => {
      if (event.target.matches('.btn')) {
        const index = parseInt(event.target.id.replace('apply-btn-', ''), 10);
        if (!isNaN(index) && data[index]) {
          libi.set_page_url(data[index].jobs_page_url, 'index_val', index);
        }
      }
    });
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}

// Run the function to load cards
loadCompanyCards();
*/