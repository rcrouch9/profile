import { createClient } from '../../utils/supabase/server';

export default async function Leaderboard() {
  const supabase = await createClient();
  const { data: entries, error } = await supabase
    .from('leaderboard')
    .select('*')
    .order('created_at', { ascending: false });
  console.log(entries, error);

  if (error) return <p>Error loading entries.</p>;

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center pointer-events-none p-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="p-4 border rounded-lg shadow-sm">
            <p className="font-semibold">{entry.name}</p>
            <p className="text-gray-600">{entry.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}