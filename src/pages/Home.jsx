import hero_img from "../assets/hero_img.png";
export default function Home() {
  return (
  <>
 <section class="hero">
      <div class="hero_box">
        <div class="hero_txt">
          
          <h1>Simplified invoicing for freelancers and small businesses</h1>
          <span
            >Manage your clients and get paid faster with our all-in-one suite.
            <br />
            Creating professional invoices has never been this seamless.
          </span>
          <div class="hero_btn">
            <button class="startBtn">Commencer gratuitement</button
            ><button class="demoBtn">Voir la démo</button>
          </div>
        </div>
        <img src={hero_img} />
      </div>
    </section>
    <section class="features">
      <div class="features_all">
        <div class="features_txt">
          <h5>POWERFUL FEATURES</h5>
          <h2>Everything you need to run your business</h2>
          <span
            >Stop wrestling with spreadsheets. Our tools automate the boring
            stuff so you can focus on your work.
          </span>
        </div>
        <div class="features_box">
          <div class="box">
            <i class="fa-solid fa-file-invoice"></i>
            <h3>Automated Invoicing</h3>
            <span
              >Set up recurring invoices and forget them. We handle the
              generation and sending automatically.
            </span>
          </div>
          <div class="box">
            <i class="fa-solid fa-user-group"></i>
            <h3>Automated Invoicing</h3>
            <span
              >Set up recurring invoices and forget them. We handle the
              generation and sending automatically.
            </span>
          </div>
          <div class="box">
            <i class="fa-solid fa-wallet"></i>
            <h3>Automated Invoicing</h3>
            <span
              >Set up recurring invoices and forget them. We handle the
              generation and sending automatically.
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="pricing">
      <div class="pricing_box">
        <h2>Simple, tranparent pricing</h2>
        <div class="price_toggle">
          <span>Monthly</span>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <span
            >Yearly
            <span>-20%</span>
          </span>
        </div>
        <div class="pricing_cards">
          <div class="card">
            <div class="reco">PRECOMMENDED PLAN</div>
            <h2>Pro</h2>
            <span>For the freelancers</span>
            <span><b>29€ </b>monthly</span>
            <ul>
              <li>Unlimited clients</li>
              <li>Full automation</li>
              <li>24/7 support</li>
              <li>Multi-currencies and export</li>
            </ul>

            <button>Start free trial</button>
          </div>
        </div>
       
      </div>
    </section>
    <section class="faq">
      <h2>Questions fréquentes</h2>
      <details>
        <summary>
          <span>Is my data secure?</span>
        </summary>
        <p>
       
Absolutely. We use bank-grade encryption (256-bit SSL) to protect your data. Your financial information is never shared.
        </p>
      </details>
      <details>
        <summary>
          <span>Can I export my data for my accountant?</span>
        </summary>
        <p>
          Yes! You can export all your invoices and expenses in CSV, PDF or Excel format. We also offer direct imports.
        </p>
      </details>
    
    </section>
    <section class="contacts">
      <div class="contacts_txt">
        <h1>Ready to simplify your management?</h1>
        <span
          >Join thousands of professionals who use Invoicely to grow their businesses. 14-day free trial, no credit card required.
        </span>
      </div>
      <button>Contact</button>
    </section>
</>
)
}