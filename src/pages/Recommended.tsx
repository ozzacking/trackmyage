import AdSlot from '../components/AdSlot';

const AFFILIATE_TAG = 'trackmyage-20';

const products = [
  {
    title: 'Collagen Peptides Powder',
    desc: 'Supports skin elasticity, joint health, and healthy aging. Unflavored, mixes easily.',
    url: `https://www.amazon.com/s?k=collagen+peptides+powder&tag=${AFFILIATE_TAG}`,
    emoji: '✨',
  },
  {
    title: 'Omega-3 Fish Oil Supplement',
    desc: 'Heart and brain health support. High-potency EPA & DHA for longevity.',
    url: `https://www.amazon.com/s?k=omega+3+fish+oil&tag=${AFFILIATE_TAG}`,
    emoji: '🐟',
  },
  {
    title: 'NMN (Nicotinamide Mononucleotide)',
    desc: 'Popular longevity supplement. Supports NAD+ levels and cellular energy.',
    url: `https://www.amazon.com/s?k=NMN+supplement&tag=${AFFILIATE_TAG}`,
    emoji: '🔬',
  },
  {
    title: 'Multivitamin for Adults 50+',
    desc: 'Complete daily nutrition tailored for healthy aging. Vitamins D, B12, and more.',
    url: `https://www.amazon.com/s?k=multivitamin+adults+50+plus&tag=${AFFILIATE_TAG}`,
    emoji: '💊',
  },
  {
    title: 'Resveratrol Supplement',
    desc: 'Antioxidant-rich polyphenol found in red wine. Supports cardiovascular health.',
    url: `https://www.amazon.com/s?k=resveratrol+supplement&tag=${AFFILIATE_TAG}`,
    emoji: '🍇',
  },
  {
    title: 'Anti-Aging Skincare Retinol Serum',
    desc: 'Reduce fine lines and improve skin texture. Dermatologist recommended.',
    url: `https://www.amazon.com/s?k=retinol+serum+anti+aging&tag=${AFFILIATE_TAG}`,
    emoji: '🧴',
  },
];

export default function Recommended() {
  return (
    <div style={{ fontFamily: 'system-ui,sans-serif', maxWidth: 680, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ fontSize: 26, fontWeight: 700, textAlign: 'center', color: '#1a1a2e', marginBottom: 8 }}>
        Healthy Aging Picks
      </h1>
      <p style={{ textAlign: 'center', color: '#555', marginBottom: 24 }}>
        Top-rated supplements and products for healthy aging
      </p>

      <AdSlot slot="REPLACE_WITH_SLOT_ID_1" />

      <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
        {products.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', background: '#fff', borderRadius: 12, padding: 20, textDecoration: 'none', color: 'inherit', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '1px solid #eee', transition: 'transform 0.1s' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <span style={{ fontSize: 32 }}>{p.emoji}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#1a1a2e', marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 14, color: '#555', lineHeight: 1.5 }}>{p.desc}</div>
                <div style={{ marginTop: 10, fontSize: 13, color: '#4f46e5', fontWeight: 600 }}>
                  View on Amazon →
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <AdSlot slot="REPLACE_WITH_SLOT_ID_2" />

      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <a href="/" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: 15 }}>
          ← Back to Age Calculator
        </a>
      </div>
    </div>
  );
}
