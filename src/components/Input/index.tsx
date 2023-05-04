import SearchIcon from "../Svgs/Search";

const InputSearch = () => {
  return (
    <div className="flex">
      <SearchIcon className="w-5 mr-2" />
      <input
        type="text"
        className="w-full h-8 bg-sfBlackLight rounded-full outline-0"
      />
    </div>
  );
};

export default InputSearch;
