import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

export default function Features() {
  return (
  <>
 <section class="feature_hero">
      <div class="hero_box">
        <div class="hero_txt">
          <h1>Powerful tools for your business</h1>
          <span
            >Discover a suite of features designed to streamline your
            operations. From automated billing to comprehensive client
            management, we've got you covered.
          </span>
          <div class="hero_btn">
            <button class="startBtn">Get Started Now</button>
          </div>
        </div>
      </div>
    </section>
    <section class="features_explained">
      <div class="explained_box">
        <div class="explained_txt">
          <h2>Automated Invoicing</h2>
          <span
            >Create professional invoices in seconds. Our intelligent editor
            learns your preferences, and our automation tools ensure you get
            paid on time, every time.
          </span>
          <div class="text_box">
            <h3><i class="fa-solid fa-arrows-rotate"></i>Recurring Invoices</h3>
            <span
              >Set up billing schedules for retainers or subscriptions. We'll
              generate and send them automatically.</span
            >
          </div>
          <div class="text_box">
            <h3><i class="fa-solid fa-palette"></i>Custom Templates</h3>
            <span
              >Design invoices that match your brand identity with our
              drag-and-drop template builder.</span
            >
          </div>
          <div class="text_box">
            <h3><i class="fa-solid fa-bell"></i>Automated Reminders</h3>
            <span
              >Polite, automated nudges for unpaid invoices so you don't have to
              chase clients awkwardly.</span
            >
          </div>
        </div>

        <img class="explained_img" src={feature1} />
      </div>
    </section>

    <section class="features_explained">
      <div class="explained_box">
        <img class="explained_img" src={feature2} />
        <div class="explained_txt">
          <h2>Client Relationship Management</h2>
          <span
            >Build stronger relationships. Keep all your client details,
            communication history, and financial data organized in one
            centralized hub.
          </span>
          <div class="text_box">
            <h3>
              <i class="fa-solid fa-arrows-rotate"></i>Interaction History
            </h3>
            <span>Track emails, calls, and invoice views automatically.</span>
          </div>
          <div class="text_box">
            <h3><i class="fa-solid fa-palette"></i>Centralized Files</h3>
            <span
              >Store contracts and project files securely with each
              profile.</span
            >
          </div>
          <div class="text_box">
            <h3><i class="fa-solid fa-bell"></i>Client Insights</h3>
            <span
              >See lifetime value and payment reliability scores
              instantly.</span
            >
          </div>
        </div>
      </div>
    </section>

    <section class="features_explained">
      <div class="explained_box">
        <div class="explained_txt">
          <h2>Effortless Expense Tracking</h2>
          <span
            >Stop hoarding paper receipts. Sync your bank accounts and
            categorize expenses on the fly to understand your cash flow better.
          </span>
          <div class="text_box">
            <h3>
              <i class="fa-solid fa-arrows-rotate"></i> Bank Sync Visualization
            </h3>
            <span
              >Securely connect to over 10,000+ financial institutions.
              Transactions appear in real-time, ready for categorization.</span
            >
          </div>
          <div class="text_box">
            <h3><i class="fa-solid fa-palette"></i>Receipt Scanning</h3>
            <span
              >Snap a photo of your receipt with our mobile app. Our OCR
              technology extracts the date, merchant, and amount
              automatically.</span
            >
          </div>
        </div>

        <img class="explained_img" src={feature3} />
      </div>
    </section>

    <section class="contacts">
      <div class="contacts_txt">
        <h1>Prêt à simplifier votre gestion ?</h1>
        <span
          >Rejoignez des milliers de professionnels qui utilisent Invoicely pour
          faire décoller leur entreprise. 14 jours d'essai gratuit, aucune carte
          de crédit requise.
        </span>
      </div>
      <button>Voir les tarifs</button>
    </section>
</>
)
}