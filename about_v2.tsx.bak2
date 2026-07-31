import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О клинике — МедПремиум',
  description: 'МедПремиум — современный многопрофильный медицинский центр в Москве. 25 врачей, 8 направлений, 12 лет опыта.',
}

const NUMBERS = [
  { value: '25+', label: 'врачей' },
  { value: '25 000+', label: 'пациентов ежегодно' },
  { value: '12 лет', label: 'работы' },
  { value: '8', label: 'направлений' },
]

const DIRECTIONS = [
  { name: 'Терапия', desc: 'Диагностика и лечение внутренних болезней, профилактические осмотры' },
  { name: 'Кардиология', desc: 'Заболевания сердца и сосудов, ЭКГ, холтер, УЗИ сердца' },
  { name: 'Неврология', desc: 'Головные боли, нарушения сна, остеохондроз, нейропатии' },
  { name: 'Эндокринология', desc: 'Диабет, щитовидная железа, гормональные нарушения' },
  { name: 'Гастроэнтерология', desc: 'Заболевания ЖКТ, печени, поджелудочной железы' },
  { name: 'Дерматология', desc: 'Кожные заболевания, дерматоскопия, косметологические процедуры' },
  { name: 'Офтальмология', desc: 'Проверка зрения, лечение глазных болезней, подбор коррекции' },
  { name: 'Ортопедия', desc: 'Заболевания суставов и позвоночника, травмы, реабилитация' },
]

const GALLERY = [1,2,3,4,5,6,7,8].map((n) => '/photos/interior/interior-' + n + '.jpg')

const PRINCIPLES = [
  { title: 'Индивидуальный подход', icon: 'M24 8C24 8 12 14 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 14 24 8 24 8ZM20 24H28M24 20V28' },
  { title: 'Доказательная медицина', icon: 'M24 8L40 16V24C40 33 33 40 24 42C15 40 8 33 8 24V16L24 8Z' },
  { title: 'Современное оборудование', icon: 'M12 16H36V32H12V16ZM18 16V10H30V16' },
  { title: 'Комфорт пациентов', icon: 'M24 38S8 28 8 18C8 13.582 11.582 10 16 10C19.093 10 21.785 11.674 24 14C26.215 11.674 28.907 10 32 10C36.418 10 40 13.582 40 18C40 28 24 38 24 38Z' },
  { title: 'Прозрачные цены', icon: 'M24 8V40M16 14H30C33 14 34 22 24 22C14 22 15 30 18 30H32' },
  { title: 'Конфиденциальность', icon: 'M24 6L38 12V22C38 32 32 39 24 42C16 39 10 32 10 22V12L24 6Z' },
]

