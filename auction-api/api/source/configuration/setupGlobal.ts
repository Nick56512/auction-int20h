import { Server as HTTPServer } from "http";
import { Container } from "inversify";
import { Express } from "express";


export default function setupGlobal(IoCContainer: Container, serverApp: Express)
{
    global.IoCContainer = IoCContainer;
    global.serverApp = serverApp;
}