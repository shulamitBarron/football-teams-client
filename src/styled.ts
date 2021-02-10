import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Root = styled.div`
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
`;

export const Wrapper = styled.div`
    display: block;
	width: 80%;
	margin: 50px auto;
`;

export const FlexWrapper = styled.div`
    display: flex;
`;

export const Image = styled.img`
    height: 80px;
    margin: 0 2%;
`;

export const Label = styled.label`
	margin-bottom: 1em;
    display: block;
`;

export const ErrorLabel = styled.label`
	color: red;
`;

export const Button = styled.button`
    display: inline-block;
    margin: 20px;
    padding: 10px 20px;
    border: 2px solid black;
    border-radius: 3px;
    position: sticky;
    z-index: 1;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
`;
