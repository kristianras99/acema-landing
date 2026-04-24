const CALENDAR_LINK = 'https://calendar.app.google/XVy1wUjxeb6eZPQi7'

export default function LandingPage() {
  return (
    <div style={{ background: '#0A0A0A', color: '#F5F0E8' }} className="min-h-screen font-sans">
      <nav style={{ borderBottom: '1px solid #1B4332' }} className="px-6 py-4 flex justify-between items-center sticky top-0 z-50" >
        <div style={{ color: '#C9A84C' }} className="text-2xl font-bold tracking-widest">ACEMA</div>
        <a href={CALENDAR_LINK} target="_blank" style={{ background: '#C9A84C', color: '#0A0A0A' }} className="px-6 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all">Varaa ilmainen esittely</a>
      </nav>
      <section className="px-6 py-32 text-center max-w-4xl mx-auto">
        <div style={{ background: '#1B4332', color: '#C9A84C', border: '1px solid #2D6A4F' }} className="inline-block px-4 py-1 rounded-full text-sm mb-6">AI-puhelinassistentti yrityksellesi</div>
        <h1 className="text-5xl font-bold mb-6 leading-tight">Anna AI:n hoitaa<br /><span style={{ color: '#C9A84C' }}>puhelut puolestasi</span></h1>
        <p style={{ color: '#8A9E8A' }} className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Acema räätälöi yrityksellesi AI-puhelinassistentin joka vastaa puheluihin, varaa aikoja ja kerää asiakastiedot — 24/7 ilman taukoja.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href={CALENDAR_LINK} target="_blank" style={{ background: '#C9A84C', color: '#0A0A0A' }} className="px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all">Varaa ilmainen esittely →</a>
          <a href="#miten-toimii" style={{ border: '1px solid #1B4332', color: '#F5F0E8' }} className="px-8 py-4 rounded-lg font-bold text-lg hover:opacity-80 transition-all">Lue lisää</a>
        </div>
      </section>
      <section id="miten-toimii" style={{ borderTop: '1px solid #1B4332' }} className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Miten se toimii?</h2>
          <p style={{ color: '#8A9E8A' }} className="text-center mb-16">Kolme askelta käyttöönottoon</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Varaa esittely', desc: 'Käymme läpi yrityksesi tarpeet ja räätälöimme sopivan ratkaisun 30 minuutin palaverissa.' },
              { step: '02', title: 'Räätälöinti', desc: 'Konfiguroimme AI-assistentin juuri sinun toimiallallesi — puheluihin vastaamiseen, ajanvarauksiin ja asiakastietojen keräämiseen.' },
              { step: '03', title: 'Käyttöönotto', desc: 'Aktivoimme assistentin ja saat hallintapaneelin josta näet kaikki puhelut reaaliajassa.' },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ background: '#0D1F0D', border: '1px solid #1B4332' }} className="rounded-2xl p-8">
                <div style={{ color: '#C9A84C' }} className="text-4xl font-bold mb-4">{step}</div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p style={{ color: '#8A9E8A' }} className="leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ borderTop: '1px solid #1B4332', background: '#0D1F0D' }} className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6">🛡️</div>
          <h2 className="text-3xl font-bold mb-6">Riskitön kokeilu</h2>
          <p style={{ color: '#8A9E8A' }} className="text-lg leading-relaxed">Jos et ole tyytyväinen palveluun ensimmäisen kuukauden aikana, palautamme kuukausimaksun — ei kysymyksiä. Haluamme että jokainen asiakas on täysin tyytyväinen ennen kuin sitoutuu pitkäaikaiseen yhteistyöhön.</p>
        </div>
      </section>
      <section style={{ borderTop: '1px solid #1B4332' }} className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Usein kysytyt kysymykset</h2>
          <div className="space-y-6">
            {[
              { q: 'Mille toimialoille assistentti sopii?', a: 'Assistentti sopii kaikille yrityksille jotka vastaanottavat puheluita — lääkäriasemat, parturit, autokorjaamot, kiinteistönvälittäjät ja monet muut.' },
              { q: 'Kuinka nopeasti käyttöönotto tapahtuu?', a: 'Tyypillisesti 3-5 arkipäivää esittelypalaverista. Räätälöimme assistentin toimiallallesi ja testaamme sen perusteellisesti ennen aktivointia.' },
              { q: 'Voiko assistentin tietoja muuttaa jälkeenpäin?', a: 'Kyllä! Voimme päivittää assistentin tietoja ja toimintaa tarvittaessa. Pienet muutokset kuuluvat kuukausimaksuun.' },
              { q: 'Onko sopimus sitova?', a: 'Ei. Voit lopettaa tilauksen milloin tahansa kuukauden varoitusajalla.' },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: '#0D1F0D', border: '1px solid #1B4332' }} className="rounded-xl p-6">
                <h3 className="font-bold mb-3">{q}</h3>
                <p style={{ color: '#8A9E8A' }} className="leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ borderTop: '1px solid #1B4332', background: '#0D1F0D' }} className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Valmis kokeilemaan?</h2>
          <p style={{ color: '#8A9E8A' }} className="text-lg mb-10">Varaa ilmainen 30 minuutin esittely — käymme läpi miten AI-assistentti sopii juuri sinun yritykseesi.</p>
          <a href={CALENDAR_LINK} target="_blank" style={{ background: '#C9A84C', color: '#0A0A0A' }} className="inline-block px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all">Varaa esittely →</a>
        </div>
      </section>
      <footer style={{ borderTop: '1px solid #1B4332' }} className="px-6 py-8 text-center">
        <div style={{ color: '#C9A84C' }} className="font-bold tracking-widest mb-2">ACEMA</div>
        <p style={{ color: '#2D6A4F' }} className="text-sm">AI Solutions — Acema Oy</p>
      </footer>
    </div>
  )
}