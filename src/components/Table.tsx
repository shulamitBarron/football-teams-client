import axios, {AxiosResponse} from 'axios';
import React, {
    FC,
    useCallback,
    useEffect,
    useState,
} from 'react';
import DataTable from 'react-data-table-component';
import {useHistory} from 'react-router-dom';
import {Wrapper} from '../styled';
import {Team} from '../types';
import {TEAMS_URL} from '../urls';
import ErrorMessage from './ErrorMessage';
import Progress from './Progress';

const columns = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Founded',
        selector: 'founded',
        sortable: true,
        format: (row: Team) => row.founded ? 'Yes' : 'No',
    },
    {
        name: 'Address',
        selector: 'address',
        sortable: true,
    },
];

const Table: FC = () => {
    const history = useHistory();
    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState<Team[]>([]);
    const [error, setError] = useState<string>();

    const fetchData = useCallback(async () => {
        try {
            const teams: AxiosResponse<Team[]> = await axios.get(TEAMS_URL);
            setRows(teams.data);
            setPending(false);
        } catch (e) {
            setPending(false);
            setError(e.message);
        }
    }, [setRows, setPending]);

    useEffect(() => {
        fetchData();
    }, []);

    const handleTeamClicked = useCallback((row: Team) => {
        history.push(`teams/${row.id}`);
    }, [history]);

    return (
        <Wrapper>
            <h1>Football Teams List</h1>
            <ErrorMessage>{error}</ErrorMessage>
            {
                !error && <DataTable<Team>
                    columns={columns}
                    data={rows}
                    progressPending={pending}
                    progressComponent={<Progress/>}
                    highlightOnHover
                    pointerOnHover
                    onRowClicked={handleTeamClicked}
                />
            }
        </Wrapper>
    );
};

export default Table;
