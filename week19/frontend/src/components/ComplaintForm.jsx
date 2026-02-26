export default function ComplaintForm({ data, setData }) {
  return (
    <>
      <p className="text-end font-bold text-2xl">:סוג התלונה</p>
      <select
        className=" border w-50"
        value={data.category}
        onChange={(e) => setData({ ...data, category: e.target.value })}
      >
        <option value="אוכל">אוכל</option>
        <option value="ציוד">ציוד</option>
        <option value="פקודות">פקודות</option>
        <option value="אחר">אחר</option>
      </select>
      <p className="text-end font-bold text-2xl">תוכן תלונה</p>
      <textarea
        required
        value={data.message}
        onChange={(e) => setData({ ...data, message: e.target.value })}
        className=" border w-100 h-40 "
        placeholder="כתוב טקסט תלונה"
      ></textarea>
      <br />
    </>
  );
}
