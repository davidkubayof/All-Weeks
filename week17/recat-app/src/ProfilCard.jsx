export default function ProfilCard({ props }) {
  return (
    <div className="flex flex-col text-3xl gap-7 shadow-2xl bg-[#d2cdcd] h-100 w-100  rounded-2xl">
      <img
        className={"h-20 w-20 rounded-full mt-2 ml-2"}
        src={props.src}
        alt={props.alt}
      />
      <p>{props.name}</p>
      <p>{props.description}</p>
      <button className={`border bg-${props.button_first_color} w-40 self-center mt-18 hover:bg-${props.button_second_color}`}>Send</button>
    </div>
  );
}
