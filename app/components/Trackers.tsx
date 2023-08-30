export const Trackers = ({ data }: any) => {
  return (
    <>
      {data.trackers.data.map((tracker: any) => (
        <li className="flex justify-between" key={tracker.id}>
          <span>Tracker id:</span>
          <span>{data.id}</span>
        </li>
      ))}
    </>
  );
};
