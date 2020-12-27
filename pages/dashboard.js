import React from 'react'
import { useAuth } from '@/lib/auth'
import EmptyState from '@/components/EmptyState'
import DashboardShell from '@/components/DashboardShell'
import SiteTableSkeleton from '@/components/SiteTableSkeleton'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import SiteTable from '@/components/SiteTable'

const Dashboard = () => {
  const auth = useAuth()
  const { data } = useSWR('/api/sites', fetcher)
  console.log(data)
  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    )
  }
  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  )
}

export default Dashboard
