import { Spinner, Table } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import api from '../../../api';
import { users } from '../../../data/UserData';
import KpiReceiveRow from './KpiReceiveRow';

function KpiReceiveTable({ title }) {
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(false);

  const fetchKpi = async () => {
    setLoading(false);
    try {
      const res = await api.get(`/admin/sheet/unverified-kpis`);
      setKpis(res.data.dbUnverified);
      console.log(res.data.dbUnverified);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchKpi();
    console.log(title);
  }, [render]);

  // console.log(kpis);
  return (
    <>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Users</Table.TextHeaderCell>
          <Table.TextHeaderCell>Download</Table.TextHeaderCell>
          <Table.TextHeaderCell>Verification</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={300}>
          {loading ? (
            kpis.map(
              (kpi) =>
                title === kpi.uploaded_sheets_aws_key.split('/', 1)[0] && (
                  <KpiReceiveRow
                    user={kpi}
                    title={title}
                    render={render}
                    setRender={setRender}
                  />
                )
              // {
              //   console.log(kpi.uploaded_sheets_aws_key.split('/', 1));
              // }
            )
          ) : (
            <Spinner marginX="auto" marginY={120} />
          )}
        </Table.Body>
      </Table>
    </>
  );
}

export default KpiReceiveTable;
