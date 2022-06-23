import PendingRadioButton from "../../../Components/PendingRadioButton";

const Milestone = () => {
  return (
    <div className="flex flex-col w-11/12 md:w-10/12 mt-6 md:mt-0 ml-4 md:ml-12 overflow-y-auto">
      <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
        Stages of Project
      </div>
      <div className="text-xs md:text-sm text-gray-900 my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi
        voluptate, corrupti nisi consectetur blanditiis. Expedita voluptate
        harum quis distinctio numquam, necessitatibus doloribus at soluta quos,
        nulla est obcaecati ex nobis blanditiis velit officiis. Nobis odio rem
        non exercitationem eos.
      </div>

      <div className="flex flex-col my-12">
        <PendingRadioButton message={"Contract Order Confirmation"} />
        <PendingRadioButton message={"Advance Payment"} />
        <PendingRadioButton message={"Project Started"} />
        <PendingRadioButton message={"Raw Material Arranged"} />
        <PendingRadioButton message={"Task A Completed"} />
        <PendingRadioButton message={"Task B Completed"} />
        <PendingRadioButton message={"Project Completed"} />
        <PendingRadioButton message={"Advance Payment"} />
      </div>
    </div>
  );
};

export default Milestone;
