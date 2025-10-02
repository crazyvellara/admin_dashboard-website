import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import TableView from "../components/TableView";

export default function Volunteers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchVolunteers() {
      const { data, error } = await supabase.from("volunteers").select("*");
      if (error) console.error("Error fetching volunteers:", error);
      else setData(data);
    }
    fetchVolunteers();
  }, []);

  return (
    <div>
      <h2>Volunteers</h2>
      <TableView data={data} />
    </div>
  );
}
