import { Table } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import api from '../api';
// import { kpis } from '../data/data';
import VerificationTableRow from './VerificationTableRow';

function VerificationTable() {
  const [kpis, setKpis] = useState([]);

  const fetchRole = async () => {
    const res = await api.get(`/admin/kpi/get-kpis`);
    setKpis(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchRole();
  }, []);

  console.log(kpis);

  return (
    <>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Kpis</Table.TextHeaderCell>
          <Table.TextHeaderCell>Data</Table.TextHeaderCell>
          <Table.TextHeaderCell>Status</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={400}>
          {kpis.map((kpi) => (
            <VerificationTableRow kpi={kpi} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default VerificationTable;
