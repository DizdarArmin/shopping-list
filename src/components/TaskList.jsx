import Task from "../components/Task";

export default function TaskList({ list, status, handler }) {
  const filteredList = list.filter((item) => item.isFinished === status);

  const TaskItems = filteredList.map((item) => (
    <Task key={item.id} item={item} handler={handler} />
  ));

  // Use a short circuit to better render
  const List = () => {
    if (filteredList.length === 0 && !status) {
      return (
        <p className="text-secondary text-center d-flex align-items-center ">
          You acquired all items...
        </p>
      );
    } else return <div>{TaskItems}</div>;
  };

  // Recomendation (untesrted)
  // const List =
  //   filteredList.length === 0 && !status ? (
  //     <p className="text-secondary text-center d-flex align-items-center ">
  //       You acquired all items...
  //     </p>
  //   ) : (
  //     <div>{TaskItems}</div>
  //   );

  return <List />;
}
