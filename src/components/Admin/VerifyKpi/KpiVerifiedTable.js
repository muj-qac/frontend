<<<<<<< HEAD:src/components/KpiVerifiedTable.js
import { Spinner, Table } from "evergreen-ui";
import { useEffect, useState } from "react";
import api from "../api";
=======
import { Spinner, Table } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import api from '../../../api';
>>>>>>> a2aa143b615a92021c56505b90bcf3baa15ed3f7:src/components/Admin/VerifyKpi/KpiVerifiedTable.js
// import { verified } from '../data/VerifiedData';
import KpiVerifiedRow from "./KpiVerifiedRow";

function KpiVerifiedTable({ title }) {
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchKpi = async () => {
    const res = await api.get(`/admin/sheet/verified-kpis`);
    setKpis(res.data);
    setLoading(true);
    console.log(res.data);
  };
  useEffect(() => {
    fetchKpi();
  }, []);
  return (
    <>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Users</Table.TextHeaderCell>
          <Table.TextHeaderCell>Download</Table.TextHeaderCell>
          <Table.TextHeaderCell></Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={300}>
          {loading ? (
            kpis.map(
              (kpi) =>
                title === kpi.uploaded_sheets_aws_key.split("/", 1)[0] && (
                  <KpiVerifiedRow verify={kpi} />
                )
            )
          ) : (
            <Spinner marginX="auto" marginY={120} />
          )}
        </Table.Body>
      </Table>
    </>
  );
}

export default KpiVerifiedTable;
