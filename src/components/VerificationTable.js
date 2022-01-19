import { Table } from 'evergreen-ui';
import { kpis } from '../data/data';
import VerificationTableRow from './VerificationTableRow';

function VerificationTable() {
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