export default function AboutPage() {
  return (
    <div style={{background: 'linear-gradient(180deg,#dce8f2 0%,#e8f0f8 50%,#dce8f2 100%)', minHeight: '100vh'}}>

      {/* HERO */}
      <div style={{background: 'linear-gradient(135deg,#0f2238 0%,#1a3a5c 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, rgba(33,160,225,0.18) 0%, transparent 70%)'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{position: 'relative', zIndex: 1}}>
          <p style={{color: '#0BD5D0', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px'}}>О клинике</p>
          <h1 style={{fontFamily: 'var(--font-playfair)', fontSize: '42px', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, maxWidth: '700px', marginBottom: '24px'}}>МедПремиум — медицина, которой доверяют</h1>
          <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '18px', lineHeight: 1.8, maxWidth: '620px', marginBottom: '16px', fontWeight: 500}}>Современный многопрофильный центр, где работают врачи высшей категории, применяется оборудование экспертного класса, а каждый пациент получает индивидуальный план лечения.</p>
          <p style={{color: 'rgba(255,255,255,0.75)', fontSize: '17px', lineHeight: 1.8, maxWidth: '620px', fontWeight: 400}}>За 12 лет работы мы помогли тысячам пациентов — и продолжаем совершенствоваться каждый день.</p>
        </div>
      </div>

      {/* ЦИФРЫ — горизонтальная полоса */}
      <div style={{background: 'linear-gradient(90deg,#21A0E1,#0BD5D0)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {NUMBERS.map((n) => (
              <div key={n.label} style={{textAlign: 'center'}}>
                <div style={{fontFamily: 'var(--font-playfair)', fontSize: '38px', fontWeight: 800, color: '#ffffff', lineHeight: 1}}>{n.value}</div>
                <div style={{color: 'rgba(255,255,255,0.85)', fontSize: '15px', fontWeight: 600, marginTop: '6px'}}>{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* О НАС — текст в две колонки */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p style={{color: '#21A0E1', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px'}}>Кто мы</p>
        <h2 style={{fontFamily: 'var(--font-playfair)', fontSize: '36px', fontWeight: 800, color: '#0f2238', marginBottom: '40px'}}>Современная клиника с человеческим подходом</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p style={{color: '#1a2a3a', fontSize: '17px', lineHeight: 1.85, fontWeight: 500, marginBottom: '20px'}}>«МедПремиум» — частная многопрофильная клиника, объединяющая опыт врачей различных специальностей, передовые методы диагностики и индивидуальный подход к каждому пациенту.</p>
            <p style={{color: '#1a2a3a', fontSize: '17px', lineHeight: 1.85, fontWeight: 500, marginBottom: '20px'}}>Мы создали центр, в котором качество лечения начинается задолго до приёма врача. Продуманная организация работы, современное оборудование и внимательный персонал позволяют получать помощь без лишнего ожидания и стресса.</p>
            <p style={{color: '#1a2a3a', fontSize: '17px', lineHeight: 1.85, fontWeight: 500}}>Наша задача — не только эффективно лечить, но и помогать сохранять здоровье, предупреждать болезни и повышать качество жизни.</p>
          </div>
          <div>
            <p style={{color: '#1a2a3a', fontSize: '17px', lineHeight: 1.85, fontWeight: 500, marginBottom: '20px'}}>Все специалисты клиники имеют высшую квалификационную категорию и регулярно проходят обучение. Мы работаем строго по принципам доказательной медицины — никаких лишних назначений, только обоснованное лечение.</p>
            <p style={{color: '#1a2a3a', fontSize: '17px', lineHeight: 1.85, fontWeight: 500, marginBottom: '20px'}}>За 12 лет работы клинику посетили десятки тысяч пациентов. Многие из них приходят к нам снова и рекомендуют нас близким — это лучший показатель нашей работы.</p>
            <p style={{color: '#1a2a3a', fontSize: '17px', lineHeight: 1.85, fontWeight: 500}}>Мы открыты, честны в ценообразовании и готовы ответить на любые вопросы о вашем здоровье.</p>
          </div>
        </div>
      </div>

      {/* ФИЛОСОФИЯ — тёмная полоса */}
      <div style={{background: 'linear-gradient(135deg,#0f2238 0%,#1a3a5c 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(11,213,208,0.12) 0%, transparent 70%)'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{position: 'relative', zIndex: 1}}>
          <p style={{color: '#0BD5D0', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px'}}>Наша философия</p>
          <h2 style={{fontFamily: 'var(--font-playfair)', fontSize: '36px', fontWeight: 800, color: '#ffffff', marginBottom: '40px', maxWidth: '600px'}}>Здоровье пациента — главный приоритет</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div style={{width: '3px', height: '40px', background: 'linear-gradient(to bottom,#21A0E1,#0BD5D0)', marginBottom: '20px', borderRadius: '2px'}} />
              <h3 style={{fontFamily: 'var(--font-playfair)', fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px'}}>Профессионализм</h3>
              <p style={{color: 'rgba(255,255,255,0.80)', fontSize: '16px', lineHeight: 1.8, fontWeight: 500}}>Каждое решение принимается на основе опыта врача, актуальных научных данных и индивидуальных особенностей пациента.</p>
            </div>
            <div>
              <div style={{width: '3px', height: '40px', background: 'linear-gradient(to bottom,#21A0E1,#0BD5D0)', marginBottom: '20px', borderRadius: '2px'}} />
              <h3 style={{fontFamily: 'var(--font-playfair)', fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px'}}>Открытость</h3>
              <p style={{color: 'rgba(255,255,255,0.80)', fontSize: '16px', lineHeight: 1.8, fontWeight: 500}}>Мы подробно объясняем результаты обследований, предлагаем понятные варианты лечения и отвечаем на все вопросы.</p>
            </div>
            <div>
              <div style={{width: '3px', height: '40px', background: 'linear-gradient(to bottom,#21A0E1,#0BD5D0)', marginBottom: '20px', borderRadius: '2px'}} />
              <h3 style={{fontFamily: 'var(--font-playfair)', fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '12px'}}>Забота</h3>
              <p style={{color: 'rgba(255,255,255,0.80)', fontSize: '16px', lineHeight: 1.8, fontWeight: 500}}>Нам важны не только медицинские результаты, но и психологический комфорт и душевное спокойствие каждого пациента.</p>
            </div>
          </div>
        </div>
      </div>

      {/* НАПРАВЛЕНИЯ — сетка с номерами */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p style={{color: '#21A0E1', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px'}}>Специализации</p>
        <h2 style={{fontFamily: 'var(--font-playfair)', fontSize: '36px', fontWeight: 800, color: '#0f2238', marginBottom: '48px'}}>Медицинские направления</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {DIRECTIONS.map((dir, i) => (
            <div key={dir.name} style={{borderTop: '1px solid rgba(33,160,225,0.25)', padding: '28px 0', display: 'flex', alignItems: 'flex-start', gap: '24px'}}>
              <span style={{fontFamily: 'var(--font-playfair)', fontSize: '32px', fontWeight: 800, color: 'rgba(33,160,225,0.25)', lineHeight: 1, minWidth: '48px'}}>0{i + 1}</span>
              <div>
                <h3 style={{fontFamily: 'var(--font-playfair)', fontSize: '20px', fontWeight: 700, color: '#0f2238', marginBottom: '6px'}}>{dir.name}</h3>
                <p style={{color: '#1a2a3a', fontSize: '15px', lineHeight: 1.7, fontWeight: 500}}>{dir.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ПРИНЦИПЫ — светлая полоса с иконками */}
      <div style={{background: 'linear-gradient(135deg,#21A0E1 0%,#0BD5D0 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p style={{color: 'rgba(255,255,255,0.75)', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px'}}>Как мы работаем</p>
          <h2 style={{fontFamily: 'var(--font-playfair)', fontSize: '36px', fontWeight: 800, color: '#ffffff', marginBottom: '48px'}}>Наши принципы</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
            {PRINCIPLES.map((item) => (
              <div key={item.title} style={{display: 'flex', alignItems: 'flex-start', gap: '16px'}}>
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink: 0}}>
                  <path d={item.icon} />
                </svg>
                <div>
                  <h3 style={{fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '4px'}}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ГАЛЕРЕЯ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p style={{color: '#21A0E1', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px'}}>Интерьер</p>
        <h2 style={{fontFamily: 'var(--font-playfair)', fontSize: '36px', fontWeight: 800, color: '#0f2238', marginBottom: '40px'}}>Фотогалерея клиники</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY.map((src) => (
            <div key={src} style={{borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(25,45,70,0.15)'}}>
              <img src={src} alt="Интерьер клиники МедПремиум" style={{width: '100%', height: '220px', objectFit: 'cover', display: 'block'}} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{background: 'linear-gradient(135deg,#0f2238 0%,#1a3a5c 100%)', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(33,160,225,0.20) 0%, transparent 70%)'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center" style={{position: 'relative', zIndex: 1}}>
          <p style={{color: '#0BD5D0', fontSize: '14px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px'}}>Начните сейчас</p>
          <h2 style={{fontFamily: 'var(--font-playfair)', fontSize: '38px', fontWeight: 800, color: '#ffffff', marginBottom: '16px'}}>Забота о здоровье начинается сегодня</h2>
          <p style={{color: 'rgba(255,255,255,0.80)', fontSize: '18px', lineHeight: 1.7, fontWeight: 500, maxWidth: '540px', margin: '0 auto 40px'}}>Запишитесь на приём к специалистам МедПремиум. Весь процесс занимает несколько минут.</p>
          <a href="/clinic/booking" className="text-white font-semibold inline-flex items-center justify-center text-lg transition-all duration-300 bg-gradient-to-r from-[#21A0E1] to-[#0BD5D0] hover:from-[#1a87bd] hover:to-[#09aba6] hover:scale-105 hover:shadow-xl" style={{padding: '18px 48px', borderRadius: '999px', boxShadow: '0 8px 25px rgba(33,160,225,0.35)', textDecoration: 'none'}}>Записаться на приём</a>
        </div>
      </div>

      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}
