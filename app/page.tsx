import { API_URL, API_KEY } from '@/app/utils';
import { fetchApi } from '@/app/utils/api';

const getOrder = async () => {
  const url = `${API_URL}/orders?${new URLSearchParams({
    order_number: 'UK1876YH08_2',
  })}`;

  const order = await fetchApi(url);
  return order;
};

export default async function Home() {
  const order = await getOrder();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello world
      <code>{JSON.stringify(order, undefined, 2)}</code>
    </main>
  );
}
