import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useExpenseContext } from '../../context/useExpenseContext';
import { getCategoryTotalsByMonth } from '../../context/expenseFunctions';

export default function StackedBarChart() {
  const { expenses } = useExpenseContext();

  // Get monthly totals for each category
  const { foodData, transportData, utilitiesData, months } =
    getCategoryTotalsByMonth(expenses);

  return (
    <BarChart
      height={300}
      width={300}
      series={[
        { data: foodData, label: 'Food', id: 'foodId', stack: 'total' },
        {
          data: transportData,
          label: 'Transport',
          id: 'transportId',
          stack: 'total',
        },
        {
          data: utilitiesData,
          label: 'Utilities',
          id: 'utilitiesId',
          stack: 'total',
        },
      ]}
      xAxis={[{ data: months, scaleType: 'band' }]}
      yAxis={[{ width: 60 }]}
    />
  );
}
