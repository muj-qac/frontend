import React, { useState, useEffect, forwardRef } from 'react';
import { Pane, Select, TextInput, Text, Checkbox } from 'evergreen-ui';
import DatePicker from 'react-datepicker';

const TextRules = ({ rule, handleUpdateRule }) => {
	// equals: { type: 'string', nullable: true },
	// notContains: { type: 'string', nullable: true },
	// contains: { type: 'string', nullable: true },
	// isValidEmail: { type: 'boolean', nullable: true },
	// isValidURL: { type: 'boolean', nullable: true },

	const options = {
		equals: { label: 'Equals', type: 'string' },
		contains: { label: 'Contains', type: 'string' },
		notContains: { label: 'Not Contains', type: 'string' },
		isValidEmail: { label: 'Is a valid Email', type: 'boolean' },
		isValidLink: { label: 'Is a valid Link', type: 'boolean' },
	};

	const [ruleType, setRuleType] = useState('equals');
	const [constraint, setConstraint] = useState('');

	useEffect(() => {
		if (rule)
			Object.keys(rule).forEach((textRule) => {
				setRuleType(textRule);
				if (options[textRule])
					if (options[textRule].type)
						switch (options[textRule].type) {
							case 'string':
								setConstraint(`${rule[textRule]}`);
								break;
							case 'boolean':
								setConstraint(true);
								break;
							default:
								console.log('Alert! Invalid input rule.');
								break;
						}
			});
	}, []);

	useEffect(() => {
		let type = options[ruleType].type;
		switch (type) {
			case 'string':
				handleUpdateRule({ [ruleType]: `${constraint}` });
				break;
			case 'boolean':
				handleUpdateRule({ [ruleType]: true });
				break;
			default:
				console.log('Alert! Add type in options before setting rule');
				break;
		}
	}, [ruleType, constraint]);

	return (
		<Pane display='flex' flexDirection='row'>
			<Select
				marginRight={10}
				value={ruleType}
				onChange={(e) => {
					setRuleType(e.target.value);
				}}>
				{Object.keys(options).map((option) => (
					<option value={option}>{options[option].label}</option>
				))}
			</Select>
			{options[ruleType].type === 'string' && (
				<TextInput
					placeholder='Type here...'
					onChange={(e) => {
						setConstraint(e.target.value);
					}}
					value={constraint}
				/>
			)}
		</Pane>
	);
};

