import { icons } from "../utils/icons";

interface PhotoProps {
  image: any;
}

const WorkPhoto: React.FC<PhotoProps> = ({ image }) => {
  return (
    <div>
      <img src={image} alt="" className="rounded w-76 h-76 p-3" />
      <div className="flex justify-center relative left-60 bottom-72 p-3 border border-[#FF554D] rounded w-12 bg-white">
        {icons.gallery.delete}
      </div>
    </div>
  );
};

export default WorkPhoto;
