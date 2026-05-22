import { useState, useEffect } from 'react';
import AdSlot from '../components/AdSlot';

function calcAge(dob: Date) {
  const now = new Date();
  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) { years--; months += 12; }
  const msLived = now.getTime() - dob.getTime();
  const daysLived = Math.floor(msLived / 86400000);
  const nextBirthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
  if (nextBirthday <= now) nextBirthday.setFullYear(now.getFullYear() + 1);
  const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - now.getTime()) / 86400000);
  return { years, months, days, daysLived, daysUntilBirthday, nextBirthday };
}

export default function Home() {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState<ReturnType<typeof calcAge> | null>(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (dob) {
      const d = new Date(dob + 'T00:00:00');
      if (!isNaN(d.getTime()) && d < now) setResult(calcAge(d));
      else setResult(null);
    }
  }, [dob, now]);

  const fmt = (n: number) => n.toLocaleString();

  return (
    <div style={{ fontFamily: 'system-ui,sans-serif', maxWidth: 680, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, textAlign: 'center', color: '#1a1a2e', marginBottom: 8 }}>
        Age Calculator
      </h1>
      <p style={{ textAlign: 'center', color: '#555', marginBottom: 28 }}>
        Find your exact age in years, months, and days
      </p>

      <AdSlot slot="REPLACE_WITH_SLOT_ID_1" />

      <div style={{ background: '#f8f9fa', borderRadius: 12, padding: 24, marginBottom: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
        <label style={{ display: 'block', fontWeight: 600, marginBottom: 8, color: '#333' }}>
          Date of Birth
        </label>
        <input
          type="date"
          value={dob}
          onChange={e => setDob(e.target.value)}
          max={new Date().toISOString().split('T')[0]}
          style={{ width: '100%', padding: '12px 16px', fontSize: 18, borderRadius: 8, border: '2px solid #dee2e6', boxSizing: 'border-box', outline: 'none' }}
        />
      </div>

      {result && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 20 }}>
            {[
              { label: 'Years', value: result.years },
              { label: 'Months', value: result.months },
              { label: 'Days', value: result.days },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: '#fff', borderRadius: 10, padding: '18px 12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: '#4f46e5' }}>{value}</div>
                <div style={{ fontSize: 14, color: '#666', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>

          <AdSlot slot="REPLACE_WITH_SLOT_ID_2" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            <div style={{ background: '#4f46e5', borderRadius: 10, padding: 20, textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: 28, fontWeight: 700 }}>{fmt(result.daysLived)}</div>
              <div style={{ fontSize: 13, marginTop: 4, opacity: 0.9 }}>Total Days Lived</div>
            </div>
            <div style={{ background: '#7c3aed', borderRadius: 10, padding: 20, textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: 28, fontWeight: 700 }}>{result.daysUntilBirthday}</div>
              <div style={{ fontSize: 13, marginTop: 4, opacity: 0.9 }}>Days Until Birthday</div>
              <div style={{ fontSize: 11, marginTop: 2, opacity: 0.8 }}>
                {result.nextBirthday.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
          </div>

          <div style={{ background: '#f0f4ff', borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 14 }}>
              <div><span style={{ color: '#555' }}>Hours lived: </span><strong>{fmt(result.daysLived * 24)}</strong></div>
              <div><span style={{ color: '#555' }}>Minutes lived: </span><strong>{fmt(result.daysLived * 1440)}</strong></div>
              <div><span style={{ color: '#555' }}>Weeks lived: </span><strong>{fmt(Math.floor(result.daysLived / 7))}</strong></div>
              <div><span style={{ color: '#555' }}>Seconds lived: </span><strong>{fmt(result.daysLived * 86400)}</strong></div>
            </div>
          </div>
        </div>
      )}

      {!result && !dob && (
        <div style={{ textAlign: 'center', padding: '32px 0', color: '#888' }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎂</div>
          <p>Enter your date of birth above to see your exact age</p>
        </div>
      )}

      <AdSlot slot="REPLACE_WITH_SLOT_ID_3" />

      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <a href="/recommended" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: 15 }}>
          See recommended health &amp; wellness products →
        </a>
      </div>
    </div>
  );
}
