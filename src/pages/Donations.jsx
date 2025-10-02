import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import TableView from "../components/TableView";

export default function Donations() {
  const [funds, setFunds] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    async function fetchDonations() {
      const { data: fundData, error: fundError } = await supabase
        .from("funds_donations")
        .select("*");
      if (fundError) console.error("Error fetching fund donations:", fundError);
      else setFunds(fundData);

      const { data: resourceData, error: resourceError } = await supabase
        .from("resource_donations")
        .select("*");
      if (resourceError)
        console.error("Error fetching resource donations:", resourceError);
      else setResources(resourceData);
    }
    fetchDonations();
  }, []);

  return (
    <div>
      <h2>Donations</h2>
      <h3>Fund Donations</h3>
      <TableView data={funds} />
      <h3>Resource Donations</h3>
      <TableView data={resources} />
    </div>
  );
}
