import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='p-0 items-center'>
        <Link href={`/project/${project.slug}`}>
          <Image
            src={project.image}
            alt={project.title}
            height={300}
            width={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className='p-4 grid gap-4'>
        <div className="text-xs">{project.status}</div>
        <Link href={`/project/${project.slug}`}>
            <h2 className="text-sm font-medium">{project.title}</h2>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
