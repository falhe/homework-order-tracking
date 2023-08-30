import { API_URL, API_KEY } from '@/app/utils';
import { fetchApi } from '@/app/utils/api';
import { Trackers } from './components/Trackers';

const getOrder = async () => {
  const url = `${API_URL}/orders?${new URLSearchParams({
    order_number: 'UK1876YH08_2',
    'expand[]': 'fulfillments',
  })}`;

  const order = await fetchApi(url);
  return order;
};

export default async function Home() {
  const order = await getOrder();
  return (
    <main className="flex flex-col p-24">
      <h1 className="pb-8 text-3xl">Order Info</h1>

      {order.data.map((order: any) => (
        <div
          className="card card-compact w-96 bg-base-100 shadow-xl"
          key={order.order_number}
        >
          <div className="card-body">
            <h2 className="card-title">Order info</h2>
            <ul className="p-4">
              <li className="flex justify-between">
                <span>Order number:</span>
                <span>{order.order_number}</span>
              </li>
              <li className="flex justify-between">
                <span>Firstname:</span>
                <span>{order.first_name}</span>
              </li>
              <li className="flex justify-between">
                <span>Lastname:</span>
                <span>{order.last_name}</span>
              </li>
            </ul>

            <h2 className="card-title">Trackers</h2>
            <ul>
              {order.fulfillments.data.map((tracker: any) => (
                <Trackers data={tracker} key={tracker.id} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </main>
  );
}
