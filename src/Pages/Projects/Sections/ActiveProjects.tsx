import ActiveProjectCard from "../ActiveProjectCard";

const ActiveProjects = () => {
  return (
    <div className="mx-6 md:mx-12 w-100">
      <ActiveProjectCard status="under-review" />
      <ActiveProjectCard status="in-progress" />
      <ActiveProjectCard status="approved" />
      <ActiveProjectCard status="rejected" />
      <ActiveProjectCard status="approved" />
    </div>
  );
};

export default ActiveProjects;
