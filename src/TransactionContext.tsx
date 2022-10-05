import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>;

//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

// interface TransactionInput {
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

interface TransactionsContextData {
  transactions: Transactions[];
  createTransactions: (Transactions: TransactionInput) => void;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  );

export function TransactionsProvider({children}: TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transactions[]>([])

  useEffect(()=> {
    api.get('transactions')
    .then(response => setTransactions(response.data));
  },[]);

  function createTransactions(transactions: TransactionInput){
    api.post('transactions', transactions)
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}