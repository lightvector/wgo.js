import { Color } from '../../types';
import BoardMarkupObject from './BoardMarkupObject';
export default class BoardLabelObject extends BoardMarkupObject {
    text: string;
    constructor(text: string, variation?: Color);
}
