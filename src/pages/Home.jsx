import hero_img from "../assets/hero_img.png";
export default function Home() {
  return (
  <>
 <section class="hero">
      <div class="hero_box">
        <div class="hero_txt">
          <h5>New v2 is live!</h5>
          <h1>Facturation simplifiée pour freelances et TPE</h1>
          <span
            >Gérez vos clients et encaissez plus vite avec notre suite
            tout-en-un.
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
            <div class="reco">PLAN RECOMMANDÉ</div>
            <h2>Pro</h2>
            <span>Pour les freelances en pleine croissance</span>
            <span><b>29€</b>/mois</span>
            <ul>
              <li>Clients illimités</li>
              <li>Automatisation complète</li>
              <li>Support prioritaire 24/7</li>
              <li>Multi-devises & Exports</li>
            </ul>

            <button>Démarrer l'essai gratuit</button>
          </div>
        </div>
        <button class="plans">Voir tous les plans</button>
      </div>
    </section>
    <section class="faq">
      <h2>Questions fréquentes</h2>
      <details>
        <summary>
          <span>Mes données sont-elles en sécurité ?</span>
        </summary>
        <p>
          Absolument. Nous utilisons un cryptage de niveau bancaire (256-bit
          SSL) pour protéger vos données. Vos informations financières ne sont
          jamais partagées.
        </p>
      </details>
      <details>
        <summary>
          <span>Puis-je exporter mes données pour mon comptable ?</span>
        </summary>
        <p>
          Oui ! Vous pouvez exporter toutes vos factures et dépenses aux formats
          CSV, PDF ou Excel. Nous proposons aussi des imports directs.
        </p>
      </details>
      <a
        >Voir toutes les questions
        <i class="fa-solid fa-arrow-up-right-from-square"></i
      ></a>
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
      <button>Contacter l'équipe</button>
    </section>
</>
)
}