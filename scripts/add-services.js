const {PrismaClient}=require("@prisma/client");
const p=new PrismaClient();
const services={
terapiya:[
{name:"Первичный приём терапевта",price:2700,duration:30},
{name:"Повторный приём терапевта",price:2100,duration:20},
{name:"Диспансеризация",price:3000,duration:40}
],
kardiologiya:[
{name:"Консультация кардиолога",price:3200,duration:40},
{name:"ЭКГ с расшифровкой",price:1800,duration:20},
{name:"Суточное мониторирование давления",price:3500,duration:20}
],
nevrologiya:[
{name:"Консультация невролога",price:3200,duration:40},
{name:"ЭЭГ головного мозга",price:3800,duration:40},
{name:"Лечение болевого синдрома",price:2500,duration:30}
],
ortopediya:[
{name:"Консультация ортопеда",price:3000,duration:40},
{name:"Рентген суставов",price:2200,duration:20},
{name:"Инъекция в сустав",price:4500,duration:30}
],
oftalmologiya:[
{name:"Консультация офтальмолога",price:2990,duration:30},
{name:"Проверка остроты зрения",price:1500,duration:20},
{name:"Подбор очков и линз",price:2000,duration:30}
],
dermatologiya:[
{name:"Консультация дерматолога",price:2800,duration:30},
{name:"Дерматоскопия",price:2000,duration:20},
{name:"Лечение акне",price:3500,duration:40}
],
endokrinologiya:[
{name:"Консультация эндокринолога",price:3200,duration:40},
{name:"Анализ на гормоны щитовидки",price:2500,duration:20},
{name:"Лечение диабета",price:3800,duration:40}
],
gastroenterologiya:[
{name:"Консультация гастроэнтеролога",price:3200,duration:40},
{name:"УЗИ органов брюшной полости",price:3000,duration:30},
{name:"Гастроскопия",price:5500,duration:40}
]
};
async function main(){
await p.service.deleteMany({});
console.log("Services deleted");
const doctors=await p.doctor.findMany({include:{specialization:true}});
let count=0;
for(const doc of doctors){
const slug=doc.specialization.slug;
const list=services[slug];
if(!list){console.log("No services for "+slug);continue;}
for(const svc of list){
await p.service.create({data:{name:svc.name,price:svc.price,duration:svc.duration,doctorId:doc.id}});
count++;
}
}
console.log("Created "+count+" services");
}
main().catch(console.error).finally(()=>p.$disconnect());
