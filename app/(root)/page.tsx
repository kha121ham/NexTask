import ProjectList from "@/components/project/project-list";
import sampleProject from "@/db/sample-projects";
export const metadata = {
  title: "Home",
}
const HomePage = () => {
  return <>
    <ProjectList data={sampleProject.projects} title="Latest Projects" limit={4} />
  </>
}
 
export default HomePage;