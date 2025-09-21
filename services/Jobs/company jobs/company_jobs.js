//console.log("company jobs connected");
// Import libraries
import * as libi from '/libi/lib.js';
import * as home from '/JS/Home/home_page.js';

// Base container HTML
export var block_container_cards = `
  <div class="cards-container"></div>
  <!-- Copy notification -->
  <div id="copyNotification" role="alert" aria-live="assertive" style="opacity:0;">
    Link copied to clipboard!
  </div>`;

// Inject container into main layout
libi.get_set_all_class("main_main", block_container_cards);

// Get company index from URL
const Company_id = libi.get_url_parameter("index_val");

// Fetch company details JSON
fetch('/JSON/Jobs/company_detailes.json')
  .then(response => response.json())
  .then(company_data => {
    const company = company_data[Company_id];

    // Fetch company-specific jobs
    return fetch(company.jobs_json)
      .then(response => response.json())
      .then(company_jobs => ({ company, company_jobs }));
  })
  .then(({ company, company_jobs }) => {
    // Generate job cards
    const content_blocks = company_jobs.map((item, index) => `
      <div class="card">
        <img src="${company.company_logo_url}" class="logo" alt="${company.company_name}" />
        
        <div class="title">${item.job_role} (${item.job_id})</div>
        
        <div class="description">
          <div>Experience : ${item.Experience}</div>
          <div>Job Type : <b>${item.job_type}</b></div>
          <div>CTC : ${item.Expected_CTC}</div>
          <div>Eligible : ${item.Eligible}</div>
          <div>Mandatory : ${item.skills}</div>
          <div><b>Note : ${item.Note}</b></div>
        </div>
        
        <div class="card-footer">
          <div>🌍 ${item.location}</div>
          <div>✅ ${item.work_mode}</div>
        </div>
        
        <div class="card-footer">
          <button class="btn" id="shareBtn-${index}" aria-label="Share job listing">
            <i class="fa fa-share-alt"></i> Share
          </button>
          <button class="btn" id="applyBtn-${index}">Apply</button>
        </div>
      </div>
    `).join('');

    // Render job cards into container
    libi.get_set_all_class("cards-container", content_blocks);

    // Event listeners for each job
    company_jobs.forEach((item, index) => {
      // Apply button event
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

      // Share button event
      const shareBtn = document.getElementById(`shareBtn-${index}`);
      if (shareBtn) {
        shareBtn.addEventListener("click", () => {
          libi.setupShareButton(
            `shareBtn-${index}`,
            `${item.job_role} at ${company.company_name} - Apply Now!`,
            `🚨 Opportunity alert! 🚨 Join **${company.company_name}** as a **${item.job_role}**.\n
📍 Location: ${item.location}\n
🕒 Job Type: ${item.job_type}\n
🏢 Work mode: ${item.work_mode}\n
💼 Experience: ${item.Experience}\n
💰 CTC package: ${item.Expected_CTC}\n
🎓 Qualifications: ${item.Eligible}\n
🆔 Use Job ID: ${item.job_id} to apply. Don’t miss out! ✨\n
👉 Apply here:\n ${window.location.origin}/services/Jobs/company%20jobs/primary/primary_job.html?company_id=${Company_id}&job_id=${index}\n\n
**Stay updated by joining our communities:**\n
📱 WhatsApp: https://chat.whatsapp.com/JOKrLLf9lfGDQAWJsP8Bbc\n
📡 Telegram: https://t.me/vfor_jobs_for_all\n\n 👉 Apply here: \n`,
            ` ${window.location.origin}/services/Jobs/company%20jobs/primary/primary_job.html?company_id=${Company_id}&job_id=${index}`
          );
        });
      }
    });
  })
  .catch(error => console.error('Error loading JSON:', error));