import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
interface AppointmentEmailData {
  doctorName: string
  serviceName: string
  date: string
  time: string
  totalAmount: number
}
export async function sendAppointmentConfirmation(data: AppointmentEmailData) {
  await resend.emails.send({
    from: 'MedPremium <onboarding@resend.dev>',
    to: ['apirogoff1@gmail.com'],
    subject: 'New appointment',
    html: '<h2>New appointment</h2><p><b>Doctor:</b> ' + data.doctorName + '</p><p><b>Service:</b> ' + data.serviceName + '</p><p><b>Date:</b> ' + data.date + '</p><p><b>Time:</b> ' + data.time + '</p><p><b>Amount:</b> ' + data.totalAmount + '</p>',
  })
}
