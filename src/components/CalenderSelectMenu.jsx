import { DateCalendar } from '@mui/x-date-pickers'
import React from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import "dayjs/locale/tr";
import dayjs from 'dayjs';

const CalenderSelectMenu = ({ setSelectedDate, checkInDate, isMobileSearchClicked }) => {

    const minDate = checkInDate ? dayjs(checkInDate).add(1, 'day') : null;
    return (
        <div className={`bg-white shadow-menu-shadow top-16 z-20 absolute left-2 rounded-3xl ${isMobileSearchClicked ? "w-full" : ""} ${isMobileSearchClicked ? "h-80" : ""}`}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
                <DateCalendar onChange={(newDate) => setSelectedDate(newDate)}
                    disablePast
                    minDate={minDate}
                />
            </LocalizationProvider>
        </div>
    )
}

export default CalenderSelectMenu