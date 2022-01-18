// import { FilePicker, Table, Tooltip } from 'evergreen-ui';
import { kpis } from '../../data/data';
import { useState } from 'react';
import { Table } from 'evergreen-ui';
import FacultyTableRow from './FacultyTableRow';
import FacultyUploadModal from '../modals/FacultyUploadModal';

function FacultyTable() {
  return (
    <>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Kpis</Table.TextHeaderCell>
          <Table.TextHeaderCell>Status</Table.TextHeaderCell>
          <Table.TextHeaderCell>Completion</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={400}>
          {kpis.map((kpi) => (
            <FacultyTableRow kpi={kpi} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default FacultyTable;
