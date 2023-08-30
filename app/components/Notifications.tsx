export const Notifications = ({ data }: any) => {
  return (
    <>
      {data.map((tracker: any) => (
        <div
          className="card card-compact w-96 bg-base-100 shadow-xl"
          key={tracker.id}
        >
          <div className="card-body">
            <h2 className="card-title">Notifications history</h2>
            <ul className="p-4">
              {tracker.notifications.data.map((notification: any) => (
                <li className="flex justify-between" key={notification.id}>
                  <span>Notification id:</span>
                  <span>{notification.id}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};
