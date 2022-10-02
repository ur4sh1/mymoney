import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(()=> {
    api.get('transactions')
    .then(response => console.log(response.data));
  },[])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bancada</td>
            <td>R$ 5.000</td>
            <td>Móveis</td>
            <td>02/10/2022</td>
          </tr>
          <tr>
            <td>Desktop</td>
            <td className="deposit">R$ 19.000</td>
            <td>Computadores</td>
            <td>01/10/2022</td>
          </tr>
          <tr>
            <td>Notebook</td>
            <td className="withdraw">R$ -12.000</td>
            <td>Computadores</td>
            <td>30/09/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}