import styled from "styled-components";
import { getContrastColor } from "../../../../../../utils/color";

interface Props {
    color: string;
}

export const TileCountStyle = styled.div<Props>`
    color: ${props => getContrastColor(props.color)};
    position: relative;

    span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;