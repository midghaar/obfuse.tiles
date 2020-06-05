import { useSelector, useDispatch } from "react-redux";
import { selectIsRunning, selectGenerationTime } from "./gameOfLife.selectors";
import { toggleIsRunning, setGenerationTime } from './gameOfLife.actions';
import { PRESETS } from "./gameOfLife.constants";
import { TilesPreset } from "../../../store/tiles/tiles.types";
import { setTiles } from "../../../store/tiles/tiles.actions";
import { useSetGridSize } from "../../../hooks/grid.hooks";

export const useGameOfLife = () => {
    const dispatch = useDispatch();
    const { setGridSize } = useSetGridSize();

    const setTilesPreset = (preset?: TilesPreset) => {
        if (!preset) return;

        if (preset.columns && preset.rows) setGridSize(preset.columns, preset.rows);

        dispatch(setTiles(preset.tiles()));
    };

    return {
        isRunning: useSelector(selectIsRunning),
        generationTime: useSelector(selectGenerationTime),
        toggleIsRunning: () => dispatch(toggleIsRunning()),
        tilesPresets: PRESETS,
        setTilesPreset,
        setGenerationTime: (value: number) => dispatch(setGenerationTime(value)),
    };
};

export type GameOfLifeBindings = ReturnType<typeof useGameOfLife>;