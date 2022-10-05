import { Container } from "./styles";
import income  from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import React, { useContext } from "react";
import { TransactionsContext } from "../../TransactionContext";

export function Summary(){

  const {transactions} = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>
          R$1000,00
        </strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcome} alt="Saídas" />
        </header>
        <strong>
          - R$500,00
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={total} alt="Total" />
        </header>
        <strong>
          R$500,00
        </strong>
      </div>
    </Container>
  )
}