function Table() {
  const data = [
    { title: "123", myNum: 2 },
    { title: "123", myNum: 2 },
    { title: "123", myNum: 2 },
    { title: "123", myNum: 2 },
    { title: "123", myNum: 2 },
  ];

  return (
    <div>
      <table>
        <thead>
          <td>title</td>
          <td>myNum</td>
        </thead>
        {data.map((obj) => (
          <tr>
            <td>{obj.title}</td>
            <td>{obj.myNum}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Table;
