console.log("Terms & Conditions connected");
import * as libi from '/libi/lib.js';
import * as home from '/JS/Home/home_page.js';

// stylesheet link
var css_link = `
  <link rel="stylesheet" href="/Essentials/Terms/terms.css" type="text/css" media="all" />
`;

libi.get_set_tag_index_plus("head", 0, css_link);

// Container HTML block
export var terms_conditions_container = `
  <div class="terms_conditions_container">
    <h1>Terms & Conditions</h1>
    <p>Last updated: September 20, 2025</p>

    <p>These Terms & Conditions (“Terms”) govern your use of <strong>vfor.in</strong> (referred to as “we”, “us”, or “our”). 
    By accessing or using our platform <a href="https://www.vfor.in">www.vfor.in</a>, you agree to comply with these Terms. 
    If you do not agree, you must discontinue using our services.</p>

    <h2>Eligibility</h2>
    <p>Our platform is available to individuals aged 16 or above (or the legal minimum age in your jurisdiction). 
    By creating an account, you confirm you meet this age requirement.</p>

    <h2>User Responsibilities</h2>
    <ul>
      <li>Provide accurate, updated information during registration.</li>
      <li>Maintain confidentiality of your account credentials.</li>
      <li>Not misuse the platform for unlawful activities.</li>
      <li>Respect intellectual property rights of Vfor and other users.</li>
    </ul>

    <h2>Intellectual Property</h2>
    <p>All materials, logos, text, graphics, and content on Vfor are the intellectual property of Vfor and protected by applicable law. 
    Users cannot copy, resell, or redistribute without prior written consent.</p>

    <h2>Limitations of Liability</h2>
    <p>We provide our platform “as is” and disclaim liability for indirect damages, lost opportunities, or technical interruptions. 
    Users accept risks associated with using an online career platform.</p>

    <h2>Termination of Account</h2>
    <p>Vfor reserves the right to suspend or terminate accounts that violate these Terms, our Privacy Policy, or applicable law.</p>

    <h2>Changes to These Terms</h2>
    <p>We may update these Terms periodically to reflect changes in law, business practices, or services. 
    Updates will be posted here with the latest "Last Updated" date.</p>

    <h2>Governing Law</h2>
    <p>These Terms are governed by and construed under the applicable laws of India, without regard to conflict of law principles.</p>

    <h2>Contact Us</h2>
    <p>
      <strong>Support Team</strong><br>
      Email: <a href="mailto:support@vfor.in">support@vfor.in</a><br>
      Phone: [+91-XXXXXXXXXX]<br>
      Address: [Your Office Address, City, Country]
    </p>

    <!-- FAQ Section -->
    <section id="terms-faq">
      <h2>Frequently Asked Questions (FAQ)</h2>

      <div class="faq-item">
        <h3>What do Vfor’s Terms & Conditions cover?</h3>
        <p>They explain user responsibilities, rights, restrictions, and the scope of services provided by Vfor.</p>
      </div>

      <div class="faq-item">
        <h3>Who can use Vfor’s platform?</h3>
        <p>Students, graduates, experienced professionals, and recruiters—users must be at least 16 years old (or legal minimum in their country).</p>
      </div>

      <div class="faq-item">
        <h3>Can I share or resell Vfor’s content?</h3>
        <p>No. All content is protected by intellectual property law and cannot be reused without permission.</p>
      </div>

      <div class="faq-item">
        <h3>What happens if I breach the Terms?</h3>
        <p>Your account may be suspended or permanently terminated, and legal action can be taken if violations are severe.</p>
      </div>

      <div class="faq-item">
        <h3>How can I contact Vfor regarding Terms?</h3>
        <p>You can reach our support team at <a href="mailto:support@vfor.in">support@vfor.in</a> for any clarification or dispute resolution.</p>
      </div>
    </section>
  </div>
`;

// Insert the container into element with class "main_main"
libi.get_set_all_class("main_main", terms_conditions_container);