const NumberRules = ({ rule, handleUpdateRule }) => {
	// equals?: number;
	// between?: { from: number; to: number };
	// lessThan?: { number: number; equal: boolean };
	// greaterThan?: { number: number; equal: boolean };

	const options = {
		equals: { label: 'Equals', type: 'number' },
		between: { label: 'Between', type: 'object', children: { from: { label: 'From', type: 'number' }, to: { label: 'To', type: 'number' } } },
		lessThan: {
			label: 'Less Than',
			type: 'object',
			children: { number: { label: 'Less Than', type: 'number' }, equal: { label: 'Can be equal?', type: 'boolean' } },
		},
		greaterThan: {
			label: 'Greater Than',
			type: 'object',
			children: { number: { label: 'Greater Than', type: 'number' }, equal: { label: 'Can be equal?', type: 'boolean' } },
		},
	};

	const [ruleType, setRuleType] = useState('equals');
	const [constraint, setConstraint] = useState({ from: 0, to: 0, number: 0, equal: false });

	useEffect(() => {
		if (rule)
			Object.keys(rule).forEach((numberRule) => {
				setRuleType(numberRule);
				if (options[numberRule])
					if (options[numberRule].type)
						switch (options[numberRule].type) {
							case 'number':
								setConstraint({ ...constraint, number: `${rule[numberRule]}` });
								break;
							case 'object':
								setConstraint({ ...constraint, ...rule[numberRule] });
								break;
							default:
								console.log('Alert! Invalid input rule.');
								break;
						}
			});
	}, []);

	useEffect(() => {
		switch (ruleType) {
			case 'equals':
				handleUpdateRule({ [ruleType]: constraint.number });
				break;
			case 'between':
				handleUpdateRule({ [ruleType]: { from: constraint.from, to: constraint.to } });
				break;
			case 'lessThan':
				handleUpdateRule({ [ruleType]: { number: constraint.number, equal: constraint.equal } });
				break;
			case 'greaterThan':
				handleUpdateRule({ [ruleType]: { number: constraint.number, equal: constraint.equal } });
				break;
			default:
				console.log('Alert! Add type in options before setting rule');
				break;
		}
	}, [ruleType, constraint]);

	return (
		<Pane display='flex' flexDirection='row' alignItems='center'>
			<Select
				marginRight={10}
				value={ruleType}
				onChange={(e) => {
					setRuleType(e.target.value);
				}}>
				{Object.keys(options).map((option) => (
					<option value={option}>{options[option].label}</option>
				))}
			</Select>
			{options[ruleType].type === 'number' && (
				<TextInput
					width={125}
					placeholder='Enter a number *'
					onChange={(e) => {
						setConstraint({ ...constraint, number: isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value) });
					}}
					value={constraint.number}
				/>
			)}
			{options[ruleType].type === 'object' &&
				Object.keys(options[ruleType].children).map((child, i) => {
					const parameter = options[ruleType].children[child];
					switch (parameter.type) {
						case 'number':
							return (
								<TextInput
									width={125}
									placeholder='Enter a number *'
									marginRight={10}
									onChange={(e) => {
										setConstraint({ ...constraint, [child]: isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value) });
									}}
									value={constraint[child]}
								/>
							);
						case 'boolean':
							return (
								<Checkbox
									label={parameter.label}
									checked={constraint.equal}
									onChange={(e) => setConstraint({ ...constraint, equal: e.target.checked })}
								/>
							);

						default:
							console.log('Invalid type in options');
							return <div>No rules</div>;
					}
				})}
		</Pane>
	);
};

const DateRules = ({ rule, handleUpdateRule }) => {
	// isValid?: boolean;
	// between?: { from: string; to: string };
	// lessThan?: { date: string; equal: boolean };
	// greaterThan?: { date: string; equal: boolean };

	const options = {
		isValid: { label: 'Is a valid Date', type: 'boolean' },
		between: { label: 'Between', type: 'object', children: { from: { label: 'From', type: 'date' }, to: { label: 'To', type: 'date' } } },
		lessThan: {
			label: 'Before',
			type: 'object',
			children: { date: { label: 'Before', type: 'date' }, equal: { label: 'Can be equal?', type: 'boolean' } },
		},
		greaterThan: {
			label: 'After',
			type: 'object',
			children: { date: { label: 'After', type: 'date' }, equal: { label: 'Can be equal?', type: 'boolean' } },
		},
	};

	const [ruleType, setRuleType] = useState('isValid');
	const [constraint, setConstraint] = useState({ from: 0, to: 0, date: 0, equal: false });

	useEffect(() => {
		if (rule)
			Object.keys(rule).forEach((dateRule) => {
				setRuleType(dateRule);
				if (options[dateRule])
					if (options[dateRule].type)
						switch (options[dateRule].type) {
							case 'number':
								setConstraint({ ...constraint, number: `${rule[dateRule]}` });
								break;
							case 'object':
								setConstraint({ ...constraint, ...rule[dateRule] });
								break;
							default:
								console.log('Alert! Invalid input rule.');
								break;
						}
			});
	}, []);

	useEffect(() => {
		switch (ruleType) {
			case 'isValid':
				handleUpdateRule({ [ruleType]: true });
				break;
			case 'between':
				handleUpdateRule({ [ruleType]: { from: constraint.from, to: constraint.to } });
				break;
			case 'lessThan':
				handleUpdateRule({ [ruleType]: { date: constraint.date, equal: constraint.equal } });
				break;
			case 'greaterThan':
				handleUpdateRule({ [ruleType]: { date: constraint.date, equal: constraint.equal } });
				break;
			default:
				console.log('Alert! Add type in options before setting rule');
				break;
		}
	}, [ruleType, constraint]);

	const DateInput = forwardRef(({ value, onClick }, ref) => (
		<TextInput placeholder='Select a date *' cursor='pointer' value={value} onClick={onClick} width={125} marginRight={15} marginLeft={15} />
	));

	return (
		<Pane display='flex' flexDirection='row' alignItems='center'>
			<Select
				marginRight={10}
				value={ruleType}
				onChange={(e) => {
					setRuleType(e.target.value);
				}}>
				{Object.keys(options).map((option) => (
					<option value={option}>{options[option].label}</option>
				))}
			</Select>
			{options[ruleType].type === 'date' && (
				// will not be rendered
				<TextInput
					width={125}
					placeholder='Select a date *'
					onChange={(e) => {
						setConstraint(new Date(`${e.target.value}`).toLocaleDateString());
					}}
					value={constraint}
				/>
			)}
			{options[ruleType].type === 'object' &&
				Object.keys(options[ruleType].children).map((child) => {
					const parameter = options[ruleType].children[child];
					switch (parameter.type) {
						case 'date':
							return (
								<DatePicker
									closeOnScroll
									showMonthDropdown
									showYearDropdown
									dropdownMode='select'
									selected={new Date(`${constraint[child]}`)}
									wrapperClassName='datePicker'
									customInput={<DateInput />}
									onChange={(date) => {
										setConstraint({ ...constraint, [child]: new Date(`${date}`).toLocaleDateString() });
									}}
								/>
							);
						case 'boolean':
							return (
								<Checkbox
									label={parameter.label}
									checked={constraint.equal}
									onChange={(e) => setConstraint({ ...constraint, equal: e.target.checked })}
								/>
							);

						default:
							return <div>Invalid Type</div>;
					}
				})}
		</Pane>
	);
};

