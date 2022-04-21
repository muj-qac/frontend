<<<<<<< HEAD:src/components/VerificationTable.js
import { Spinner, Table } from "evergreen-ui";
import { useEffect, useState } from "react";
import api from "../api";
import VerificationTableRow from "./VerificationTableRow";
=======
import { Spinner, Table } from 'evergreen-ui';
import { useEffect, useState } from 'react';
import api from '../../../api';
import VerificationTableRow from './VerificationTableRow';
>>>>>>> a2aa143b615a92021c56505b90bcf3baa15ed3f7:src/components/Admin/VerifyKpi/VerificationTable.js

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
