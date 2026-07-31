import Link from 'next/link'
export default function ContactsPage() {
  return (
    <div style={{background:'linear-gradient(180deg,#b0c8de 0%,#bdd4e6 50%,#b0c8de 100%)',minHeight:'100vh'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 style={{fontFamily:'var(--font-playfair)',fontSize:'36px',fontWeight:800,color:'#0f2238',marginBottom:'12px'}}>Контакты</h1>
          <p style={{color:'#1a2a3a',fontSize:'17px',lineHeight:1.85,fontWeight:500}}>Мы всегда рады ответить на ваши вопросы</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="rounded-xl border p-6" style={{background:"rgba(255,255,255,0.85)",borderColor:"rgba(100,150,190,0.25)"}}>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Наши контакты</h2>
              <ul className="space-y-3 font-semibold" style={{color:"#1a2a3a"}}>
                <li>
                  <span className="font-medium">Адрес:</span> Москва, Малый казённый переулок, 16
                </li>
                <li>
                  <span className="font-medium">Телефон:</span> +7 (495) 555-55-55
                </li>
                <li>
                  <span className="font-medium">Email:</span> info@medpremium.ru
                </li>
              </ul>
            </div>
            <div className="rounded-xl border p-6" style={{background:"rgba(255,255,255,0.85)",borderColor:"rgba(100,150,190,0.25)"}}>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Часы работы</h2>
              <p style={{color:"#1a2a3a",fontWeight:600}}>Ежедневно: 08:00–21:00</p>
            </div>
            <Link
              href="/clinic/booking"
              className="block w-full text-white text-center font-bold text-lg px-6 py-3 rounded-lg contacts-btn"
              style={{background:'#3d6490',color:'#ffffff'}}
            >
              Записаться онлайн
            </Link>
          </div>
          <div className="rounded-xl border p-6" style={{background:"rgba(255,255,255,0.85)",borderColor:"rgba(100,150,190,0.25)"}}>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Как добраться</h2>
            <p style={{color:"#1a2a3a",fontWeight:600,marginBottom:"16px"}}>
              Ближайшее метро в нескольких минутах ходьбы. Парковка рядом с клиникой.
            </p>
            <iframe src="https://yandex.ru/map-widget/v1/?ll=37.655499%2C55.761092&z=17&pt=37.655499,55.761092,pm2rdm" width="100%" height="256" frameBorder="0" style={{borderRadius:"12px",border:"none"}} allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  )
}