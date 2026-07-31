const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

async function main() {
  const password = "Test123456";
  const hash = await bcrypt.hash(password, 10);
  const users = await prisma.user.findMany({ select: { email: true } });
  for (const u of users) {
    await prisma.user.update({ where: { email: u.email }, data: { password: hash } });
  }
  console.log("Updated all users:", users.length);
  await prisma.$disconnect();
}

main();
