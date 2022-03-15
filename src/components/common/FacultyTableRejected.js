import { useEffect, useState } from 'react';
import { Spinner, Table } from 'evergreen-ui';
import FacultyTableRow from './FacultyTableRowRejected';
import FacultyUploadModal from '../modals/FacultyUploadModal';
import api from '../../api';
import FacultyTableRowRejected from './FacultyTableRowRejected';

function FacultyTableRejected() {
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchKpi = async () => {
    const res = await api.get(`/user/get-rejected-kpis`);
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
          <Table.TextHeaderCell>Comment</Table.TextHeaderCell>
          <Table.TextHeaderCell></Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={400}>
          {loading ? (
            kpis.map((kpi) => <FacultyTableRowRejected kpi={kpi} />)
          ) : (
            <Spinner marginX="auto" marginY={120} />
          )}
        </Table.Body>
      </Table>
    </>
  );
}

export default FacultyTableRejected;
