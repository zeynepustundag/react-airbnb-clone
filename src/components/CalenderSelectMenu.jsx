import { DateCalendar } from '@mui/x-date-pickers'
import React from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import "dayjs/locale/tr";
import dayjs from 'dayjs';

const CalenderSelectMenu = ({setSelectedDate,checkInDate}) => {

    const minDate = checkInDate ? dayjs(checkInDate).add(1, 'day') : null;
    return (
        <div className='bg-white  shadow-menu-shadow top-20 z-10 absolute rounded-3xl left-2'>
           <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
                <DateCalendar onChange={(newDate)=>setSelectedDate(newDate)}
                disablePast
                minDate={minDate}
                />
            </LocalizationProvider>
        </div>
    )
}

export default CalenderSelectMenu