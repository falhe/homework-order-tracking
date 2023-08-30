import Link from 'next/link';

export const Trackers = ({ data }: any) => {
  return (
    <>
      {data.trackers.data.map((tracker: any) => (
        <li className="flex justify-between" key={tracker.id}>
          <span>Tracker id:</span>
          <span>
            <Link
              href={`/tracker/${tracker.tracking_number}`}
              className="text-blue-500 hover:text-blue-700"
            >
              {tracker.id}
            </Link>
          </span>
        </li>
      ))}
    </>
  );
};
