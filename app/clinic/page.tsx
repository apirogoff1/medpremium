import type { Metadata } from 'next'
import { Stethoscope, GraduationCap, Users } from 'lucide-react'
import VideoSlider from '@/components/VideoSlider'

export const metadata: Metadata = {
  title: 'МедПремиум — Многопрофильная клиника в Москве',
  description: 'Многопрофильная медицинская клиника МедПремиум в Москве. 25 лет опыта, 8 специализаций. Онлайн-запись 24/7 без очередей.',
}

const SPECIALIZATIONS = [
  { name: 'Терапия', desc: 'Диагностика, лечение и профилактика распространённых заболеваний внутренних органов.', slug: 'terapiya', points: ['Первичный приём терапевта', 'Диагностика заболеваний', 'Назначение лечения', 'Профилактические осмотры'], icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 8C24 8 12 14 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 14 24 8 24 8Z" stroke="white" stroke-width="2" fill="none"/><path d="M20 24H28M24 20V28" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>' },
  { name: 'Кардиология', desc: 'Комплексная диагностика и лечение заболеваний сердечно-сосудистой системы.', slug: 'kardiologiya', points: ['Консультация кардиолога', 'ЭКГ и расшифровка', 'Контроль артериального давления', 'Подбор терапии'], icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 38S8 28 8 18C8 13.582 11.582 10 16 10C19.093 10 21.785 11.674 24 14C26.215 11.674 28.907 10 32 10C36.418 10 40 13.582 40 18C40 28 24 38 24 38Z" stroke="white" stroke-width="2" fill="none"/></svg>' },
  { name: 'Неврология', desc: 'Диагностика и лечение заболеваний центральной и периферической нервной системы.', slug: 'nevrologiya', points: ['Головные боли и мигрени', 'Боли в спине', 'Нарушения сна', 'Реабилитация'], icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><ellipse cx="24" cy="20" rx="12" ry="10" stroke="white" stroke-width="2" fill="none"/><path d="M18 30C18 35 24 40 24 40C24 40 30 35 30 30" stroke="white" stroke-width="2" fill="none"/></svg>' },
  { name: 'Ортопедия', desc: 'Диагностика и лечение заболеваний опорно-двигательного аппарата.', slug: 'ortopediya', points: ['Боли в суставах', 'Заболевания позвоночника', 'Реабилитация', 'Консервативное лечение'], icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 8V40M18 14L24 8L30 14M18 34L24 40L30 34" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>' },
  { name: 'Офтальмология', desc: 'Полная диагностика и лечение заболеваний органов зрения.', slug: 'oftalmologiya', points: ['Проверка зрения', 'Диагностика глазных заболеваний', 'Подбор коррекции', 'Профилактические осмотры'], icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><ellipse cx="24" cy="24" rx="16" ry="10" stroke="white" stroke-width="2" fill="none"/><circle cx="24" cy="24" r="5" stroke="white" stroke-width="2" fill="none"/></svg>' },
  { name: 'Дерматология', desc: 'Современная диагностика новообразований кожи с использованием цифровой дерматоскопии.', slug: 'dermatologiya', points: ['Осмотр новообразований', 'Ранняя диагностика', 'Контроль изменений', 'Профилактические обследования'], icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 10C18 10 12 16 12 24C12 32 18 38 24 38C30 38 36 32 36 24" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M30 10C33 13 36 18 36 24" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/></svg>' },
  { name: 'Эндокринология', desc: 'Современный подход к диагностике и лечению эндокринных нарушений.', slug: 'endokrinologiya', points: ['Заболевания щитовидной железы', 'Сахарный диабет', 'Гормональные нарушения', 'Контроль лечения'], icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M20 10C20 10 16 14 16 20C16 26 20 28 20 34C20 37 22 38 24 38C26 38 28 37 28 34C28 28 32 26 32 20C32 14 28 10 28 10" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M20 10H28" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>' },
  { name: 'Гастроэнтерология', desc: 'Диагностика и лечение заболеваний желудочно-кишечного тракта.', slug: 'gastroenterologiya', points: ['Заболевания желудка', 'Заболевания кишечника', 'Заболевания печени', 'Индивидуальные схемы лечения'], icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M16 12C16 12 12 16 12 22C12 28 16 30 18 34C19 37 20 40 24 40C28 40 29 37 30 34C32 30 36 28 36 22C36 16 32 12 32 12" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/></svg>' },
]

const QUALITY_CARDS = [
  { img: '/photos/quality/doctor-1.jpg', title: 'Индивидуальный подход', desc: 'Каждый приём начинается с внимательного изучения жалоб, истории заболевания и общего состояния пациента. Мы уделяем время каждому, чтобы подобрать наиболее эффективную тактику диагностики и лечения.' },
  { img: '/photos/quality/equipment-1.jpg', title: 'Современное медицинское оборудование', desc: 'Используем высокоточное диагностическое оборудование экспертного класса, позволяющее быстро получать достоверные результаты и своевременно выявлять заболевания на ранних стадиях.' },
  { img: '/photos/quality/patient-1.jpg', title: 'Профилактика и ранняя диагностика', desc: 'Регулярные профилактические осмотры помогают своевременно обнаружить возможные нарушения здоровья и начать лечение до появления серьёзных осложнений.' },
  { img: '/photos/quality/reception-1.jpg', title: 'Комфорт и качественный сервис', desc: 'Создаём комфортные условия на каждом этапе обращения в клинику — от записи на приём до завершения лечения. Доброжелательная атмосфера, внимательный персонал и высокий уровень сервиса являются неотъемлемой частью нашей работы.' },
]

const STEPS = [
  { number: '01', title: 'Выберите специалиста', desc: 'Подберите врача по направлению или ознакомьтесь с профилями наших специалистов. Для каждого врача доступны опыт работы, специализация и расписание.' },
  { number: '02', title: 'Выберите удобное время', desc: 'Система покажет актуальные свободные даты и часы приёма. Выберите подходящий вариант без ожидания звонка.' },
  { number: '03', title: 'Подтвердите запись', desc: 'Подтверждение придёт на электронную почту и в личный кабинет. За день до визита мы напомним о приёме.' },
]
const REVIEWS = [
  { name: 'Анна К.', text: 'Обратилась в клинику по рекомендации и осталась очень довольна. Врач внимательно выслушал, подробно объяснил результаты обследования и назначил понятное лечение. Приём прошёл спокойно и без спешки.', rating: 5 },
  { name: 'Дмитрий С.', text: 'Современная клиника с приятной атмосферой и доброжелательным персоналом. Записался онлайн, приняли точно по времени. Всё организовано быстро и профессионально.', rating: 5 },
  { name: 'Елена М.', text: 'Проходила профилактическое обследование. Понравилось внимательное отношение врачей, современное оборудование и комфортные условия. Благодарю весь коллектив клиники за качественную работу.', rating: 5 },
]

async function getTopDoctors() {
  try {
    const base = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const res = await fetch(base + '/api/clinic/doctors?limit=3', {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    const data = await res.json()
    return data.slice(0, 3)
  } catch {
    return []
  }
}

export default async function ClinicPage() {
  const doctors = await getTopDoctors()

  return (
    <>      {/* Верхний поворот головы */}
      <div style={{height:'96px',background:'linear-gradient(90deg,rgba(143,166,192,0.95) 0%,rgba(159,184,214,0.95) 45%,rgba(183,210,234,0.95) 100%)',display:'flex',alignItems:'center',justifyContent:'space-between',position:'relative',zIndex:10,overflow:'hidden'}}>
        <img src="/photos/interior/interior-1.jpg" alt="" style={{position:'absolute',left:0,top:0,height:'100%',width:'25%',objectFit:'cover',objectPosition:'center',WebkitMaskImage:'linear-gradient(90deg,black 10%,transparent 90%)',maskImage:'linear-gradient(90deg,black 10%,transparent 90%)',filter:'brightness(0.6) grayscale(0.7) hue-rotate(210deg) saturate(2)'}} />
        <div style={{display:'flex',alignItems:'center',gap:'12px',position:'relative',zIndex:1,paddingLeft:'300px'}}>
          <span style={{color:'rgba(255,255,255,0.95)',fontSize:'18px'}}>📍</span>
          <span style={{color:'rgba(255,255,255,0.95)',fontSize:'16px',fontWeight:500}}>МедПремиум — Москва, ул. Тверская, 15</span>
        </div>
        <a href="/clinic/booking" className="bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-medium px-5 py-2 rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all shadow-sm" style={{position:'relative',zIndex:1,textDecoration:'none',whiteSpace:'nowrap',marginRight:'57px'}}>Записаться</a>
      </div>
<section className="relative text-white overflow-hidden" style={{minHeight: '100vh', background: '#1a1e24'}}>
        <div className="absolute inset-0 flex" style={{zIndex: 2}}>
          <div style={{width: '8%', background: 'rgba(15,18,22,0.85)'}} />
          <div style={{flex: 1}} />
          <div style={{width: '8%', background: 'rgba(15,18,22,0.85)'}} />
        </div>
        <div className="absolute inset-0" style={{zIndex: 1}}>
          <VideoSlider />
        </div>
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:'10px',background:'linear-gradient(to bottom,transparent 0%,#95a1af 100%)',zIndex:5,pointerEvents:'none'}} />
        <div className="relative flex flex-col items-center justify-between text-center px-4 py-16" style={{minHeight: '100vh', zIndex: 4}}>
          <div className="flex flex-col items-center mt-12">
            <div className="w-14 h-14 rounded-2xl border-2 border-white/40 flex items-center justify-center mb-3">
              <span className="text-white text-xl font-light">МП</span>
            </div>
            <span className="text-white/80 text-sm font-light tracking-[0.3em] uppercase">МедПремиум</span>
          </div>

          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-light leading-tight mb-4 tracking-tight">
              Современная медицина, основанная на доверии
            </h1>
            <p className="text-lg text-white/75 mb-8 leading-relaxed">
              Квалифицированные специалисты и индивидуальный подход к каждому пациенту
            </p>
            <a href="/clinic/booking" className="inline-flex items-center justify-center bg-gradient-to-r from-[#21A0E1] to-[#0BD5D0] hover:from-[#1a87bd] hover:to-[#09aba6] text-white font-semibold w-80 py-4 rounded-xl transition-all duration-300 text-lg" style={{boxShadow: '0 8px 25px rgba(0,0,0,0.15)'}}>
              Записаться на приём
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mb-4">
            <div className="text-center">
              <div className="text-3xl font-light">25</div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light">50+</div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1">врачей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light">20+</div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1">направлений</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light">10 000+</div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1">пациентов</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{background:'linear-gradient(180deg,#c8d8e8 0%,#b8cce0 50%,#c0d2e4 100%)',position:'relative'}}>

        <div className="absolute inset-0" style={{background:'rgba(55,60,68,0.35)',zIndex:0}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{position:'relative',zIndex:1}}>
          <h2 className="text-center mb-4" style={{fontSize:'36px',fontWeight:700,color:'#2d3540',fontFamily:'var(--font-playfair)',position:'relative',zIndex:1}}>Основа качественной помощи</h2>
          <p className="text-center mb-12" style={{color:'#0a0e14', fontSize:'17px'}}>Принципы, которыми мы следуем в работе с каждым пациентом</p>
          <style>{`
            .quality-card { background:rgba(100,130,170,0.25); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(150,170,200,0.2); border-radius:24px; overflow:hidden; box-shadow:0 10px 40px rgba(15,23,42,0.15); cursor:default; transition:transform 0.3s ease; }
            .quality-card img { filter:brightness(0.7) saturate(0.8); transition:filter 0.5s ease; }
            .quality-card:hover img { filter:brightness(1) saturate(1); }
          `}</style>
          <div className="grid grid-cols-4 gap-6">
            {QUALITY_CARDS.map((card) => (
              <div key={card.title} className="quality-card">
                <img src={card.img} alt={card.title} loading='eager' fetchPriority='high' style={{width:'100%',height:'300px',objectFit:'cover',display:'block'}} />
                <div style={{padding:'24px'}}>
                  <h3 style={{fontSize:'18px',fontWeight:700,color:'#2d3540',marginBottom:'10px'}}>{card.title}</h3>
                  <p style={{fontSize:'16px',lineHeight:1.7,color:'#0a0e14',fontWeight:400,margin:0}}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
              <div style={{position:'absolute',bottom:0,left:0,right:0,height:'10px',background:'linear-gradient(to bottom,transparent 0%,#414f60 100%)',zIndex:5,pointerEvents:'none'}} />
      </section>
      <section className="py-20" style={{background:'linear-gradient(180deg,#5b7fa8 0%,#6b90b8 50%,#5578a0 85%,#6a88a8 100%)',position:'relative'}}>
        <div className="absolute inset-0" style={{background:'rgba(55,60,68,0.72)',zIndex:0}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{position:'relative',zIndex:1}}>
          <h2 className="text-center mb-4" style={{fontSize:'36px',fontWeight:700,color:'#fff',fontFamily:'var(--font-playfair)',position:'relative',zIndex:1}}>Медицинские направления</h2>
          <p className="text-center mb-14" style={{color:'rgba(255,255,255,0.97)',fontSize:'18px',position:'relative',zIndex:1}}>Широкий спектр медицинских услуг для диагностики, лечения и профилактики заболеваний.</p>
          <div className="grid grid-cols-4 gap-4">
            <style>{`
            .spec-card { position:relative; padding:24px 28px; border-radius:20px; background:rgba(100,130,170,0.28); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(150,170,200,0.15); text-decoration:none; display:flex; flex-direction:column; transition:all 0.3s ease; min-height:auto; overflow:hidden; }
            
            .spec-card:hover { transform:translateY(-8px); box-shadow:0 24px 48px rgba(50,100,160,0.25); border-color:rgba(100,160,220,0.2); background:rgba(100,150,210,0.1); }
            
            .spec-name { color:#fff !important; }
            .spec-card:hover .spec-name { color:#fff !important; }
            .doctor-card { background:rgba(255,255,255,0.72);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(130,150,170,0.12);border-radius:24px;padding:32px 28px;box-shadow:0 8px 30px rgba(80,100,120,0.05);text-decoration:none;display:block;transition:transform 0.3s ease,box-shadow 0.3s ease; }
            .doctor-card:hover { transform:translateY(-6px);box-shadow:0 16px 40px rgba(60,90,120,0.08); }
            .team-card:hover { border-color:rgba(200,220,240,0.6) !important; box-shadow:0 12px 40px rgba(15,23,42,0.2) !important; }
          `}</style>
          {SPECIALIZATIONS.map((spec) => (
              <a key={spec.name} href={'/clinic/doctors?specialization=' + spec.slug} className="spec-card">
                <div style={{marginBottom:'16px'}} dangerouslySetInnerHTML={{__html: spec.icon}} />
                <div className="spec-name" style={{fontSize:'20px',fontWeight:700,marginBottom:'6px',textAlign:'left'}}>{spec.name}</div>
                <div style={{fontSize:'14px',lineHeight:1.5,color:'rgba(255,255,255,0.7)',textAlign:'left',marginBottom:'10px'}}>{spec.desc}</div>
                <ul style={{listStyle:'none',padding:0,margin:0}}>
                  {spec.points.map((p) => (
                    <li key={p} style={{fontSize:'14px',color:'rgba(255,255,255,0.55)',marginBottom:'6px',paddingLeft:'14px',position:'relative'}}>
                      <span style={{position:'absolute',left:0,top:'6px',width:'5px',height:'5px',borderRadius:'50%',background:'rgba(255,255,255,0.4)',display:'inline-block'}} />
                      {p}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'10px',background:'linear-gradient(to bottom,transparent 0%,#394351 100%)',zIndex:5,pointerEvents:'none'}} />
      </section><section className="py-20" style={{background:'linear-gradient(180deg,#3d5068 0%,#4a6080 50%,#3d5068 100%)',position:'relative'}}>
        <div className="absolute inset-0" style={{background:'rgba(55,60,68,0.65)',zIndex:0}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4" style={{fontSize:'36px',fontWeight:700,color:'#fff',fontFamily:'var(--font-playfair)',position:'relative',zIndex:1}}>Запись на приём — быстро и удобно</h2>
          <p className="text-center mb-14" style={{color:'rgba(255,255,255,0.97)',fontSize:'18px',position:'relative',zIndex:1}}>Выберите специалиста, удобное время и подтвердите запись. Весь процесс занимает всего несколько минут и не требует телефонного звонка.</p>
          <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',position:'relative',zIndex:1,gap:'16px'}}>
            {STEPS.map((step, i) => (
              <div key={step.number} style={{flex:1,textAlign:'center',position:'relative'}}>
                {i < STEPS.length - 1 && (
                  <div style={{position:'absolute',top:'27px',left:'calc(50% + 40px)',right:'calc(-50% + 40px)',height:'1px',background:'rgba(255,255,255,0.3)'}} />
                )}
                <div style={{width:'56px',height:'56px',borderRadius:'50%',border:'1px solid rgba(255,255,255,0.5)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px',fontWeight:700,color:'#fff',margin:'0 auto 20px',position:'relative',zIndex:1,background:'#3d5068'}}>{step.number}</div>
                <h3 style={{fontSize:'18px',fontWeight:700,color:'#fff',marginBottom:'10px'}}>{step.title}</h3>
                <p style={{fontSize:'14px',lineHeight:1.6,color:'rgba(255,255,255,0.97)',margin:0}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:'10px',background:'linear-gradient(to bottom,transparent 0%,#778ba1 100%)',zIndex:5,pointerEvents:'none'}} />
      </section>

      

      <section className="py-20" style={{background:'linear-gradient(180deg,#b8d0e8 0%,#a8c4e0 50%,#b0cce4 100%)',position:'relative',overflow:'hidden'}}>
          <div className="absolute inset-0" style={{background:'rgba(40,55,75,0.45)',zIndex:0}} />
          <div style={{position:'absolute',top:'-60px',right:'-60px',width:'420px',height:'420px',background:'radial-gradient(circle,rgba(95,135,175,0.12),transparent 70%)',zIndex:0,pointerEvents:'none'}} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{position:'relative',zIndex:1}}>
            <h2 className="text-center mb-4" style={{fontSize:'36px',fontWeight:700,color:'#fff',fontFamily:'var(--font-playfair)'}}>Наши специалисты</h2>
            <p className="text-center mb-14" style={{color:'rgba(255,255,255,0.65)',fontSize:'18px',maxWidth:'640px',margin:'0 auto 56px'}}>Команда врачей, объединяющая многолетний опыт, современные медицинские технологии и индивидуальный подход к каждому пациенту.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {icon:<Stethoscope size={44} color="white" strokeWidth={1.5}/>,title:'Практический опыт',desc:'Наши специалисты обладают многолетним клиническим опытом и ежедневно помогают пациентам сохранять здоровье и качество жизни.'},
                {icon:<GraduationCap size={44} color="white" strokeWidth={1.5}/>,title:'Современный подход',desc:'Используем актуальные методы диагностики и лечения, основанные на принципах доказательной медицины и современных клинических рекомендациях.'},
                {icon:<Users size={44} color="white" strokeWidth={1.5}/>,title:'Забота о каждом пациенте',desc:'Мы внимательно относимся к каждой ситуации, выстраивая лечение с учетом индивидуальных особенностей и потребностей пациента.'},
              ].map((item)=>(
                <div key={item.title} className="team-card" style={{background:'rgba(60,90,120,0.45)',backdropFilter:'blur(20px)',WebkitBackdropFilter:'blur(20px)',border:'1px solid rgba(150,170,200,0.15)',borderRadius:'24px',padding:'36px 32px',boxShadow:'0 8px 30px rgba(20,40,60,0.2)'}}>
                  <div style={{marginBottom:'20px'}}>{item.icon}</div>
                  <h3 style={{fontSize:'19px',fontWeight:700,color:'#fff',marginBottom:'12px'}}>{item.title}</h3>
                  <p style={{fontSize:'15px',lineHeight:1.7,color:'rgba(255,255,255,0.7)',margin:0}}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/clinic/doctors" className="transition-all duration-300 bg-[linear-gradient(90deg,rgba(30,70,130,0.9),rgba(140,210,245,0.65))] hover:bg-[linear-gradient(90deg,rgba(20,50,100,0.95),rgba(100,180,225,0.8))] hover:scale-105 hover:shadow-xl text-white font-semibold w-80 py-4 rounded-xl inline-flex items-center justify-center text-lg" style={{backdropFilter:'blur(10px)',WebkitBackdropFilter:'blur(10px)',border:'1px solid rgba(255,255,255,0.4)',textDecoration:'none',boxShadow:'0 8px 25px rgba(0,0,0,0.15)'}}>
                Все специалисты
              </a>
            </div>
          </div>
          <div style={{position:'absolute',bottom:0,left:0,right:0,height:'10px',background:'linear-gradient(to bottom,transparent 0%,#d3d8dd 100%)',zIndex:5,pointerEvents:'none'}} />
      </section>

      <section className="py-16" style={{background: '#EEF4F8', position:'relative'}}>
        <div className="absolute inset-0" style={{background:'rgba(55,60,68,0.15)',zIndex:0}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4" style={{color:'#4a6080'}}>Отзывы пациентов</h2>
          <p className="text-center mb-12" style={{color: '#475569', fontSize:'17px'}}>Что говорят о нас наши пациенты</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-6" style={{boxShadow: '0 4px 20px rgba(33,160,225,0.08)', border: '1px solid rgba(33,160,225,0.12)'}}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-lg" style={{color: '#21A0E1'}}>★</span>
                  ))}
                </div>
                <p className="text-gray-800 mb-4 leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:'10px',background:'linear-gradient(to bottom,transparent 0%,#445468 100%)',zIndex:5,pointerEvents:'none'}} />
      </section>

      <section className="py-20 text-white" style={{background: 'linear-gradient(180deg,#4a5f78 0%,#3d5068 100%)', position:'relative'}}>
        <div className="absolute inset-0" style={{background:'rgba(55,60,68,0.3)',zIndex:0}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{position:'relative',zIndex:1}}>
          <h2 className="text-4xl font-bold mb-4">Готовы записаться?</h2>
          <p className="mb-10 text-xl" style={{color: 'rgba(255,255,255,0.7)'}}>Выберите врача и удобное время. Запись займёт 2 минуты.</p>
          <a href="/clinic/booking" className="text-white font-semibold w-80 py-4 rounded-xl inline-flex items-center justify-center text-lg transition-all duration-300 bg-gradient-to-r from-[#21A0E1] to-[#0BD5D0] hover:from-[#1a87bd] hover:to-[#09aba6] hover:scale-105 hover:shadow-xl" style={{boxShadow: '0 8px 25px rgba(33,160,225,0.3)'}}>
            Записаться на приём
          </a>
        </div>
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:'10px',background:'linear-gradient(to bottom,transparent 0%,#111827 100%)',zIndex:5,pointerEvents:'none'}} />
      </section>
    </>
  )
}





