import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import TableView from "../components/TableView";

export default function Resources() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchResources() {
      const { data, error } = await supabase.from("RequestResource").select("*");
      if (error) console.error("Error fetching resources:", error);
      else setData(data);
    }
    fetchResources();
  }, []);

  return (
    <div>
      <h2>Resource Requests</h2>
      <TableView data={data} />
    </div>
  );
}
