import { Table } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import api from '../api';
// import { verified } from '../data/VerifiedData';
import KpiVerifiedRow from './KpiVerifiedRow';

function KpiVerifiedTable({ title }) {
  const [kpis, setKpis] = useState([]);

  const fetchKpi = async () => {
    const res = await api.get(`/admin/sheet/verified-kpis`);
    setKpis(res.data.dbVerified);
    console.log(res.data.dbVerified);
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
          <Table.TextHeaderCell>Status</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={300}>
          {kpis.map(
            (kpi) =>
              title === kpi.uploaded_sheets_aws_key.split('/', 1)[0] && (
                <KpiVerifiedRow verify={kpi} />
              )
          )}
        </Table.Body>
      </Table>
    </>
  );
}

export default KpiVerifiedTable;
