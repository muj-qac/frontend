import { Spinner, Table } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import api from '../../../api';
// import { verified } from '../data/VerifiedData';
import KpiVerifiedRow from './KpiVerifiedRow';

function KpiVerifiedTable({ title, kpiId }) {
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(false);

  const fetchKpi = async () => {
    const res = await api.get(`/admin/sheet/verified-kpis`);
    setKpis(res.data);
    setLoading(true);
    console.log(res.data);
  };
  useEffect(() => {
    fetchKpi();
  }, [render]);
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
                title === kpi.uploaded_sheets_aws_key.split('/', 1)[0] && (
                  <KpiVerifiedRow
                    verify={kpi}
                    kpiId={kpiId}
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

export default KpiVerifiedTable;
