import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import TableView from "../components/TableView";

export default function Requests() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchRequests() {
      const { data, error } = await supabase.from("requests").select("*");
      if (error) console.error("Error fetching requests:", error);
      else setData(data);
    }      
    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Requests</h2>
      <TableView data={data} />
    </div>
  );
}
