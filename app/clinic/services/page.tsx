import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Терапия',
      slug: 'terapiya',
      description: 'Первичная диагностика и лечение острых и хронических заболеваний.',
      icon: 'M24 8C24 8 12 14 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 14 24 8 24 8ZM20 24H28M24 20V28',
      items: [
        { name: 'Первичная консультация', price: '4500 руб' },
        { name: 'Повторная консультация', price: '3500 руб' },
        { name: 'Программа профилактики', price: '5000 руб' },
      ],
    },
    {
      title: 'Кардиология',
      slug: 'kardiologiya',
      description: 'Диагностика и лечение сердечно-сосудистых заболеваний.',
      icon: 'M24 38S8 28 8 18C8 13.582 11.582 10 16 10C19.093 10 21.785 11.674 24 14C26.215 11.674 28.907 10 32 10C36.418 10 40 13.582 40 18C40 28 24 38 24 38Z',
      items: [
        { name: 'Консультация кардиолога', price: '5500 руб' },
        { name: 'ЭКГ с расшифровкой', price: '2500 руб' },
        { name: 'Суточное мониторирование ЭКГ', price: '6500 руб' },
      ],
    },
    {
      title: 'Неврология',
      slug: 'nevrologiya',
      description: 'Диагностика заболеваний нервной системы и лечение головных болей.',
      icon: 'M12 24C12 24 16 14 24 14C32 14 36 24 36 24C36 24 32 34 24 34C16 34 12 24 12 24ZM24 20V24L27 27',
      items: [
        { name: 'Консультация невролога', price: '5000 руб' },
        { name: 'Электроэнцефалография', price: '4500 руб' },
        { name: 'Лечение головных болей', price: '7000 руб' },
      ],
    },
    {
      title: 'Эндокринология',
      slug: 'endokrinologiya',
      description: 'Диагностика и лечение заболеваний эндокринной системы.',
      icon: 'M24 8V40M16 14H30C33 14 34 22 24 22C14 22 15 30 18 30H32',
      items: [
        { name: 'Консультация эндокринолога', price: '5000 руб' },
        { name: 'УЗИ щитовидной железы', price: '3500 руб' },
        { name: 'Анализ на гормоны', price: '4000 руб' },
      ],
    },
    {
      title: 'Гастроэнтерология',
      slug: 'gastroenterologiya',
      description: 'Диагностика и лечение заболеваний желудочно-кишечного тракта.',
      icon: 'M12 16H36V32H12V16ZM18 16V10H30V16',
      items: [
        { name: 'Консультация гастроэнтеролога', price: '5000 руб' },
        { name: 'УЗИ органов брюшной полости', price: '4000 руб' },
        { name: 'Гастроскопия', price: '8000 руб' },
      ],
    },
    {
      title: 'Дерматология',
      slug: 'dermatologiya',
      description: 'Диагностика и лечение кожных заболеваний.',
      icon: 'M24 6L38 12V22C38 32 32 39 24 42C16 39 10 32 10 22V12L24 6Z',
      items: [
        { name: 'Консультация дерматолога', price: '4500 руб' },
        { name: 'Дерматоскопия', price: '3000 руб' },
        { name: 'Удаление новообразований', price: '6000 руб' },
      ],
    },
    {
      title: 'Офтальмология',
      slug: 'oftalmologiya',
      description: 'Проверка зрения и лечение заболеваний глаз.',
      icon: 'M12 24C12 24 16 14 24 14C32 14 36 24 36 24C36 24 32 34 24 34C16 34 12 24 12 24ZM24 21A3 3 0 1 0 24 27A3 3 0 0 0 24 21Z',
      items: [
        { name: 'Консультация офтальмолога', price: '4500 руб' },
        { name: 'Проверка остроты зрения', price: '2000 руб' },
        { name: 'Подбор очков и линз', price: '3500 руб' },
      ],
    },
    {
      title: 'Ортопедия',
      slug: 'ortopediya',
      description: 'Лечение заболеваний суставов, позвоночника и травм.',
      icon: 'M24 8L40 16V24C40 33 33 40 24 42C15 40 8 33 8 24V16L24 8Z',
      items: [
        { name: 'Консультация ортопеда', price: '5500 руб' },
        { name: 'Рентген сустава', price: '3000 руб' },
        { name: 'Внутрисуставная инъекция', price: '7000 руб' },
      ],
    },
  ]

  return (
    <div style={{background:'linear-gradient(180deg,#dce8f2 0%,#e8f0f8 50%,#dce8f2 100%)',minHeight:'100vh'}}>

      <div style={{background:'linear-gradient(135deg,#0f2238 0%,#1a3a5c 100%)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 70% 50%,rgba(33,160,225,0.18) 0%,transparent 70%)'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{position:'relative',zIndex:1}}>
          <h1 style={{fontFamily:'var(--font-playfair)',fontSize:'42px',fontWeight:800,color:'#ffffff',lineHeight:1.2,maxWidth:'700px',marginBottom:'24px'}}>Услуги и цены</h1>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:'18px',lineHeight:1.8,maxWidth:'620px',fontWeight:500}}>8 направлений медицины под одной крышей. Прозрачные цены, опытные врачи, современное оборудование.</p>
        </div>
      </div>



      <div style={{background:"linear-gradient(180deg,#3d6490 0%,#c8d8e8 100%)"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={'/clinic/doctors?specialization=' + service.slug}
              className="service-card"
              style={{
                background:'rgba(255,255,255,0.75)',
                backdropFilter:'blur(24px)',
                WebkitBackdropFilter:'blur(24px)',
                border:'1px solid rgba(255,255,255,0.45)',
                borderRadius:'24px',
                boxShadow:'0 20px 45px rgba(25,45,70,0.10)',
                overflow:'hidden',
                cursor:'pointer',
                display:'block',
                textDecoration:'none',
              }}
            >
              <div style={{padding:'32px'}}>
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',marginBottom:'16px'}}>
                  <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                    <path d={service.icon} stroke="#2a4a6b" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </svg>
                  <span className="service-arrow" style={{color:'#2a4a6b',fontSize:'20px',opacity:0.35}}>→</span>
                </div>
                <h2 style={{fontSize:'28px',fontWeight:700,color:'#1a3a5c',marginBottom:'8px'}}>{service.title}</h2>
                <p style={{color:'#2d3f55',lineHeight:1.7,fontSize:'15px',fontWeight:500,marginBottom:'20px'}}>{service.description}</p>
                <ul style={{borderTop:'1px solid rgba(90,130,170,0.18)'}}>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between text-sm" style={{padding:'12px 0',borderBottom:'1px solid rgba(90,130,170,0.18)'}}>
                      <span style={{color:'#1a3a5c',fontWeight:500}}>{item.name}</span>
                      <span style={{fontWeight:700,color:'#2a4a6b'}}>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>

    </div>
  )
}



