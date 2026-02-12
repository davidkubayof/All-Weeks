const Nav = () => {
  return (
    <>
      <div className=" flex gap-5 justify-center border">
        <label className="self-center">
          <input className="border " type="checkbox" />
          Show only active members
        </label>
        <button className="border w-15 h-10 rounded-sm cursor-pointer">List</button>
        <button className="border w-15 h-10 rounded-sm cursor-pointer">Grid</button>
        <input type="text"className="border w-50 h-5 self-center rounded-sm" placeholder="Search members by name" />
      </div>
    </>
  );
};

export default Nav;
