import React, { FC } from "react";
import { ToolBarStyle } from "./toolBar.styled";
import { ColorCountList } from "./components/ColorCountList";
import { PaletteColorList } from "../PaletteColorList";
import { PaletteList } from "../PaletteList";
import { GridConfigurations } from "../../hooks/grid.hooks";
import { Input } from "../Input";
import { Plugins } from "../Plugins";
import { Label } from "../Label";
import DeleteIcon from '@material-ui/icons/Delete';
import ReplayIcon from '@material-ui/icons/Replay';
import { BrushList } from "../BrushList";

interface Props extends GridConfigurations {}

export const ToolBarUI: FC<Props> = ({
    rows,
    setRows,
    columns,
    setColumns,
    scale,
    setScale,
    clear,
    reset,
}) => (
    <ToolBarStyle>
        <ColorCountList />
        <Label text="Clear" />
        <DeleteIcon onClick={clear} />
        <Label text="Reset" />
        <ReplayIcon onClick={reset} />
        <Input
            label="Rows"
            type="number"
            value={rows}
            onChange={setRows}
        />
        <Input
            label="Cols"
            type="number"
            value={columns}
            onChange={setColumns}
        />
        <Input
            label="Scale"
            type="number"
            value={scale}
            onChange={setScale}
            step={0.05}
        />
        <Plugins />
        <BrushList />
        <PaletteList />
        <PaletteColorList />
    </ToolBarStyle>
);
