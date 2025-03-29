export default function Dashboard() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="grid gap-4">
        <div className="bg-white/[.04] rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-black/[.1] p-4 rounded-md shadow-lg transition-shadow duration-300 hover:shadow-amber-600">
              <h3 className="text-gray-500 text-sm">Total Users</h3>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div className="bg-black/[.1] p-4 rounded-md shadow-lg transition-shadow duration-300 hover:shadow-amber-600">
              <h3 className="text-gray-500 text-sm">Active Projects</h3>
              <p className="text-2xl font-bold">56</p>
            </div>
            <div className="bg-black/[.1] p-4 rounded-md shadow-lg transition-shadow duration-300 hover:shadow-amber-600">
              <h3 className="text-gray-500 text-sm">Revenue</h3>
              <p className="text-2xl font-bold mb-2">$45,678</p>
              <ProgressBar value={75} />
            </div>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New user registration</p>
                  <p className="text-sm text-gray-500">
                    John Doe joined the platform
                  </p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Project update</p>
                  <p className="text-sm text-gray-500">
                    Website redesign completed
                  </p>
                </div>
                <span className="text-sm text-gray-500">5 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


function ProgressBar({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 transition-transform duration-300 hover:animate-bounce">
      <div 
        className="bg-gradient-to-r from-amber-500 to-pink-600 h-2 rounded-full" 
        style={{width: `${value}%`}}
      ></div>
    </div>
  );
}
