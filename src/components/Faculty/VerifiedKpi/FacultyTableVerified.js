import { useEffect, useState } from 'react';
import { Spinner, Table } from 'evergreen-ui';
import FacultyTableRowVerified from './FacultyTableRowVerified';
import api from '../../../api';

function FacultyTableVerified() {
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchKpi = async () => {
    const res = await api.get(`/user/get-verified-kpis`);
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
          <Table.TextHeaderCell>Kpis</Table.TextHeaderCell>
          <Table.TextHeaderCell>Download</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={400}>
          {loading ? (
            kpis.map((kpi) => <FacultyTableRowVerified kpi={kpi} />)
          ) : (
            <Spinner marginX="auto" marginY={120} />
          )}
        </Table.Body>
      </Table>
    </>
  );
}

export default FacultyTableVerified;