const DropdownRules = ({ rule, handleUpdateRule }) => {
	// list: string[];
	const [constraint, setConstraint] = useState('');

	useEffect(() => {
		if (rule) setConstraint(`${rule.list}`);
	}, []);

	useEffect(() => {
		handleUpdateRule({
			list: `${constraint}`
				.split(',')
				.map((v) => v.trim())
				.filter((v) => v),
		});
	}, [constraint]);

	return (
		<Pane display='flex' flexDirection='row' alignItems='center'>
			<TextInput
				placeholder='Enter comma separated values...'
				onChange={(e) => {
					setConstraint(e.target.value);
				}}
				value={constraint}
			/>
		</Pane>
	);
};

const CheckboxRules = ({ rule, handleUpdateRule }) => {
	// useCustom?: boolean;
	// customValues?: { true: string; false: string };

	const [constraint, setConstraint] = useState('');

	return (
		<Pane>
			<Text>Custom values for Checked and Un-checked</Text>
			<Pane display='flex' flexDirection='row' alignItems='center' paddingTop={10}>
				<TextInput
					placeholder='True Value'
					marginRight={10}
					marginLeft={10}
					onChange={(e) => {
						setConstraint(e.target.value);
					}}
					value={constraint}
				/>
				<TextInput
					placeholder='False Value'
					marginRight={10}
					marginLeft={10}
					onChange={(e) => {
						setConstraint(e.target.value);
					}}
					value={constraint}
				/>
			</Pane>
		</Pane>
	);
};

const ColumnRules = ({ type, rule, handleUpdateRule }) => {
	switch (`${type}`.toLowerCase()) {
		case 'text':
			return <TextRules rule={rule} handleUpdateRule={handleUpdateRule} />;
		case 'number':
			return <NumberRules rule={rule} handleUpdateRule={handleUpdateRule} />;
		case 'date':
			return <DateRules rule={rule} handleUpdateRule={handleUpdateRule} />;
		case 'dropdown':
			return <DropdownRules rule={rule} handleUpdateRule={handleUpdateRule} />;
		case 'checkbox':
			return <CheckboxRules rule={rule} handleUpdateRule={handleUpdateRule} />;

		default:
			return <div>No Rules</div>;
	}
};

export default ColumnRules;
