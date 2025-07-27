import { BarChart } from '@mui/x-charts/BarChart';
import { useExpenseContext } from '../../context/useExpenseContext';

export default function SimpleBarChart() {
  const { expenses } = useExpenseContext();

  // Group by day and sum amounts
  const dayTotals: Record<string, number> = {};
  expenses.forEach((exp) => {
    // exp.date should be a string like '2024-04-20' or similar
    const date = new Date(exp.date);
    // Format as 'YYYY-MM-DD' for x-axis
    const day = date.toISOString().split('T')[0];
    dayTotals[day] = (dayTotals[day] || 0) + Number(exp.amount);
  });

  const days = Object.keys(dayTotals);
  const amounts = Object.values(dayTotals);

  return (
    <BarChart
      borderRadius={3}
      height={200}
      series={[{ data: amounts, label: 'uv', type: 'bar' }]}
      xAxis={[
        {
          data: days,
          tickLabelStyle: { fill: '#ffffff' },
          tickLine: { stroke: 'transparent' },
        },
      ]}
      yAxis={[
        {
          tickLabelStyle: { fill: 'transparent' },
          tickLine: { stroke: 'transparent' },
        },
      ]}
    />
  );
}
