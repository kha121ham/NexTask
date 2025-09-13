import ProjectList from "@/components/project/project-list";
import { getLatestProjects } from "@/lib/actions/project.action";
export const metadata = {
  title: "Home",
}
const HomePage = async () => {
  const projects = await getLatestProjects();
  return <>
    <ProjectList data={projects} title="Latest Projects" limit={4} />
  </>
}
 
export default HomePage;