import { PrismaClient } from "@prisma/client";
//convert this to singleton form nextjs
export const prismaClient = new PrismaClient();