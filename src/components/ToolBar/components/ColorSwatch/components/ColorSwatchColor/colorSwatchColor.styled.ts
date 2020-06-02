import styled from "styled-components";
import { getContrastColor } from "../../../../../../utils/color.utils";
import { PALETTE_COLOR_SIZE } from "../../../../../../store/palettes/palettes.constants";

interface Props {
    color?: string;
    selected: boolean;
}

export const ColorSwatchColorStyle = styled.div.attrs<Props>(props => ({
    style: {
        backgroundColor: props.color,
        borderColor: props.selected ? getContrastColor(props.color) : 'transparent',
    },
}))<Props>`
    border-width: 2px;
    border-style: solid;
    box-sizing: border-box;
    width: ${PALETTE_COLOR_SIZE}px;
    height: ${PALETTE_COLOR_SIZE}px;
    cursor: pointer;
`