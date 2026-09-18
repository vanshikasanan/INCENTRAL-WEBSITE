import { Container } from "@/components/common/container";
import { accountPage } from "@/config/account";

export function AccountPage() {
  const { hero, overviewEyebrow, widgets } = accountPage;

  return (
    <main id="main" className="account-page min-h-[52vh] bg-white">
      <section className="border-b border-[#e2e2dc] bg-inc-warm py-[54px] pb-[50px] max-[760px]:py-[38px] max-[760px]:pb-[34px]">
        <Container>
          <p className="account-eyebrow">{hero.eyebrow}</p>
          <h1 className="account-hero-title">{hero.title}</h1>
          <p className="account-hero-lead">{hero.lead}</p>
        </Container>
      </section>

      <section className="py-[62px] max-[760px]:py-[46px]">
        <Container>
          <div className="account-section-head">
            <div>
              <p className="account-eyebrow">{overviewEyebrow}</p>
            </div>
          </div>

          <div className="account-dashboard-grid">
            {widgets.map((widget) => (
              <section key={widget.id} className="account-widget">
                <h2>{widget.title}</h2>
                <p>{widget.description}</p>
                <div className="account-widget-state">{widget.emptyState}</div>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
