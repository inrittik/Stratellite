import Work1 from "../assets/project/work1.png";
import Work2 from "../assets/project/work2.png";
import Work3 from "../assets/project/work3.png";
import WorkPhoto from "./WorkPhoto";

const photos = [Work1, Work2, Work3];

const PhotoList = () => {
  return (
    <div className="flex">
      {photos.map((photo) => {
        return <WorkPhoto image={photo} />;
      })}
    </div>
  );
};

export default PhotoList;
