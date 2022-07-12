import SmartLogger from 'node_smart_logger';
import {helpers} from './helpers/index.helper';

const log = new SmartLogger();

export const services = {
    ...helpers,
    log
}