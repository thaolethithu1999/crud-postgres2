
import { Application } from 'express';
import { ApplicationContext } from './context';

const express = require('express');
let app: Application = express();

export function route(app, ctx: ApplicationContext): void {
  app.get('/health', ctx.health.check);
  app.patch('/log', ctx.log.config);
  app.patch('/middleware', ctx.middleware.config);

  app.post('/users/search', ctx.user.search);
  app.get('/users/search', ctx.user.search);
  app.get('/users/:id', ctx.user.load);
  app.post('/users', ctx.user.create);
  app.put('/users/:id', ctx.user.update);
  app.patch('/users/:id', ctx.user.patch);
  app.delete('/users/:id', ctx.user.delete);

  app.post('/items/search', ctx.item.search) //add
  app.post('/items/test', (req:  any, res: any) => {
    console.log(req.body)
    res.send('Hello World!')
  }) //add
  app.get('/items/search', ctx.item.search);
  app.get('/items/:id', ctx.item.load);
  app.post('/items', ctx.item.create);
  app.put('/items/:id', ctx.item.update);
  app.patch('/items/:id', ctx.item.patch);
  app.delete('/items/:id', ctx.item.delete);
}
