import { CanvasBoardConfig } from '../types';
import MarkupDrawHandler from './MarkupDrawHandler';
import { BoardMarkupObject } from '../boardObjects';
/**
 * TODO: rename this
 */
export default class Dot extends MarkupDrawHandler {
    stone(canvasCtx: CanvasRenderingContext2D, boardConfig: CanvasBoardConfig, boardObject: BoardMarkupObject): void;
}
