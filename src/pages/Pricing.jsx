export default function Pricing() {
  return (
    <>
      <section className="pricing">
        <div className="pricing_box">
          <h1>Simple, transparent pricing</h1>

          <div className="price_toggle">
            <span>Monthly</span>

            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>

            <span>
              Yearly <span>-20%</span>
            </span>
          </div>

          <div className="pricing_cards">
            <div className="card" style={{ border: "1px solid #d0d0d0" }}>
              <h2>Gratuit</h2>
              <span>Perfect for side hustlers.</span>
              <span>
                <b>0€</b>/mois
              </span>

              <ul>
                <li>Basic invoicing</li>
                <li>Up to 3 clients</li>
                <li>Email support</li>
                <li>Web access</li>
              </ul>

              <button type="button">Get Started</button>
            </div>

            <div className="card item-middle">
              <div className="reco">PLAN RECOMMANDÉ</div>
              <h2>Pro</h2>
              <span>Pour les freelances</span>
              <span>
                <b>29€</b>/mois
              </span>

              <ul>
                <li>Clients illimités</li>
                <li>Automatisation complète</li>
                <li>Support prioritaire 24/7</li>
                <li>Multi-devises &amp; Exports</li>
              </ul>

              <button type="button">Démarrer l&apos;essai gratuit</button>
            </div>

            <div className="card" style={{ border: "1px solid #d0d0d0" }}>
              <h2>Entreprise</h2>
              <span>For teams and scaling.</span>
              <span>
                <b>99€</b>/mois
              </span>

              <ul>
                <li>White labeling</li>
                <li>API Access</li>
                <li>5 Team seats</li>
                <li>Dedicated manager</li>
              </ul>

              <button type="button">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      <section className="plans_table">
        <h2>Questions fréquentes</h2>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th style={{ width: 550, textAlign: "left", fontWeight: "bold" }}>
                  Features
                </th>
                <th style={{ fontWeight: 700 }}>Free</th>
                <th style={{ fontWeight: 700 }}>Pro</th>
                <th style={{ fontWeight: 700 }}>Agency</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ width: 550, textAlign: "left" }}>Core Features</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td style={{ width: 550, textAlign: "left" }}>Number of Clients</td>
                <td>3</td>
                <td style={{ fontWeight: "bold" }}>Unlimited</td>
                <td style={{ fontWeight: "bold" }}>Unlimited</td>
              </tr>

              <tr>
                <td style={{ width: 550, textAlign: "left" }}>Invoices &amp; Estimates</td>
                <td>Unlimited</td>
                <td style={{ fontWeight: "bold" }}>Unlimited</td>
                <td style={{ fontWeight: "bold" }}>Unlimited</td>
              </tr>

              <tr>
                <td style={{ width: 550, textAlign: "left" }}>Multi-currency</td>
                <td>-</td>
                <td>
                  <i className="fa-solid fa-check" />
                </td>
                <td>
                  <i className="fa-solid fa-check" />
                </td>
              </tr>

              <tr>
                <td style={{ width: 550, textAlign: "left" }}>Automation &amp; Tech</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td style={{ width: 550, textAlign: "left" }}>Recurring Invoices</td>
                <td>-</td>
                <td>
                  <i className="fa-solid fa-check" />
                </td>
                <td>
                  <i className="fa-solid fa-check" />
                </td>
              </tr>

              <tr>
                <td style={{ width: 550, textAlign: "left" }}>API Access</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <i className="fa-solid fa-check" />
                </td>
              </tr>

              <tr>
                <td style={{ width: 550, textAlign: "left" }}>
                  Payment Gateway Integrations
                </td>
                <td>Stripe only</td>
                <td>All gateways</td>
                <td>All gateways</td>
              </tr>

              <tr>
                <td style={{ width: 550, textAlign: "left" }}>Team &amp; Support</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td style={{ width: 550, textAlign: "left" }}>Team Members</td>
                <td>1 (You)</td>
                <td>1</td>
                <td style={{ fontWeight: "bold" }}>5 Included</td>
              </tr>

              <tr>
                <td style={{ width: 550, textAlign: "left" }}>Support Level</td>
                <td>Email</td>
                <td>Priority Email</td>
                <td style={{ fontWeight: "bold" }}>24/7 Live Chat + Phone</td>
              </tr>

              <tr>
                <td style={{ width: 550, textAlign: "left" }}>White Labeling</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <i className="fa-solid fa-check" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="contacts">
        <div className="contacts_txt">
          <h1>Need a custom Enterprise solution?</h1>
          <span>
            For organizations with 20+ members, we offer custom contracts, SSO,
            audit logs, and dedicated account management.
          </span>
        </div>

        <button type="button">Contacter l&apos;équipe commerciale</button>
      </section>
    </>
  );
}