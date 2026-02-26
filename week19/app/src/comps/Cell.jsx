export default function Cell({ setCount, count, id ,randomNum ,setIsSecret ,isSecret }) {
 


  const handelClick = (e) => {
    if(!isSecret && !e.target.revaled ){
        setCount(count + 1);    
        if (id === randomNum) {
            setIsSecret(true)
            e.target.className = "border-white border bg-red-500 flex justify-center items-center";
            e.target.textContent = "V";
        } else {            
            e.target.revaled = true
            e.target.className = "border-white border bg-[#dfbd8d] flex justify-center items-center ";
            e.target.textContent = "X";
        }
    }
}
  return (<>
  
    <div
      id={id}
      className="border-white border bg-[#484c57] hover:bg-[#484c5700] flex justify-center items-center "
      onClick={handelClick}

    >
      {id}
    </div>
  </>

    
  );
}
