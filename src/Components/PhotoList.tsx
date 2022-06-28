import { useState } from "react";
import Work1 from "../assets/project/work1.png";
import Work2 from "../assets/project/work2.png";
import Work3 from "../assets/project/work3.png";
import WorkPhoto from "./WorkPhoto";

const PhotoList = () => {
  const [photos, setPhotos] = useState([Work1, Work2, Work3]);
  return (
    <div className="flex">
      {photos.map((photo) => {
        return <WorkPhoto image={photo} list={photos} setPhotos={setPhotos} />;
      })}
    </div>
  );
};

export default PhotoList;
