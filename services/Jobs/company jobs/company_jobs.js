/*//console.log("company jobs connected");
import * as libi from '/libi/lib.js';
import * as home from '/JS/Home/home_page.js';
export var block_container_cards = `
  <div class="cards-container"></div>`;
  
//link to "main_main"
libi.get_set_all_class("main_main",block_container_cards);

const Company_id = libi.get_url_parameter("index_val"); // get the company index_id

fetch('/JSON/Jobs/company_detailes.json')
  .then(response => response.json())
  .then(company_data => {
    // Get the company using the Company_id (make sure Company_id is a valid index or key)
    const company = company_data[Company_id];

    // Fetch the jobs JSON file path stored in company.jobs_json
    return fetch(company.jobs_json)
      .then(response => response.json())
      .then(company_jobs => {
        return { company, company_jobs };
      });
  })
  .then(({ company, company_jobs }) => {
    // Map over the jobs and generate HTML blocks for each job
    const content_blocks = company_jobs.map((item, index) => `
      <div class="card">
        <img src="${company.company_logo_url}" class="logo" alt="${company.company_name}" />
        <div class="title">${item.job_role} (${item.job_id})</div>
        <div class="description">
          <div>Experience : ${item.Experience}</div>
          <div>CTC : ${item.CTC}</div>
          <div>Eligible : ${item.Eligible}</div>
          <div>Mandatory : ${item.skills}</div>
          <div><b>Note : ${item.Note}</b></div>
        </div>
        <div class="card-footer">
          <div>🌍 ${item.location}</div>
          <div>✅ ${item.work_mode}</div>
        </div>
        <div class="card-footer">
  <button class="btn" id="shareBtn" aria-label="Share job listing">Share</button>
  <button class="btn" id="apply-btn-${index}" 
    onclick="set_page_url2('${item.job_discription_url}', 'company_id', ${Company_id}, 'job_id', ${index})">Apply</button>
</div>

      </div>
    `).join('');

    // Insert the generated content into the container with class "cards-container"
    libi.get_set_all_class("cards-container", content_blocks);
    libi.setupShareButton('shareBtn',
  `${job.job_role} at ${company.company_name} - Apply Now!`,
  `Hey! Check out this exciting ${job.job_role} position at ${company.company_name} located in ${job.location}. Requires ${job.Experience} experience. Don't miss your chance to apply now!`,
  window.location.href
);


    // Add event listeners to buttons if needed (optional because onclick attribute is set)
    // It's better not to duplicate event handlers if using inline onclick
    // But if you want, you can do it like this:
    company_jobs.forEach((item, index) => {
      const btn = document.getElementById(`apply-btn-${index}`);
      if (btn) {
        btn.addEventListener("click", function() {
          libi.set_page_url2(item.job_discription_url, 'company_id', Company_id, 'job_id', index);
        });
      }
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
*/

//console.log("company jobs connected");
import * as libi from '/libi/lib.js';
import * as home from '/JS/Home/home_page.js';

export var block_container_cards = `
  <div class="cards-container"></div>
  <!-- Copy notification -->
  <div id="copyNotification" role="alert" aria-live="assertive" style="opacity:0;">
    Link copied to clipboard!
  </div>`;

// link to "main_main"
libi.get_set_all_class("main_main", block_container_cards);

const Company_id = libi.get_url_parameter("index_val"); // get the company index_id

fetch('/JSON/Jobs/company_detailes.json')
  .then(response => response.json())
  .then(company_data => {
    const company = company_data[Company_id]; // company details

    return fetch(company.jobs_json)
      .then(response => response.json())
      .then(company_jobs => {
        return { company, company_jobs };
      });
  })
  .then(({ company, company_jobs }) => {
    // Generate job HTML cards
    const content_blocks = company_jobs.map((item, index) => `
      <div class="card">
        <img src="${company.company_logo_url}" class="logo" alt="${company.company_name}" />
        <div class="title">${item.job_role} (${item.job_id})</div>
        <div class="description">
          <div>Experience : ${item.Experience}</div>
          <div>CTC : ${item.CTC}</div>
          <div>Eligible : ${item.Eligible}</div>
          <div>Mandatory : ${item.skills}</div>
          <div><b>Note : ${item.Note}</b></div>
        </div>
        <div class="card-footer">
          <div>🌍 ${item.location}</div>
          <div>✅ ${item.work_mode}</div>
        </div>
        <div class="card-footer">
          <button class="btn" id="shareBtn-${index}" aria-label="Share job listing"><i class="fa fa-share-alt"></i> Share</button>
          <button class="btn" id="applyBtn-${index}">Apply</button>
        </div>
      </div>
    `).join('');

    // Insert job cards into the container
    libi.get_set_all_class("cards-container", content_blocks);

    // Setup event listeners for each job
    company_jobs.forEach((item, index) => {
      // Apply button
      const applyBtn = document.getElementById(`applyBtn-${index}`);
      if (applyBtn) {
        applyBtn.addEventListener("click", () => {
          libi.set_page_url2(
            item.job_discription_url,
            'company_id', Company_id,
            'job_id', index
          );
        });
      }

      // Share button
      const shareBtn = document.getElementById(`shareBtn-${index}`);
      if (shareBtn) {
        shareBtn.addEventListener("click", () => {
          libi.setupShareButton(
            `shareBtn-${index}`,
            `${item.job_role} at ${company.company_name} - Apply Now!`,
            `Hey! Check out this exciting ${item.job_role} position at ${company.company_name} located in ${item.location}. Requires ${item.Experience} experience. Don't miss your chance to apply now!`,
            `/services/Jobs/company%20jobs/primary/primary_job.html?company_id=${Company_id}&job_id=${index}`
          );
        });
      }
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
