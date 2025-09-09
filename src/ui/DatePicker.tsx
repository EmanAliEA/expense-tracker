import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface Props {
  control: any;
  name?: string;
  label?: string;
}

const BasicDatePicker: React.FC<Props> = ({
  control,
  name = 'date',
  label = 'Date',
}) => {
  return (
    <div className="w-[48%] p-2 rounded-md grow-1">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <DatePicker
              label={label}
              value={field.value}
              onChange={field.onChange}
              slotProps={{
                textField: {
                  fullWidth: true,
                  sx: {
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#99a1af', // Change to your desired color
                      },
                      '&:hover fieldset': {
                        borderColor: '#4f46e5', // On hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#22d3ee', // On focus
                      },
                      '& .MuiSvgIcon-root': {
                        color: '#ffffff', // or any color you want
                      },
                    },
                    input: { color: '#fff', background: '#111' }, // input text color and background
                    label: { color: '#fff' }, // label color
                  },
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default BasicDatePicker;
