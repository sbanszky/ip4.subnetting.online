import React, { useState } from 'react';
import { Network } from 'lucide-react';
import { SubnetVisualizer } from './components/SubnetVisualizer';
import { IPClassTable } from './components/IPClassTable';
import { IPInput } from './components/IPInput';
import { ReservedIPTable } from './components/ReservedIPTable';

function App() {
  const [ip, setIP] = useState([192, 168, 10, 5]);
  const [cidr, setCidr] = useState(24);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-black/50 backdrop-blur-md relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <a 
              href="https://subnetting.online" 
              className="text-emerald-400 hover:text-blue-400 transition-colors text-lg font-medium"
            >
              subnetting.online
            </a>
          </div>
        </div>
      </header>

      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Network className="w-8 h-8 text-emerald-400" />
            <h1 className="text-3xl font-bold text-emerald-400">IP Subnetting</h1>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-xl p-6 space-y-8 border border-gray-700">
            <IPClassTable />
            <ReservedIPTable />
            <IPInput ip={ip} onIPChange={setIP} />
            <SubnetVisualizer 
              ip={ip}
              cidr={cidr}
              onCidrChange={setCidr}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
