import React, { useState } from 'react';
import { Table, Pane, Text, Tooltip, Dialog } from 'evergreen-ui';
import { IconButton, TrashIcon, EyeOpenIcon, EditIcon } from 'evergreen-ui';
import NewColumnModal from './NewColumnModal';

const ColumnTableRow = ({ column, handleSetColumnData, handleDeleteColumn, isDeleteDisabled }) => {
	const [isShown, setIsShown] = useState(false);

	const handleEditClick = () => {
		setIsShown(true);
	};

	return (
		<>
			<NewColumnModal data={column} handleSetColumnData={handleSetColumnData} isShown={isShown} setIsShown={setIsShown} />
			<Table.Row key={column.id}>
				<Table.TextCell flexBasis={320} textAlign='left'>
					<Text>{column.name}</Text>
				</Table.TextCell>
				<Table.TextCell>
					<Text color='gray700' fontWeight='600'>
						{`${column.type}`.toUpperCase()}
					</Text>
				</Table.TextCell>
				<Table.TextCell>
					{column.rule ? (
						<Tooltip content={`${JSON.stringify(column.rule)}`} showDelay={500} appearance='default'>
							<Pane alignContent='center' alignItems='center' justifyContent='center' flexDirection='row' display='flex'>
								<EyeOpenIcon color='gray700' margin={8} />
								<Text color='gray700' fontWeight='600'>
									Applied
								</Text>
							</Pane>
						</Tooltip>
					) : (
						<Text color='gray500' fontWeight='400'>
							None
						</Text>
					)}
				</Table.TextCell>
				<Table.TextCell>
					<IconButton margin={2} icon={<EditIcon />} onClick={handleEditClick} />
					<IconButton
						margin={2}
						disabled={isDeleteDisabled}
						icon={<TrashIcon />}
						onClick={() => {
							handleDeleteColumn(column.id);
						}}
					/>
				</Table.TextCell>
			</Table.Row>
		</>
	);
};

export default ColumnTableRow;
