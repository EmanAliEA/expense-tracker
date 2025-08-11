import { PieChart } from '@mui/x-charts/PieChart';
import { categoryPercentage } from '../../context/expenseFunctions';
import { useExpenseContext } from '../../context/useExpenseContext';

export default function BasicPie() {
  const { expenses } = useExpenseContext();
  const data = [
    {
      id: 0,
      value: categoryPercentage('Food', expenses),
      label: 'Food',
    },
    {
      id: 1,
      value: categoryPercentage('Transport', expenses),
      label: 'Transport',
    },
    {
      id: 2,
      value: categoryPercentage('Utilities', expenses),
      label: 'Utilities',
    },
  ];
  return (
    <PieChart
      slotProps={{
        legend: {
          sx: { color: '#fff', fontSize: 14 }, // change legend text color and size
        },
      }}
      colors={['#2abba8', '#29479b', '#465acd']}
      series={[
        {
          innerRadius: 50,
          data,
          arcLabel: '',
          arcLabelStyle: {
            fill: '#fff', // white text
            fontSize: 12,
            fontWeight: 'bold',
          },
        },
      ]}
      width={180}
      height={180}
    />
  );
}
