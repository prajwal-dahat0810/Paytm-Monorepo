import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt";
const prisma = new PrismaClient()

async function main() {
  const alicePassword = await bcrypt.hash('1111', 10);
  const alice = await prisma.user.create({
    
    data: {
      number: '9876543212',
      password: alicePassword,
      name: 'Jack',
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 2000,
          token: "121",
          provider: "HDFC Bank",
        },
      },
    },
    
  })
  const bobPassword = await bcrypt.hash('1111', 10);
  const bob = await prisma.user.create({
    data: {
      number: '9876543211',
      password:bobPassword, 
      name: 'Jack',
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 2000,
          token: "911",
          provider: "HDFC Bank",
        },
      },
    },
  })
  console.log({ alice,  bob })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })