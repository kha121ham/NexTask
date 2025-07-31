import ProjectCard from "./project-card";

const ProjectList = ({ data, title, limit }: { data: any; title?: string; limit?: number; }) => {
    const limitedData = limit ? data.slice(0,limit) : data
    return ( <div className="mt-10">
        <h2 className="h2-bold mp-4">{title}</h2>
        {data.length > 0 ? 
        (
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {limitedData.map((project: any) => (
                    <ProjectCard key={project.slug} project={project} />
                    
                ))}
            </div>
        ) : 
        (
            <div>
                <p>No Projects found</p>
            </div>
        )}
    </div> );
}
 
export default ProjectList;