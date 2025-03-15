'use client'

import { addMonths, format } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Day, DayPicker } from 'react-day-picker'
import './styles.css'

const Calendar = () => {
  const today = new Date()
  const nextMonth = addMonths(today, 1)
  const [month, setMonth] = useState(nextMonth)

  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined)

  const handlePrevMonth = () => {
    setMonth(prev => addMonths(prev, -1))
  }

  const handleNextMonth = () => {
    setMonth(prev => addMonths(prev, 1))
  }

  const handleSelect = (date: Date | undefined) => {
    if (!date) return
    setSelectedDay(date)
  }

  const [selected, setSelected] = useState<Date>()
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-[24px] shadow-2xl border-asia-1/30 border ">
      <div className="flex justify-center gap-2 items-center mb-4 ">
        <button onClick={handlePrevMonth} className="p-2">
          <ChevronLeft color="#f2542d" />
        </button>
        <p className=" font-semibold text-asia-1 text-xl">
          {format(month, 'MMMM yyyy')}
        </p>
        <button onClick={handleNextMonth} className="p-2">
          <ChevronRight color="#f2542d" />
        </button>
      </div>
      <DayPicker
        animate
        mode="multiple"
        showOutsideDays
        ISOWeek
        hideNavigation
        month={month}
        onMonthChange={setMonth}
        // selected={selected}
        // onSelect={setSelected}
        // className={'dp-full-width'}
        // wrapperClassName={'react-datepicker-wrapper'}
        // components={{
        //   Day: props => {
        //     const { disabled, selected, focused, hidden, outside, today } =
        //       props.modifiers

        //     return (
        //       <Day
        //         {...props}
        //         {...(selected && {
        //           ['aria-label']: 'Selected Date: ' + props.day.date,
        //         })}
        //         title="sdasa"
        //         aria-label="asdsa"
        //       />
        //     )
        //   },
        // }}
        classNames={{
          month_caption: 'hidden',
          //   selected: '  text-white rounded-[10px]',
          //   day: 'm-1',
          //   day_button: ' bg-asia-2 w-[157px] h-[72px] ',
          //   week: 'w-full',
          //   month: 'm-auto',
          //   disabled: 'red',
          //   outside: 'disabled:bg-red',
        }}
      />
    </div>
  )
}

export default Calendar

// function Day(
//   props: {
//     day: CalendarDay
//     modifiers: Modifiers
//   } & HTMLAttributes<HTMLDivElement>
// ) {
//   const isSelected = props.modifiers.selected // Check if the day is selected

//   return (
//     <button
//       className={`custom-day ${isSelected ? 'selected' : ''}`} // Add custom class based on selection
//       onClick={() => {
//         // props.onSelect?.(props.day.date)
//       }} // Handle day selection
//     >
//       {props.day.date.getDate()} {/* Display the day of the month */}
//     </button>
//   )
// }
