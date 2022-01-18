import {
  Button,
  CircleArrowDownIcon,
  Pane,
  Pill,
  Table,
  Tooltip,
} from 'evergreen-ui';
import { useEffect, useState } from 'react';
import KpiReceiveModal from './modals/KpiReceiveModal';
import { users } from '../data/UserData';
import KpiVerifiedModal from './modals/KpiVerifiedModal';

function VerificationTableRow({ kpi }) {
  const [title, setTitle] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [counter1, setCounter1] = useState('');
  const [counter2, setCounter2] = useState('');
  const counterPill1 = () => {
    var count = Object.keys(users).length;
    setCounter1(`${count}`);
    console.log(counter1);
  };
  const counterPill2 = () => {
    var count = Object.keys(users).length;
    setCounter2(`${count}`);
    console.log(counter1);
  };
  useEffect(() => {
    counterPill1();
    counterPill2();
  }, []);
  return (
    <Pane>
      <Table.Row key={kpi.id} isSelectable>
        <Table.TextCell>{kpi.title}</Table.TextCell>
        <Table.TextCell>
          <Tooltip content="Verify Incoming Data">
            <Button
              marginY={8}
              marginRight={12}
              iconBefore={CircleArrowDownIcon}
              onClick={() => {
                setIsShown(true);
                counterPill1();
              }}
            >
              Verify Data
            </Button>
          </Tooltip>
          <Pill display="inline-flex" margin={8} color="yellow">
            {counter1}
          </Pill>
        </Table.TextCell>
        <Table.TextCell>
          <Tooltip content="Verified Data">
            <Button
              marginY={8}
              marginRight={12}
              iconBefore={CircleArrowDownIcon}
              onClick={() => {
                setIsShown2(true);
              }}
            >
              Verified Data
            </Button>
          </Tooltip>
          <Pill display="inline-flex" margin={8} color="green">
            {counter2}
          </Pill>
        </Table.TextCell>
      </Table.Row>
      <KpiReceiveModal
        setIsShown={setIsShown}
        isShown={isShown}
        title={kpi.title}
      />
      <KpiVerifiedModal
        setIsShown={setIsShown2}
        isShown={isShown2}
        title={kpi.title}
      />
    </Pane>
  );
}

export default VerificationTableRow;
