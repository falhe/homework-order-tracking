import { API_URL, API_KEY } from '@/app/utils';
import { fetchApi } from '@/app/utils/api';
import { Notifications } from '@/app/components/Notifications';

const getTracker = async (tracking_number: string) => {
  const url = `${API_URL}/trackers?${new URLSearchParams({
    tracking_number,
  })}`;

  const order = await fetchApi(url);
  return order;
};

export default async function Home({ params }: { params: { id: string } }) {
  const tracker = await getTracker(params.id);
  return (
    <main className="flex flex-col p-24">
      <h1 className="pb-8 text-3xl">Tracker notifications</h1>
      <Notifications data={tracker.data} />
    </main>
  );
}
