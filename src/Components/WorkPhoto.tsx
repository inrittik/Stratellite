import { icons } from "../utils/icons";

interface PhotoProps {
  image: any;
  list: any;
  setPhotos: any;
}

const WorkPhoto: React.FC<PhotoProps> = ({ image, list, setPhotos }) => {
  const handleDelete = () => {
    const filteredList = list.filter((item: any) => {
      return item !== image;
    });
    setPhotos(filteredList);
  };
  return (
    <div>
      <img src={image} alt="" className="rounded w-76 h-76 p-3" />
      <div
        className="flex justify-center relative left-20 bottom-28 md:left-60 md:bottom-72 p-2 md:p-3 border border-[#FF554D] rounded w-8 md:w-12 bg-white cursor-pointer"
        onClick={handleDelete}
      >
        {icons.gallery.delete}
      </div>
    </div>
  );
};

export default WorkPhoto;
