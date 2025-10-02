import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Overview() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchOverview() {
      try {
        const [reqs, vols, resrcs, funds, resDon] = await Promise.all([
          supabase.from("requests").select("*"),
          supabase.from("volunteers").select("*"),
          supabase.from("RequestResource").select("*"),
          supabase.from("funds_donations").select("*"),
          supabase.from("resource_donations").select("*"),
        ]);

        if (reqs.error || vols.error || resrcs.error || funds.error || resDon.error) {
          console.error("Error fetching overview");
          return;
        }

        const totalDonations = funds.data.reduce(
          (sum, row) => sum + Number(row.amount || 0),
          0
        );

        setStats({
          counts: {
            requests: reqs.data.length,
            volunteers: vols.data.length,
            resources: resrcs.data.length,
            fund_donations: funds.data.length,
            resource_donations: resDon.data.length,
          },
          totalDonations,
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchOverview();
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div>
      <h2>Overview</h2>
      <ul>
        <li>Total Requests: {stats.counts.requests}</li>
        <li>Total Volunteers: {stats.counts.volunteers}</li>
        <li>Total Resources: {stats.counts.resources}</li>
        <li>Fund Donations: {stats.counts.fund_donations}</li>
        <li>Resource Donations: {stats.counts.resource_donations}</li>
        <li>
          <strong>Total Donation Amount: ₹{stats.totalDonations}</strong>
        </li>
      </ul>
    </div>
  );
}
