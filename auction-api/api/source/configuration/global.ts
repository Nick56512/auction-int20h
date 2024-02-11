import { Express } from 'express';
import { Container } from 'inversify';

declare global {
    var serverApp: Express
    var IoCContainer: Container
}
export default global;