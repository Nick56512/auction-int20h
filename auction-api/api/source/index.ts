// this is for changing pathes like "infrastructure" to "../infrastructure/build"
//only for development stage 

import 'reflect-metadata'
import 'module-alias/register'
import setupServer from './configuration/setupServer';

setupServer()