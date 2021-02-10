import axios, {AxiosResponse} from 'axios';
import React, {
    FC,
    useCallback,
    useEffect,
    useState,
} from 'react';
import DataTable from 'react-data-table-component';
import {
    Button,
    FlexWrapper,
    Image,
    Label,
    StyledNavLink,
    Wrapper,
} from '../styled';
import {
    Player,
    TeamDetails,
} from '../types';
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
        name: 'Shirt Number',
        selector: 'shirtNumber',
        sortable: true,
    },
];

const Details: FC = ({match}: any) => {
    const {id} = match.params;
    const [pending, setPending] = useState(true);
    const [teamDetails, setTeamDetails] = useState<TeamDetails>();
    const [error, setError] = useState<string>();

    const fetchData = useCallback(async () => {
        try {
            const teams: AxiosResponse<TeamDetails> = await axios.get(`${TEAMS_URL}/${id}`);
            setTeamDetails(teams.data);
            setPending(false);
        } catch (e) {
            setPending(false);
            setError(e.message);
        }
    }, [setTeamDetails, setPending]);

    useEffect(() => {
        fetchData();
    }, []);

    if (pending) {
        return <Progress/>;
    }

    return (
        <>
            <Button>
                <StyledNavLink to='/teams'>
                    Back To List
                </StyledNavLink>
            </Button>
            {
                error || !teamDetails ? <ErrorMessage>{error}</ErrorMessage> :
                    <Wrapper>
                        <FlexWrapper>
                            <h1>{teamDetails.name}</h1>
                            <Image src={teamDetails.icon} alt='icon'/>
                        </FlexWrapper>
                        <Label><b>Establishment Year:</b> {teamDetails.establishmentYear}</Label>
                        <Label><b>Website:</b> <a href={teamDetails.website}
                                                  target='_blank'>{teamDetails.website}</a></Label>
                        <Label><b>Address:</b> {teamDetails.address}</Label>
                        <Label><b>Players:</b></Label>
                        <DataTable<Player>
                            columns={columns}
                            data={teamDetails.players}
                            highlightOnHover
                        />
                    </Wrapper>
            }
        </>
    );
};

export default Details;
