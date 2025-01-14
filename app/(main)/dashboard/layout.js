import React, { Suspense } from 'react'
import Dashboard from './page';
import { BarLoader } from 'react-spinners';

const DashboardLayout = () => {
  return (
    <div className="px-5">
        <h1 className="text-7xl font-bold gradient-title mb-5">tableau de bord</h1>

        {/* Dashboard Page */}
        <Suspense
            fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}>
            <Dashboard />
        </Suspense>
    </div>
  )
}

export default DashboardLayout;