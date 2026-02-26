export default function Cell({ cardId, random, setCards, className ,setCliked ,cliked}) {
  const style ="border-white border bg-[#9ca1a7] flex justify-center items-center text-4xl after:content-['💣'] ";
  const style2 =
    "border-white border bg-[#9ca1a7] flex justify-center items-center  after:content-['X']";

  const handelClick = (id) => {
    if (random.includes(id) && cliked != random.length) {
    setCliked((prev) => prev + 1);
  }
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id
          ? {
              ...card,
              className: random.includes(id) ? style : style2,
            }
          : card,
      ),
    );
  };
  return (
    <>
      <div className={className} onClick={() => handelClick(cardId)}></div>
    </>
  );
}