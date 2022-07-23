import TransactionList from "./TransactionList";

const AllTransactions = () => {
  return (
    <>
      <div className="flex justify-between mt-16 mx-6 md:mx-12 items-center">
        <div className="flex flex-col">
          <div className="text-1.5xl font-semibold">
            All Transactions from July 1, 2019 to July 1, 2020
          </div>
          <div className="font-semibold">
            All transactions 2021_07_1_12_28.pdf has been generated
          </div>
        </div>

        <div className="flex">
          <div className="bg-gray-500 font-semibold rounded p-3 w-16 text-center mx-1">
            PDF
          </div>
          <div className="bg-gray-500 font-semibold rounded p-3 w-16 text-center mx-1">
            CSV
          </div>

          <div className="bg-sky-400 text-white rounded p-3 w-32 flex items-center justify-center mx-1">
            Download
          </div>
        </div>
      </div>

      <TransactionList />
    </>
  );
};

export default AllTransactions;
