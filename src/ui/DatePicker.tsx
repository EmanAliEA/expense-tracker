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
    <div className="w-[48%] rounded-md grow-1 text-white">
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
                        borderColor: '#fff',
                      },
                      '&:hover fieldset': {
                        borderColor: '#fff',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#fff',
                      },
                    },
                    input: { color: '#fff', background: '#111' },
                    label: { color: '#fff' },
                    '& .MuiSvgIcon-root': {
                      color: '#fff',
                    },
                  },
                  InputProps: {
                    style: { background: '#111', color: '#fff' },
                  },
                  InputLabelProps: {
                    style: { color: '#fff' },
                  },
                },
                popper: {
                  sx: {
                    '& .MuiPaper-root': {
                      backgroundColor: '#111',
                      color: '#fff',
                    },
                    '& .MuiPickersDay-root': {
                      color: '#fff',
                    },
                    '& .Mui-selected': {
                      backgroundColor: '#333 !important',
                    },
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
