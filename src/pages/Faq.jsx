import { useMemo, useState } from "react";

export default function Faq() {
  const faqs = useMemo(
    () => [
      {
        category: "General",
        items: [
          {
            q: "What is Invoicely and who is it for?",
            a: "Invoicely is a comprehensive invoicing and CRM platform designed specifically for freelancers, consultants, and small businesses (TPE). It helps you create professional invoices, track expenses, and manage client relationships all in one place.",
          },
          {
            q: "Is there a mobile app available?",
            a: "Currently, we offer a fully responsive web application that works seamlessly on all mobile browsers. A dedicated iOS and Android app is on our roadmap for Q4 2024.",
          },
        ],
      },
      {
        category: "Billing & Subscriptions",
        items: [
          {
            q: "How does the 14-day free trial work?",
            a: "You get full access to all Pro features for 14 days without entering any credit card information. At the end of the trial, you can choose to upgrade to a paid plan or continue with our generous Free tier.",
          },
          {
            q: "Can I change my plan later?",
            a: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes to higher tiers are immediate, while downgrades take effect at the end of your current billing cycle.",
          },
          {
            q: "What payment methods do you accept?",
            a: "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For Agency plans paid annually, we can also arrange bank transfers.",
          },
        ],
      },
      {
        category: "Technical Support",
        items: [
          {
            q: "How do I export my data for my accountant?",
            a: "You can export your invoices, expenses, and client data in CSV, Excel, or PDF formats directly from the 'Reports' section. We also integrate with Xero and QuickBooks for seamless data syncing.",
          },
          {
            q: "Is my data secure?",
            a: "Absolutely. We use bank-level 256-bit SSL encryption for all data transmission. Our servers are hosted in secure, compliant data centers with daily backups. We never sell your data to third parties.",
          },
        ],
      },
    ],
    []
  );

  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <section className="help">
        <div className="help_box">
          <h1>How can we help you?</h1>
          <span>
            Search for answers, browse topics, or get in touch with our support
            team.
          </span>
          <input
            type="text"
            placeholder="Search for articles, guides, or questions..."
          />
          <p>Popular: Invoicing API Keys Pricing Data Export</p>
        </div>
      </section>

      <section className="more">
        <div className="more_box">
          <div className="more_card">
            <i className="fa-solid fa-rocket"></i>
            <h3>Getting Started</h3>
            <span>
              Onboarding guides, setting up your profile, and creating your first
              invoice.
            </span>
          </div>

          <div className="more_card">
            <i className="fa-solid fa-money-bill"></i>
            <h3>Billing &amp; Payments</h3>
            <span>
              Managing subscriptions, payment methods, and understanding your
              invoice.
            </span>
          </div>

          <div className="more_card">
            <i className="fa-solid fa-shield"></i>
            <h3>Security &amp; Privacy</h3>
            <span>
              Data protection, GDPR compliance, 2FA setup, and privacy policies.
            </span>
          </div>

          <div className="more_card">
            <i className="fa-solid fa-user-gear"></i>
            <h3>Account Management</h3>
            <span>
              Team members, role permissions, email settings, and profile updates.
            </span>
          </div>
        </div>
      </section>

      <section className="questions_acc">
        <div className="questions_box">
          <h2>Frequently Asked Questions</h2>

          {faqs.map((group, groupIndex) => (
            <div key={group.category}>
              <div className="circle_txt">
                <span>
                  <i className="fa-solid fa-circle"></i>
                </span>
                <h3>{group.category}</h3>
              </div>

              <div className="accordions">
                {group.items.map((item, itemIndex) => {
                  const key = `${groupIndex}-${itemIndex}`;
                  const isOpen = openKey === key;

                  return (
                    <div className="acc" key={key}>
                      <button
                        type="button"
                        className={`accordion ${isOpen ? "active" : ""}`}
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                      >
                        {item.q}
                      </button>

                      <div
                        className="panel"
                        style={{
                          maxHeight: isOpen ? 500 : 0, // simple; si tu veux exact auto, dis-moi
                          overflow: "hidden",
                          transition: "max-height 0.25s ease",
                        }}
                      >
                        <p style={{ margin: 0, padding: isOpen ? "12px 0" : 0 }}>
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="more_questions">
        <div className="more_questions_box">
          <h3>Still have questions?</h3>
          <span>
            Can&apos;t find the answer you&apos;re looking for? Please chat to our
            friendly team.
          </span>

          <div className="more_questions_cards">
            <div className="more_questions_card">
              <i className="fa-solid fa-headset"></i>
              <h3>Contact Support</h3>
              <span>We&apos;re here to help with any issue.</span>
              <a href="#">Get in touch</a>
            </div>

            <div className="more_questions_card">
              <i className="fa-solid fa-headset"></i>
              <h3>Contact Support</h3>
              <span>We&apos;re here to help with any issue.</span>
              <a href="#">Get in touch</a>
            </div>

            <div className="more_questions_card">
              <i className="fa-solid fa-headset"></i>
              <h3>Contact Support</h3>
              <span>We&apos;re here to help with any issue.</span>
              <a href="#">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      <footer>© 2026 Invoicely. All rights reserved.</footer>
    </>
  );
}