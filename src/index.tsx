import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transation: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Bancada',
          type: 'deposit',
          category: 'Móveis',
          amount: 1000,
          createdAt: new Date('2022-10-07 09:00:00'),
        },
        {
          id: 2,
          title: 'Desktop',
          type: 'withdraw',
          category: 'PC',
          amount: 10000,
          createdAt: new Date('2022-10-01 13:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', (schema)=>{
      return this.schema.db.transactions;
    })

    // this.get('/transactions', () =>{
    //   return this.schema.all('transaction')      
    // })

    this.post('/transactions',(schema, request)=> {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })

  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
