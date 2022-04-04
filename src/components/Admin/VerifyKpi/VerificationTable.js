import { Spinner, Table } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import api from '../../../api';
import VerificationTableRow from './VerificationTableRow';

function VerificationTable() {
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRole = async () => {
    const res = await api.get(`/admin/kpi/get-kpis`);
    setKpis(res.data);
    setLoading(true);
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
          <Table.TextHeaderCell></Table.TextHeaderCell>
          <Table.TextHeaderCell></Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={400}>
          {loading ? (
            kpis.map((kpi) => <VerificationTableRow kpi={kpi} />)
          ) : (
            <Spinner marginX="auto" marginY={120} />
          )}
        </Table.Body>
      </Table>
    </>
  );
}

export default VerificationTable;
