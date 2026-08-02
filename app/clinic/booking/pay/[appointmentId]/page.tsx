'use client'
import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function PaymentPage({ params }: { params: Promise<{ appointmentId: string }> }) {
  const { appointmentId } = use(params)
  const router = useRouter()
  const [appointment, setAppointment] = useState<any>(null)
  const [paying, setPaying] = useState(false)
  const [paid, setPaid] = useState(false)

  useEffect(() => {
    fetch(`/api/clinic/appointments/${appointmentId}`)
      .then(r => r.json()).then(setAppointment)
  }, [appointmentId])

  function handlePay() {
    setPaying(true)
    setTimeout(() => { setPaid(true); setPaying(false) }, 3000)
  }

  if (paid) return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(180deg,#dce8f2,#eef3f8)'}}>
      <div style={{background:'#fff',borderRadius:'24px',padding:'48px',textAlign:'center',boxShadow:'0 25px 70px rgba(40,55,80,.14)'}}>
        <div style={{fontSize:'64px',marginBottom:'16px'}}>OK</div>
        <h2 style={{fontSize:'28px',fontWeight:700,color:'#24344A',marginBottom:'12px'}}>Oplata prinjata!</h2>
        <p style={{color:'#607089',marginBottom:'32px'}}>Vasha zapis podtverzhdena. Zhdjom vas v klinike!</p>
        <Link href='/clinic/dashboard' style={{background:'linear-gradient(135deg,#54719A,#435C7D)',color:'#fff',padding:'14px 32px',borderRadius:'14px',fontWeight:600,textDecoration:'none'}}>Lichnyj kabinet</Link>
      </div>
    </div>
  )

  if (!appointment) return <div style={{padding:'48px',textAlign:'center'}}>Zagruzka...</div>

  const date = new Date(appointment.timeSlot?.startTime).toLocaleDateString('ru-RU',{day:'numeric',month:'long',year:'numeric'})
  const time = new Date(appointment.timeSlot?.startTime).toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'})

  return (
    <div style={{minHeight:'100vh',background:'linear-gradient(180deg,#dce8f2,#eef3f8)',display:'flex',alignItems:'center',justifyContent:'center',padding:'24px'}}>
      <div style={{background:'#fff',borderRadius:'24px',padding:'40px',maxWidth:'560px',width:'100%',boxShadow:'0 25px 70px rgba(40,55,80,.14)'}}>
        <h1 style={{fontSize:'28px',fontWeight:700,color:'#0f2238',marginBottom:'24px'}}>Oplata priema</h1>
        <div style={{marginBottom:'24px'}}>
          {[['Vrach',appointment.doctor?.user?.name],['Usluga',appointment.service?.name],['Data',date],['Vremja',time],['Pacient',appointment.patientName]].map(([l,v])=>(
            <div key={l} style={{display:'flex',justifyContent:'space-between',padding:'12px 0',borderBottom:'1px solid #f0f4f8'}}>
              <span style={{color:'#607089'}}>{l}</span>
              <span style={{fontWeight:600,color:'#24344A'}}>{v}</span>
            </div>
          ))}
          <div style={{display:'flex',justifyContent:'space-between',padding:'16px',background:'#f0f7ff',borderRadius:'12px',marginTop:'12px'}}>
            <span style={{fontWeight:600}}>K oplate</span>
            <span style={{fontWeight:700,fontSize:'20px',color:'#2563eb'}}>{appointment.totalAmount?.toLocaleString('ru-RU')} rub</span>
          </div>
        </div>
        <button onClick={handlePay} disabled={paying} style={{width:'100%',height:'56px',borderRadius:'14px',background:paying?'#94a3b8':'linear-gradient(135deg,#54719A,#435C7D)',color:'#fff',fontSize:'18px',fontWeight:600,border:'none',cursor:paying?'not-allowed':'pointer',marginBottom:'16px'}}>
          {paying ? 'Obrabotka...' : `Oplatit ${appointment.totalAmount?.toLocaleString('ru-RU')} rub`}
        </button>
        <div style={{textAlign:'center'}}>
          <Link href='/clinic/dashboard' style={{color:'#2563eb',fontWeight:500}}>Lichnyj kabinet</Link>
        </div>
      </div>
    </div>
  )
}