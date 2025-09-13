"use server"
import { PrismaClient } from "../generated/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PROJECTS_LIMIT } from "../constants";

// Get latest projects
export async function getLatestProjects  () {
    const prisma = new PrismaClient();
    const projects = await prisma.project.findMany({
        take: LATEST_PROJECTS_LIMIT,
        orderBy: {
            createdAt: 'desc'
        }
    });
    return convertToPlainObject(projects);
}
