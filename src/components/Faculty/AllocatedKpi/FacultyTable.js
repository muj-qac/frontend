import { useEffect, useState } from 'react';
import { Spinner, Table } from 'evergreen-ui';
import FacultyTableRow from './FacultyTableRow';
import api from '../../../api';

function FacultyTable() {
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(false);
  const fetchKpi = async () => {
    setLoading(false);
    try {
      const res = await api.get(`/user/alloted-kpi`);
      setKpis(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchKpi();
  }, [render]);
  return (
    <>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Kpis</Table.TextHeaderCell>
          <Table.TextHeaderCell>Status</Table.TextHeaderCell>
          <Table.TextHeaderCell></Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={400}>
          {loading ? (
            kpis.map(
              (kpi) =>
                kpi.status !== 'merged' &&
                kpi.status !== 'verified' && (
                  <FacultyTableRow
                    kpi={kpi}
                    render={render}
                    setRender={setRender}
                  />
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

export default FacultyTable;
