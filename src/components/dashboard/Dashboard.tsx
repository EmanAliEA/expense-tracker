import { useExpenseContext } from '../../context/useExpenseContext';
import SimpleCharts from './BarChart';
import BasicPie from './PieChart';

const Dashboard: React.FC = () => {
  const { balance } = useExpenseContext();
  return (
    <div className="bg-(--primary-bgColor) gap-8 sm:gap-0 p-5 grid grid-cols-1 md:grid-cols-2  justify-items-center  text-white w-full text-2xl rounded-md">
      <div className="flex flex-col justify-center items-center w-1/2 gap-4">
        <p>Dashboard</p>
        <BasicPie />
      </div>
      <div className="flex flex-col justify-center text-3xl sm:text-normal items-center gap-4 w-1/2">
        <p>${balance}</p>
        <SimpleCharts />
      </div>
    </div>
  );
};

export default Dashboard;
