import { PrismaClient } from '../lib/generated/prisma';
import sampleProjects from './sample-projects';

const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany(); 

  await prisma.project.createMany({
    data: sampleProjects.projects,
  });

  console.log("✅ Project inserted successfully!");
}

main()
