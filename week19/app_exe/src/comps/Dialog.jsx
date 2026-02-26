
export default function Dialog({ dir="ltr", title="title", desc, textConfirm="save", onConfirm, textCancel="cancel", onCancel }) {

    return (
        <div dir={dir} className='rounded-xl flex flex-col items-center z-[9999] fixed bg-[#e6dddd] h-[60vh] w-[40%]  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
            <div className='h-[60%] flex flex-col items-center justify-around'>
                <h2>{title}</h2>
                <span className='text-center'>{desc}</span>
            </div>
            <div className='h-[30%] flex items-end justify-evenly w-full'>
                <button onClick={onConfirm} className='p-2 px-4 border border-black rounded-2xl bg-blue-400 hover:bg-blue-600'>{textConfirm}</button>
                <button onClick={onCancel} className='p-2 px-4 border border-black rounded-2xl bg-red-400 hover:bg-red-600'>{textCancel}</button>
            </div>
        </div>
  );
}
