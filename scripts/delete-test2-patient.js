const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.user.delete({ where: { email: "test2.patient@medpremium.ru" } });
    console.log("Deleted test2.patient@medpremium.ru");
  } catch (e) {
    console.log("Error:", e.message);
  }
  await prisma.$disconnect();
}

main();
