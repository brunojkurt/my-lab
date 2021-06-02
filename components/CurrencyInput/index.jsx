import { InputNumber } from 'antd'

const currencyFormatter = value => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

const CurrencyInput = (props) => {

  return (
    <InputNumber
      formatter={currencyFormatter}
      parser={value => parseFloat(value.toString().replace(/[^\d]/g,'').replace(/(\d\d?)$/,'.$1')).toFixed(2)}
      {...props}
    />
  );
};

export default CurrencyInput