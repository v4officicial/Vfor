console.log("Contact us connected");
import * as libi from '/libi/lib.js';
import * as home from '/JS/Home/home_page.js';

//stylesheet link
var css_link=`
  <link rel="stylesheet" href="/Essentials/Privacy policy/privacy_policy.css" type="text/css" media="all" />
`;

libi.get_set_tag_index_plus("head",0,css_link);

// Container HTML block
export var privacy_policy_container = `
  <div class="privacy_policy_container">
   <h1>Privacy Policy</h1>
  <p>Last updated: September 20, 2025</p>

  <p>This GDPR-compliant Privacy Policy explains how <strong>vfor.in</strong> (referred to as "we", "us", or "our") collects, processes, and protects personal data in accordance with the EU General Data Protection Regulation (GDPR). This applies when you use our services or visit our website <a href="https://www.vfor.in">www.vfor.in</a>.</p>

  <h2>What Information We Collect</h2>
  <ul>
    <li><strong>Personal Data:</strong> Name, email address, phone number, billing/shipping address, and account details.</li>
    <li><strong>Usage Data:</strong> IP address, browser type, geolocation, device information, and pages visited.</li>
    <li><strong>Cookies and Tracking:</strong> Data stored via cookies, analytics, and similar technologies. See our <a href="/cookie-policy">Cookie Policy</a>.</li>
  </ul>

  <h2>Legal Basis for Processing Personal Data</h2>
  <ul>
    <li><strong>Consent:</strong> When you provide permission (e.g., newsletter signup).</li>
    <li><strong>Contract:</strong> To perform obligations under agreements.</li>
    <li><strong>Legal Obligation:</strong> When required by law or regulation.</li>
    <li><strong>Legitimate Interests:</strong> For business operations while respecting your rights.</li>
  </ul>

  <h2>How We Use Your Information</h2>
  <ul>
    <li>Provide and improve services.</li>
    <li>Respond to inquiries and requests.</li>
    <li>Process transactions and contracts.</li>
    <li>Comply with legal requirements.</li>
    <li>Send updates, marketing, and newsletters (with your consent).</li>
  </ul>

  <h2>Data Retention</h2>
  <p>We retain data only as long as necessary to meet service, legal, or compliance purposes unless a longer period is legally required.</p>

  <h2>Your GDPR Rights</h2>
  <ul>
    <li>Right of Access (request your personal data).</li>
    <li>Right to Rectification (correct inaccurate data).</li>
    <li>Right to Erasure (“right to be forgotten”).</li>
    <li>Right to Restrict Processing.</li>
    <li>Right to Object (e.g., marketing).</li>
    <li>Right to Data Portability (transfer data to another service).</li>
    <li>Right to Withdraw Consent anytime.</li>
    <li>Right to Lodge a Complaint with a Data Protection Authority.</li>
  </ul>

  <h2>Cookies and Tracking</h2>
  <p>We use cookies and similar technologies to enhance user experience and analyze performance. You can control cookies in your browser or review our <a href="/cookie-policy">Cookie Policy</a>.</p>

  <h2>Data Security</h2>
  <p>We apply encryption, firewalls, secure servers, and restricted access to safeguard personal data against unauthorized use.</p>

  <h2>International Data Transfers</h2>
  <p>We ensure GDPR-compliant transfers outside the EEA using legal safeguards such as Standard Contractual Clauses (SCCs).</p>

  <h2>Contact Our Data Protection Officer</h2>
  <p>
    <strong>DPO:</strong> [DPO Name]<br>
    Email: <a href="mailto:dpo@vfor.in">dpo@vfor.in</a><br>
    Phone: [+91-XXXXXXXXXX]<br>
    Address: [Your Office Address, City, Country]
  </p>

  <h2>Updates to This Privacy Policy</h2>
  <p>We may revise this Privacy Policy to reflect changes in practices, legal requirements, or technologies. Updates will be posted here with the latest "Last Updated" date.</p>

  <!-- FAQ Section -->
  <section id="privacy-faq">
    <h2>Frequently Asked Questions (FAQ)</h2>

    <div class="faq-item">
      <h3>What is GDPR and why does it matter?</h3>
      <p>The General Data Protection Regulation (GDPR) is an EU law that protects personal data. It ensures companies like vfor.in handle your information transparently and securely.</p>
    </div>

    <div class="faq-item">
      <h3>What personal data does vfor.in collect?</h3>
      <p>We collect personal data (name, email, phone, address) and usage data (IP address, device, cookies) to provide services and improve user experience.</p>
    </div>

    <div class="faq-item">
      <h3>How can I delete my data?</h3>
      <p>You can exercise your “right to be forgotten” by contacting our Data Protection Officer at <a href="mailto:dpo@vfor.in">dpo@vfor.in</a>.</p>
    </div>

    <div class="faq-item">
      <h3>Does vfor.in share information with third parties?</h3>
      <p>No, we never sell personal data. We may share with trusted providers (e.g., payment processors, hosting) under strict GDPR rules.</p>
    </div>

    <div class="faq-item">
      <h3>How does vfor.in protect my data?</h3>
      <p>We use encryption, secure servers, and limited access controls to safeguard your information from unauthorized access or misuse.</p>
    </div>
  </section>
</div>
 `;

// Insert the initial container into element with class "main_main"
libi.get_set_all_class("main_main", privacy_policy_container);
